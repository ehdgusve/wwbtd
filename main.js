const hours = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const defaultCategories = ["운동", "마케팅", "관리", "수익", "공부"];

let brainDumpItems = []; // {id: timestamp, text: string, q: null|'q1'|'q2'|'q3'|'q4'}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

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
            const item = { id: Date.now(), text: text, q: null };
            brainDumpItems.push(item);
            renderDumpList();
            dumpInput.value = "";
        }
    };

    addBtn.addEventListener('click', addFn);
    dumpInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') addFn(); });

    loadData();
}

// --- Navigation ---
function nextStep(step) {
    document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
    document.getElementById(`step-${step}`).classList.add('active');
    
    document.querySelectorAll('.step-dot').forEach(dot => {
        dot.classList.toggle('active', parseInt(dot.dataset.step) <= step);
    });

    if (step === 2) renderMatrixItems();
}

function prevStep(step) {
    nextStep(step);
}

// --- Step 1: Brain Dump ---
function renderDumpList() {
    const list = document.getElementById('dump-list');
    list.innerHTML = "";
    brainDumpItems.filter(i => i.q === null).forEach(item => {
        const chip = createDragChip(item);
        list.appendChild(chip);
    });
}

// --- Step 2: Drag & Drop ---
function createDragChip(item) {
    const chip = document.createElement('div');
    chip.className = 'dump-chip';
    chip.draggable = true;
    chip.textContent = item.text;
    chip.dataset.id = item.id;
    
    chip.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
        setTimeout(() => chip.style.opacity = '0.5', 0);
    });
    
    chip.addEventListener('dragend', () => {
        chip.style.opacity = '1';
    });
    
    return chip;
}

function initDragAndDrop() {
    const zones = document.querySelectorAll('.drop-zone');
    
    zones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault();
            zone.classList.add('over');
        });
        
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('over');
        });
        
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('over');
            const id = e.dataTransfer.getData('text/plain');
            const q = zone.dataset.q || null;
            
            const item = brainDumpItems.find(i => i.id == id);
            if (item) {
                item.q = q;
                renderMatrixItems();
            }
        });
    });
}

function renderMatrixItems() {
    // 저장소(Unsorted) 렌더링
    const unsortedZone = document.getElementById('unsorted-items');
    unsortedZone.innerHTML = "";
    brainDumpItems.filter(i => i.q === null).forEach(item => {
        unsortedZone.appendChild(createDragChip(item));
    });

    // Q1-Q4 렌더링
    ['q1', 'q2', 'q3', 'q4'].forEach(q => {
        const zone = document.getElementById(`${q}-zone`);
        zone.innerHTML = "";
        brainDumpItems.filter(i => i.q === q).forEach(item => {
            zone.appendChild(createDragChip(item));
        });
    });
}

// --- Step 4: Category & Table ---
function initCategories() {
    let categories = JSON.parse(localStorage.getItem('user_categories')) || defaultCategories;
    localStorage.setItem('user_categories', JSON.stringify(categories));
    renderCategoryTags();
}

function renderCategoryTags() {
    const container = document.getElementById('category-tags');
    const categories = JSON.parse(localStorage.getItem('user_categories'));
    container.innerHTML = "";
    categories.forEach(name => {
        const tag = document.createElement('div');
        tag.className = 'category-tag';
        tag.innerHTML = `<span>${name}</span><span class="remove-category" onclick="removeCategory('${name}')">&times;</span>`;
        container.appendChild(tag);
    });
}

function addCategory(name) {
    const categories = JSON.parse(localStorage.getItem('user_categories'));
    if (!categories.includes(name)) {
        categories.push(name);
        localStorage.setItem('user_categories', JSON.stringify(categories));
        renderCategoryTags();
        updateAllCategorySelects();
    }
}

function removeCategory(name) {
    let categories = JSON.parse(localStorage.getItem('user_categories'));
    categories = categories.filter(c => c !== name);
    localStorage.setItem('user_categories', JSON.stringify(categories));
    renderCategoryTags();
    updateAllCategorySelects();
}

function initTable() {
    const tbody = document.querySelector("#table tbody");
    tbody.innerHTML = "";
    hours.forEach(hour => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${hour}</td>
            <td><select class="category-select"></select></td>
            <td><input type="text" class="task-input"></td>
            <td><select class="status-select">
                <option value="">진행전</option><option value="doing">진행중</option>
                <option value="done">완료</option><option value="cancel">취소</option>
            </select></td>
        `;
        tbody.appendChild(row);
    });
    updateAllCategorySelects();
}

function updateAllCategorySelects() {
    const selects = document.querySelectorAll('.category-select');
    const categories = JSON.parse(localStorage.getItem('user_categories'));
    selects.forEach(select => {
        const val = select.value;
        select.innerHTML = '<option value="">선택</option>' + categories.map(c => `<option value="${c}">${c}</option>`).join('');
        select.value = val;
    });
}

// --- Persistence ---
function saveData() {
    const date = document.getElementById("date").value;
    const rows = document.querySelectorAll("#table tbody tr");
    const log = Array.from(rows).map(r => ({
        category: r.querySelector(".category-select").value,
        task: r.querySelector(".task-input").value,
        status: r.querySelector(".status-select").value
    }));

    const data = {
        brainDumpItems,
        big1: document.getElementById("big1").value,
        big2: document.getElementById("big2").value,
        big3: document.getElementById("big3").value,
        log
    };

    localStorage.setItem(`planner_v2_${date}`, JSON.stringify(data));
    alert("오늘의 계획이 저장되었습니다!");
}

function loadData() {
    const date = document.getElementById("date").value;
    const raw = localStorage.getItem(`planner_v2_${date}`);
    if (!raw) {
        brainDumpItems = [];
        renderDumpList();
        return;
    }
    const d = JSON.parse(raw);
    brainDumpItems = d.brainDumpItems || [];
    document.getElementById("big1").value = d.big1 || "";
    document.getElementById("big2").value = d.big2 || "";
    document.getElementById("big3").value = d.big3 || "";
    
    renderDumpList();
    
    const rows = document.querySelectorAll("#table tbody tr");
    rows.forEach((r, i) => {
        if (d.log && d.log[i]) {
            r.querySelector(".category-select").value = d.log[i].category;
            r.querySelector(".task-input").value = d.log[i].task;
            r.querySelector(".status-select").value = d.log[i].status;
        }
    });
}
