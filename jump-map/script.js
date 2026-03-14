// ===== 이모지 목록 =====
const EMOJIS = [
    // 동물
    '🐱','🐶','🐸','🐰','🐼',
    '🦊','🐻','🐯','🐨','🦁',
    '🐧','🐮','🐷','🐙','🦄',
    '🐵','🐔','🐺','🦝','🐗',
    // 특이한 것들
    '💩','👽','👻','🤖','👾',
    '🧟','🧙','🧚','🦸','🥷',
    // 음식
    '🍕','🍔','🌮','🍜','🍣',
    '🍩','🍦','🧁','🍓','🥑',
    // 기타
    '🚀','⭐','🌈','🔥','💎',
    '🎃','🎄','🌵','🍄','🐲',
];

// ===== 레벨 데이터 =====
// y=430이 바닥 기준 (캔버스 높이 450)
const LEVEL_DATA = [
    {
        name: '레벨 1',
        bg: ['#87CEEB', '#b0e0ff'],
        cloudColor: 'rgba(255,255,255,0.7)',
        groundColor: '#4CAF50',
        platformColor: '#66BB6A',
        platformTop: '#81C784',
        worldWidth: 2400,
        startX: 60, startY: 370,
        goalX: 2300, goalY: 220,
        platforms: [
            { x: 0,    y: 410, w: 300, h: 40 },
            { x: 340,  y: 410, w: 200, h: 40 },
            { x: 590,  y: 380, w: 180, h: 40 },
            { x: 830,  y: 350, w: 180, h: 40 },
            { x: 1070, y: 410, w: 180, h: 40 },
            { x: 1310, y: 370, w: 160, h: 40 },
            { x: 1530, y: 330, w: 160, h: 40 },
            { x: 1750, y: 290, w: 180, h: 40 },
            { x: 1990, y: 310, w: 460, h: 40 },
        ]
    },
    {
        name: '레벨 2',
        bg: ['#FF9A3C', '#FFD166'],
        cloudColor: 'rgba(255,220,150,0.6)',
        groundColor: '#E65100',
        platformColor: '#FF7043',
        platformTop: '#FF8A65',
        worldWidth: 2800,
        startX: 60, startY: 370,
        goalX: 2700, goalY: 200,
        platforms: [
            { x: 0,    y: 410, w: 250, h: 40 },
            { x: 300,  y: 380, w: 130, h: 40 },
            { x: 490,  y: 350, w: 110, h: 40 },
            { x: 660,  y: 410, w: 130, h: 40 },
            { x: 850,  y: 360, w: 120, h: 40, mv: { axis:'x', spd:2, min:850,  max:1060 } },
            { x: 1130, y: 320, w: 130, h: 40 },
            { x: 1330, y: 400, w: 110, h: 40 },
            { x: 1500, y: 360, w: 120, h: 40, mv: { axis:'y', spd:1.5, min:300, max:400 } },
            { x: 1700, y: 330, w: 120, h: 40 },
            { x: 1890, y: 290, w: 120, h: 40 },
            { x: 2080, y: 360, w: 130, h: 40, mv: { axis:'x', spd:2.5, min:2080, max:2300 } },
            { x: 2380, y: 300, w: 120, h: 40 },
            { x: 2540, y: 250, w: 140, h: 40 },
            { x: 2600, y: 240, w: 250, h: 40 },
        ]
    },
    {
        name: '레벨 3',
        bg: ['#4A148C', '#7B1FA2'],
        cloudColor: 'rgba(180,100,255,0.4)',
        groundColor: '#1A0030',
        platformColor: '#AB47BC',
        platformTop: '#CE93D8',
        worldWidth: 3200,
        startX: 60, startY: 370,
        goalX: 3100, goalY: 170,
        platforms: [
            { x: 0,    y: 410, w: 220, h: 40 },
            { x: 270,  y: 370, w: 100, h: 40 },
            { x: 430,  y: 340, w: 90,  h: 40 },
            { x: 580,  y: 400, w: 100, h: 40 },
            { x: 740,  y: 360, w: 100, h: 40, mv: { axis:'x', spd:2.5, min:740,  max:960  } },
            { x: 1040, y: 310, w: 100, h: 40 },
            { x: 1210, y: 380, w: 90,  h: 40 },
            { x: 1360, y: 340, w: 100, h: 40, mv: { axis:'y', spd:2,   min:280,  max:380  } },
            { x: 1540, y: 300, w: 100, h: 40 },
            { x: 1710, y: 260, w: 90,  h: 40 },
            { x: 1870, y: 360, w: 100, h: 40, mv: { axis:'x', spd:3,   min:1870, max:2100 } },
            { x: 2180, y: 310, w: 100, h: 40 },
            { x: 2350, y: 270, w: 100, h: 40, mv: { axis:'y', spd:2.5, min:220,  max:340  } },
            { x: 2530, y: 300, w: 100, h: 40 },
            { x: 2700, y: 250, w: 90,  h: 40 },
            { x: 2860, y: 210, w: 90,  h: 40 },
            { x: 3000, y: 210, w: 260, h: 40 },
        ]
    },
    {
        name: '레벨 4',
        bg: ['#006994', '#0099CC'],
        cloudColor: 'rgba(150,230,255,0.5)',
        groundColor: '#003355',
        platformColor: '#0288D1',
        platformTop: '#4FC3F7',
        worldWidth: 3400,
        startX: 60, startY: 370,
        goalX: 3300, goalY: 160,
        platforms: [
            { x: 0,    y: 410, w: 200, h: 40 },
            { x: 250,  y: 380, w: 90,  h: 40 },
            { x: 400,  y: 350, w: 80,  h: 40, mv: { axis:'x', spd:2,   min:400,  max:580  } },
            { x: 640,  y: 400, w: 90,  h: 40 },
            { x: 790,  y: 350, w: 80,  h: 40 },
            { x: 940,  y: 300, w: 80,  h: 40, mv: { axis:'y', spd:2,   min:240,  max:340  } },
            { x: 1100, y: 380, w: 80,  h: 40, mv: { axis:'x', spd:2.5, min:1100, max:1300 } },
            { x: 1380, y: 320, w: 80,  h: 40 },
            { x: 1530, y: 280, w: 80,  h: 40, mv: { axis:'y', spd:2.5, min:220,  max:320  } },
            { x: 1690, y: 350, w: 80,  h: 40 },
            { x: 1850, y: 300, w: 80,  h: 40, mv: { axis:'x', spd:3,   min:1850, max:2080 } },
            { x: 2160, y: 260, w: 80,  h: 40 },
            { x: 2310, y: 350, w: 80,  h: 40, mv: { axis:'y', spd:3,   min:280,  max:380  } },
            { x: 2470, y: 290, w: 80,  h: 40 },
            { x: 2620, y: 240, w: 80,  h: 40, mv: { axis:'x', spd:2.5, min:2620, max:2820 } },
            { x: 2900, y: 270, w: 80,  h: 40 },
            { x: 3050, y: 220, w: 80,  h: 40 },
            { x: 3150, y: 200, w: 250, h: 40 },
        ]
    },
    {
        name: '레벨 5',
        bg: ['#B71C1C', '#E53935'],
        cloudColor: 'rgba(255,180,100,0.4)',
        groundColor: '#4A0000',
        platformColor: '#E53935',
        platformTop: '#FF7043',
        worldWidth: 3600,
        startX: 60, startY: 370,
        goalX: 3500, goalY: 150,
        platforms: [
            { x: 0,    y: 410, w: 190, h: 40 },
            { x: 240,  y: 370, w: 80,  h: 40, mv: { axis:'x', spd:3,   min:240,  max:420  } },
            { x: 500,  y: 340, w: 80,  h: 40 },
            { x: 650,  y: 400, w: 80,  h: 40, mv: { axis:'y', spd:2.5, min:330,  max:420  } },
            { x: 810,  y: 350, w: 75,  h: 40 },
            { x: 960,  y: 290, w: 75,  h: 40, mv: { axis:'x', spd:3.5, min:960,  max:1180 } },
            { x: 1260, y: 360, w: 75,  h: 40 },
            { x: 1410, y: 310, w: 75,  h: 40, mv: { axis:'y', spd:3,   min:240,  max:350  } },
            { x: 1570, y: 270, w: 75,  h: 40 },
            { x: 1720, y: 380, w: 75,  h: 40, mv: { axis:'x', spd:3,   min:1720, max:1960 } },
            { x: 2040, y: 310, w: 75,  h: 40 },
            { x: 2190, y: 260, w: 75,  h: 40, mv: { axis:'y', spd:3.5, min:200,  max:310  } },
            { x: 2350, y: 350, w: 75,  h: 40 },
            { x: 2500, y: 290, w: 75,  h: 40, mv: { axis:'x', spd:4,   min:2500, max:2740 } },
            { x: 2820, y: 250, w: 75,  h: 40 },
            { x: 2970, y: 210, w: 75,  h: 40, mv: { axis:'y', spd:3,   min:160,  max:260  } },
            { x: 3130, y: 280, w: 75,  h: 40 },
            { x: 3280, y: 220, w: 75,  h: 40 },
            { x: 3390, y: 190, w: 250, h: 40 },
        ]
    },
    {
        name: '레벨 6',
        bg: ['#1A237E', '#283593'],
        cloudColor: 'rgba(200,220,255,0.4)',
        groundColor: '#0D1642',
        platformColor: '#3949AB',
        platformTop: '#7986CB',
        worldWidth: 3400,
        startX: 60, startY: 370,
        goalX: 3300, goalY: 200,
        platforms: [
            { x: 0,    y: 410, w: 230, h: 40 },
            { x: 280,  y: 380, w: 110, h: 40, mv: { axis:'x', spd:1,   min:280,  max:460  } },
            { x: 540,  y: 350, w: 110, h: 40 },
            { x: 710,  y: 400, w: 110, h: 40 },
            { x: 880,  y: 360, w: 100, h: 40, mv: { axis:'y', spd:1,   min:300,  max:390  } },
            { x: 1060, y: 310, w: 110, h: 40 },
            { x: 1240, y: 380, w: 100, h: 40, mv: { axis:'x', spd:1.2, min:1240, max:1440 } },
            { x: 1530, y: 330, w: 110, h: 40 },
            { x: 1710, y: 280, w: 100, h: 40 },
            { x: 1880, y: 360, w: 100, h: 40, mv: { axis:'y', spd:1,   min:290,  max:390  } },
            { x: 2060, y: 300, w: 110, h: 40, mv: { axis:'x', spd:1.2, min:2060, max:2270 } },
            { x: 2360, y: 260, w: 110, h: 40 },
            { x: 2540, y: 340, w: 100, h: 40 },
            { x: 2720, y: 290, w: 100, h: 40, mv: { axis:'x', spd:1.2, min:2720, max:2930 } },
            { x: 3020, y: 250, w: 110, h: 40 },
            { x: 3150, y: 230, w: 300, h: 40 },
        ]
    },
    {
        name: '레벨 7',
        bg: ['#000000', '#1a0030'],
        cloudColor: 'rgba(255,100,255,0.3)',
        groundColor: '#000',
        platformColor: '#880E4F',
        platformTop: '#F48FB1',
        worldWidth: 3000,
        startX: 60, startY: 370,
        goalX: 2900, goalY: 220,
        platforms: [
            { x: 0,    y: 410, w: 260, h: 40 },
            { x: 320,  y: 380, w: 140, h: 40, mv: { axis:'x', spd:1.5, min:320,  max:500  } },
            { x: 580,  y: 350, w: 140, h: 40 },
            { x: 790,  y: 410, w: 130, h: 40 },
            { x: 990,  y: 370, w: 130, h: 40, mv: { axis:'y', spd:1.5, min:310,  max:400  } },
            { x: 1200, y: 320, w: 140, h: 40 },
            { x: 1420, y: 390, w: 130, h: 40, mv: { axis:'x', spd:2,   min:1420, max:1620 } },
            { x: 1710, y: 340, w: 140, h: 40 },
            { x: 1930, y: 290, w: 130, h: 40 },
            { x: 2140, y: 370, w: 130, h: 40, mv: { axis:'y', spd:1.5, min:300,  max:400  } },
            { x: 2360, y: 310, w: 140, h: 40, mv: { axis:'x', spd:2,   min:2360, max:2560 } },
            { x: 2660, y: 260, w: 140, h: 40 },
            { x: 2760, y: 260, w: 360, h: 40 },
        ]
    },
];

