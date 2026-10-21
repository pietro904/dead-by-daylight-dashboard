export type Faixa = "S" | "A" | "B" | "C" | "D";

export type Assassino = {
  nome: string;
  original: string;
  poder: string;
  resumo: string;
  faixa: Faixa;
  estilo: string;
};

export type Sobrevivente = {
  nome: string;
  original: string;
  vantagens: string;
  resumo: string;
  faixa: Faixa;
};

export type Mapa = {
  reino: string;
  mapas: string;
  clima: string;
  nota: string;
};

export type Vantagem = {
  nome: string;
  dono: string;
  lado: "assassino" | "sobrevivente";
  resumo: string;
};

export const assassinos: Assassino[] = [
  {
    nome: "Enfermeira",
    original: "The Nurse",
    poder: "Último Suspiro de Spencer",
    resumo: "Pisca através de paredes e anda curta. Dominante em perseguição quando o blink está no tempo certo.",
    faixa: "S",
    estilo: "Perseguição",
  },
  {
    nome: "Flagelo",
    original: "The Blight",
    poder: "Corrupção Pestilenta",
    resumo: "Corridas em ricochete pelo mapa. Mobilidade alta e pressão constante nos geradores.",
    faixa: "S",
    estilo: "Mobilidade",
  },
  {
    nome: "Caipira",
    original: "The Hillbilly",
    poder: "Motosserra",
    resumo: "Sprint de motosserra que atravessa o mapa e derruba no impacto. Curva e mapa decidem a partida.",
    faixa: "S",
    estilo: "Mobilidade",
  },
  {
    nome: "Espírito",
    original: "The Spirit",
    poder: "Assombração Yamaoka",
    resumo: "Fase invisível guiada pelo som. Leitura de passos, gemidos e grama.",
    faixa: "S",
    estilo: "Furtividade",
  },
  {
    nome: "Ghoul",
    original: "The Ghoul",
    poder: "Kagune",
    resumo: "Saltos agressivos e alcance longo. Fecha distância rápido e pune voltas abertas.",
    faixa: "S",
    estilo: "Mobilidade",
  },
  {
    nome: "Mestre",
    original: "The Mastermind",
    poder: "Investida Virulenta",
    resumo: "Wesker avança, agarra e infecciona. Pressão de infecção mais mobilidade no meio do mapa.",
    faixa: "S",
    estilo: "Mobilidade",
  },
  {
    nome: "Caçadora",
    original: "The Huntress",
    poder: "Machadinhas",
    resumo: "Ataque à distância nas janelas e paletes. Mira e estoque de machadinhas definem o ritmo.",
    faixa: "A",
    estilo: "Distância",
  },
  {
    nome: "Artista",
    original: "The Artist",
    poder: "Pássaros do Tormento",
    resumo: "Corvos revelam e ferem à distância. Informação e controle de gerador sem precisar estar perto.",
    faixa: "A",
    estilo: "Informação",
  },
  {
    nome: "Carrasco",
    original: "The Executioner",
    poder: "Rito do Julgamento",
    resumo: "Trilha de tormento e ataque que atravessa paredes. Pune voltas previsíveis.",
    faixa: "A",
    estilo: "Antivolta",
  },
  {
    nome: "Lich",
    original: "The Lich",
    poder: "Magias de Vecna",
    resumo: "Kit de magias: voo, mão, esfera e dispell. Versátil, exige gestão de recargas.",
    faixa: "A",
    estilo: "Versátil",
  },
  {
    nome: "Estripador",
    original: "The Slasher",
    poder: "Mal Onipresente",
    resumo: "Jason some da visão e lança farpas. Pressão de mapa com sustos de curta distância.",
    faixa: "A",
    estilo: "Furtividade",
  },
  {
    nome: "Espectro",
    original: "The Wraith",
    poder: "Sino Uivante",
    resumo: "Invisível até tocar o sino. Bom para chegar em cima do gerador sem raio de terror.",
    faixa: "B",
    estilo: "Furtividade",
  },
  {
    nome: "Trapaceiro",
    original: "The Trickster",
    poder: "Facas do Show",
    resumo: "Rajada de lâminas que enche a barra de laceração. Forte em corredores e voltas curtas.",
    faixa: "B",
    estilo: "Distância",
  },
  {
    nome: "Legião",
    original: "The Legion",
    poder: "Frenesi Selvagem",
    resumo: "Corrida que fere em cadeia. Pressão de ferimentos, fraca para finalizar a caçada.",
    faixa: "C",
    estilo: "Pressão",
  },
  {
    nome: "Caçador",
    original: "The Trapper",
    poder: "Armadilha de Urso",
    resumo: "Prepara o mapa com armadilhas. Lento no começo, pune caminhos repetidos.",
    faixa: "D",
    estilo: "Preparação",
  },
  {
    nome: "Forma",
    original: "The Shape",
    poder: "Mal Interior",
    resumo: "Michael espreita até o Mal III, quando o ataque derruba na hora. Precisa de tempo.",
    faixa: "D",
    estilo: "Escalada",
  },
];

