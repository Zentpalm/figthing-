let count = 0;
let target = 10;

const heartBtn = document.getElementById('heartBtn');
const clickDisplay = document.getElementById('clickCount');
const targetDisplay = document.getElementById('targetCount');
const popup = document.getElementById('popupOverlay');
const popupMessage = document.getElementById('popupMessage');

// ข้อความที่จะสุ่มแสดงใน Pop-up
const loveMessages = [
    "ตั้งใจอ่านติ๋มทำได้อยู่แล้ว!",
    "สู้ๆนะติ๋มวันท้ายแล้วทำเต็มที่",
    "ขอให้ข้อสอบออกง่ายๆติ๋มจะได้ทำได้",
    "สู้ๆเกรด 4 กำลังมา"
];

heartBtn.addEventListener('click', () => {
    count++;
    clickDisplay.innerText = count;

    // เปลี่ยนสีหัวใจ + ดาวกระจาย (เหมือนเดิม)
    heartBtn.innerText = '🧡';
    setTimeout(() => heartBtn.innerText = '🤍', 500);
    for (let i = 0; i < 15; i++) { createSparkle(); }

    // เมื่อครบจำนวนเป้าหมาย
    if (count === target) {
        popupMessage.innerText = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        popup.style.display = 'flex';
    }
});

function closePopup() {
    popup.style.display = 'none';
    target += 10; // เพิ่มเป้าหมายทีละ 10
    targetDisplay.innerText = target;
}

function createSparkle() {
    const sparkle = document.createElement('span');
    sparkle.innerHTML = '✨';
    sparkle.className = 'sparkle';
    sparkle.style.left = '50%';
    sparkle.style.top = '50%';
    sparkle.style.fontSize = Math.random() * 1 + 0.5 + 'rem';
    document.body.appendChild(sparkle);

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 150 + 50;
    
    const animation = sparkle.animate([
        { opacity: 1, transform: `translate(-50%, -50%) translate(0,0)` },
        { opacity: 0, transform: `translate(-50%, -50%) translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)` }
    ], {
        duration: 1500,
        easing: 'ease-out',
        fill: 'forwards'
    });
    animation.onfinish = () => sparkle.remove();

}