// ===== 상수 =====
const GRAVITY    = 0.55;
const JUMP_FORCE = -13;
const SPEED      = 4.5;
const MAX_FALL   = 16;
const PW = 40, PH = 40;

// ===== 상태 =====
let selectedEmoji = null;
let currentLevel  = 0;
let platforms     = [];   // 현재 레벨 플랫폼 복사본 (dir 포함)
let coins         = [];
let totalCoins    = 0;
let passes        = 0;
let floats        = [];
let bgStars       = [];
let bgTime        = 0;
let player        = {};
let cameraX       = 0;
let keys          = { left: false, right: false, jump: false };
let jumpPressed   = false;
let rafId         = null;

// ===== 캔버스 =====
const canvas = document.getElementById('game-canvas');
const ctx    = canvas.getContext('2d');

// ===== 선택 화면 배경 캔버스 =====
const selectBg  = document.getElementById('select-bg');
const selectCtx = selectBg.getContext('2d');
let selectTime  = 0;

const HEART_COLORS = ['#c084fc','#a855f7','#ddd6fe','#e9d5ff','#d8b4fe'];
const SELECT_HEARTS = Array.from({ length: 18 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: 7 + Math.random() * 14,
    speed: 0.35 + Math.random() * 0.45,
    sway: Math.random() * Math.PI * 2,
    swayAmp: 20 + Math.random() * 30,
    color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
    alpha: 0.25 + Math.random() * 0.35
}));

