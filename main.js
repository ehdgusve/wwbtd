const i18n = {
    ko: {
        app_name: "WWBTD", landing_subtitle: "성과를 만드는 가장 완벽한 한 페이지", how_to_use: "사용 방법", daily_progress: "오늘의 성취도",
        step1_title: "Brain Dump", step1_desc: "모든 생각을 빠르게 기록",
        step2_title: "Eisenhower Matrix", step2_desc: "중요도 기반 우선순위 설정",
        step3_title: "Focus BIG 3", step3_desc: "핵심 목표에 집중",
        step4_title: "Daily Log", step4_desc: "시간표에 맞춰 실행",
        login_start: "로그인하여 시작하기", id_placeholder: "Your Name", pw_placeholder: "Password", enter_btn: "Get Started",
        planner_title: "PLANNER", logout_btn: "Logout", step1_tag: "1. Brain Dump", dump_placeholder: "What's on your mind?",
        add_btn: "Add", next_btn: "Next", prev_btn: "Back", step2_tag: "2. Eisenhower Matrix", storage: "Storage",
        q1: "Q1: Do", q2: "Q2: Plan", q3: "Q3: Delegate", q4: "Q4: Eliminate",
        step3_tag: "3. Today's BIG 3", big_placeholder: "Core Goal", review_btn: "Review Today",
        execution_tag: "Daily Schedule", contact_label: "제휴문의:", th_start: "Start", th_end: "End", th_task: "Task", th_status: "Status",
        save_btn: "Save Today", status_pre: "To Do", status_doing: "Doing", status_done: "Done", status_cancel: "Cancel"
    },
    en: {
        app_name: "WWBTD", landing_subtitle: "The Perfect One-Page for Performance", how_to_use: "How to Use", daily_progress: "Today's Progress",
        step1_title: "Brain Dump", step1_desc: "Record all thoughts quickly",
        step2_title: "Eisenhower Matrix", step2_desc: "Priority based on importance",
        step3_title: "Focus BIG 3", step3_desc: "Focus on core goals",
        step4_title: "Daily Log", step4_desc: "Execute on schedule",
        login_start: "Login to Start", id_placeholder: "Your Name", pw_placeholder: "Password", enter_btn: "Get Started",
        planner_title: "PLANNER", logout_btn: "Logout", step1_tag: "1. Brain Dump", dump_placeholder: "What's on your mind?",
        add_btn: "Add", next_btn: "Next", prev_btn: "Back", step2_tag: "2. Eisenhower Matrix", storage: "Storage",
        q1: "Q1: Do", q2: "Q2: Plan", q3: "Q3: Delegate", q4: "Q4: Eliminate",
        step3_tag: "3. Today's BIG 3", big_placeholder: "Core Goal", review_btn: "Review Today",
        execution_tag: "Daily Schedule", contact_label: "Affiliate:", th_start: "Start", th_end: "End", th_task: "Task", th_status: "Status",
        save_btn: "Save Today", status_pre: "To Do", status_doing: "Doing", status_done: "Done", status_cancel: "Cancel"
    }
};

