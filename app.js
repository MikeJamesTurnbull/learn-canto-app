const words = [
    { english: "table", chinese: "枱", jyutping: "toi2" },
    { english: "chair", chinese: "椅", jyutping: "ji2" },
    { english: "bed", chinese: "床", jyutping: "cung4" },
    { english: "sofa", chinese: "梳化", jyutping: "so1 faa3" },
    { english: "television", chinese: "電視", jyutping: "din6 si6" },
    { english: "refrigerator", chinese: "雪櫃", jyutping: "syut3 gwai6" },
    { english: "microwave", chinese: "微波爐", jyutping: "mei4 bo1 lou4" },
    { english: "toilet", chinese: "廁所", jyutping: "ci3 so2" },
    { english: "shower", chinese: "淋浴", jyutping: "lam4 juk6" },
    { english: "cup", chinese: "杯", jyutping: "bui1" },
    { english: "plate", chinese: "碟", jyutping: "dip6" },
    { english: "spoon", chinese: "匙", jyutping: "ci4" },
    { english: "knife", chinese: "刀", jyutping: "dou1" },
    { english: "fork", chinese: "叉", jyutping: "caa1" },
    { english: "lamp", chinese: "檯燈", jyutping: "toi4 dang1" },
    { english: "mirror", chinese: "鏡", jyutping: "geng3" },
    { english: "closet", chinese: "衣櫃", jyutping: "ji1 gwai6" },
    { english: "window", chinese: "窗", jyutping: "coeng1" },
    { english: "door", chinese: "門", jyutping: "mun4" },
    { english: "curtain", chinese: "窗簾", jyutping: "coeng1 lim4" }
];

let currentIndex = 0;
const audio = new Audio();

// DOM elements
const card = document.getElementById('card');
const jyutpingElement = document.getElementById('jyutping');
const englishElement = document.getElementById('english');
const chineseElement = document.getElementById('chinese');
const playButton = document.getElementById('playAudio');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const flipBtn = document.getElementById('flipBtn');

// Update card content
function updateCard() {
    const currentWord = words[currentIndex];
    jyutpingElement.textContent = currentWord.jyutping;
    englishElement.textContent = currentWord.english;
    chineseElement.textContent = currentWord.chinese;
    audio.src = `audio/${currentWord.english.toLowerCase()}.mp3`;
}

// Navigation functions
function nextCard() {
    currentIndex = (currentIndex + 1) % words.length;
    updateCard();
    card.classList.remove('flipped');
}

function prevCard() {
    currentIndex = (currentIndex - 1 + words.length) % words.length;
    updateCard();
    card.classList.remove('flipped');
}

// Event listeners
playButton.addEventListener('click', () => {
    audio.play();
});

flipBtn.addEventListener('click', () => {
    card.classList.toggle('flipped');
});

prevBtn.addEventListener('click', prevCard);
nextBtn.addEventListener('click', nextCard);

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'ArrowLeft':
            prevCard();
            break;
        case 'ArrowRight':
            nextCard();
            break;
        case ' ':
            card.classList.toggle('flipped');
            break;
    }
});

// Initialize
updateCard();

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
            })
            .catch(err => {
                console.log('ServiceWorker registration failed: ', err);
            });
    });
}
