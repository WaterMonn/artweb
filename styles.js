document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    let activeItemIndex = 0;
    const items = document.querySelectorAll('.carousel-item');
    const itemCount = items.length;

    // 设置轮播图自动播放
    function cycleItems() {
        let item = items[currentIndex];
        items.forEach(item => item.style.opacity = '0');
        item.style.opacity = '1';
        activeItemIndex = currentIndex;  // 更新活跃轮播项的索引
        currentIndex++;
        

        if (currentIndex === itemCount) {
            currentIndex = 0;
        }
    }

    setInterval(cycleItems, 2000); // 每两秒切换一次


    

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            alert(`即将跳转到: art${activeItemIndex + 1}.html`);
            window.location.href = `html/art${activeItemIndex + 1}.html`;
        });
    });

});



// 答题
document.getElementById('startButton').addEventListener('click', startGame);

const questions = [
    { image: 'img/Qyinxiang.webp', choices: ['印象派', '立体派', '野兽派'], correct: '印象派' },
    { image: 'img/Qyeshou.webp', choices: ['立体派', '野兽派', '点描派'], correct: '野兽派' },
    { image: 'img/Qliti.webp', choices: ['超现实派', '立体派', '印象派'], correct: '立体派' },
    { image: 'img/Qbiaoxian.webp', choices: ['表现派', '立体派', '未来派'], correct: '表现派' },
    { image: 'img/Qchaoxianshi.webp', choices: ['未来派', '点描派', '超现实派'], correct: '超现实派' },
    { image: 'img/Qweilai.webp', choices: ['野兽派', '未来派', '立体派'], correct: '未来派' },
    { image: 'img/Qdianmiao.webp', choices: ['点描派', '印象派', '野兽派'], correct: '点描派' },
    
];

let currentQuestionIndex = 0;

function startGame() {
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    const questionDiv = document.getElementById('question');
    questionDiv.innerHTML = `<img src="${question.image}" alt="Artwork">`;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.addEventListener('click', () => chooseAnswer(choice, question.correct));
        choicesDiv.appendChild(button);
    });
}

function chooseAnswer(choice, correctAnswer) {
    if (choice === correctAnswer) {
        alert('正确！');
    } else {
        alert(`错误，正确答案是：${correctAnswer}`);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => showQuestion(questions[currentQuestionIndex]), 1500);
    } else {
        alert('游戏结束！');
    }
}