const guides = {
    1: {
        title: "Brain Dump: 머릿속 안개를 걷어내는 기술",
        content: `
            <div class="guide-article">
                <p><strong>브레인 덤프(Brain Dump)</strong>는 단순히 할 일을 적는 것이 아닙니다. 우리 뇌의 인지적 과부하를 해소하고 집중력을 되찾는 강력한 정신적 도구입니다.</p>
                <h2>브레인 덤프의 핵심 효과</h2>
                <ul>
                    <li><strong>스트레스 감소:</strong> 미완결된 과업들이 머릿속을 맴도는 '자이가르닉 효과'를 차단합니다.</li>
                    <li><strong>명확한 시야:</strong> 추상적인 걱정들을 구체적인 텍스트로 변환하여 문제 해결의 단초를 제공합니다.</li>
                    <li><strong>실행력 강화:</strong> '무엇을 할지' 고민하는 에너지를 '어떻게 할지' 실행하는 에너지로 전환합니다.</li>
                </ul>
                <p>WWBTD에서는 떠오르는 모든 생각을 칩 형태로 생성하여, 이후 단계에서 자유롭게 분류할 수 있습니다.</p>
            </div>`
    },
    2: {
        title: "Eisenhower Matrix: 시간의 주인이 되는 법",
        content: `
            <div class="guide-article">
                <p>아이젠하워 매트릭스는 '긴급함'과 '중요함'을 기준으로 과업을 4분면으로 나눕니다.</p>
                <ul>
                    <li><strong>Q1 (Do):</strong> 긴급하고 중요한 일. 즉시 처리하세요.</li>
                    <li><strong>Q2 (Plan):</strong> 중요하지만 긴급하지 않은 일. 성공을 위한 핵심 영역입니다. (운동, 공부, 미래 설계)</li>
                    <li><strong>Q3 (Delegate):</strong> 긴급하지만 중요하지 않은 일. 최대한 위임하거나 거절하세요.</li>
                    <li><strong>Q4 (Delete):</strong> 긴급하지도 중요하지도 않은 일. 시간 낭비 요소입니다.</li>
                </ul>
                <p>WWBTD의 드래그 앤 드롭 기능을 통해 브레인 덤프된 항목들을 직관적으로 분류해 보세요.</p>
            </div>`
    },
    3: {
        title: "Today's BIG 3: 단 세 가지만 해내세요",
        content: `
            <div class="guide-article">
                <p>할 일 목록이 길어질수록 우리는 압도당합니다. <strong>BIG 3 전략</strong>은 그날의 승패를 결정짓는 가장 중요한 3가지에만 집중하게 합니다.</p>
                <h2>왜 3가지인가요?</h2>
                <p>의지력은 유한한 자원입니다. 수많은 목록 중 오늘 하루가 끝났을 때 반드시 완료되어야 할 '정수'만을 골라내세요. 이것만 해내면 오늘 하루는 성공한 것입니다.</p>
            </div>`
    },
    4: {
        title: "Daily Log: 실행을 기록으로 증명하세요",
        content: `
            <div class="guide-article">
                <p>계획만 세우고 끝나면 아무런 변화도 없습니다. <strong>데일리 로그(Daily Log)</strong>는 계획과 실제 실행 사이의 간극을 메워줍니다.</p>
                <h2>성공적인 데일리 로그 활용법</h2>
                <ul>
                    <li><strong>타임 블로킹:</strong> 시작 시간과 종료 시간을 명확히 설정하여 업무의 밀도를 높이세요.</li>
                    <li><strong>실시간 상태 체크:</strong> 진행 중인 일과 완료된 일을 즉시 표시하여 리듬을 유지하세요.</li>
                    <li><strong>회고의 기초:</strong> 기록된 로그는 훗날 당신의 업무 패턴을 분석하는 귀중한 데이터가 됩니다.</li>
                </ul>
            </div>`
    }
};

let brainDumpItems = [];
let currentLang = localStorage.getItem('lang') || 'ko';

document.addEventListener('DOMContentLoaded', () => {
    initSettings();
    checkLoginState();
    
    document.getElementById('login-form').onsubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        checkLoginState();
    };

    document.getElementById('lang-select').onchange = (e) => {
        currentLang = e.target.value;
        localStorage.setItem('lang', currentLang);
        applyLanguage();
    };

    document.getElementById('base-color').oninput = (e) => applyColorPalette(e.target.value);
});

// --- Navigation & States ---
function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    document.getElementById('login-section').style.display = isLoggedIn ? 'none' : 'block';
    document.getElementById('go-planner-section').style.display = isLoggedIn ? 'block' : 'none';
    
    // 만약 이미 플래너 화면이면 유지
    if (isLoggedIn && sessionStorage.getItem('viewMode') === 'planner') {
        goToPlanner();
    }
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

function logout() {
    localStorage.removeItem('isLoggedIn');
    sessionStorage.clear();
    location.reload();
}

// --- Guide Modal ---
function showGuide(step) {
    const guide = guides[step];
    document.getElementById('guide-body').innerHTML = `<h2>${guide.title}</h2>${guide.content}`;
    document.getElementById('guide-modal').style.display = 'block';
}

function closeGuide() {
    document.getElementById('guide-modal').style.display = 'none';
}

