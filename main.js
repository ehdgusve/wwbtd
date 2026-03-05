const hours = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
const defaultCategories = ["운동", "마케팅", "관리", "수익", "공부"];

const i18n = {
    ko: {
        app_name: "WWBTD", landing_subtitle: "성취를 위한 전략적 시간 관리의 시작", how_to_use: "사용 방법",
        step1_title: "1단계: 브레인 덤프", step1_desc: "머릿속 모든 잡념을 쏟아내세요.",
        step2_title: "2단계: 아이젠하워", step2_desc: "중요도와 긴급도에 따라 분류하세요.",
        step3_title: "3단계: BIG 3", step3_desc: "오늘의 핵심 목표 3가지를 정하세요.",
        step4_title: "4단계: 데일리 로그", step4_desc: "시간표에 맞춰 실행하고 기록하세요.",
        login_start: "로그인하여 시작하기", id_placeholder: "아이디", pw_placeholder: "비밀번호", enter_btn: "플래너 입장하기",
        planner_title: "플래너", logout_btn: "로그아웃", step1_tag: "1단계: 브레인 덤프", dump_placeholder: "생각나는 것을 입력하세요...",
        add_btn: "추가", next_btn: "다음", prev_btn: "이전", step2_tag: "2단계: 아이젠하워", storage: "생각 저장소",
        q1: "Q1: 즉시 실행", q2: "Q2: 계획 수립", q3: "Q3: 권한 위임", q4: "Q4: 제거/나중",
        step3_tag: "3단계: 오늘의 BIG 3", big_placeholder: "핵심 목표를 입력하세요", review_btn: "결과 확인",
        execution_tag: "데일리 로그", category_placeholder: "카테고리 추가", th_time: "시간", th_cat: "분류", th_task: "할 일", th_status: "상태",
        save_btn: "최종 저장", status_pre: "진행전", status_doing: "진행중", status_done: "완료", status_cancel: "취소"
    },
    en: {
        app_name: "WWBTD", landing_subtitle: "Strategic Time Management for Achievement", how_to_use: "How to Use",
        step1_title: "Step 1: Brain Dump", step1_desc: "Pour out all your thoughts.",
        step2_title: "Step 2: Eisenhower", step2_desc: "Classify by importance and urgency.",
        step3_title: "Step 3: BIG 3", step3_desc: "Set 3 core goals for today.",
        step4_title: "Step 4: Daily Log", step4_desc: "Execute and record on schedule.",
        login_start: "Login to Start", id_placeholder: "ID", pw_placeholder: "Password", enter_btn: "Enter Planner",
        planner_title: "PLANNER", logout_btn: "Logout", step1_tag: "STEP 1: BRAIN DUMP", dump_placeholder: "Type your thought...",
        add_btn: "Add", next_btn: "Next", prev_btn: "Prev", step2_tag: "STEP 2: EISENHOWER", storage: "Storage",
        q1: "Q1: Do", q2: "Q2: Plan", q3: "Q3: Delegate", q4: "Q4: Eliminate",
        step3_tag: "STEP 3: TODAY'S BIG 3", big_placeholder: "Enter core goal", review_btn: "Review",
        execution_tag: "DAILY LOG", category_placeholder: "Add Category", th_time: "Time", th_cat: "Category", th_task: "Task", th_status: "Status",
        save_btn: "Save All", status_pre: "To Do", status_doing: "Doing", status_done: "Done", status_cancel: "Cancel"
    },
    ja: {
        app_name: "WWBTD", landing_subtitle: "達成のための戦略的時間管理の始まり", how_to_use: "使い方",
        step1_title: "ステップ1: ブレインダンプ", step1_desc: "頭の中のすべての考えを吐き出してください。",
        step2_title: "ステップ2: アイゼンハワー", step2_desc: "重要度と緊急度に応じて分類します。",
        step3_title: "ステップ3: BIG 3", step3_desc: "今日の3つの主要な目標を設定します。",
        step4_title: "ステップ4: デイリーログ", step4_desc: "スケジュールに従って実行し、記録します。",
        login_start: "ログインして開始", id_placeholder: "ID", pw_placeholder: "パスワード", enter_btn: "プランナーに入る",
        planner_title: "プランナー", logout_btn: "ログアウト", step1_tag: "ステップ1: ブレインダンプ", dump_placeholder: "考えを入力してください...",
        add_btn: "追加", next_btn: "次へ", prev_btn: "前へ", step2_tag: "ステップ2: アイゼンハワー", storage: "保管所",
        q1: "Q1: すぐに実行", q2: "Q2: 計画を立てる", q3: "Q3: 委任する", q4: "Q4: 削除/後で",
        step3_tag: "ステップ3: 今日のBIG 3", big_placeholder: "主要な目標を入力", review_btn: "結果確認",
        execution_tag: "デイリーログ", category_placeholder: "カテゴリ追加", th_time: "時間", th_cat: "カテゴリ", th_task: "タスク", th_status: "状態",
        save_btn: "最終保存", status_pre: "進行前", status_doing: "進行中", status_done: "完了", status_cancel: "取消"
    },
    zh: {
        app_name: "WWBTD", landing_subtitle: "为了成就的战略时间管理", how_to_use: "使用方法",
        step1_title: "第1步：大脑倾倒", step1_desc: "倾倒出你大脑中的所有想法。",
        step2_title: "第2步：艾森豪威尔", step2_desc: "根据重要性和紧迫性进行分类。",
        step3_title: "第3步：BIG 3", step3_desc: "设定今天的3个核心目标。",
        step4_title: "第4步：每日日志", step4_desc: "按计划执行并记录。",
        login_start: "登录开始", id_placeholder: "账号", pw_placeholder: "密码", enter_btn: "进入计划表",
        planner_title: "计划表", logout_btn: "注销", step1_tag: "第1步：大脑倾倒", dump_placeholder: "输入你的想法...",
        add_btn: "添加", next_btn: "下一步", prev_btn: "上一步", step2_tag: "第2步：艾森豪威尔", storage: "存储库",
        q1: "Q1: 立即做", q2: "Q2: 计划做", q3: "Q3: 授权做", q4: "Q4: 消除",
        step3_tag: "第3步：今日BIG 3", big_placeholder: "输入核心目标", review_btn: "查看结果",
        execution_tag: "每日日志", category_placeholder: "添加类别", th_time: "时间", th_cat: "类别", th_task: "任务", th_status: "状态",
        save_btn: "最终保存", status_pre: "未开始", status_doing: "进行中", status_done: "已完成", status_cancel: "取消"
    },
    vi: {
        app_name: "WWBTD", landing_subtitle: "Quản lý thời gian chiến lược để thành công", how_to_use: "Cách sử dụng",
        step1_title: "Bước 1: Brain Dump", step1_desc: "Trút bỏ mọi suy nghĩ trong đầu bạn.",
        step2_title: "Bước 2: Eisenhower", step2_desc: "Phân loại theo tầm quan trọng và sự cấp bách.",
        step3_title: "Bước 3: BIG 3", step3_desc: "Đặt 3 mục tiêu chính cho ngày hôm nay.",
        step4_title: "Bước 4: Daily Log", step4_desc: "Thực hiện và ghi lại theo lịch trình.",
        login_start: "Đăng nhập để bắt đầu", id_placeholder: "Tài khoản", pw_placeholder: "Mật khẩu", enter_btn: "Vào kế hoạch",
        planner_title: "KẾ HOẠCH", logout_btn: "Đăng xuất", step1_tag: "BƯỚC 1: BRAIN DUMP", dump_placeholder: "Nhập suy nghĩ của bạn...",
        add_btn: "Thêm", next_btn: "Tiếp theo", prev_btn: "Trước đó", step2_tag: "BƯỚC 2: EISENHOWER", storage: "Kho lưu trữ",
        q1: "Q1: Làm ngay", q2: "Q2: Lên kế hoạch", q3: "Q3: Ủy quyền", q4: "Q4: Loại bỏ",
        step3_tag: "BƯỚC 3: BIG 3 HÔM NAY", big_placeholder: "Nhập mục tiêu chính", review_btn: "Xem kết quả",
        execution_tag: "NHẬT KÝ HÀNG NGÀY", category_placeholder: "Thêm danh mục", th_time: "Thời gian", th_cat: "Danh mục", th_task: "Nhiệm vụ", th_status: "Trạng thái",
        save_btn: "Lưu tất cả", status_pre: "Chưa làm", status_doing: "Đang làm", status_done: "Xong", status_cancel: "Hủy"
    }
};

