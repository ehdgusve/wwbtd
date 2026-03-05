const hours = [
    "06:00", "07:00", "08:00", "09:00", "10:00", "11:00",
    "12:00", "13:00", "14:00", "15:00", "16:00", "17:00",
    "18:00", "19:00", "20:00", "21:00", "22:00"
];

document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.querySelector("#table tbody");
    const dateInput = document.getElementById("date");

    // 오늘 날짜 기본 설정
    const today = new Date().toISOString().split('T')[0];
    dateInput.value = today;

    // 테이블 행 생성
    hours.forEach(hour => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${hour}</td>
            <td>
                <select class="category-select">
                    <option value="">선택</option>
                    <option value="wood">운동</option>
                    <option value="fire">마케팅</option>
                    <option value="earth">관리</option>
                    <option value="metal">수익</option>
                    <option value="water">공부</option>
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

        // 카테고리 선택 시 색상 변경
        row.querySelector(".category-select").addEventListener('change', (e) => {
            row.cells[1].className = e.target.value;
        });

        tableBody.appendChild(row);
    });

    dateInput.addEventListener("change", loadData);
    loadData();
});

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
    alert("전략적인 하루 계획이 저장되었습니다!");
}

function loadData() {
    const date = document.getElementById("date").value;
    const rawData = localStorage.getItem(`planner_${date}`);
    const rows = document.querySelectorAll("#table tbody tr");

    // 초기화
    const fields = ['brain-dump', 'q1-tasks', 'q2-tasks', 'q3-tasks', 'q4-tasks', 'big1', 'big2', 'big3'];
    fields.forEach(id => document.getElementById(id).value = "");
    rows.forEach(r => {
        r.querySelector(".category-select").value = "";
        r.querySelector(".task-input").value = "";
        r.querySelector(".status-select").value = "";
        r.cells[1].className = "";
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
            r.querySelector(".category-select").value = item.category;
            r.querySelector(".task-input").value = item.task;
            r.querySelector(".status-select").value = item.status;
            r.cells[1].className = item.category;
        }
    });
}