function resizeSelectBg() {
    selectBg.width  = window.innerWidth;
    selectBg.height = window.innerHeight;
}

function drawSelectBackground() {
    const W = selectBg.width, H = selectBg.height;

    // 연보라 배경
    const g = selectCtx.createLinearGradient(0, 0, 0, H);
    g.addColorStop(0, '#ede9ff'); g.addColorStop(1, '#ddd6fe');
    selectCtx.fillStyle = g;
    selectCtx.fillRect(0, 0, W, H);

    // 진보라 격자
    selectCtx.strokeStyle = 'rgba(109, 40, 217, 0.18)';
    selectCtx.lineWidth = 1;
    for (let x = 0; x <= W; x += 44) {
        selectCtx.beginPath(); selectCtx.moveTo(x, 0); selectCtx.lineTo(x, H); selectCtx.stroke();
    }
    for (let y = 0; y <= H; y += 44) {
        selectCtx.beginPath(); selectCtx.moveTo(0, y); selectCtx.lineTo(W, y); selectCtx.stroke();
    }

    // 떠오르는 하트
    SELECT_HEARTS.forEach(h => {
        h.y     -= h.speed;
        h.sway  += 0.018;
        const hx = h.x + Math.sin(h.sway) * h.swayAmp;
        if (h.y < -40) { h.y = H + 40; h.x = Math.random() * W; }

        selectCtx.save();
        selectCtx.globalAlpha = h.alpha;
        selectCtx.fillStyle   = h.color;
        drawHeartPath(selectCtx, hx, h.y, h.r);
        selectCtx.fill();
        selectCtx.restore();
    });

    selectTime++;
    requestAnimationFrame(drawSelectBackground);
}

function drawHeartPath(c, x, y, r) {
    c.beginPath();
    c.moveTo(x, y + r * 1.2);
    c.bezierCurveTo(x - r*1.3, y + r*0.3, x - r*1.4, y - r*1.0, x, y - r*0.3);
    c.bezierCurveTo(x + r*1.4, y - r*1.0, x + r*1.3, y + r*0.3, x, y + r*1.2);
    c.closePath();
}

resizeSelectBg();
drawSelectBackground();
window.addEventListener('resize', resizeSelectBg);

function resizeCanvas() {
    const wrap = canvas.parentElement;
    const maxW = Math.min(wrap.clientWidth - 10, 800);
    canvas.width  = 800;
    canvas.height = 450;
    canvas.style.width  = maxW + 'px';
    canvas.style.height = (450 * maxW / 800) + 'px';
}

// ===== 이모지 선택 화면 =====
const grid = document.getElementById('emoji-grid');
EMOJIS.forEach(e => {
    const btn = document.createElement('button');
    btn.className = 'emoji-btn';
    btn.textContent = e;
    btn.addEventListener('click', () => {
        document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedEmoji = e;
        document.getElementById('preview-emoji').textContent = e;
        document.getElementById('start-btn').disabled = false;
    });
    grid.appendChild(btn);
});

document.getElementById('start-btn').addEventListener('click', () => {
    currentLevel = 0;
    showScreen('game-screen');
    startLevel(currentLevel);
});

// ===== 코인 생성 =====
function generateCoins(plats) {
    coins = [];
    plats.forEach(p => {
        if (p.mv) return; // 이동 플랫폼엔 코인 없음
        const count = Math.floor(Math.random() * 4); // 0~3개
        for (let i = 0; i < count; i++) {
            coins.push({
                x: p.x + (p.w / (count + 1)) * (i + 1),
                y: p.y - 30,
                collected: false,
                anim: Math.random() * Math.PI * 2 // 둥실둥실 오프셋
            });
        }
    });
}