export const sobreviventes: Sobrevivente[] = [
  {
    nome: "Kate Denson",
    original: "Kate Denson",
    vantagens: "Janela de Oportunidade, Dance Comigo, Fervura",
    resumo: "A leitura de paletes e janelas é a vantagem mais usada do lado sobrevivente.",
    faixa: "S",
  },
  {
    nome: "Meg Thomas",
    original: "Meg Thomas",
    vantagens: "Arrancada, Adrenalina, Rápida e Silenciosa",
    resumo: "Mobilidade de exaustão e cura grátis quando os portões ligam.",
    faixa: "S",
  },
  {
    nome: "Zarina Kassir",
    original: "Zarina Kassir",
    vantagens: "Fora de Gravação, Pelo Povo, Isca",
    resumo: "Proteção forte depois do gancho: resistência, sem aura e sem gemido.",
    faixa: "S",
  },
  {
    nome: "Jeff Johansen",
    original: "Jeff Johansen",
    vantagens: "Distorção, Cuidados Posteriores, Colapso",
    resumo: "Esconde a aura no começo da partida e atrapalha leitura de informação.",
    faixa: "S",
  },
  {
    nome: "Mikaela Reid",
    original: "Mikaela Reid",
    vantagens: "Bênção: Círculo de Cura, Bênção: Passo Sombrio, Clarividência",
    resumo: "Totem de bênção para o grupo curar e sumir das marcas de arranhão.",
    faixa: "S",
  },
  {
    nome: "Bill Overbeck",
    original: "Bill Overbeck",
    vantagens: "Inquebrável, Tempo Emprestado, Deixado para Trás",
    resumo: "Levanta do chão sozinho uma vez. Clássico contra slug.",
    faixa: "A",
  },
  {
    nome: "Feng Min",
    original: "Feng Min",
    vantagens: "Ágil, Alerta, Técnica",
    resumo: "Salto rápido de exaustão e aviso quando o assassino chuta um gerador.",
    faixa: "A",
  },
  {
    nome: "Jake Park",
    original: "Jake Park",
    vantagens: "Vontade de Ferro, Espírito Calmo, Sabotador",
    resumo: "Silencia a dor. Ainda vale em assassinos que caçam pelo som.",
    faixa: "A",
  },
  {
    nome: "David King",
    original: "David King",
    vantagens: "Morte Súbita, Sem Sentimento, Estamos Feitos Disso",
    resumo: "Esquiva no momento do golpe. Exige timing e ainda divide o meta de exaustão.",
    faixa: "A",
  },
  {
    nome: "Laurie Strode",
    original: "Laurie Strode",
    vantagens: "Golpe Decisivo, Objeto de Obsessão, Único Sobrevivente",
    resumo: "O teste de perícia que solta do ombro e atordoa quem insiste no túnel.",
    faixa: "A",
  },
  {
    nome: "Claudette Morel",
    original: "Claudette Morel",
    vantagens: "Empatia, Botânica, Autocuidado",
    resumo: "Cura o grupo mais rápido. Autocuidado existe, mas costuma atrasar a fuga.",
    faixa: "B",
  },
  {
    nome: "Dwight Fairfield",
    original: "Dwight Fairfield",
    vantagens: "Vínculo, Prove-se, Líder",
    resumo: "Informação do time e reparo em dupla. Bom para quem joga com amigos.",
    faixa: "B",
  },
];

