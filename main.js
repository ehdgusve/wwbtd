const i18n = {
    ko: {
        app_name: "WWBTD", landing_subtitle: "성취를 위한 전략적 시간 관리의 시작", how_to_use: "사용 방법",
        login_start: "로그인하여 시작하기", id_placeholder: "이름", pw_placeholder: "비밀번호", enter_btn: "플래너 시작",
        step1_tag: "01. Brain Dump", dump_placeholder: "무슨 생각을 하고 있나요?",
        step2_tag: "02. Priority Matrix",
        step3_tag: "03. Today's BIG 3",
        execution_tag: "Daily Schedule", save_btn: "FINISH & SAVE TODAY"
    }
};

let brainDumpItems = [];
let currentLang = localStorage.getItem('lang') || 'ko';

document.addEventListener('DOMContentLoaded', () => {
    initSettings();
    checkLoginState();
    
    document.getElementById('login-form').onsubmit = (e) => { e.preventDefault(); localStorage.setItem('isLoggedIn', 'true'); checkLoginState(); };
    document.getElementById('lang-select').onchange = (e) => { currentLang = e.target.value; localStorage.setItem('lang', currentLang); applyLanguage(); };
    document.getElementById('base-color').oninput = (e) => applyColorPalette(e.target.value);
});

function applyColorPalette(hex) {
    const root = document.documentElement;
    localStorage.setItem('themeColor', hex);
    root.style.setProperty('--primary-color', hex);
    
    // 버튼 및 로고 색상 강제 업데이트
    const elements = document.querySelectorAll('.btn-primary, .home-logo, .big3-num');
    elements.forEach(el => {
        if(el.classList.contains('big3-num')) el.style.backgroundColor = hex;
        else if(el.classList.contains('home-logo')) el.style.color = hex;
        else el.style.backgroundColor = hex;
    });
}

function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    document.getElementById('landing-page').style.display = isLoggedIn ? 'none' : 'flex';
    document.getElementById('app-container').style.display = isLoggedIn ? 'block' : 'none';
    if (isLoggedIn) initApp();
}

function goHome() {
    document.getElementById('landing-page').style.display = 'flex';
    document.getElementById('app-container').style.display = 'none';
    sessionStorage.setItem('viewMode', 'home');
}

function goToPlanner() {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('app-container').style.display = 'block';
    sessionStorage.setItem('viewMode', 'planner');
    initApp();
}

function initApp() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").value = today;
    initDragAndDrop();
    
    const dumpInput = document.getElementById('dump-input');
    dumpInput.onkeypress = (e) => {
        if(e.key === 'Enter' && dumpInput.value.trim()) {
            brainDumpItems.push({ id: Date.now(), text: dumpInput.value.trim(), q: null });
            renderDumpList(); dumpInput.value = "";
        }
    };

    const b1 = document.getElementById('big1'), b2 = document.getElementById('big2'), b3 = document.getElementById('big3');
    b1.onkeypress = (e) => { if(e.key === 'Enter') b2.focus(); };
    b2.onkeypress = (e) => { if(e.key === 'Enter') b3.focus(); };

    loadData();
    applyColorPalette(localStorage.getItem('themeColor') || '#5E7B61');
}

function renderDumpList() {
    const list = document.getElementById('dump-list'); 
    list.innerHTML = "";
    brainDumpItems.filter(i => i.q === null).forEach(item => list.appendChild(createDragChip(item)));
}

function createDragChip(item) {
    const chip = document.createElement('div'); 
    chip.className = 'dump-chip'; 
    chip.draggable = true;
    chip.innerHTML = `<span>${item.text}</span><i class="fa-solid fa-circle-minus" style="color:#A3B18A; cursor:pointer; opacity:0.6" onclick="deleteDumpItem(${item.id})"></i>`;
    chip.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', item.id);
        chip.style.opacity = '0.4';
    });
    chip.addEventListener('dragend', () => { chip.style.opacity = '1'; });
    return chip;
}

function deleteDumpItem(id) { 
    brainDumpItems = brainDumpItems.filter(i => i.id !== id); 
    renderDumpList(); renderMatrixItems(); 
}

function initDragAndDrop() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.ondragover = (e) => { e.preventDefault(); zone.closest('.matrix-box').style.background = "#f2f2f7"; };
        zone.ondragleave = () => { zone.closest('.matrix-box').style.background = ""; };
        zone.ondrop = (e) => {
            e.preventDefault();
            zone.closest('.matrix-box').style.background = "";
            const id = e.dataTransfer.getData('text/plain');
            const item = brainDumpItems.find(i => i.id == id);
            if (item) { item.q = zone.dataset.q || null; renderMatrixItems(); }
        };
    });
}