// ===== 레벨 시작 =====
function startLevel(idx) {
    const lv = LEVEL_DATA[idx];

    // 플랫폼 deep copy (이동 플랫폼 원위치 + dir 초기화)
    platforms = lv.platforms.map(p => {
        const c = { ...p };
        if (c.mv) c.mv = { ...p.mv, dir: 1 };
        return c;
    });

    generateCoins(platforms);
    floats  = [];
    bgTime  = 0;
    if (idx === 2) { // 우주 레벨 별 생성
        bgStars = Array.from({ length: 120 }, () => ({
            x: Math.random() * 800, y: Math.random() * 350,
            r: Math.random() * 1.5 + 0.3, phase: Math.random() * Math.PI * 2
        }));
    }

    // 플레이어 초기화
    player = { x: lv.startX, y: lv.startY, vx: 0, vy: 0, onGround: false, jumps: 2, coyote: 0, jBuf: 0 };
    cameraX = 0;

    document.getElementById('level-label').textContent = lv.name;
    document.getElementById('hud-emoji').textContent   = selectedEmoji;
    document.getElementById('coin-count').textContent  = totalCoins;

    resizeCanvas();
    if (rafId) cancelAnimationFrame(rafId);

    // 레벨 이름 2초 표시 후 게임 시작
    const intro     = document.getElementById('level-intro');
    const introText = document.getElementById('level-intro-text');
    introText.textContent = lv.name;
    intro.classList.remove('hidden');
    // 애니메이션 재시작을 위해 reflow
    void intro.offsetWidth;
    intro.style.animation = 'none';
    void intro.offsetWidth;
    intro.style.animation = '';

    // 인트로 동안 한 프레임만 렌더 (정지 화면)
    render();

    setTimeout(() => {
        intro.classList.add('hidden');
        loop();
    }, 2000);
}

// ===== 게임 루프 =====
function loop() {
    update();
    render();
    rafId = requestAnimationFrame(loop);
}

// ===== 업데이트 =====
function update() {
    const lv = LEVEL_DATA[currentLevel];

    // 이동 플랫폼 (오버슈트 방지 - 범위 초과 시 클램프)
    platforms.forEach(p => {
        if (!p.mv) return;
        if (p.mv.axis === 'x') {
            p.x += p.mv.spd * p.mv.dir;
            if (p.x <= p.mv.min) { p.x = p.mv.min; p.mv.dir = 1; }
            else if (p.x >= p.mv.max) { p.x = p.mv.max; p.mv.dir = -1; }
        } else {
            p.y += p.mv.spd * p.mv.dir;
            if (p.y <= p.mv.min) { p.y = p.mv.min; p.mv.dir = 1; }
            else if (p.y >= p.mv.max) { p.y = p.mv.max; p.mv.dir = -1; }
        }
    });

    // 점프 버퍼
    if (jumpPressed) { player.jBuf = 8; jumpPressed = false; }
    if (player.jBuf > 0) player.jBuf--;

    // 점프 실행
    if (player.jBuf > 0 && (player.coyote > 0 || player.jumps > 0)) {
        player.vy = JUMP_FORCE;
        player.jumps = Math.max(0, player.jumps - 1);
        player.jBuf   = 0;
        player.coyote = 0;
    }

    // 수평 이동
    if (keys.left)       player.vx = -SPEED;
    else if (keys.right) player.vx =  SPEED;
    else                 player.vx =  0;

    // 중력
    player.vy = Math.min(player.vy + GRAVITY, MAX_FALL);

    // X 이동 + 벽 충돌
    player.x += player.vx;
    player.x = Math.max(0, Math.min(player.x, lv.worldWidth - PW));

    platforms.forEach(p => {
        if (overlapX(player, p) && overlapY(player, p)) {
            if (player.vx > 0) player.x = p.x - PW;
            else if (player.vx < 0) player.x = p.x + p.w;
        }
    });

    // Y 이동 + 플랫폼 착지
    player.y += player.vy;
    player.onGround = false;

    platforms.forEach(p => {
        if (!overlapX(player, p)) return;
        // 위에서 착지
        if (player.vy >= 0 && player.y + PH > p.y && player.y + PH < p.y + p.h + 10 && player.y < p.y) {
            player.y        = p.y - PH;
            player.vy       = 0;
            player.onGround = true;
            // 이동 플랫폼이면 같이 이동
            if (p.mv) {
                if (p.mv.axis === 'x') player.x += p.mv.spd * p.mv.dir;
                else                   player.y += p.mv.spd * p.mv.dir;
            }
        }
        // 아래서 머리 부딪힘
        if (player.vy < 0 && player.y < p.y + p.h && player.y > p.y) {
            player.y  = p.y + p.h;
            player.vy = 0;
        }
    });

    // 코요테 타임
    if (player.onGround) { player.coyote = 8; player.jumps = 2; }
    else player.coyote = Math.max(0, player.coyote - 1);

    // 코인 수집
    coins.forEach(c => {
        if (c.collected) return;
        if (player.x < c.x + 12 && player.x + PW > c.x - 12 &&
            player.y < c.y + 12 && player.y + PH > c.y - 12) {
            c.collected = true;
            totalCoins++;
            floats.push({ x: c.x, y: c.y, life: 40 });
            const el = document.getElementById('coin-count');
            el.textContent = totalCoins;
            el.parentElement.classList.remove('pop');
            void el.parentElement.offsetWidth; // reflow
            el.parentElement.classList.add('pop');
            setTimeout(() => el.parentElement.classList.remove('pop'), 150);
        }
    });

    // 낙사
    if (player.y > 500) {
        player.x = lv.startX; player.y = lv.startY;
        player.vx = 0; player.vy = 0;
        player.jumps = 2;
    }

    // 골 도달
    if (player.x + PW > lv.goalX - 30 && player.x < lv.goalX + 30 &&
        player.y + PH > lv.goalY - 60 && player.y < lv.goalY + 10) {
        cancelAnimationFrame(rafId);
        rafId = null;
        if (currentLevel < LEVEL_DATA.length - 1) {
            showClear();
        } else {
            showComplete();
        }
    }

    // 카메라
    cameraX = Math.max(0, Math.min(player.x - 300, lv.worldWidth - 800));
    bgTime++;
}