export const mapas: Mapa[] = [
  {
    reino: "Propriedade MacMillan",
    mapas: "Torre de Carvão, Armazém Gemido, Ferragens da Miséria, Bosque do Abrigo, Poço da Sufocação",
    clima: "Equilibrado",
    nota: "Tiles legíveis. A Torre de Carvão é das mais justas dos dois lados.",
  },
  {
    reino: "Fazenda Coldwind",
    mapas: "Estábulo Rachado, Matadouro Rançoso, Campos Podres, Casa Thompson, Riacho do Tormento",
    clima: "Aberto",
    nota: "Milho e casa principal. Assassinos de mobilidade atravessam fácil; voltas fortes ficam na casa.",
  },
  {
    reino: "Ferro-velho Autohaven",
    mapas: "Descanso de Azarov, Lodge de Sangue, Posto, Pátio dos Demolidores, Oficina",
    clima: "Apertado",
    nota: "Carros, paredes baixas e poucos laços longos. Costuma favorecer quem pressiona cedo.",
  },
  {
    reino: "Cidade do Guaxinim",
    mapas: "Delegacia, ala leste e ala oeste",
    clima: "Interior",
    nota: "Corredores, mesas e dois andares. Leitura de som importa mais que linha de visão.",
  },
  {
    reino: "Túmulo de Glenvale",
    mapas: "Saloon do Cão Morto",
    clima: "Assassino",
    nota: "Mapa pequeno, paredes quebráveis e visão clara. Um dos mais duros para sobreviver.",
  },
  {
    reino: "Propriedade Yamaoka",
    mapas: "Residência da Família, Santuário da Ira",
    clima: "Misto",
    nota: "Telhados, bambu e a casa principal. Janelas fortes no prédio, pátio aberto em volta.",
  },
  {
    reino: "Planta Gideon",
    mapas: "O Jogo",
    clima: "Vertical",
    nota: "Dois andares de salas iguais. Armadilhas e assassinos de corredor se sentem em casa.",
  },
  {
    reino: "Floresta Vermelha",
    mapas: "Morada da Mãe, Templo da Purgação",
    clima: "Sobrevivente",
    nota: "Grande e espalhado. Geradores distantes castigam assassinos sem mobilidade.",
  },
];

