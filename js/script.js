let direction = 1;
let position = 0;

setInterval(() => {
    if (position >= 10) direction = -1;
    if (position <= 0) direction = 1;

    position += direction;

    document.querySelectorAll(".icooone").forEach(icon => {
        icon.style.transform = `translateY(${position}px)`;
    });

}, 100);


let angle = 0; // زاوية الدوران

function rotateIcons() {
    angle += 0.5; // زيادة الزاوية ببطء للحصول على دوران سلس
    document.querySelectorAll(".icooonee").forEach(icon => {
        icon.style.transform = `rotate(${angle}deg)`;
    });

    requestAnimationFrame(rotateIcons); // استدعاء الدالة باستمرار للحصول على حركة سلسة
}

rotateIcons(); // تشغيل الحركة