function overlapX(p, pl) {
    return p.x < pl.x + pl.w && p.x + PW > pl.x;
}
function overlapY(p, pl) {
    return p.y < pl.y + pl.h && p.y + PH > pl.y;
}

// ===== 렌더링 =====
function render() {
    const lv = LEVEL_DATA[currentLevel];

    drawBackground(currentLevel);

    ctx.save();
    ctx.translate(-cameraX, 0);

    // 플랫폼
    platforms.forEach(p => {
        ctx.fillStyle = lv.platformColor;
        roundRect(ctx, p.x, p.y + 6, p.w, p.h - 6, 4);
        ctx.fill();
        ctx.fillStyle = lv.platformTop;
        roundRect(ctx, p.x, p.y, p.w, 10, 4);
        ctx.fill();
    });

    // 골 (깃발)
    drawGoal(lv);

    // 코인
    coins.forEach(c => {
        if (c.collected) return;
        c.anim += 0.06;
        const cy = c.y + Math.sin(c.anim) * 4;
        const r = 10;

        // 외곽 광채
        const glow = ctx.createRadialGradient(c.x, cy, 2, c.x, cy, r + 6);
        glow.addColorStop(0, 'rgba(255,230,50,0.5)');
        glow.addColorStop(1, 'rgba(255,230,50,0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(c.x, cy, r + 6, 0, Math.PI * 2);
        ctx.fill();

        // 코인 몸통
        const grad = ctx.createRadialGradient(c.x - 3, cy - 3, 1, c.x, cy, r);
        grad.addColorStop(0, '#fff176');
        grad.addColorStop(0.4, '#ffd700');
        grad.addColorStop(1, '#f59e00');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(c.x, cy, r, 0, Math.PI * 2);
        ctx.fill();

        // 코인 테두리
        ctx.strokeStyle = '#e6a800';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // $ 글자
        ctx.fillStyle = '#a86000';
        ctx.font = 'bold 11px Arial';
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('C', c.x, cy);
    });

    // 플로팅 텍스트 (+1)
    floats.forEach((f, i) => {
        const alpha = f.life / 40;
        ctx.globalAlpha = alpha;
        ctx.font = 'bold 18px Gaegu, cursive';
        ctx.fillStyle = '#ffd700';
        ctx.textAlign    = 'center';
        ctx.textBaseline = 'bottom';
        ctx.fillText('+1', f.x + 10, f.y - (40 - f.life) * 0.8);
        ctx.globalAlpha = 1;
        f.life--;
    });
    floats = floats.filter(f => f.life > 0);

    // 플레이어
    ctx.font = `${PH}px serif`;
    ctx.textAlign    = 'center';
    ctx.textBaseline = 'bottom';
    ctx.fillText(selectedEmoji, player.x + PW / 2, player.y + PH);

    ctx.restore();
}

function drawGoal(lv) {
    const gx = lv.goalX, gy = lv.goalY;
    // 발광 효과
    const glow = ctx.createRadialGradient(gx, gy, 5, gx, gy, 40);
    glow.addColorStop(0, 'rgba(255,215,0,0.6)');
    glow.addColorStop(1, 'rgba(255,215,0,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(gx - 40, gy - 40, 80, 80);

    // 깃대
    ctx.strokeStyle = '#eee';
    ctx.lineWidth   = 3;
    ctx.beginPath();
    ctx.moveTo(gx, gy);
    ctx.lineTo(gx, gy - 60);
    ctx.stroke();

    // 깃발 이모지
    ctx.font = '32px serif';
    ctx.textAlign    = 'left';
    ctx.textBaseline = 'bottom';
    ctx.fillText('🚩', gx, gy - 20);
}

// ===== 배경 드로잉 =====
function drawBackground(idx) {
    const cx = cameraX;
    switch (idx) {
        case 0: drawBgSky(cx);    break;
        case 1: drawBgOcean(cx);  break;
        case 2: drawBgSpace(cx);  break;
        case 3: drawBgPink(cx);   break;
        case 4: drawBgBW(cx);     break;
        case 5: drawBgPalace(cx); break;
        case 6: drawBgThrone(cx); break;
    }
}

function drawBgSky(cx) {
    const g = ctx.createLinearGradient(0, 0, 0, 450);
    g.addColorStop(0, '#87CEEB'); g.addColorStop(1, '#b0e0ff');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 800, 450);
    ctx.fillStyle = 'rgba(255,255,255,0.7)';
    [[100,60],[300,40],[550,80],[720,50]].forEach(([x,y]) => {
        drawCloud(((x - cx * 0.3) % 820 + 820) % 820, y);
    });
}

function drawBgOcean(cx) {
    // 하늘
    const sky = ctx.createLinearGradient(0, 0, 0, 240);
    sky.addColorStop(0, '#ADE8F4'); sky.addColorStop(1, '#90E0EF');
    ctx.fillStyle = sky; ctx.fillRect(0, 0, 800, 240);
    // 바다
    const sea = ctx.createLinearGradient(0, 240, 0, 450);
    sea.addColorStop(0, '#0096C7'); sea.addColorStop(1, '#03045E');
    ctx.fillStyle = sea; ctx.fillRect(0, 240, 800, 210);
    // 태양
    const sx = ((600 - cx * 0.04) % 1400 + 1400) % 1400;
    if (sx < 800) {
        const sg = ctx.createRadialGradient(sx, 70, 5, sx, 70, 55);
        sg.addColorStop(0, 'rgba(255,220,50,0.7)'); sg.addColorStop(1, 'rgba(255,220,50,0)');
        ctx.fillStyle = sg; ctx.fillRect(sx-55, 15, 110, 110);
        ctx.fillStyle = '#FFD700';
        ctx.beginPath(); ctx.arc(sx, 70, 24, 0, Math.PI*2); ctx.fill();
    }
    // 파도
    ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
        const wy = 248 + i * 22;
        ctx.beginPath();
        for (let x = 0; x <= 800; x += 4) {
            const py = wy + Math.sin((x + bgTime * 1.5 + i * 50) * 0.04) * 4;
            x === 0 ? ctx.moveTo(x, py) : ctx.lineTo(x, py);
        }
        ctx.stroke();
    }
    // 갈매기
    ctx.strokeStyle = 'rgba(40,40,70,0.5)'; ctx.lineWidth = 1.5;
    [[130,55],[260,40],[430,65]].forEach(([bx,by]) => {
        const rx = ((bx - cx * 0.07) % 820 + 820) % 820;
        ctx.beginPath();
        ctx.moveTo(rx-8,by); ctx.quadraticCurveTo(rx-4,by-5,rx,by);
        ctx.quadraticCurveTo(rx+4,by-5,rx+8,by); ctx.stroke();
    });
    // 구름
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    [[70,35],[250,22],[480,48],[680,28]].forEach(([x,y]) => {
        drawCloud(((x - cx * 0.15) % 820 + 820) % 820, y);
    });
}