export const vantagens: Vantagem[] = [
  {
    nome: "Gancho Flagelo: Dor Ressonante",
    dono: "Artista",
    lado: "assassino",
    resumo: "No gancho branco, o gerador mais avançado explode e perde progresso.",
  },
  {
    nome: "Sem Lugar para se Esconder",
    dono: "Cavaleiro",
    lado: "assassino",
    resumo: "Chutar um gerador revela auras próximas por alguns segundos.",
  },
  {
    nome: "Estoura a Doninha",
    dono: "Palhaço",
    lado: "assassino",
    resumo: "Depois de um gancho, o próximo chute no gerador regride bem mais.",
  },
  {
    nome: "Perseguidor Letal",
    dono: "Nemesis",
    lado: "assassino",
    resumo: "No início da prova, mostra a aura de todos. Ótimo para achar a primeira caçada.",
  },
  {
    nome: "Intervenção Corrupta",
    dono: "Praga",
    lado: "assassino",
    resumo: "Trava os geradores mais distantes no começo e empurra o time para perto.",
  },
  {
    nome: "Abraço Sinistro",
    dono: "Artista",
    lado: "assassino",
    resumo: "Cada primeiro gancho trava todos os geradores. No quarto, a trava é longa.",
  },
  {
    nome: "Becos sem Saída",
    dono: "Geral",
    lado: "assassino",
    resumo: "Quando um gerador termina, o mais avançado que sobrou fica bloqueado.",
  },
  {
    nome: "Churrasco e Chilli",
    dono: "Canibal",
    lado: "assassino",
    resumo: "Ao pendurar alguém, revela a aura dos outros longe o bastante.",
  },
  {
    nome: "Janela de Oportunidade",
    dono: "Kate Denson",
    lado: "sobrevivente",
    resumo: "Mostra paletes, janelas e paredes quebráveis o tempo todo.",
  },
  {
    nome: "Arrancada",
    dono: "Meg Thomas",
    lado: "sobrevivente",
    resumo: "O primeiro sprint ao correr dá distância e depois entra em exaustão.",
  },
  {
    nome: "Ágil",
    dono: "Feng Min",
    lado: "sobrevivente",
    resumo: "Salto rápido de janela ou palete dispara um sprint curto.",
  },
  {
    nome: "Fora de Gravação",
    dono: "Zarina Kassir",
    lado: "sobrevivente",
    resumo: "Depois do desenganche: resistência, sem aura e sem gemido de dor.",
  },
  {
    nome: "Golpe Decisivo",
    dono: "Laurie Strode",
    lado: "sobrevivente",
    resumo: "Se te pegarem de novo logo após o gancho, um teste te solta e atordoa.",
  },
  {
    nome: "Adrenalina",
    dono: "Meg Thomas",
    lado: "sobrevivente",
    resumo: "Quando os portões ligam, cura um estado e dá velocidade.",
  },
  {
    nome: "Déjà Vu",
    dono: "Geral",
    lado: "sobrevivente",
    resumo: "Mostra os três geradores mais próximos entre si e repara um pouco mais rápido.",
  },
  {
    nome: "Resiliência",
    dono: "Geral",
    lado: "sobrevivente",
    resumo: "Ferido, você repara, cura, sabota e vasculha mais rápido.",
  },
];

export const faixasAssassino: { faixa: Faixa; nomes: string; leitura: string }[] = [
  {
    faixa: "S",
    nomes: "Enfermeira, Flagelo, Caipira, Espírito, Ghoul, Mestre",
    leitura: "Ganham mapa ou perseguição quase sozinhos. O resto do kit só acompanha.",
  },
  {
    faixa: "A",
    nomes: "Caçadora, Xenomorfo, Carrasco, Lich, Drácula, Animatrônico, Estripador, Artista",
    leitura: "Fortes na mão certa. Mapa e acessório mudam o resultado.",
  },
  {
    faixa: "B",
    nomes: "Espectro, Oni, Praga, Cavaleiro, Nemesis, Trapaceiro, Doutor, Desconhecido",
    leitura: "Dá para subir elo. Precisam de plano, não só de reflexo.",
  },
  {
    faixa: "C",
    nomes: "Legião, Bruxa, Porca, Palhaço, Ghost Face, Canibal, Atirador",
    leitura: "Funcionam com surpresa ou mapa favorável. Sofrem contra time coordenado.",
  },
  {
    faixa: "D",
    nomes: "Caçador, Forma, Mercadora de Caveiras",
    leitura: "Exigem preparação longa. Um erro cedo entrega os geradores.",
  },
];


export const nav = [
  { href: "/", label: "Visão geral" },
  { href: "/assassinos", label: "Assassinos" },
  { href: "/sobreviventes", label: "Sobreviventes" },
  { href: "/mapas", label: "Mapas" },
  { href: "/vantagens", label: "Vantagens" },
  { href: "/classificacao", label: "Classificação" },
] as const;
