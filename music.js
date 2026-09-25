// =====================================
// MUSIC PLAYER
// =====================================

// 🎵 ใส่ชื่อไฟล์เพลงของคุณตรงนี้
const music = new Audio("ILLSLICK%20%E0%B8%9E%E0%B8%B4%E0%B8%9E%E0%B8%B4%E0%B8%98%E0%B8%A0%E0%B8%B1%E0%B8%93%E0%B8%91%E0%B9%8C%20Official%20Music%20Video.mp3");

music.loop = true;
music.volume = 0.5;

// สร้างกล่องเครื่องเล่นเพลง
const musicBox = document.createElement("div");
musicBox.id = "musicBox";

musicBox.innerHTML = `
    <div class="music-title">
        🎵 เพลงประจำเว็บไซต์
    </div>

    <div class="music-buttons">
        <button id="playMusic">▶ เปิดเพลง</button>
        <button id="pauseMusic">⏸ ปิดเพลง</button>
    </div>
`;

document.body.appendChild(musicBox);

// ปุ่มเปิดเพลง
document.getElementById("playMusic").addEventListener("click", function () {
    music.play();

    this.innerHTML = "🎶 กำลังเล่น";
});

// ปุ่มปิดเพลง
document.getElementById("pauseMusic").addEventListener("click", function () {
    music.pause();

    document.getElementById("playMusic").innerHTML = "▶ เปิดเพลง";
});
