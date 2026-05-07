/* ==========================================
   1. PENGATURAN JACKPOT (SALDO PALSU)
   ========================================== */
let currentJackpot = 35889891144.00;

function updateJackpotCounter() {
    // Menambah angka jackpot secara acak agar terlihat real-time
    currentJackpot += Math.random() * 150;
    
    const formattedNumber = new Intl.NumberFormat('id-ID', { 
        minimumFractionDigits: 2, 
        maximumFractionDigits: 2 
    }).format(currentJackpot);

    const jackpotElement = document.getElementById('jackpot-counter');
    if (jackpotElement) {
        jackpotElement.innerText = "IDR " + formattedNumber;
    }
}

/* ==========================================
   2. PENGATURAN JAM REAL-TIME
   ========================================== */
function updateRealTimeClock() {
    const clockElement = document.getElementById('realtime-clock');
    if (clockElement) {
        const now = new Date();
        // Format jam: 05/07/2026 03:30:00 AM
        clockElement.innerText = now.toLocaleString('en-US', { 
            month: '2-digit', day: '2-digit', year: 'numeric',
            hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
        }).replace(',', ''); 
    }
}

/* ==========================================
   3. SLIDESHOW BANNER RESPONSIVE
   ========================================== */
let bannerIndex = 0;
function startBannerSlideshow() {
    const track = document.querySelector('.banner-track');
    const slides = document.querySelectorAll('.banner-track img');
    
    if (!track || slides.length === 0) return;

    setInterval(() => {
        bannerIndex++;
        if (bannerIndex >= slides.length) {
            bannerIndex = 0;
        }
        // Geser banner berdasarkan jumlah gambar yang ada
        const movePercentage = bannerIndex * (100 / slides.length);
        track.style.transform = `translateX(-${movePercentage}%)`;
    }, 4000); // Ganti gambar setiap 4 detik
}

/* ==========================================
   4. MENJALANKAN SEMUA FUNGSI
   ========================================== */
document.addEventListener('DOMContentLoaded', () => {
    // Mulai slideshow
    startBannerSlideshow();
    
    // Update jackpot setiap 0.1 detik
    setInterval(updateJackpotCounter, 100);
    
    // Update jam setiap 1 detik
    setInterval(updateRealTimeClock, 1000);
    updateRealTimeClock(); // Jalankan sekali di awal agar tidak kosong
});