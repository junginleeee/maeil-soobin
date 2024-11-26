// 클릭 이벤트로 하트 애니메이션 생성
document.body.addEventListener('click', (e) => {
    const heart = document.createElement('img');
    heart.src = './assets/heart.svg'; // SVG 파일 경로를 확인하세요
    heart.className = 'heart';

    // 클릭 위치에 하트를 표시
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    document.body.appendChild(heart);

    // 애니메이션 후 하트 삭제
    setTimeout(() => {
        heart.remove();
    }, 2000); // 애니메이션 지속 시간
});

let clickCount = 0;

document.body.addEventListener('click', () => {
    clickCount++;

    if (clickCount === 2) {
        // 첫 클릭: 위쪽 SVG 나타남
        document.querySelector('.top-svg').classList.add('visible');
    } else if (clickCount === 6) {
        // 두 번째 클릭: 아래쪽 SVG 나타남
        document.querySelector('.bottom-svg').classList.add('visible');
    }
});