let brainDumpItems = [];
let currentLang = localStorage.getItem('lang') || 'ko';

document.addEventListener('DOMContentLoaded', () => {
    initSettings();
    checkLoginState();
    
    // 이벤트 바인딩
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        localStorage.setItem('isLoggedIn', 'true');
        checkLoginState();
    });

    document.getElementById('logout-btn').addEventListener('click', () => {
        localStorage.removeItem('isLoggedIn');
        location.reload();
    });

    document.getElementById('lang-select').addEventListener('change', (e) => {
        currentLang = e.target.value;
        localStorage.setItem('lang', currentLang);
        applyLanguage();
    });

    document.getElementById('theme-select').addEventListener('change', (e) => {
        applyTheme(e.target.value);
    });
});

function initSettings() {
    // 언어 설정
    document.getElementById('lang-select').value = currentLang;
    applyLanguage();

    // 테마 설정
    const savedTheme = localStorage.getItem('theme') || 'theme-classic';
    document.getElementById('theme-select').value = savedTheme;
    applyTheme(savedTheme);
}

function applyLanguage() {
    const langData = i18n[currentLang];
    
    // 일반 텍스트 변경
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (langData[key]) el.textContent = langData[key];
    });

    // Placeholder 변경
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (langData[key]) el.placeholder = langData[key];
    });

    // 테이블 헤더 등 동적 요소 재렌더링 필요 시 호출
    if (localStorage.getItem('isLoggedIn') === 'true') {
        updateAllCategorySelects();
    }
}

