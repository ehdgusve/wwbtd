const hours = [
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00", "21:00", "22:00"
];

// 기본 카테고리
const defaultCategories = ["운동", "마케팅", "관리", "수익", "공부"];

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector("#table tbody");
    const dateInput = document.getElementById("date");
    const addCategoryBtn = document.getElementById("add-category-btn");
    const categoryNameInput = document.getElementById("new-category-name");

    // 오늘 날짜 설정
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    // 카테고리 초기화
    initCategories();

    // 테이블 행 생성
    hours.forEach(hour => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${hour}</td>
            <td class="custom-category-cell">
                <select class="category-select">
                    <!-- Categories will be loaded here -->
                </select>
            </td>
            <td><input type="text" class="task-input" placeholder="할 일 입력..."></td>
            <td>
                <select class="status-select">
                    <option value="">진행전</option>
                    <option value="doing">진행중</option>
                    <option value="done">완료</option>
                    <option value="cancel">취소</option>
                </select>
            </td>
        `;
        tableBody.appendChild(row);
    });

    // 모든 select 업데이트
    updateAllCategorySelects();

    // 카테고리 추가 이벤트
    addCategoryBtn.addEventListener('click', () => {
        const name = categoryNameInput.value.trim();
        if (name) {
            addCategory(name);
            categoryNameInput.value = "";
        }
    });

    dateInput.addEventListener("change", loadData);
    loadData();
});

// --- Category Logic ---

function initCategories() {
    let categories = JSON.parse(localStorage.getItem('user_categories'));
    if (!categories) {
        categories = defaultCategories;
        localStorage.setItem('user_categories', JSON.stringify(categories));
    }
    renderCategoryTags();
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

function renderCategoryTags() {
    const container = document.getElementById('category-tags');
    const categories = JSON.parse(localStorage.getItem('user_categories'));
    container.innerHTML = "";

    categories.forEach(name => {
        const tag = document.createElement('div');
        tag.className = 'category-tag';
        tag.innerHTML = `
            <span>${name}</span>
            <span class="remove-category" onclick="removeCategory('${name}')">&times;</span>
        `;
        container.appendChild(tag);
    });
}

function updateAllCategorySelects() {
    const selects = document.querySelectorAll('.category-select');
    const categories = JSON.parse(localStorage.getItem('user_categories'));

    selects.forEach(select => {
        const currentValue = select.value;
        let options = '<option value="">선택</option>';
        categories.forEach(name => {
            options += `<option value="${name}">${name}</option>`;
        });
        select.innerHTML = options;
        
        // 이전에 선택되어 있던 값이 있으면 유지
        if (categories.includes(currentValue)) {
            select.value = currentValue;
        }
    });
}

// --- Data Persistence Logic ---

function saveData() {
    const date = document.getElementById("date").value;
    if (!date) return alert("날짜를 선택해주세요.");

    const rows = document.querySelectorAll("#table tbody tr");
    const log = [];

    rows.forEach(r => {
        log.push({
            category: r.querySelector(".category-select").value,
            task: r.querySelector(".task-input").value,
            status: r.querySelector(".status-select").value
        });
    });

    const data = {
        brainDump: document.getElementById("brain-dump").value,
        q1: document.getElementById("q1-tasks").value,
        q2: document.getElementById("q2-tasks").value,
        q3: document.getElementById("q3-tasks").value,
        q4: document.getElementById("q4-tasks").value,
        big1: document.getElementById("big1").value,
        big2: document.getElementById("big2").value,
        big3: document.getElementById("big3").value,
        log: log
    };

    localStorage.setItem(`planner_${date}`, JSON.stringify(data));
    alert("오늘의 계획이 저장되었습니다!");
}

function loadData() {
    const date = document.getElementById("date").value;
    const rawData = localStorage.getItem(`planner_${date}`);
    const rows = document.querySelectorAll("#table tbody tr");

    // 필드 초기화
    const fields = ['brain-dump', 'q1-tasks', 'q2-tasks', 'q3-tasks', 'q4-tasks', 'big1', 'big2', 'big3'];
    fields.forEach(id => document.getElementById(id).value = "");
    rows.forEach(r => {
        r.querySelector(".category-select").value = "";
        r.querySelector(".task-input").value = "";
        r.querySelector(".status-select").value = "";
    });

    if (!rawData) return;

    const d = JSON.parse(rawData);
    document.getElementById("brain-dump").value = d.brainDump || "";
    document.getElementById("q1-tasks").value = d.q1 || "";
    document.getElementById("q2-tasks").value = d.q2 || "";
    document.getElementById("q3-tasks").value = d.q3 || "";
    document.getElementById("q4-tasks").value = d.q4 || "";
    document.getElementById("big1").value = d.big1 || "";
    document.getElementById("big2").value = d.big2 || "";
    document.getElementById("big3").value = d.big3 || "";

    rows.forEach((r, i) => {
        if (d.log && d.log[i]) {
            const item = d.log[i];
            const select = r.querySelector(".category-select");
            
            // 저장된 데이터가 현재 카테고리 목록에 없으면 목록에 추가하여 보존
            if (item.category && !Array.from(select.options).some(opt => opt.value === item.category)) {
                const opt = document.createElement('option');
                opt.value = item.category;
                opt.textContent = item.category;
                select.appendChild(opt);
            }

            select.value = item.category;
            r.querySelector(".task-input").value = item.task;
            r.querySelector(".status-select").value = item.status;
        }
    });
}
