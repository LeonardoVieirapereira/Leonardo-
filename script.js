// Dados Estruturados das 10 animações da Rede PAN
const animationsData = [
    {
        id: 1,
        title: "O Conceito da Bolha Pessoal (Alcance)",
        number: "Animação 1",
        description: "Mostre como a rede PAN é focada estritamente no espaço pessoal de um indivíduo. A 'bolha' representa este limite geográfico natural, que raramente passa dos 10 metros.",
        render: () => `
            <div class="relative flex items-center justify-center w-full h-full">
                <div id="range-bubble" class="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-blue-400/50 bg-blue-500/10 flex items-center justify-center transition-all duration-1000 scale-0 opacity-0">
                    <span class="absolute top-2 text-xs font-bold text-blue-300 tracking-wider">RAIO DE ATÉ 10 METROS</span>
                    <div class="absolute inset-0 rounded-full border-2 border-dashed border-blue-500/20 pulse-circle"></div>
                </div>
                <div class="relative z-10 flex flex-col items-center">
                    <div class="bg-blue-600 p-4 rounded-full shadow-lg float-element">
                        <i data-lucide="user" class="w-10 h-10 text-white"></i>
                    </div>
                    <span class="text-xs mt-2 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded text-slate-300 font-medium">Usuário</span>
                </div>
            </div>
        `,
        init: () => {
            setTimeout(() => {
                const bubble = document.getElementById('range-bubble');
                if (bubble) bubble.classList.add('scale-100', 'opacity-100');
            }, 200);
        }
    },
    {
        id: 2,
        title: "A Conexão dos Dispositivos",
        number: "Animação 2",
        description: "Demonstre a diversidade de periféricos comuns. O smartphone atua como o ponto central conectando-se a fones, relógios inteligentes e computadores próximos de forma simultânea.",
        render: () => `
            <div class="relative flex items-center justify-center w-full h-full max-w-[400px]">
                <div class="relative z-10 bg-slate-900 border-2 border-blue-500 p-3 rounded-2xl shadow-xl">
                    <i data-lucide="smartphone" class="w-8 h-8 text-blue-400"></i>
                </div>
                <div class="absolute" style="transform: translate(-100px, -80px);">
                    <div class="device-node bg-slate-800 p-2.5 rounded-xl border border-slate-700 shadow opacity-0 scale-50 transition-all duration-500">
                        <i data-lucide="headphones" class="w-5 h-5 text-purple-400"></i>
                    </div>
                </div>
                <div class="absolute" style="transform: translate(100px, -80px);">
                    <div class="device-node bg-slate-800 p-2.5 rounded-xl border border-slate-700 shadow opacity-0 scale-50 transition-all duration-500">
                        <i data-lucide="watch" class="w-5 h-5 text-green-400"></i>
                    </div>
                </div>
                <svg class="absolute inset-0 w-full h-full pointer-events-none">
                    <line id="line1" x1="50%" y1="50%" x2="25%" y2="35%" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,5" class="opacity-0 transition-opacity duration-700"></line>
                    <line id="line2" x1="50%" y1="50%" x2="75%" y2="35%" stroke="#3b82f6" stroke-width="2" stroke-dasharray="5,5" class="opacity-0 transition-opacity duration-700"></line>
                </svg>
            </div>
        `,
        init: () => {
            setTimeout(() => {
                document.querySelectorAll('.device-node').forEach(node => node.classList.remove('opacity-0', 'scale-50'));
                document.getElementById('line1')?.classList.remove('opacity-0');
                document.getElementById('line2')?.classList.remove('opacity-0');
            }, 200);
        }
    },
    {
        id: 3,
        title: "O Bluetooth em Ação (WPAN)",
        number: "Animação 3",
        description: "O Bluetooth é o principal padrão das Wireless PANs. Explique que ele opera emitindo ondas de rádio de curto alcance e baixa potência de forma constante.",
        render: () => `
            <div class="relative flex items-center justify-center w-full h-full">
                <div class="absolute w-12 h-12 rounded-full border border-blue-500 bg-blue-500/10 wave-effect"></div>
                <div class="absolute w-12 h-12 rounded-full border border-blue-500 bg-blue-500/10 wave-effect" style="animation-delay: 0.7s;"></div>
                <div class="relative z-10 bg-blue-600 p-5 rounded-full shadow-2xl border border-blue-400 float-element">
                    <i data-lucide="bluetooth" class="w-10 h-10 text-white"></i>
                </div>
            </div>
        `,
        init: () => {}
    },
    {
        id: 4,
        title: "A Rede PAN Cabeada (Ligação USB)",
        number: "Animação 4",
        description: "Nem todas as PANs são sem fios. Mostre que uma conexão direta via cabo USB entre um computador e um smartphone cria uma PAN física extremamente segura e rápida.",
        render: () => `
            <div class="relative flex flex-col md:flex-row items-center justify-around w-full max-w-[500px]">
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700"><i data-lucide="laptop" class="w-10 h-10 text-orange-400"></i></div>
                <div class="w-32 h-1 bg-slate-700 relative my-4 md:my-0">
                    <div id="data-packet" class="absolute w-3 h-3 bg-blue-500 rounded-full top-[-4px]" style="left: 0%; transition: left 2s linear infinite;"></div>
                </div>
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700"><i data-lucide="smartphone" class="w-10 h-10 text-blue-400"></i></div>
            </div>
        `,
        init: () => {
            const packet = document.getElementById('data-packet');
            if (packet) {
                setInterval(() => {
                    packet.style.left = packet.style.left === '100%' ? '0%' : '100%';
                }, 2000);
            }
        }
    },
    {
        id: 5,
        title: "Sinal Interrompido (Limite Físico)",
        number: "Animação 5",
                description: "Demonstre a limitação de alcance real. Ao afastar os dispositivos para lá dos 10 metros, a conexão enfraquece gradualmente até se quebrar por completo.",
        render: () => `
            <div class="relative flex items-center justify-between w-full max-w-[450px]">
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700"><i data-lucide="smartphone" class="w-8 h-8 text-blue-400"></i></div>
                <div class="flex-grow mx-4 relative flex items-center justify-center">
                    <div id="signal-line" class="w-full h-1 bg-blue-500 transition-all duration-1000"></div>
                    <div id="break-alert" class="absolute bg-red-500/20 text-red-400 border border-red-500/50 text-xs font-bold px-2 py-0.5 rounded opacity-0 transition-opacity">CONEXÃO PERDIDA</div>
                </div>
                <div id="receiver-device" class="bg-slate-800 p-4 rounded-xl border border-slate-700 transition-transform duration-1000"><i data-lucide="headphones" class="w-8 h-8 text-purple-400"></i></div>
            </div>
        `,
        init: () => {
            setTimeout(() => {
                const rec = document.getElementById('receiver-device');
                const line = document.getElementById('signal-line');
                const alert = document.getElementById('break-alert');
                if(rec && line && alert) {
                    rec.style.transform = 'translateX(50px)';
                    line.style.backgroundColor = '#ef4444';
                    line.style.width = '0%';
                    alert.classList.remove('opacity-0');
                }
            }, 500);
        }
    },
    {
        id: 6,
        title: "Segurança: Emparelhamento (Pairing)",
        number: "Animação 6",
        description: "Explique o processo de autenticação. Para que dois dispositivos PAN se comuniquem, eles precisam trocar chaves criptográficas através de uma confirmação mútua em tela.",
        render: () => `
            <div class="flex flex-col items-center gap-4">
                <div class="flex gap-8 items-center">
                    <div class="bg-slate-800 p-3 rounded-xl border border-slate-700"><i data-lucide="smartphone" class="w-8 h-8 text-blue-400"></i></div>
                    <i data-lucide="shield-check" class="w-8 h-8 text-green-400 float-element"></i>
                    <div class="bg-slate-800 p-3 rounded-xl border border-slate-700"><i data-lucide="watch" class="w-8 h-8 text-green-400"></i></div>
                </div>
                <div class="bg-slate-900 border border-slate-700 px-4 py-2 rounded-lg text-xs font-mono text-green-400 animate-pulse">CÓDIGO DE PAREAMENTO: 482 910</div>
            </div>
        `,
        init: () => {}
    },
    {
        id: 7,
        title: "Interferência de Sinais (2.4 GHz)",
        number: "Animação 7",
        description: "Explique os desafios de espectro. Como muitas tecnologias PAN operam na frequência livre de 2.4 GHz, ondas de Wi-Fi doméstico ou fornos micro-ondas podem causar perda de pacotes de dados.",
        render: () => `
            <div class="relative w-full max-w-[400px] flex items-center justify-between">
                <div class="text-blue-400"><i data-lucide="smartphone" class="w-8 h-8"></i></div>
                <div class="relative flex-grow h-12 flex items-center justify-center">
                    <div class="absolute w-full h-0.5 bg-blue-500/30"></div>
                    <div class="absolute text-red-500 animate-bounce"><i data-lucide="zap" class="w-6 h-6"></i></div>
                </div>
                <div class="text-red-400"><i data-lucide="wifi" class="w-8 h-8"></i></div>
            </div>
        `,
        init: () => {}
    },
    {
        id: 8,
        title: "Baixo Consumo de Energia",
        number: "Animação 8",
        description: "Destaque a eficiência das redes PAN modernas (como o BLE - Bluetooth Low Energy). Elas entram em modo de repouso automático e gastam o mínimo de bateria possível para preservar os dispositivos portáteis.",
        render: () => `
            <div class="flex flex-col items-center gap-3">
                <div class="relative"><i data-lucide="battery-charging" class="w-16 h-16 text-green-400"></i></div>
                <div class="text-xs bg-green-500/10 border border-green-500/30 text-green-400 px-3 py-1 rounded-full font-bold">MODO ULTRA ECO ATIVO</div>
            </div>
        `,
        init: () => {}
    },
    {
        id: 9,
        title: "Tecnologia NFC (Contacto Próximo)",
        number: "Animação 9",
        description: "Aborde o NFC como uma subcategoria PAN de alcance milimétrico. É ideal para pagamentos eletrónicos por aproximação ou validação instantânea de crachás de segurança.",
        render: () => `
            <div class="flex items-center gap-4">
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700 transform translate-x-4 transition-transform duration-500" id="nfc-card"><i data-lucide="credit-card" class="w-10 h-10 text-purple-400"></i></div>
                <div class="bg-slate-800 p-4 rounded-xl border border-slate-700"><i data-lucide="contactless" class="w-10 h-10 text-blue-400"></i></div>
            </div>
        `,
        init: () => {
            setTimeout(() => {
                const card = document.getElementById('nfc-card');
                if (card) card.style.transform = 'translateX(0px)';
            }, 300);
        }
    },
    {
        id: 10,
        title: "Sincronização em Nuvem",
        number: "Animação 10",
        description: "Conclua demonstrando o ecossistema moderno. Uma vez que os dados são coletados dentro da rede PAN, eles costumam ser reenviados automaticamente para servidores em nuvem através da internet do smartphone.",
        render: () => `
            <div class="flex flex-col items-center gap-4">
                <div class="bg-slate-800 p-3 rounded-xl border border-slate-700"><i data-lucide="smartphone" class="w-8 h-8 text-blue-400"></i></div>
                <div class="animate-bounce text-blue-400"><i data-lucide="arrow-up" class="w-6 h-6"></i></div>
                <div class="text-blue-300"><i data-lucide="cloud" class="w-14 h-14"></i></div>
            </div>
        `,
        init: () => {}
    }
];