function applyTheme(themeName) {
    document.body.className = themeName;
    localStorage.setItem('theme', themeName);
}

function checkLoginState() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    document.getElementById('landing-page').style.display = isLoggedIn ? 'none' : 'flex';
    document.getElementById('app-container').style.display = isLoggedIn ? 'block' : 'none';
    if (isLoggedIn) initApp();
}

function initApp() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById("date").value = today;
    initCategories();
    initTable();
    initDragAndDrop();
    
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
    addBtn.onclick = addFn;
    dumpInput.onkeypress = (e) => { if(e.key === 'Enter') addFn(); };
    loadData();
}

// (나머지 함수들은 이전과 동일하게 유지하되 i18n을 반영하도록 일부 수정)
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
    chip.addEventListener('dragstart', (e) => { e.dataTransfer.setData('text/plain', item.id); });
    return chip;
}

function initDragAndDrop() {
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.style.background = "rgba(0,0,0,0.05)"; });
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
    const lang = i18n[currentLang];
    const b1 = document.getElementById("big1").value;
    const b2 = document.getElementById("big2").value;
    const b3 = document.getElementById("big3").value;
    document.getElementById("summary-big3").innerHTML = `<strong>BIG 3:</strong> ${b1 || '-' } / ${b2 || '-' } / ${b3 || '-' }`;

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

document.getElementById('add-category-btn').onclick = () => {
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
};

function removeCategory(name) {
    let categories = JSON.parse(localStorage.getItem('user_categories')).filter(c => c !== name);
    localStorage.setItem('user_categories', JSON.stringify(categories));
    renderCategoryTags();
    updateAllCategorySelects();
}

function initTable() {
    const lang = i18n[currentLang];
    const tbody = document.querySelector("#table tbody");
    tbody.innerHTML = hours.map(hour => `<tr><td>${hour}</td><td><select class="category-select"></select></td><td><input type="text" class="task-input"></td><td><select class="status-select"><option value="">${lang.status_pre}</option><option value="doing">${lang.status_doing}</option><option value="done">${lang.status_done}</option><option value="cancel">${lang.status_cancel}</option></select></td></tr>`).join('');
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
    localStorage.setItem(`planner_v4_${date}`, JSON.stringify(data));
    alert(currentLang === 'ko' ? "저장되었습니다!" : "Saved!");
}

function loadData() {
    const date = document.getElementById("date").value;
    const raw = localStorage.getItem(`planner_v4_${date}`);
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