// --- App Logic ---
function initApp() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").value = today;
    initDragAndDrop();
    
    const dumpInput = document.getElementById('dump-input'), addBtn = document.getElementById('add-dump-btn');
    const addFn = () => {
        const text = dumpInput.value.trim();
        if (text) { brainDumpItems.push({ id: Date.now(), text, q: null }); renderDumpList(); dumpInput.value = ""; }
    };
    addBtn.onclick = addFn;
    dumpInput.onkeypress = (e) => { if(e.key === 'Enter') addFn(); };

    const b1 = document.getElementById('big1'), b2 = document.getElementById('big2'), b3 = document.getElementById('big3');
    b1.onkeypress = (e) => { if(e.key === 'Enter') b2.focus(); };
    b2.onkeypress = (e) => { if(e.key === 'Enter') b3.focus(); };
    b3.onkeypress = (e) => { if(e.key === 'Enter') updateSummary(); };

    loadData();
}

// (나머지 칩 렌더링, 매트릭스, 저장 로직 등은 이전과 동일하되 디자인 요소 반영)
function renderDumpList() {
    const list = document.getElementById('dump-list');
    list.innerHTML = "";
    brainDumpItems.filter(i => i.q === null).forEach(item => list.appendChild(createDragChip(item)));
}

function createDragChip(item) {
    const chip = document.createElement('div');
    chip.className = 'dump-chip';
    chip.draggable = true;
    chip.innerHTML = `<span>${item.text}</span><i class="fa-solid fa-xmark" style="cursor:pointer;opacity:0.3" onclick="deleteDumpItem(${item.id})"></i>`;
    chip.addEventListener('dragstart', (e) => e.dataTransfer.setData('text/plain', item.id));
    return chip;
}

function deleteDumpItem(id) {
    brainDumpItems = brainDumpItems.filter(i => i.id !== id);
    renderDumpList(); renderMatrixItems();
}

function initDragAndDrop() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.ondragover = (e) => { e.preventDefault(); zone.style.background = "rgba(0,0,0,0.05)"; };
        zone.ondragleave = () => zone.style.background = "transparent";
        zone.ondrop = (e) => {
            e.preventDefault();
            zone.style.background = "transparent";
            const id = e.dataTransfer.getData('text/plain'), item = brainDumpItems.find(i => i.id == id);
            if (item) { item.q = zone.dataset.q || null; renderMatrixItems(); }
        };
    });
}

function renderMatrixItems() {
    const zones = { q1: document.getElementById('q1-zone'), q2: document.getElementById('q2-zone'), q3: document.getElementById('q3-zone'), q4: document.getElementById('q4-zone') };
    Object.values(zones).forEach(z => z.innerHTML = "");
    brainDumpItems.forEach(item => { if (item.q && zones[item.q]) zones[item.q].appendChild(createDragChip(item)); });
}

function updateSummary() {
    const b1 = document.getElementById("big1").value, b2 = document.getElementById("big2").value, b3 = document.getElementById("big3").value;
    const lang = i18n[currentLang] || i18n.ko;

    document.getElementById("summary-big3").innerHTML = `
        <h3>${lang.step3_title} Report</h3>
        <table class="report-table">
            <thead><tr><th style="width:50px">No</th><th>Goal</th></tr></thead>
            <tbody>
                <tr><td>1</td><td><strong>${b1 || '-'}</strong></td></tr>
                <tr><td>2</td><td><strong>${b2 || '-'}</strong></td></tr>
                <tr><td>3</td><td><strong>${b3 || '-'}</strong></td></tr>
            </tbody>
        </table>
    `;
    
    const counts = { q1: brainDumpItems.filter(i => i.q === 'q1').length, q2: brainDumpItems.filter(i => i.q === 'q2').length, q3: brainDumpItems.filter(i => i.q === 'q3').length, q4: brainDumpItems.filter(i => i.q === 'q4').length };
    document.getElementById("summary-matrix").innerHTML = `
        <h3>${lang.step2_title} Summary</h3>
        <div class="matrix-report-grid">
            <div class="matrix-report-item" style="border-left:4px solid var(--q1)"><strong>Q1: Do</strong><span>${counts.q1}</span></div>
            <div class="matrix-report-item" style="border-left:4px solid var(--q2)"><strong>Q2: Plan</strong><span>${counts.q2}</span></div>
            <div class="matrix-report-item" style="border-left:4px solid var(--q3)"><strong>Q3: Delegate</strong><span>${counts.q3}</span></div>
            <div class="matrix-report-item" style="border-left:4px solid var(--q4)"><strong>Q4: Delete</strong><span>${counts.q4}</span></div>
        </div>
    `;
    
    document.querySelector('.main-log').scrollIntoView({ behavior: 'smooth' });
}