function drawBgSpace(cx) {
    const g = ctx.createLinearGradient(0, 0, 0, 450);
    g.addColorStop(0, '#04001A'); g.addColorStop(1, '#150050');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 800, 450);
    // 성운 glow
    const nx = ((250 - cx * 0.02) % 800 + 800) % 800;
    const ng = ctx.createRadialGradient(nx, 180, 10, nx, 180, 200);
    ng.addColorStop(0, 'rgba(120,40,200,0.18)');
    ng.addColorStop(0.5, 'rgba(60,0,120,0.1)');
    ng.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = ng; ctx.fillRect(0, 0, 800, 450);
    // 별
    bgStars.forEach(s => {
        const brightness = 0.4 + 0.6 * Math.sin(bgTime * 0.03 + s.phase);
        const rx = ((s.x - cx * 0.015) % 800 + 800) % 800;
        ctx.fillStyle = `rgba(255,255,255,${brightness})`;
        ctx.beginPath(); ctx.arc(rx, s.y, s.r, 0, Math.PI*2); ctx.fill();
    });
    // 행성
    const px = ((500 - cx * 0.04) % 1200 + 1200) % 1200;
    if (px < 800) {
        ctx.fillStyle = '#3A7BD5';
        ctx.beginPath(); ctx.arc(px, 100, 44, 0, Math.PI*2); ctx.fill();
        ctx.fillStyle = 'rgba(0,0,0,0.25)';
        ctx.beginPath(); ctx.arc(px+12, 100, 44, 0, Math.PI*2); ctx.fill();
        ctx.strokeStyle = 'rgba(200,180,80,0.55)'; ctx.lineWidth = 4;
        ctx.beginPath(); ctx.ellipse(px, 106, 66, 13, -0.2, 0, Math.PI*2); ctx.stroke();
    }
}

function drawBgPink(cx) {
    const g = ctx.createLinearGradient(0, 0, 0, 450);
    g.addColorStop(0, '#FFB7C5'); g.addColorStop(0.5, '#E8A0BF'); g.addColorStop(1, '#C77DFF');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 800, 450);
    // 구름
    ctx.fillStyle = 'rgba(255,210,225,0.75)';
    [[60,45],[210,28],[400,55],[610,35],[760,50]].forEach(([x,y]) => {
        drawCloud(((x - cx * 0.12) % 820 + 820) % 820, y);
    });
    // 반짝이
    [[150,100],[320,140],[480,85],[630,120],[90,200],[710,175]].forEach(([sx,sy], i) => {
        const rx = ((sx - cx * 0.08) % 800 + 800) % 800;
        const ry = sy + Math.sin(bgTime * 0.04 + i) * 8;
        ctx.globalAlpha = 0.4 + 0.3 * Math.sin(bgTime * 0.05 + i * 1.2);
        ctx.font = '18px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'bottom';
        ctx.fillStyle = '#fff'; ctx.fillText('✨', rx, ry);
    });
    // 하트
    [[220,75],[460,115],[660,85]].forEach(([hx,hy], i) => {
        const rx = ((hx - cx * 0.06) % 800 + 800) % 800;
        const ry = hy + Math.sin(bgTime * 0.03 + i * 2) * 10;
        ctx.globalAlpha = 0.3 + 0.2 * Math.sin(bgTime * 0.04 + i);
        ctx.fillText('💕', rx, ry);
    });
    ctx.globalAlpha = 1;
}

function drawBgBW(cx) {
    const g = ctx.createLinearGradient(0, 0, 0, 450);
    g.addColorStop(0, '#F8F8F8'); g.addColorStop(1, '#DCDCDC');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 800, 450);
    // 격자
    ctx.strokeStyle = 'rgba(0,0,0,0.05)'; ctx.lineWidth = 1;
    for (let x = 0; x <= 800; x += 40) {
        const rx = ((x - cx * 0.1) % 800 + 800) % 800;
        ctx.beginPath(); ctx.moveTo(rx,0); ctx.lineTo(rx,450); ctx.stroke();
    }
    for (let y = 0; y <= 450; y += 40) {
        ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(800,y); ctx.stroke();
    }
    // 아이소메트릭 큐브
    [[100,320],[260,300],[440,330],[620,305],[740,318]].forEach(([bx,by]) => {
        const rx = ((bx - cx * 0.15) % 900 + 900) % 900;
        if (rx > -60 && rx < 860) drawIsoCube(rx, by, 28);
    });
}

