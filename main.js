document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addBtn = document.getElementById('add-btn');
    const todoList = document.getElementById('todo-list');
    const currentDate = document.getElementById('current-date');

    // 오늘 날짜 표시
    const options = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' };
    currentDate.textContent = new Date().toLocaleDateString('ko-KR', options);

    // 할 일 추가 함수
    const addTodo = () => {
        const text = input.value.trim();
        if (text === '') return;

        const li = document.createElement('li');
        li.innerHTML = `
            <span class="todo-text">${text}</span>
            <button class="delete-btn">삭제</button>
        `;

        // 완료 토글 기능
        li.querySelector('.todo-text').addEventListener('click', (e) => {
            e.target.classList.toggle('completed');
        });

        // 삭제 기능
        li.querySelector('.delete-btn').addEventListener('click', () => {
            li.remove();
        });

        todoList.appendChild(li);
        input.value = '';
        input.focus();
    };

    addBtn.addEventListener('click', addTodo);

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
    });
});
