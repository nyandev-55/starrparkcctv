// Starr Park CCTV Video Player Emulator
console.log("Starr Park Player Emulator Yüklendi!");

export default class Player {
    constructor(options) {
        this.container = options?.container || document.body;
        this.init();
    }

    init() {
        // Sayfadaki video elementini bul veya oluştur
        let video = document.querySelector('video');
        if (!video) {
            video = document.createElement('video');
            video.style.width = '100%';
            video.style.height = '100%';
            video.style.objectFit = 'contain';
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.playsInline = true;
            
            // CCTV Ekranı veya app konteynerine ekle
            const app = document.getElementById('app') || document.body;
            app.appendChild(video);
        }

        // Videoyu assets klasöründeki dosyana bağla
        video.src = './assets/seek-video-dab3875d.mp4';
        
        video.play().catch(err => {
            console.warn("Video otomatik başlatılamadı, etkileşim bekleniyor:", err);
        });

        console.log("CCTV Video akışı başlatıldı: ./assets/seek-video-dab3875d.mp4");
    }
}

// Global olarak çağrılma ihtimaline karşı
window.StarrPlayer = Player;