function drawIsoCube(x, y, s) {
    const h = s * 0.6;
    ctx.fillStyle = 'rgba(30,30,30,0.12)';
    ctx.beginPath(); ctx.moveTo(x,y-h); ctx.lineTo(x+s,y-h*0.5); ctx.lineTo(x,y); ctx.lineTo(x-s,y-h*0.5); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.08)';
    ctx.beginPath(); ctx.moveTo(x-s,y-h*0.5); ctx.lineTo(x,y); ctx.lineTo(x,y+h); ctx.lineTo(x-s,y+h*0.5); ctx.closePath(); ctx.fill();
    ctx.fillStyle = 'rgba(0,0,0,0.05)';
    ctx.beginPath(); ctx.moveTo(x,y); ctx.lineTo(x+s,y-h*0.5); ctx.lineTo(x+s,y+h*0.5); ctx.lineTo(x,y+h); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(0,0,0,0.18)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(x,y-h); ctx.lineTo(x+s,y-h*0.5); ctx.lineTo(x,y); ctx.lineTo(x-s,y-h*0.5); ctx.closePath(); ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x,y); ctx.lineTo(x,y+h);
    ctx.moveTo(x-s,y-h*0.5); ctx.lineTo(x-s,y+h*0.5);
    ctx.moveTo(x+s,y-h*0.5); ctx.lineTo(x+s,y+h*0.5);
    ctx.stroke();
}

function drawBgPalace(cx) {
    const g = ctx.createLinearGradient(0, 0, 0, 450);
    g.addColorStop(0, '#12003A'); g.addColorStop(0.6, '#2D1B69'); g.addColorStop(1, '#4A1480');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 800, 450);
    // 금빛 상단 테두리
    ctx.fillStyle = 'rgba(255,215,0,0.12)'; ctx.fillRect(0, 0, 800, 45);
    ctx.fillStyle = '#FFD700'; ctx.fillRect(0, 43, 800, 3); ctx.fillRect(0, 48, 800, 1);
    // 아치형 창문
    [70,270,470,680].forEach(bx => {
        const rx = ((bx - cx * 0.07) % 900 + 900) % 900;
        if (rx > -80 && rx < 880) drawPalaceWindow(rx, 55, 58, 130);
    });
    // 기둥
    [0,160,320,480,640,800].forEach(bx => {
        const rx = ((bx - cx * 0.1) % 960 + 960) % 960;
        if (rx > -30 && rx < 830) drawPillar(rx, 450, 22, 210);
    });
    // 금빛 바닥 반사
    const fg = ctx.createLinearGradient(0, 410, 0, 450);
    fg.addColorStop(0, 'rgba(255,215,0,0.25)'); fg.addColorStop(1, 'rgba(255,215,0,0)');
    ctx.fillStyle = fg; ctx.fillRect(0, 410, 800, 40);
}

function drawPalaceWindow(x, y, w, h) {
    ctx.fillStyle = 'rgba(255,215,0,0.07)';
    ctx.fillRect(x - w/2, y, w, h - w/2);
    ctx.beginPath(); ctx.arc(x, y, w/2, Math.PI, 0); ctx.fill();
    ctx.strokeStyle = 'rgba(255,215,0,0.45)'; ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(x - w/2, y + h - w/2); ctx.lineTo(x - w/2, y);
    ctx.arc(x, y, w/2, Math.PI, 0);
    ctx.lineTo(x + w/2, y + h - w/2); ctx.stroke();
}

function drawPillar(x, bottomY, w, h) {
    const pg = ctx.createLinearGradient(x - w/2, 0, x + w/2, 0);
    pg.addColorStop(0, 'rgba(160,130,40,0.25)');
    pg.addColorStop(0.4, 'rgba(255,215,0,0.35)');
    pg.addColorStop(1, 'rgba(130,100,20,0.18)');
    ctx.fillStyle = pg; ctx.fillRect(x - w/2, bottomY - h, w, h);
    ctx.fillStyle = 'rgba(255,215,0,0.45)';
    ctx.fillRect(x - w/2 - 5, bottomY - h, w+10, 10);
    ctx.fillRect(x - w/2 - 5, bottomY - 10, w+10, 10);
}

function drawBgThrone(cx) {
    const g = ctx.createLinearGradient(0, 0, 0, 450);
    g.addColorStop(0, '#080000'); g.addColorStop(0.5, '#3A0000'); g.addColorStop(1, '#150000');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 800, 450);
    // 붉은 카펫
    const cg = ctx.createLinearGradient(280, 0, 520, 0);
    cg.addColorStop(0, 'rgba(100,0,0,0)');
    cg.addColorStop(0.3, 'rgba(160,0,0,0.3)');
    cg.addColorStop(0.7, 'rgba(160,0,0,0.3)');
    cg.addColorStop(1, 'rgba(100,0,0,0)');
    ctx.fillStyle = cg; ctx.fillRect(0, 350, 800, 100);
    // 황금 기둥
    [60,740].forEach(bx => { const rx = ((bx - cx*0.1)%800+800)%800; drawPillar(rx, 450, 20, 310); });
    [180,620].forEach(bx => { const rx = ((bx - cx*0.1)%800+800)%800; drawPillar(rx, 450, 16, 260); });
    // 천장 황금 빛
    const ceilG = ctx.createRadialGradient(400, 0, 10, 400, 0, 220);
    ceilG.addColorStop(0, 'rgba(255,215,0,0.2)'); ceilG.addColorStop(1, 'rgba(255,60,0,0)');
    ctx.fillStyle = ceilG; ctx.fillRect(0, 0, 800, 220);
    // 횃불
    [45,755].forEach(bx => {
        const rx = ((bx - cx*0.07)%800+800)%800;
        ctx.fillStyle = 'rgba(90,55,15,0.85)'; ctx.fillRect(rx-4, 155, 8, 28);
        const fl = ctx.createRadialGradient(rx, 148, 2, rx, 148, 22);
        fl.addColorStop(0, 'rgba(255,210,0,0.85)');
        fl.addColorStop(0.4, 'rgba(255,80,0,0.5)');
        fl.addColorStop(1, 'rgba(255,0,0,0)');
        ctx.fillStyle = fl; ctx.fillRect(rx-22, 126, 44, 44);
        ctx.fillStyle = `rgba(255,220,0,${0.55+0.45*Math.sin(bgTime*0.14+bx)})`;
        ctx.beginPath(); ctx.arc(rx, 148 + Math.sin(bgTime*0.1+bx)*2, 5, 0, Math.PI*2); ctx.fill();
    });
    // 왕홀 배너
    [150,650].forEach(bx => {
        const rx = ((bx - cx*0.1)%800+800)%800;
        ctx.fillStyle = 'rgba(140,0,0,0.6)'; ctx.fillRect(rx-14, 0, 28, 115);
        ctx.fillStyle = 'rgba(255,215,0,0.75)';
        ctx.beginPath(); ctx.moveTo(rx-14,115); ctx.lineTo(rx,130); ctx.lineTo(rx+14,115); ctx.closePath(); ctx.fill();
        ctx.font = '18px serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(255,215,0,0.9)'; ctx.fillText('👑', rx, 57);
    });
}

