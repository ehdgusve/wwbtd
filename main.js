const hours = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const defaultCategories = ["운동", "마케팅", "관리", "수익", "공부"];
let brainDumpItems = [];

document.addEventListener('DOMContentLoaded', () => {
    checkLoginState();
    
    // 로그인 폼 이벤트
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const username = document.getElementById('username').value;
            if (username) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('username', username);
                checkLoginState();
            }
        });
    }

    // 로그아웃 이벤트
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('isLoggedIn');
            localStorage.removeItem('username');
            location.reload();
        });
    }
});

function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const landingPage = document.getElementById('landing-page');
    const appContainer = document.getElementById('app-container');

    if (isLoggedIn) {
        landingPage.style.display = 'none';
        appContainer.style.display = 'block';
        initApp(); // 플래너 초기화
    } else {
        landingPage.style.display = 'flex';
        appContainer.style.display = 'none';
    }
}

function initApp() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").value = today;

    initCategories();
    initTable();
    initDragAndDrop();
    
    // Step 1 Add Event
    const dumpInput = document.getElementById('dump-input');
    const addBtn = document.getElementById('add-dump-btn');
    const addFn = () => {
        const text = dumpInput.value.trim();
        if (text) {
            brainDumpItems.push({ id: Date.now(), text, q: null });
            renderDumpList();
            dumpInput.value = "";
            updateSummary();
        }
    };
    addBtn.addEventListener('click', addFn);
    dumpInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') addFn(); });

    // BIG 3 이벤트 리스너 (실시간 요약 반영)
    ['big1', 'big2', 'big3'].forEach(id => {
        document.getElementById(id).addEventListener('input', updateSummary);
    });

    loadData();
}

function nextStep(step) {
    document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
    document.querySelectorAll('.step-dot').forEach(dot => {
        dot.classList.toggle('active', parseInt(dot.dataset.step) <= step);
    });
    if (step === 2) renderMatrixItems();
    updateSummary();
}

function prevStep(step) { nextStep(step); }

function renderDumpList() {
    const list = document.getElementById('dump-list');
    list.innerHTML = "";
    brainDumpItems.filter(i => i.q === null).forEach(item => {
        list.appendChild(createDragChip(item));
    });
}

function createDragChip(item) {
    const chip = document.createElement('div');
    chip.className = 'dump-chip';
    chip.draggable = true;
    chip.textContent = item.text;
    chip.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
    });
    return chip;
}

function initDragAndDrop() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.style.background = "#f0f0f0"; });
        zone.addEventListener('dragleave', () => { zone.style.background = "transparent"; });
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.style.background = "transparent";
            const id = e.dataTransfer.getData('text/plain');
            const item = brainDumpItems.find(i => i.id == id);
            if (item) {
                item.q = zone.dataset.q || null;
                renderMatrixItems();
                updateSummary();
            }
        });
    });
}

function renderMatrixItems() {
    const zones = { unsorted: document.getElementById('unsorted-items'), q1: document.getElementById('q1-zone'), q2: document.getElementById('q2-zone'), q3: document.getElementById('q3-zone'), q4: document.getElementById('q4-zone') };
    Object.values(zones).forEach(z => z.innerHTML = "");
    brainDumpItems.forEach(item => {
        const zone = item.q ? zones[item.q] : zones.unsorted;
        if (zone) zone.appendChild(createDragChip(item));
    });
}

function updateSummary() {
    // BIG 3 Summary
    const b1 = document.getElementById("big1").value;
    const b2 = document.getElementById("big2").value;
    const b3 = document.getElementById("big3").value;
    document.getElementById("summary-big3").innerHTML = `<strong>BIG 3:</strong> ${b1 || '-' } / ${b2 || '-' } / ${b3 || '-' }`;

    // Matrix Summary
    const counts = { q1: brainDumpItems.filter(i => i.q === 'q1').length, q2: brainDumpItems.filter(i => i.q === 'q2').length, q3: brainDumpItems.filter(i => i.q === 'q3').length, q4: brainDumpItems.filter(i => i.q === 'q4').length };
    document.getElementById("summary-matrix").innerHTML = `<strong>Matrix:</strong> Q1(${counts.q1}) Q2(${counts.q2}) Q3(${counts.q3}) Q4(${counts.q4})`;
}

function initCategories() {
    let categories = JSON.parse(localStorage.getItem('user_categories')) || defaultCategories;
    localStorage.setItem('user_categories', JSON.stringify(categories));
    renderCategoryTags();
}

function renderCategoryTags() {
    const container = document.getElementById('category-tags');
    const categories = JSON.parse(localStorage.getItem('user_categories'));
    container.innerHTML = categories.map(name => `<div class="category-tag"><span>${name}</span><span style="cursor:pointer;margin-left:5px" onclick="removeCategory('${name}')">&times;</span></div>`).join('');
}

document.getElementById('add-category-btn').addEventListener('click', () => {
    const input = document.getElementById('new-category-name');
    const name = input.value.trim();
    if (name) {
        let categories = JSON.parse(localStorage.getItem('user_categories'));
        if (!categories.includes(name)) {
            categories.push(name);
            localStorage.setItem('user_categories', JSON.stringify(categories));
            renderCategoryTags();
            updateAllCategorySelects();
        }
        input.value = "";
    }
});

function removeCategory(name) {
    let categories = JSON.parse(localStorage.getItem('user_categories')).filter(c => c !== name);
    localStorage.setItem('user_categories', JSON.stringify(categories));
    renderCategoryTags();
    updateAllCategorySelects();
}

function initTable() {
    const tbody = document.querySelector("#table tbody");
    tbody.innerHTML = hours.map(hour => `<tr><td>${hour}</td><td><select class="category-select"></select></td><td><input type="text" class="task-input"></td><td><select class="status-select"><option value="">진행전</option><option value="doing">진행중</option><option value="done">완료</option><option value="cancel">취소</option></select></td></tr>`).join('');
    updateAllCategorySelects();
}

function updateAllCategorySelects() {
    const categories = JSON.parse(localStorage.getItem('user_categories'));
    document.querySelectorAll('.category-select').forEach(select => {
        const val = select.value;
        select.innerHTML = '<option value="">선택</option>' + categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.value = val;
    });
}

function saveData() {
    const date = document.getElementById("date").value;
    const data = {
        brainDumpItems,
        big1: document.getElementById("big1").value,
        big2: document.getElementById("big2").value,
        big3: document.getElementById("big3").value,
        log: Array.from(document.querySelectorAll("#table tbody tr")).map(r => ({ category: r.querySelector(".category-select").value, task: r.querySelector(".task-input").value, status: r.querySelector(".status-select").value }))
    };
    localStorage.setItem(`planner_v3_${date}`, JSON.stringify(data));
    alert("저장되었습니다!");
}

function loadData() {
    const date = document.getElementById("date").value;
    const raw = localStorage.getItem(`planner_v3_${date}`);
    if (!raw) { brainDumpItems = []; renderDumpList(); return; }
    const d = JSON.parse(raw);
    brainDumpItems = d.brainDumpItems || [];
    document.getElementById("big1").value = d.big1 || "";
    document.getElementById("big2").value = d.big2 || "";
    document.getElementById("big3").value = d.big3 || "";
    renderDumpList();
    const rows = document.querySelectorAll("#table tbody tr");
    rows.forEach((r, i) => { if (d.log && d.log[i]) { r.querySelector(".category-select").value = d.log[i].category; r.querySelector(".task-input").value = d.log[i].task; r.querySelector(".status-select").value = d.log[i].status; } });
    updateSummary();
}
