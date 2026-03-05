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
            <td><input type="text" class="task-input"></td>
            <td>
                <select class="q-select">
                    <option value="">선택</option>
                    <option value="q1">Q1</option>
                    <option value="q2">Q2</option>
                    <option value="q3">Q3</option>
                    <option value="q4">Q4</option>
                </select>
            </td>
        `;

        // 색상 변경 이벤트 리스너 추가
        row.querySelector(".category-select").addEventListener('change', (e) => {
            row.cells[1].className = e.target.value;
        });

        row.querySelector(".q-select").addEventListener('change', (e) => {
            row.cells[3].className = e.target.value;
        });

        tableBody.appendChild(row);
    });

    // 날짜 변경 시 데이터 불러오기
    dateInput.addEventListener("change", loadData);
    
    // 초기 로드 시 오늘 데이터 있으면 불러오기
    loadData();
});

function saveData() {
    const date = document.getElementById("date").value;
    if (!date) {
        alert("날짜를 선택해주세요.");
        return;
    }

    const rows = document.querySelectorAll("#table tbody tr");
    const log = [];

    rows.forEach(r => {
        log.push({
            category: r.querySelector(".category-select").value,
            task: r.querySelector(".task-input").value,
            q: r.querySelector(".q-select").value
        });
    });

    const data = {
        big1: document.getElementById("big1").value,
        big2: document.getElementById("big2").value,
        big3: document.getElementById("big3").value,
        note: document.getElementById("note").value,
        log: log
    };

    localStorage.setItem(`planner_${date}`, JSON.stringify(data));
    alert("오늘의 계획이 저장되었습니다!");
}

function loadData() {
    const date = document.getElementById("date").value;
    const rawData = localStorage.getItem(`planner_${date}`);

    const rows = document.querySelectorAll("#table tbody tr");
    
    if (!rawData) {
        // 데이터가 없는 경우 필드 초기화
        document.getElementById("big1").value = "";
        document.getElementById("big2").value = "";
        document.getElementById("big3").value = "";
        document.getElementById("note").value = "";
        rows.forEach(r => {
            r.querySelector(".category-select").value = "";
            r.querySelector(".task-input").value = "";
            r.querySelector(".q-select").value = "";
            r.cells[1].className = "";
            r.cells[3].className = "";
        });
        return;
    }

    const d = JSON.parse(rawData);
    document.getElementById("big1").value = d.big1 || "";
    document.getElementById("big2").value = d.big2 || "";
    document.getElementById("big3").value = d.big3 || "";
    document.getElementById("note").value = d.note || "";

    rows.forEach((r, i) => {
        if (d.log && d.log[i]) {
            const cat = d.log[i].category;
            const q = d.log[i].q;
            r.querySelector(".category-select").value = cat;
            r.querySelector(".task-input").value = d.log[i].task;
            r.querySelector(".q-select").value = q;
            r.cells[1].className = cat;
            r.cells[3].className = q;
        }
    });
}