function drawCloud(cx, cy) {
    ctx.beginPath();
    ctx.arc(cx,      cy,      20, 0, Math.PI * 2);
    ctx.arc(cx + 25, cy - 8,  26, 0, Math.PI * 2);
    ctx.arc(cx + 55, cy,      20, 0, Math.PI * 2);
    ctx.fill();
}

function roundRect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y,     x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x,     y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y,         x + r, y);
    ctx.closePath();
}

// ===== 화면 전환 =====
function showScreen(id) {
    ['select-screen','game-screen','clear-screen','complete-screen']
        .forEach(s => document.getElementById(s).classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function showClear() {
    document.getElementById('clear-emoji').textContent     = selectedEmoji;
    document.getElementById('clear-title').textContent     = LEVEL_DATA[currentLevel].name + ' 클리어!';
    document.getElementById('clear-msg').textContent       = '대단해요! 다음 레벨로 가볼까요?';
    document.getElementById('clear-coin-count').textContent = totalCoins;
    updatePassShop();
    document.getElementById('clear-screen').classList.remove('hidden');
}

function updatePassShop() {
    const btn    = document.getElementById('buy-pass-btn');
    const status = document.getElementById('pass-status');

    if (passes > 0) {
        btn.disabled      = true;
        status.textContent = `🎫 패스권 ${passes}장 보유 중 — 다음 레벨에서 자동 적용돼요!`;
        status.style.color = '#4fc3f7';
    } else if (totalCoins >= 30) {
        btn.disabled      = false;
        status.textContent = '';
    } else {
        btn.disabled      = true;
        status.textContent = `코인이 ${30 - totalCoins}개 더 필요해요 😢`;
        status.style.color = 'rgba(255,255,255,0.5)';
    }
}

function showComplete() {
    document.getElementById('complete-emoji').textContent = selectedEmoji;
    document.getElementById('complete-screen').classList.remove('hidden');
}

// ===== 버튼 이벤트 =====
document.getElementById('buy-pass-btn').addEventListener('click', () => {
    if (totalCoins < 30 || passes > 0) return;
    totalCoins -= 30;
    passes++;
    document.getElementById('clear-coin-count').textContent = totalCoins;
    document.getElementById('coin-count').textContent       = totalCoins;
    updatePassShop();
});

document.getElementById('next-btn').addEventListener('click', () => {
    document.getElementById('clear-screen').classList.add('hidden');

    if (passes > 0) {
        passes--;
        // 건너뛰기 안내 메시지 1.2초 표시 후 이동
        const skipOverlay = document.createElement('div');
        skipOverlay.style.cssText = `
            position:fixed; top:0; left:0; width:100%; height:100%;
            background:rgba(0,0,0,0.75); display:flex; justify-content:center;
            align-items:center; z-index:200;
        `;
        skipOverlay.innerHTML = `
            <div style="font-family:'Jua',cursive; font-size:2em; color:#ffd700;
                        text-align:center; text-shadow:0 0 20px rgba(255,215,0,0.8);">
                🎫 한 레벨을 건너뛰겠습니다!
            </div>`;
        document.body.appendChild(skipOverlay);

        setTimeout(() => {
            document.body.removeChild(skipOverlay);
            const next = currentLevel + 2;
            if (next >= LEVEL_DATA.length) {
                showComplete();
            } else {
                currentLevel = next;
                startLevel(currentLevel);
            }
        }, 1200);

    } else {
        const next = currentLevel + 1;
        if (next >= LEVEL_DATA.length) {
            showComplete();
        } else {
            currentLevel = next;
            startLevel(currentLevel);
        }
    }
});

document.getElementById('replay-btn').addEventListener('click', () => {
    document.getElementById('complete-screen').classList.add('hidden');
    totalCoins    = 0;
    passes        = 0;
    currentLevel  = 0;
    selectedEmoji = null;
    showScreen('select-screen');
    document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('preview-emoji').textContent = '?';
    document.getElementById('start-btn').disabled = true;
});

document.getElementById('restart-btn').addEventListener('click', () => {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = null;
    startLevel(currentLevel);
});

// ===== 키보드 입력 =====
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft'  || e.key === 'a') keys.left  = true;
    if (e.key === 'ArrowRight' || e.key === 'd') keys.right = true;
    if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === ' ') && !e.repeat) {
        jumpPressed = true;
        e.preventDefault();
    }
});
document.addEventListener('keyup', e => {
    if (e.key === 'ArrowLeft'  || e.key === 'a') keys.left  = false;
    if (e.key === 'ArrowRight' || e.key === 'd') keys.right = false;
});

// ===== 모바일 버튼 =====
function mobileBtn(id, onDown, onUp) {
    const btn = document.getElementById(id);
    btn.addEventListener('touchstart', e => { e.preventDefault(); onDown(); }, { passive: false });
    btn.addEventListener('touchend',   e => { e.preventDefault(); onUp();   }, { passive: false });
    btn.addEventListener('mousedown',  onDown);
    btn.addEventListener('mouseup',    onUp);
    btn.addEventListener('mouseleave', onUp);
}
mobileBtn('btn-left',  () => keys.left  = true,  () => keys.left  = false);
mobileBtn('btn-right', () => keys.right = true,  () => keys.right = false);
mobileBtn('btn-jump',  () => jumpPressed = true,  () => {});

// ===== 리사이즈 =====
window.addEventListener('resize', resizeCanvas);
