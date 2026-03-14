// ===== 이모지 목록 =====
const EMOJIS = [
    '🐱','🐶','🐸','🐰','🐼',
    '🦊','🐻','🐯','🐨','🦁',
    '🐧','🐮','🐷','🐙','🦄',
    '🤖','👾','🚀','⭐','🌟'
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
        worldWidth: 3800,
        startX: 60, startY: 370,
        goalX: 3700, goalY: 140,
        platforms: [
            { x: 0,    y: 410, w: 180, h: 40 },
            { x: 230,  y: 380, w: 70,  h: 40, mv: { axis:'x', spd:3,   min:230,  max:420  } },
            { x: 500,  y: 350, w: 70,  h: 40, mv: { axis:'y', spd:3,   min:290,  max:390  } },
            { x: 660,  y: 400, w: 70,  h: 40 },
            { x: 810,  y: 340, w: 70,  h: 40, mv: { axis:'x', spd:4,   min:810,  max:1030 } },
            { x: 1110, y: 290, w: 70,  h: 40 },
            { x: 1260, y: 380, w: 70,  h: 40, mv: { axis:'y', spd:3.5, min:300,  max:410  } },
            { x: 1420, y: 320, w: 70,  h: 40, mv: { axis:'x', spd:3,   min:1420, max:1640 } },
            { x: 1720, y: 270, w: 70,  h: 40 },
            { x: 1870, y: 350, w: 70,  h: 40, mv: { axis:'y', spd:4,   min:270,  max:390  } },
            { x: 2030, y: 290, w: 70,  h: 40, mv: { axis:'x', spd:3.5, min:2030, max:2260 } },
            { x: 2340, y: 240, w: 70,  h: 40 },
            { x: 2490, y: 360, w: 70,  h: 40, mv: { axis:'y', spd:4,   min:280,  max:390  } },
            { x: 2650, y: 300, w: 70,  h: 40, mv: { axis:'x', spd:4,   min:2650, max:2880 } },
            { x: 2960, y: 250, w: 70,  h: 40 },
            { x: 3110, y: 200, w: 70,  h: 40, mv: { axis:'y', spd:3.5, min:160,  max:260  } },
            { x: 3270, y: 310, w: 70,  h: 40 },
            { x: 3420, y: 250, w: 70,  h: 40, mv: { axis:'x', spd:4,   min:3420, max:3620 } },
            { x: 3560, y: 190, w: 70,  h: 40 },
            { x: 3610, y: 180, w: 240, h: 40 },
        ]
    },
    {
        name: '레벨 7',
        bg: ['#000000', '#1a0030'],
        cloudColor: 'rgba(255,100,255,0.3)',
        groundColor: '#000',
        platformColor: '#880E4F',
        platformTop: '#F48FB1',
        worldWidth: 4000,
        startX: 60, startY: 370,
        goalX: 3900, goalY: 130,
        platforms: [
            { x: 0,    y: 410, w: 170, h: 40 },
            { x: 220,  y: 370, w: 65,  h: 40, mv: { axis:'x', spd:4,   min:220,  max:430  } },
            { x: 510,  y: 340, w: 65,  h: 40, mv: { axis:'y', spd:3.5, min:280,  max:390  } },
            { x: 670,  y: 410, w: 65,  h: 40 },
            { x: 820,  y: 350, w: 65,  h: 40, mv: { axis:'x', spd:4.5, min:820,  max:1060 } },
            { x: 1140, y: 290, w: 65,  h: 40, mv: { axis:'y', spd:4,   min:230,  max:340  } },
            { x: 1300, y: 380, w: 65,  h: 40, mv: { axis:'x', spd:4,   min:1300, max:1530 } },
            { x: 1620, y: 320, w: 65,  h: 40 },
            { x: 1770, y: 260, w: 65,  h: 40, mv: { axis:'y', spd:4.5, min:200,  max:320  } },
            { x: 1930, y: 380, w: 65,  h: 40, mv: { axis:'x', spd:4,   min:1930, max:2170 } },
            { x: 2250, y: 300, w: 65,  h: 40 },
            { x: 2400, y: 240, w: 65,  h: 40, mv: { axis:'y', spd:4,   min:190,  max:300  } },
            { x: 2560, y: 360, w: 65,  h: 40, mv: { axis:'x', spd:5,   min:2560, max:2800 } },
            { x: 2880, y: 290, w: 65,  h: 40 },
            { x: 3030, y: 230, w: 65,  h: 40, mv: { axis:'y', spd:4.5, min:180,  max:290  } },
            { x: 3190, y: 350, w: 65,  h: 40, mv: { axis:'x', spd:5,   min:3190, max:3430 } },
            { x: 3510, y: 270, w: 65,  h: 40 },
            { x: 3660, y: 210, w: 65,  h: 40, mv: { axis:'y', spd:4,   min:170,  max:270  } },
            { x: 3810, y: 250, w: 65,  h: 40 },
            { x: 3840, y: 170, w: 240, h: 40 },
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
let player        = {};
let cameraX       = 0;
let keys          = { left: false, right: false, jump: false };
let jumpPressed   = false;
let rafId         = null;

// ===== 캔버스 =====
const canvas = document.getElementById('game-canvas');
const ctx    = canvas.getContext('2d');

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

// ===== 레벨 시작 =====
function startLevel(idx) {
    const lv = LEVEL_DATA[idx];

    // 플랫폼 deep copy (이동 플랫폼 원위치 + dir 초기화)
    platforms = lv.platforms.map(p => {
        const c = { ...p };
        if (c.mv) c.mv = { ...p.mv, dir: 1 };
        return c;
    });

    // 플레이어 초기화
    player = { x: lv.startX, y: lv.startY, vx: 0, vy: 0, onGround: false, jumps: 2, coyote: 0, jBuf: 0 };
    cameraX = 0;

    document.getElementById('level-label').textContent = lv.name;
    document.getElementById('hud-emoji').textContent   = selectedEmoji;

    resizeCanvas();
    if (rafId) cancelAnimationFrame(rafId);
    loop();
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

    // 이동 플랫폼
    platforms.forEach(p => {
        if (!p.mv) return;
        if (p.mv.axis === 'x') {
            p.x += p.mv.spd * p.mv.dir;
            if (p.x <= p.mv.min || p.x >= p.mv.max) p.mv.dir *= -1;
        } else {
            p.y += p.mv.spd * p.mv.dir;
            if (p.y <= p.mv.min || p.y >= p.mv.max) p.mv.dir *= -1;
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

    // 배경 그라디언트
    const grad = ctx.createLinearGradient(0, 0, 0, 450);
    grad.addColorStop(0, lv.bg[0]);
    grad.addColorStop(1, lv.bg[1]);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 450);

    // 구름 (장식)
    ctx.fillStyle = lv.cloudColor;
    [[100, 60], [300, 40], [550, 80], [720, 50]].forEach(([cx, cy]) => {
        const rx = ((cx - cameraX * 0.3) % 820 + 820) % 820;
        drawCloud(rx, cy);
    });

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
    document.getElementById('clear-emoji').textContent = selectedEmoji;
    document.getElementById('clear-title').textContent = LEVEL_DATA[currentLevel].name + ' 클리어!';
    document.getElementById('clear-msg').textContent   = '대단해요! 다음 레벨로 가볼까요?';
    document.getElementById('clear-screen').classList.remove('hidden');
}

function showComplete() {
    document.getElementById('complete-emoji').textContent = selectedEmoji;
    document.getElementById('complete-screen').classList.remove('hidden');
}

// ===== 버튼 이벤트 =====
document.getElementById('next-btn').addEventListener('click', () => {
    document.getElementById('clear-screen').classList.add('hidden');
    currentLevel++;
    startLevel(currentLevel);
});

document.getElementById('replay-btn').addEventListener('click', () => {
    document.getElementById('complete-screen').classList.add('hidden');
    showScreen('select-screen');
    document.querySelectorAll('.emoji-btn').forEach(b => b.classList.remove('selected'));
    document.getElementById('preview-emoji').textContent  = '?';
    document.getElementById('start-btn').disabled = true;
    selectedEmoji = null;
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