// Estado global da aplicação
let currentAnimationIndex = 0;

// Elementos de Controle do DOM
const menuContainer = document.getElementById('animation-menu');
const stage = document.getElementById('animation-stage');
const topicNumber = document.getElementById('topic-number');
const topicTitle = document.getElementById('topic-title');
const topicDescription = document.getElementById('topic-description');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const btnReplay = document.getElementById('btn-replay');

// Renderiza o menu lateral dinamicamente
function buildMenu() {
    menuContainer.innerHTML = '';
    animationsData.forEach((anim, idx) => {
        const button = document.createElement('button');
        button.className = `w-full text-left p-2.5 rounded-xl border text-sm transition-all flex items-center gap-2 ${
            idx === currentAnimationIndex 
            ? 'bg-blue-600 border-blue-500 text-white font-semibold shadow-md shadow-blue-600/20' 
            : 'bg-slate-900/40 border-slate-700/50 hover:bg-slate-700/50 text-slate-300'
        }`;
        button.innerHTML = `<span class="opacity-60 text-xs">${anim.id}.</span> ${anim.title}`;
        button.addEventListener('click', () => loadAnimationFrame(idx));
        menuContainer.appendChild(button);
    });
}

// Carrega e ativa a cena selecionada
function loadAnimationFrame(index) {
    currentAnimationIndex = index;
    const data = animationsData[index];

    // Atualiza metadados textuais
    topicNumber.innerText = data.number;
    topicTitle.innerText = data.title;
    topicDescription.innerText = data.description;

    // Atualiza palco e renderiza elementos de ícones
    stage.innerHTML = data.render();
    if(window.lucide) lucide.createIcons();

    // Executa engrenagens de animação específicas
    data.init();

    // Atualiza botões e menu lateral
    buildMenu();
    updateControls();
}

function updateControls() {
    btnPrev.disabled = currentAnimationIndex === 0;
    btnNext.disabled = currentAnimationIndex === animationsData.length - 1;
    btnPrev.style.opacity = btnPrev.disabled ? '0.4' : '1';
    btnNext.style.opacity = btnNext.disabled ? '0.4' : '1';
}

// Event Listeners dos botões inferiores
btnPrev.addEventListener('click', () => {
    if (currentAnimationIndex > 0) loadAnimationFrame(currentAnimationIndex - 1);
});

btnNext.addEventListener('click', () => {
    if (currentAnimationIndex < animationsData.length - 1) loadAnimationFrame(currentAnimationIndex + 1);
});

btnReplay.addEventListener('click', () => loadAnimationFrame(currentAnimationIndex));

// Inicialização Inicial do Sistema
document.addEventListener('DOMContentLoaded', () => {
    loadAnimationFrame(0);
});
                  