function addTimeBlock(data = {}) {
    const tbody = document.getElementById('table-body'), lang = i18n[currentLang] || i18n.ko;
    const row = document.createElement('tr');
    row.innerHTML = `
        <td><input type="time" class="start-time" value="${data.start || '09:00'}"></td>
        <td><input type="time" class="end-time" value="${data.end || '10:00'}"></td>
        <td><input type="text" class="task-input" value="${data.task || ''}"></td>
        <td><select class="status-select" onchange="updateProgress()">
            <option value="" ${!data.status ? 'selected' : ''}>To Do</option>
            <option value="doing" ${data.status === 'doing' ? 'selected' : ''}>Doing</option>
            <option value="done" ${data.status === 'done' ? 'selected' : ''}>Done</option>
            <option value="cancel" ${data.status === 'cancel' ? 'selected' : ''}>Cancel</option>
        </select></td>
        <td><i class="fa-solid fa-trash" style="cursor:pointer;opacity:0.2" onclick="this.parentElement.parentElement.remove(); updateProgress();"></i></td>
    `;
    tbody.appendChild(row);
    updateProgress();
}

function updateProgress() {
    const rows = document.querySelectorAll("#table-body tr");
    if (rows.length === 0) { setProgress(0); return; }
    const done = Array.from(rows).filter(r => r.querySelector(".status-select").value === 'done').length;
    setProgress(Math.round((done / rows.length) * 100));
}

function setProgress(val) {
    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = `${val}%`;
    const text = document.getElementById('progress-text');
    if (text) text.textContent = `${val}%`;
}

function initSettings() {
    document.getElementById('lang-select').value = currentLang;
    applyLanguage();
    const savedColor = localStorage.getItem('themeColor') || '#333333';
    document.getElementById('base-color').value = savedColor;
    applyColorPalette(savedColor);
}

function applyColorPalette(hex) {
    const root = document.documentElement;
    localStorage.setItem('themeColor', hex);
    let { h, s, l } = hexToHSL(hex);
    root.style.setProperty('--primary-color', hex);
    root.style.setProperty('--accent-color', `hsl(${h}, ${Math.min(s + 20, 100)}%, ${Math.max(l - 10, 0)}%)`);
    root.style.setProperty('--bg-color', `hsl(${h}, ${Math.min(s, 10)}%, 97%)`);
}

function hexToHSL(hex) {
    let r = parseInt(hex.slice(1, 3), 16) / 255, g = parseInt(hex.slice(3, 5), 16) / 255, b = parseInt(hex.slice(5, 7), 16) / 255;
    let max = Math.max(r, g, b), min = Math.min(r, g, b), h, s, l = (max + min) / 2;
    if (max == min) h = s = 0;
    else {
        let d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return { h: h * 360, s: s * 100, l: l * 100 };
}

function applyLanguage() {
    const langData = i18n[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) el.textContent = langData[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langData[key]) el.placeholder = langData[key];
    });
}

function saveData() {
    const date = document.getElementById("date").value;
    const log = Array.from(document.querySelectorAll("#table-body tr")).map(r => ({
        start: r.querySelector(".start-time").value, end: r.querySelector(".end-time").value,
        task: r.querySelector(".task-input").value, status: r.querySelector(".status-select").value
    }));
    localStorage.setItem(`planner_v9_${date}`, JSON.stringify({ brainDumpItems, big1: document.getElementById("big1").value, big2: document.getElementById("big2").value, big3: document.getElementById("big3").value, log }));
    alert(currentLang === 'ko' ? "저장 완료!" : "Saved!");
}

function loadData() {
    const date = document.getElementById("date").value, raw = localStorage.getItem(`planner_v9_${date}`);
    const tbody = document.getElementById('table-body'); tbody.innerHTML = "";
    if (!raw) { brainDumpItems = []; renderDumpList(); addTimeBlock(); return; }
    const d = JSON.parse(raw); brainDumpItems = d.brainDumpItems || []; 
    document.getElementById("big1").value = d.big1 || ""; document.getElementById("big2").value = d.big2 || ""; document.getElementById("big3").value = d.big3 || "";
    renderDumpList();
    if (d.log && d.log.length > 0) d.log.forEach(item => addTimeBlock(item)); else addTimeBlock();
    updateProgress();
}