function renderMatrixItems() {
    const zones = { q1: document.getElementById('q1-zone'), q2: document.getElementById('q2-zone'), q3: document.getElementById('q3-zone'), q4: document.getElementById('q4-zone') };
    if(!zones.q1) return;
    Object.values(zones).forEach(z => z.innerHTML = "");
    brainDumpItems.forEach(item => { 
        if (item.q && zones[item.q]) zones[item.q].appendChild(createDragChip(item)); 
    });
    renderDumpList();
}

function addTimeBlock(data = {}) {
    const container = document.getElementById('schedule-list');
    const row = document.createElement('div');
    row.className = 'schedule-row';
    row.innerHTML = `
        <div class="flex items-center gap-2">
            <input type="time" class="start-time" value="${data.start || '09:00'}" style="padding:5px; background:transparent; width:70px">
            <span>-</span>
            <input type="time" class="end-time" value="${data.end || '10:00'}" style="padding:5px; background:transparent; width:70px">
        </div>
        <input type="text" class="task-input" placeholder="무엇을 하나요?" value="${data.task || ''}" style="background:transparent; border-left:1px solid #eee; padding-left:15px">
        <select class="status-select" style="background:white; font-size:0.7rem; font-weight:bold; border-radius:10px; padding:5px">
            <option value="todo" ${data.status === 'todo' ? 'selected' : ''}>TO DO</option>
            <option value="doing" ${data.status === 'doing' ? 'selected' : ''}>DOING</option>
            <option value="done" ${data.status === 'done' ? 'selected' : ''}>DONE</option>
        </select>
        <button onclick="this.parentElement.remove()" style="background:none; border:none; color:#ddd; cursor:pointer; font-size:1.2rem">&times;</button>
    `;
    container.appendChild(row);
}

function initSettings() {
    const savedColor = localStorage.getItem('themeColor') || '#5E7B61';
    document.getElementById('base-color').value = savedColor;
    applyColorPalette(savedColor);
    applyLanguage();
}

function applyLanguage() {
    const langData = i18n[currentLang] || i18n.ko;
    document.querySelectorAll('[data-i18n]').forEach(el => { if (langData[el.getAttribute('data-i18n')]) el.textContent = langData[el.getAttribute('data-i18n')]; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { if (langData[el.getAttribute('data-i18n-placeholder')]) el.placeholder = langData[el.getAttribute('data-i18n-placeholder')]; });
}

function logout() { localStorage.removeItem('isLoggedIn'); location.reload(); }

function showGuide(step) {
    const guide = { 1: { title: "Brain Dump", content: "머릿속 생각을 비우는 과정입니다." }, 2: { title: "Matrix", content: "우선순위를 정하세요." } }[step];
    if(guide) { document.getElementById('guide-body').innerHTML = `<h2>${guide.title}</h2><p>${guide.content}</p>`; document.getElementById('guide-modal').style.display = 'block'; }
}
function closeGuide() { document.getElementById('guide-modal').style.display = 'none'; }

async function saveData() {
    const date = document.getElementById("date").value;
    const log = Array.from(document.querySelectorAll(".schedule-row")).map(r => ({
        start: r.querySelector(".start-time").value,
        end: r.querySelector(".end-time").value,
        task: r.querySelector(".task-input").value,
        status: r.querySelector(".status-select").value
    }));
    const data = { brainDumpItems, big1: document.getElementById("big1").value, big2: document.getElementById("big2").value, big3: document.getElementById("big3").value, log };
    localStorage.setItem(`planner_sage_${date}`, JSON.stringify(data));
    alert("오늘의 계획이 저장되었습니다! 🌿");
}

function loadData() {
    const date = document.getElementById("date").value, raw = localStorage.getItem(`planner_sage_${date}`);
    const container = document.getElementById('schedule-list'); 
    container.innerHTML = "";
    if (!raw) { brainDumpItems = []; renderDumpList(); addTimeBlock(); return; }
    const d = JSON.parse(raw); brainDumpItems = d.brainDumpItems || []; 
    document.getElementById("big1").value = d.big1 || ""; document.getElementById("big2").value = d.big2 || ""; document.getElementById("big3").value = d.big3 || "";
    renderDumpList(); renderMatrixItems();
    if (d.log && d.log.length) d.log.forEach(item => addTimeBlock(item)); else addTimeBlock();
}
