
import { Category, Question } from '../types';

// Mapeamento de URLs de imagens oficiais para as placas
const IMG = {
  R1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sinal_R-1.svg/400px-Sinal_R-1.svg.png",
  R2: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sinal_R-2.svg/400px-Sinal_R-2.svg.png",
  R3: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sinal_R-3.svg/400px-Sinal_R-3.svg.png",
  R4a: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sinal_R-4a.svg/400px-Sinal_R-4a.svg.png",
  R4b: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sinal_R-4b.svg/400px-Sinal_R-4b.svg.png",
  R5a: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sinal_R-5a.svg/400px-Sinal_R-5a.svg.png",
  R6a: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sinal_R-6a.svg/400px-Sinal_R-6a.svg.png",
  R6b: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sinal_R-6b.svg/400px-Sinal_R-6b.svg.png",
  R6c: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Sinal_R-6c.svg/400px-Sinal_R-6c.svg.png",
  R7: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sinal_R-7.svg/400px-Sinal_R-7.svg.png",
  R8a: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Sinal_R-8a.svg/400px-Sinal_R-8a.svg.png",
  R9: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sinal_R-9.svg/400px-Sinal_R-9.svg.png",
  R10: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sinal_R-10.svg/400px-Sinal_R-10.svg.png",
  R11: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sinal_R-11.svg/400px-Sinal_R-11.svg.png",
  R12: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sinal_R-12.svg/400px-Sinal_R-12.svg.png",
  R13: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sinal_R-13.svg/400px-Sinal_R-13.svg.png",
  R14: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sinal_R-14.svg/400px-Sinal_R-14.svg.png",
  R15: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sinal_R-15.svg/400px-Sinal_R-15.svg.png",
  R16: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sinal_R-16.svg/400px-Sinal_R-16.svg.png",
  R17: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Sinal_R-17.svg/400px-Sinal_R-17.svg.png",
  R18: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sinal_R-18.svg/400px-Sinal_R-18.svg.png",
  R19: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sinal_R-19.svg/400px-Sinal_R-19.svg.png",
  R20: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sinal_R-20.svg/400px-Sinal_R-20.svg.png",
  R21: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Sinal_R-21.svg/400px-Sinal_R-21.svg.png",
  R22: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sinal_R-22.svg/400px-Sinal_R-22.svg.png",
  R23: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sinal_R-23.svg/400px-Sinal_R-23.svg.png",
  R24a: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sinal_R-24a.svg/400px-Sinal_R-24a.svg.png",
  R24b: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sinal_R-24b.svg/400px-Sinal_R-24b.svg.png",
  R25a: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sinal_R-25a.svg/400px-Sinal_R-25a.svg.png",
  R25b: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sinal_R-25b.svg/400px-Sinal_R-25b.svg.png",
  R25c: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sinal_R-25c.svg/400px-Sinal_R-25c.svg.png",
  R25d: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sinal_R-25d.svg/400px-Sinal_R-25d.svg.png",
  R26: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sinal_R-26.svg/400px-Sinal_R-26.svg.png",
  R27: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sinal_R-27.svg/400px-Sinal_R-27.svg.png",
  R28: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sinal_R-28.svg/400px-Sinal_R-28.svg.png",
  R29: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sinal_R-29.svg/400px-Sinal_R-29.svg.png",
  R30: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sinal_R-30.svg/400px-Sinal_R-30.svg.png",
  R31: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sinal_R-31.svg/400px-Sinal_R-31.svg.png",
  R32: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sinal_R-32.svg/400px-Sinal_R-32.svg.png",
  R33: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sinal_R-33.svg/400px-Sinal_R-33.svg.png",
  R34: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sinal_R-34.svg/400px-Sinal_R-34.svg.png",
  R35a: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sinal_R-35a.svg/400px-Sinal_R-35a.svg.png",
  R35b: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sinal_R-35b.svg/400px-Sinal_R-35b.svg.png",
  R36a: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sinal_R-36a.svg/400px-Sinal_R-36a.svg.png",
  R36b: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sinal_R-36b.svg/400px-Sinal_R-36b.svg.png",
  R37: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Sinal_R-37.svg/400px-Sinal_R-37.svg.png",
  R38: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sinal_R-38.svg/400px-Sinal_R-38.svg.png",
  R39: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sinal_R-39.svg/400px-Sinal_R-39.svg.png",
  R40: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Sinal_R-40.svg/400px-Sinal_R-40.svg.png",
  A1a: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sinal_A-1a.svg/400px-Sinal_A-1a.svg.png",
  A1b: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sinal_A-1b.svg/400px-Sinal_A-1b.svg.png",
  A2a: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sinal_A-2a.svg/400px-Sinal_A-2a.svg.png",
  A2b: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sinal_A-2b.svg/400px-Sinal_A-2b.svg.png",
  A3a: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sinal_A-3a.svg/400px-Sinal_A-3a.svg.png",
  A3b: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sinal_A-3b.svg/400px-Sinal_A-3b.svg.png",
  A4a: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sinal_A-4a.svg/400px-Sinal_A-4a.svg.png",
  A4b: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sinal_A-4b.svg/400px-Sinal_A-4b.svg.png",
  A5a: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sinal_A-5a.svg/400px-Sinal_A-5a.svg.png",
  A5b: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sinal_A-5b.svg/400px-Sinal_A-5b.svg.png",
  A6: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sinal_A-6.svg/400px-Sinal_A-6.svg.png",
  A7a: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sinal_A-7a.svg/400px-Sinal_A-7a.svg.png",
  A7b: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sinal_A-7b.svg/400px-Sinal_A-7b.svg.png",
  A8: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sinal_A-8.svg/400px-Sinal_A-8.svg.png",
  A9: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Sinal_A-9.svg/400px-Sinal_A-9.svg.png",
  A10a: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Sinal_A-10a.svg/400px-Sinal_A-10a.svg.png",
  A10b: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Sinal_A-10b.svg/400px-Sinal_A-10b.svg.png",
  A11a: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sinal_A-11a.svg/400px-Sinal_A-11a.svg.png",
  A11b: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sinal_A-11b.svg/400px-Sinal_A-11b.svg.png",
  A12: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sinal_A-12.svg/400px-Sinal_A-12.svg.png",
  A13a: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Sinal_A-13a.svg/400px-Sinal_A-13a.svg.png",
  A13b: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sinal_A-13b.svg/400px-Sinal_A-13b.svg.png",
  A14: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Sinal_A-14.svg/400px-Sinal_A-14.svg.png",
  A15: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sinal_A-15.svg/400px-Sinal_A-15.svg.png",
  A16: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sinal_A-16.svg/400px-Sinal_A-16.svg.png",
  A17: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sinal_A-17.svg/400px-Sinal_A-17.svg.png",
  A18: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sinal_A-18.svg/400px-Sinal_A-18.svg.png",
  A19: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sinal_A-19.svg/400px-Sinal_A-19.svg.png",
  A20a: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sinal_A-20a.svg/400px-Sinal_A-20a.svg.png",
  A20b: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Sinal_A-20b.svg/400px-Sinal_A-20b.svg.png",
  A21a: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Sinal_A-21a.svg/400px-Sinal_A-21a.svg.png",
  A21b: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sinal_A-21b.svg/400px-Sinal_A-21b.svg.png",
  A21c: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sinal_A-21c.svg/400px-Sinal_A-21c.svg.png",
  A22: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Sinal_A-22.svg/400px-Sinal_A-22.svg.png",
  A23: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sinal_A-23.svg/400px-Sinal_A-23.svg.png",
  A24: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sinal_A-24.svg/400px-Sinal_A-24.svg.png",
  A25: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Sinal_A-25.svg/400px-Sinal_A-25.svg.png",
  A26a: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sinal_A-26a.svg/400px-Sinal_A-26a.svg.png",
  A26b: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sinal_A-26b.svg/400px-Sinal_A-26b.svg.png",
  A27: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sinal_A-27.svg/400px-Sinal_A-27.svg.png",
  A28: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Sinal_A-28.svg/400px-Sinal_A-28.svg.png",
  A29: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Sinal_A-29.svg/400px-Sinal_A-29.svg.png",
  A30a: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Sinal_A-30a.svg/400px-Sinal_A-30a.svg.png",
  A31: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sinal_A-31.svg/400px-Sinal_A-31.svg.png",
  A32a: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Sinal_A-32a.svg/400px-Sinal_A-32a.svg.png",
  A32b: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sinal_A-32b.svg/400px-Sinal_A-32b.svg.png",
  A33a: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sinal_A-33a.svg/400px-Sinal_A-33a.svg.png",
  A33b: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Sinal_A-33b.svg/400px-Sinal_A-33b.svg.png",
  A34: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sinal_A-34.svg/400px-Sinal_A-34.svg.png",
  A35: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sinal_A-35.svg/400px-Sinal_A-35.svg.png",
  A36: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sinal_A-36.svg/400px-Sinal_A-36.svg.png",
  A37: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sinal_A-37.svg/400px-Sinal_A-37.svg.png",
  A38: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Sinal_A-38.svg/400px-Sinal_A-38.svg.png",
  A39: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sinal_A-39.svg/400px-Sinal_A-39.svg.png",
  A40: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Sinal_A-40.svg/400px-Sinal_A-40.svg.png",
  A41: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Sinal_A-41.svg/400px-Sinal_A-41.svg.png",
  A42a: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Sinal_A-42a.svg/400px-Sinal_A-42a.svg.png",
  A42b: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sinal_A-42b.svg/400px-Sinal_A-42b.svg.png",
  A42c: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sinal_A-42c.svg/400px-Sinal_A-42c.svg.png",
  A43: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sinal_A-43.svg/400px-Sinal_A-43.svg.png",
  A44: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Sinal_A-44.svg/400px-Sinal_A-44.svg.png",
  A45: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Sinal_A-45.svg/400px-Sinal_A-45.svg.png",
  S1: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Sinal_S-1.svg/400px-Sinal_S-1.svg.png",
  S2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Sinal_S-2.svg/400px-Sinal_S-2.svg.png",
  S3: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sinal_S-3.svg/400px-Sinal_S-3.svg.png",
  S4: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Sinal_S-4.svg/400px-Sinal_S-4.svg.png",
  S5: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sinal_S-5.svg/400px-Sinal_S-5.svg.png",
  S6: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sinal_S-6.svg/400px-Sinal_S-6.svg.png",
  S7: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Sinal_S-7.svg/400px-Sinal_S-7.svg.png",
  S8: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Sinal_S-8.svg/400px-Sinal_S-8.svg.png",
  S9: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Sinal_S-9.svg/400px-Sinal_S-9.svg.png",
  S10: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Sinal_S-10.svg/400px-Sinal_S-10.svg.png",
  S11: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Sinal_S-11.svg/400px-Sinal_S-11.svg.png",
  S12: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sinal_S-12.svg/400px-Sinal_S-12.svg.png",
  S13: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Sinal_S-13.svg/400px-Sinal_S-13.svg.png",
  S14: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Sinal_S-14.svg/400px-Sinal_S-14.svg.png",
  S15: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Sinal_S-15.svg/400px-Sinal_S-15.svg.png",
  S16: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sinal_S-16.svg/400px-Sinal_S-16.svg.png",
};

export const QUESTIONS: Question[] = [
  { 
    id: 1, category: Category.MECANICA, 
    text: "O controle da temperatura de um motor é realizado pelo sistema de", 
    options: ["resfriamento ou arrefecimento", "carburação e ventilação forçada", "ventilação forçada e freio", "velas e ventilação circulante"], 
    correctAnswer: 0 
  },
  { 
    id: 2, category: Category.MEIO_AMBIENTE, 
    text: "Os fatores que interferem positivamente para que o trânsito seja humano e seguro são", 
    options: ["educação, habilidades, atenção, cooperação e solidariedade", "individualismo, habilidades, atenção, cooperação e solidariedade", "educação, egoísmo, atenção, cooperação e solidariedade", "educação, habilidades, displicência, cooperação e solidariedade"], 
    correctAnswer: 0 
  },
  { 
    id: 3, category: Category.LEGISLACAO, 
    text: "A velocidade máxima permitida em rodovias de pista dupla, nas quais não exista sinalização regulamentadora, para automóveis, camionetas e motocicletas, é de", 
    options: ["110 km/h", "80 km/h", "90 km/h", "60 km/h"], 
    correctAnswer: 0 
  },
  { 
    id: 4, category: Category.DIRECAO_DEFENSIVA, 
    text: "\"Pontos cegos\" são regiões da via em que veículos podem ficar escondidos momentaneamente do campo de visão dos espelhos, levando a situações de risco no trânsito. O procedimento que pode contribuir para minimizar esse problema é o ajuste", 
    options: ["do espelho externo, apenas, para que o condutor tenha um maior campo de visão lateral do veículo", "dos espelhos externos e internos para que o condutor tenha um maior campo de visão traseira e lateral do veículo", "do espelho interno, apenas, para que o condutor tenha um maior campo de visão traseira do veículo", "do espelho interno voltado para a lateral esquerda do veículo, para que o condutor tenha um maior campo de visão lateral do veículo"], 
    correctAnswer: 1 
  },
  { 
    id: 5, category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-39 indica que a área, via ou faixa", 
    options: ["impede a circulação de caminhões e furgões", "se destina à circulação exclusiva de caminhões do tipo furgão", "se destina, exclusivamente, para a circulação de caminhões", "se destina à circulação de veículos de transporte de produtos perecíveis"], 
    correctAnswer: 2, imageUrl: IMG.R39 
  },
  { 
    id: 6, category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-4a, qual deve ser a ação do condutor?", 
    options: ["deve virar à esquerda", "não deve virar à esquerda", "não deve virar à direita", "deve virar à direita"], 
    correctAnswer: 1, imageUrl: IMG.R4a 
  },
  { 
    id: 7, category: Category.PRIMEIROS_SOCORROS, 
    text: "Ao se procurar desobstruir as vias aéreas de uma vítima de acidente, não se deve movimentar sua cabeça, pois poderá ocorrer", 
    options: ["fratura dos membros inferiores", "lesão na coluna", "traumatismo craniano", "fratura da bacia"], 
    correctAnswer: 1 
  },
  { 
    id: 8, category: Category.LEGISLACAO, 
    text: "Os requisitos necessários, dentre outros, para obter a Carteira Nacional de Habilitação (CNH) são", 
    options: ["ter concluído o Ensino Médio", "ter concluído o Ensino Fundamental", "saber ler e escrever", "estar matriculado no Ensino Fundamental"], 
    correctAnswer: 2 
  },
  { 
    id: 9, category: Category.LEGISLACAO, 
    text: "A validade da Permissão para Dirigir é de", 
    options: ["seis meses", "dois anos", "um ano", "três meses"], 
    correctAnswer: 2 
  },
  { 
    id: 10, category: Category.SINALIZACAO, 
    text: "A linha simples contínua de divisão de fluxo, na cor amarela, dividindo a via em duas mãos direcionais indica que", 
    options: ["a ultrapassagem é permitida", "os deslocamentos laterais são permitidos", "a ultrapassagem e os deslocamentos laterais são proibidos", "a ultrapassagem e os deslocamentos laterais são permitidos em apenas um dos sentidos"], 
    correctAnswer: 2 
  },
  { 
    id: 11, category: Category.LEGISLACAO, 
    text: "Quando o motorista estacionar junto de hidrantes de incêndio devidamente identificados, terá como medida administrativa (CTB Art. 181, inciso VI)", 
    options: ["remoção do veículo", "recolhimento da CNH", "retenção do veículo", "recolhimento do CRLV"], 
    correctAnswer: 0 
  },
  { 
    id: 12, category: Category.MECANICA, 
    text: "Em um veículo automotor, para que os cilindros realizem o ciclo de funcionamento, com um tempo de cada vez, é necessário que ocorra", 
    options: ["o fornecimento de energia mecânica pela bateria", "a queima do óleo nos cilindros", "o funcionamento das válvulas de admissão e de escape", "o funcionamento da ignição eletrônica e do carburador"], 
    correctAnswer: 2 
  },
  { 
    id: 13, category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-6c, qual deve ser a ação do condutor?", 
    options: ["pode colocar o veículo na extensão da via desde que seja para as operações de carga e descarga", "pode colocar o veículo na extensão da via desde que seja para as operações de embarque e desembarque de passageiros", "pode colocar o veículo na extensão da via aos sábados, domingos e feriados", "em nenhuma hipótese pode parar ou estacionar o veículo na extensão da via indicada pela sinalização"], 
    correctAnswer: 3, imageUrl: IMG.R6c 
  },
  { 
    id: 14, category: Category.LEGISLACAO, 
    text: "Estacionar o veículo no passeio (calçada) ou sobre a faixa destinada a pedestres é infração de trânsito com penalidade de multa e é considerada", 
    options: ["leve", "gravíssima", "média", "grave"], 
    correctAnswer: 3 
  },
  { 
    id: 15, category: Category.MECANICA, 
    text: "A estabilidade de um veículo nas retas e curvas é garantida pela manutenção dos seguintes sistemas", 
    options: ["de freios e de rodagem", "de suspensão e de transmissão", "de transmissão e de direção", "de direção e de suspensão"], 
    correctAnswer: 3 
  },
  { 
    id: 16, category: Category.DIRECAO_DEFENSIVA, 
    text: "Chuva e freios deficientes são situações de risco geradas por condições adversas relacionadas, respectivamente, com", 
    options: ["via e veículo", "via e condutor", "clima e/ou ambiente e condutor", "clima e/ou ambiente e veículo"], 
    correctAnswer: 3 
  },
  { 
    id: 17, category: Category.MEIO_AMBIENTE, 
    text: "A convivência social no trânsito é facilitada se o condutor", 
    options: ["demonstrar agilidade no manuseio dos equipamentos do veículo", "conhecer como funciona o motor do veículo", "entrar em atrito com outros condutores, caso julgue estar com a razão", "conhecer e cumprir as regras de circulação e de conduta"], 
    correctAnswer: 3 
  },
  { 
    id: 18, category: Category.PRIMEIROS_SOCORROS, 
    text: "Ao solicitar o serviço de resgate para atender às vítimas de um acidente, deve-se adotar o seguinte procedimento", 
    options: ["informar a localização do acidente e adiantar o atendimento, liberando as vias aéreas da vítima", "isolar a área e fazer mutirão com os demais condutores para atender às vítimas", "informar o tipo de acidente e retirar imediatamente a vítima do local do acidente", "informar a identificação do solicitante, a localização, o estado das vítimas e o tipo de acidente"], 
    correctAnswer: 3 
  },
  { 
    id: 19, category: Category.MECANICA, 
    text: "No sistema de controle do aquecimento do motor, com sistema de arrefecimento à água, os componentes básicos são", 
    options: ["válvula termostática, reservatório e alternador", "termômetro, radiador, água com solução e bomba de expansão", "bomba-d'água, câmaras de resfriamento e correia de ventilação", "radiador, bomba-d'água e depósito de expansão do radiador"], 
    correctAnswer: 3 
  },
  { 
    id: 20, category: Category.DIRECAO_DEFENSIVA, 
    text: "São situações de risco que reduzem o atrito e, consequentemente, a aderência entre os pneus e a pista, dificultando o controle do veículo em frenagens, as seguintes condições", 
    options: ["rodas trincadas, sistema de suspensão e amortecedores deficientes", "neblina densa e fumaça vinda da queima de vegetação à beira da via", "depressões, lombadas e ondulações no pavimento da via", "barro em estradas de terra e lâmina de água sobre a pista pavimentada"], 
    correctAnswer: 3 
  },
  { 
    id: 21, category: Category.LEGISLACAO, 
    text: "As vias rurais abertas à circulação de veículos classificam-se em", 
    options: ["via de trânsito rápido, via arterial, via coletora, via local, rodovias e estradas", "via de trânsito rápido, via arterial, via coletora e via local", "via arterial, via coletora e via local", "rodovias e estradas"], 
    correctAnswer: 3 
  },
  { 
    id: 22, category: Category.PRIMEIROS_SOCORROS, 
    text: "As três regras fundamentais de primeiros socorros são", 
    options: ["tranquilizar o acidentado; estimular a circulação do local fraturado por meio de massagem local; e atuar com rapidez", "aquecer o acidentado por meio da oferta de bebida quente; avaliar a situação; e conversar de forma calma com o acidentado", "afastar os curiosos; telefonar para o serviço de resgate; e oferecer água", "não entrar em pânico; pensar nas condutas a serem tomadas; e avaliar os riscos para o acidentado"], 
    correctAnswer: 3 
  },
  { 
    id: 23, category: Category.LEGISLACAO, 
    text: "Conforme o artigo 147 do Código de Trânsito Brasileiro, o candidato à habilitação deverá submeter-se a exames realizados pelo órgão executivo de trânsito, na seguinte ordem", 
    options: ["de aptidão física e mental; escrito conforme regulamentação do CONTRAN; e de direção veicular", "escrito conforme regulamentação do CONTRAN; de aptidão física e mental; e de direção veicular", "de direção veicular, de aptidão física e mental; e escrito conforme regulamentação do CONTRAN", "de aptidão física e mental; de direção veicular e escrito conforme regulamentação CONTRAN"], 
    correctAnswer: 0 
  },
  { 
    id: 24, category: Category.PRIMEIROS_SOCORROS, 
    text: "Um condutor, mediante acidente de trânsito, pode agravar ainda mais o estado de saúde da vítima se", 
    options: ["não retirar o capacete dela, caso seja um motociclista, até a chegada da equipe de emergência", "soltar o cinto de segurança da vítima presa ao veículo, se constatar dificuldade de respiração em razão do cinto", "prestar o maior número de informações sobre o acidente à vítima ao acionar a equipe de emergência", "oferecer alimentos ou bebidas para os acidentados que solicitarem, adiantando-se à equipe de emergência"], 
    correctAnswer: 3 
  },
  { 
    id: 25, category: Category.DIRECAO_DEFENSIVA, 
    text: "Há curvas em que a pista é mal construída e possui sobrelevação negativa (ligeira inclinação para o lado de fora da curva). Essa condição adversa exige do condutor a redução da velocidade e um maior esforço para manter o controle do veículo. Agindo dessa forma, o condutor evita o risco de", 
    options: ["derrapagem do veículo em razão da perda total de aderência entre os pneus e o pavimento da pista", "perda total do sistema de freios devido ao superaquecimento dos seus componentes internos", "estouro do pneu traseiro em razão do esforço exigido e do aumento da aderência ao pavimento da pista", "deslocamento do veículo para a contramão da via devido à força centrífuga não compensada pela pista"], 
    correctAnswer: 3 
  },
  { 
    id: 26, category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-25d, qual deve ser a interpretação do condutor quanto ao sentido de circulação dos veículos?", 
    options: ["é proibido seguir em frente ou à direita", "é obrigatório seguir em frente ou à esquerda", "é obrigatório seguir à esquerda", "é obrigatório seguir em frente ou à direita"], 
    correctAnswer: 3, imageUrl: IMG.R25d 
  },
  { 
    id: 27, category: Category.MECANICA, 
    text: "Sobre o estado dos freios e sua relação com a segurança, podemos afirmar que", 
    options: ["os freios em bom estado de funcionamento eliminam o fenômeno da aquaplanagem", "com os freios em bom estado, não é necessário descer vias em declive com o veículo engrenado", "a boa conservação dos freios elimina a necessidade de se manter distância do veículo à frente", "quanto mais eficientes forem os freios, mais segurança haverá nas frenagens"], 
    correctAnswer: 3 
  },
  { 
    id: 28, category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-5a, qual deve ser a ação do condutor?", 
    options: ["deve retornar na via", "não deve virar à direita", "deve virar à esquerda na via", "não deve retornar na via"], 
    correctAnswer: 3, imageUrl: IMG.R5a 
  },
  { 
    id: 29, category: Category.LEGISLACAO, 
    text: "Transitar pela contramão de direção em vias com sinalização de regulamentação de sentido único de circulação é uma infração (CTB Art. 186, inciso II)", 
    options: ["média", "grave", "leve", "gravíssima"], 
    correctAnswer: 3 
  },
  { 
    id: 30, category: Category.DIRECAO_DEFENSIVA, 
    text: "A baixa calibragem dos pneus", 
    options: ["reduz sua vida útil", "aumenta a capacidade de frenagem", "favorece a estabilidade em curvas", "aumenta sua vida útil"], 
    correctAnswer: 0 
  },
  { 
    id: 31, category: Category.DIRECAO_DEFENSIVA, 
    text: "Entende-se por ''condições adversas''", 
    options: ["situacoes inadequadas geradas pelas autoridades", "condições pessoais do condutor ou fora do seu controle que podem ser causa de acidentes", "riscos totalmente fora do controle do condutor", "situações normais que por distração geram risco"], 
    correctAnswer: 1 
  },
  { 
    id: 32, category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-21a, o condutor deve estar alerta", 
    options: ["ao estreitamento da pista à esquerda", "ao estreitamento da pista ao centro", "à ponte estreita na pista", "ao alargamento da pista à esquerda"], 
    correctAnswer: 0, imageUrl: IMG.A21a 
  },
  { 
    id: 33, category: Category.DIRECAO_DEFENSIVA, 
    text: "A visibilidade do condutor, que exige sua redobrada atenção, é mais reduzida ao dirigir", 
    options: ["em túnel dotado de iluminação pública", "em via urbana dotada de iluminação pública", "à noite, com chuva, garoa ou neblina", "em dia claro, com céu azul e sol"], 
    correctAnswer: 2 
  },
  { 
    id: 34, category: Category.DIRECAO_DEFENSIVA, 
    text: "Segundo a legislação, sono e vias em véspera de feriados prolongados são classificados, respectivamente, como condições adversas de", 
    options: ["condutor e trânsito", "tempo e condutor", "condutor e via", "via e trânsito"], 
    correctAnswer: 0 
  },
  { 
    id: 35, category: Category.LEGISLACAO, 
    text: "O Código de Trânsito Brasileiro (CTB) estabelece regras e normas válidas em todo o território nacional para", 
    options: ["ruas, avenidas, logradouros, caminhos, passagens, rodovias, estradas, praias abertas à circulação e vias internas de condomínios", "ruas, avenidas, logradouros, caminhos, passagens, rodovias e estradas", "ruas, avenidas, logradouros, rodovias e estradas", "ruas, avenidas, rodovias e estradas"], 
    correctAnswer: 0 
  },
  { 
    id: 36, category: Category.LEGISLACAO, 
    text: "A via que se caracteriza por interseções em nível não semaforizadas, destinada apenas ao acesso local ou a áreas restritas, é denominada", 
    options: ["via arterial", "via coletora", "via local", "via de trânsito rápido"], 
    correctAnswer: 2 
  },
  { 
    id: 37, category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-24b indica", 
    options: ["inicio de trecho em declive na via", "passagem obrigatória a direita", "sentido proibido de circulação da via", "conversão à direita no cruzamento"], 
    correctAnswer: 1, imageUrl: IMG.R24b 
  },
  { 
    id: 38, category: Category.SINALIZACAO, 
    text: "A placa de advertência A-13a alerta o condutor para uma situação de risco de acidente na via, relacionada a", 
    options: ["confluência com via lateral, com possível entrada de veículos à esquerda", "existência de um cruzamento movimentado entre duas vias", "existência de passagem da via de mão única para via de mão dupla", "confluência com via lateral, com possibilidade de entrada de veículos à direita"], 
    correctAnswer: 0, imageUrl: IMG.A13a 
  },
  { 
    id: 39, category: Category.MECANICA, 
    text: "A velocidade instantânea desenvolvida pelo veículo é indicada no painel pelo", 
    options: ["termômetro", "velocímetro", "hodômetro", "conta-giros"], 
    correctAnswer: 1 
  },
  { 
    id: 40, category: Category.DIRECAO_DEFENSIVA, 
    text: "O condutor que dirigir sob efeito de bebida alcoólica", 
    options: ["melhora a autoconfiança e torna a direção segura para si e para os demais", "compromete a percepção de riscos e diminui a coordenação motora", "aumenta a coordenação motora e os reflexos essenciais para dirigir", "melhora a visão e a percepção de riscos do que ocorre no entorno"], 
    correctAnswer: 1 
  },
  { 
    id: 41, category: Category.PRIMEIROS_SOCORROS, 
    text: "Em caso de acidente de trânsito com vítima(s), podemos dizer que primeiros socorros são", 
    options: ["as providências tomadas no local, iniciais e temporárias, até a chegada de socorro", "procedimentos de competência exclusiva de médicos no local do acidente", "as ações que só podem ser realizadas por equipes profissionais", "o pronto atendimento da(s) vítima(s) em substituição às equipes da saúde"], 
    correctAnswer: 0 
  },
  { 
    id: 42, category: Category.DIRECAO_DEFENSIVA, 
    text: "Em uma rodovia, ao perceber movimentos na vegetação, indicando a existência de forte vento lateral, o recomendável é", 
    options: ["reduzir a velocidade, ligar a seta indicativa de mudança de direção e transitar pelo acostamento", "reduzir a velocidade adequando a marcha do motor para manter a estabilidade", "acelerar, aumentando a força do motor e forçando um maior atrito entre os pneus e a pista", "manter a velocidade e segurar o volante levemente, a fim de reduzir o risco de capotagem"], 
    correctAnswer: 1 
  },
  { 
    id: 43, category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-9, o condutor deve adequar a velocidade às condições locais e redobrar a atenção, pois à frente", 
    options: ["há estreitamento da via", "há cruzamento entre vias", "a via passa a ter mão dupla", "há bifurcação da via"], 
    correctAnswer: 3, imageUrl: IMG.A9 
  },
  { 
    id: 44, category: Category.DIRECAO_DEFENSIVA, 
    text: "Uma das condições adversas que é, potencialmente, geradora de risco de acidente de trânsito é", 
    options: ["o veículo em bom estado de conservação e os equipamentos de segurança funcionando adequadamente", "dia sem chuva, com pouco sol incidindo verticalmente, com visibilidade total a uma razoável distância", "o condutor bem disposto, sem sono, alimentado adequadamente e com total capacidade de atenção", "a conservação inadequada da via, com presença de buracos e sinalização apagada"], 
    correctAnswer: 3 
  },
  { 
    id: 45, category: Category.MEIO_AMBIENTE, 
    text: "Conhecer o funcionamento do veículo e de seus componentes é importante para a sua manutenção preventiva. Assinale a alternativa correta:", 
    options: ["catalisadores são equipamentos que não precisam ser substituídos periodicamente", "usar combustíveis aditivados é uma medida necessária e suficiente para eliminar poluentes", "o monóxido de carbono produzido não é um gás inofensivo para a saúde humana", "abastecer com combustível de procedência e revisões periódicas reduzem a poluição"], 
    correctAnswer: 3 
  },
  { 
    id: 46, category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-7 estabelece uma condição obrigatória para os condutores, determinando que é proibida a", 
    options: ["ultrapassagem", "ultrapassagem de motocicletas", "parada em fila dupla", "circulação de automóveis"], 
    correctAnswer: 0, imageUrl: IMG.R7 
  },
  { 
    id: 47, category: Category.SINALIZACAO, 
    text: "A sinalização vertical é classificada de acordo com sua função, compreendendo os seguintes tipos", 
    options: ["placas, marcas de solo e dispositivo luminoso", "placas de proibição, marcas de solo, apito do agente", "regulamentação, gestos do agente e gestos de condutores", "regulamentação, advertência e indicação"], 
    correctAnswer: 3 
  },
  { 
    id: 48, category: Category.LEGISLACAO, 
    text: "Estacionar em desacordo com as posições estabelecidas no Código de Trânsito Brasileiro tem como penalidade (CTB Art. 181, inciso IV)", 
    options: ["suspensão do direito de dirigir", "apreensão do veículo", "advertência", "multa"], 
    correctAnswer: 3 
  },
  { 
    id: 49, category: Category.PRIMEIROS_SOCORROS, 
    text: "O melhor local do corpo para se verificar a pulsação de vítima adulta inconsciente é", 
    options: ["a perna", "o pulso", "o peito", "o pescoço"], 
    correctAnswer: 3 
  },
  { 
    id: 50, category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-20 estabelece aos condutores a proibição de", 
    options: ["utilizar qualquer sinalizador visual", "utilizar aparelho de som no interior do veículo", "produzir som alto com a buzina", "acionar buzina ou sinal sonoro"], 
    correctAnswer: 3, imageUrl: IMG.R20 
  },
  { 
    id: 51, category: Category.MECANICA, 
    text: "A energia mecânica produzida pelo motor de um veículo é transmitida às rodas por meio do sistema de", 
    options: ["câmbio", "marchas", "embreagem", "transmissão"], 
    correctAnswer: 3 
  },
  { 
    id: 52, category: Category.LEGISLACAO, 
    text: "Transitar pela contramão de direção, nas vias com sinalização de regulamentação de sentido único de circulação, constitui infração de que natureza?", 
    options: ["grave", "média", "leve", "gravíssima"], 
    correctAnswer: 3 
  },
  { 
    id: 53, category: Category.MECANICA, 
    text: "O sistema que tem por função ligar e desligar a força motriz do motor da parte restante da transmissão é o(a)", 
    options: ["sistema de freios", "correia transmissora", "dínamo", "embreagem"], 
    correctAnswer: 3 
  },
  { 
    id: 54, category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-12, qual deve ser a ação do condutor?", 
    options: ["passar pelo centro da via, quando não houver veículo transitando pelo local", "manter a velocidade, pois não há risco de acidentes", "acelerar e passar, pois a placa indica preferência do condutor", "reduzir a velocidade, pois se trata de área de cruzamento"], 
    correctAnswer: 3, imageUrl: IMG.A12 
  },
  { 
    id: 55, category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-4b, o condutor deve reduzir a velocidade, pois a via apresenta", 
    options: ["pista sinuosa", "curva acentuada à esquerda", "curva acentuada em S à direita", "estreitamento de pista à direita"], 
    correctAnswer: 2, imageUrl: IMG.A4b 
  },
  { 
    id: 56, category: Category.DIRECAO_DEFENSIVA, 
    text: "Em vias com velocidade máxima de 60 km/h, qual a distância mínima para iniciar a sinalização de acidente ocorrido à noite, em pista molhada ou com neblina?", 
    options: ["a 120 metros do veículo ou, aproximadamente, 120 passos", "a 60 metros do veículo ou, aproximadamente, 60 passos", "a 80 metros do veículo ou, aproximadamente, 80 passos", "a 40 metros do veículo ou, aproximadamente, 40 passos"], 
    correctAnswer: 0 
  },
  { 
    id: 57, category: Category.DIRECAO_DEFENSIVA, 
    text: "Entre outras atitudes a favor da segurança, pode-se dizer que o condutor que pratica a direção defensiva é aquele que", 
    options: ["ultrapassa os veículos lentos pelo acostamento", "mantém-se atento ao comportamento dos demais condutores e usuários do trânsito", "desce um trecho de via em declive desengrenado", "usa, sob chuva, a luz alta do veículo"], 
    correctAnswer: 1 
  },
  { 
    id: 58, category: Category.SINALIZACAO, 
    text: "As placas educativas têm como função", 
    options: ["indicar serviços auxiliares", "indicar atrativos turísticos", "indicar destinos geográficos", "orientar os usuários quanto ao seu comportamento adequado e seguro no trânsito"], 
    correctAnswer: 3 
  },
  { 
    id: 59, category: Category.SINALIZACAO, 
    text: "As placas S-2, S-7, e S-13 são de indicação de serviço. Elas indicam, respectivamente:", 
    options: ["serviço telefônico, hotel e ferrovia", "serviço telefônico, restaurante e pronto-socorro", "serviço telefônico, restaurante e terminal rodoviário", "serviço telefônico, restaurante e terminal ferroviário"], 
    correctAnswer: 3, imageUrl: IMG.S13 
  },
  { 
    id: 60, category: Category.LEGISLACAO, 
    text: "Estacionar o veículo ao lado de outro veículo, em fila dupla, terá como penalidade (CTB Art. 181, inciso XI)", 
    options: ["apreensão do veículo", "suspensão do direito de dirigir", "multa", "advertência"], 
    correctAnswer: 2 
  },
  { 
    id: 61, category: Category.LEGISLACAO, 
    text: "A velocidade mínima permitida em vias arteriais nas quais não exista sinalização regulamentadora é de", 
    options: ["40 km/h", "20 km/h", "30 km/h", "50 km/h"], 
    correctAnswer: 2 
  },
  { 
    id: 62, category: Category.MEIO_AMBIENTE, 
    text: "Um dos meios para evitar a poluição é", 
    options: ["observar a vida útil dos filtros de ar e óleo", "acelerar quando o veículo estiver parado", "manter o motor ligado numa parada prolongada", "transitar com o veículo com excesso de carga"], 
    correctAnswer: 0 
  },
  { 
    id: 63, category: Category.DIRECAO_DEFENSIVA, 
    text: "O condutor apresenta redução da capacidade para tomada de decisão, não podendo dirigir, ao consumir", 
    options: ["bebidas alcoólicas ou substâncias psicoativas", "refrigerantes dietéticos", "sucos naturais", "café sem açúcar"], 
    correctAnswer: 0 
  },
  { 
    id: 64, category: Category.LEGISLACAO, 
    text: "A desobediência ao sinal vermelho ou à parada obrigatória é uma infração gravíssima, que será punida com", 
    options: ["multa e remoção do veículo", "multa, apenas", "multa e apreensão do veículo", "multa e apreensão da CNH"], 
    correctAnswer: 1 
  },
  { 
    id: 65, category: Category.MEIO_AMBIENTE, 
    text: "O condutor que transportar animais silvestres sem autorização poderá ser autuado em crimes ambientais, de acordo com a legislação", 
    options: ["do Ibama", "do Detran", "da Anvisa", "do Denatran"], 
    correctAnswer: 0 
  },
  { 
    id: 66, category: Category.DIRECAO_DEFENSIVA, 
    text: "A ausência de acostamento em uma situação de emergência é uma condição adversa relacionada com o(a)", 
    options: ["clima e/ou ambiente", "condutor", "via", "veículo"], 
    correctAnswer: 2 
  },
  { 
    id: 67, category: Category.MECANICA, 
    text: "Os sulcos dos pneus, cuja profundidade mínima é de 1,6 mm, existem para", 
    options: ["escoar a água em pista molhada e manter o atrito com o pavimento", "reduzir o volume de ruído", "garantir a estabilidade em curvas", "distinguir modelos de pneus"], 
    correctAnswer: 0 
  },
  { 
    id: 68, category: Category.DIRECAO_DEFENSIVA, 
    text: "O condutor que vai parar o veículo no acostamento deve", 
    options: ["acionar o pisca-alerta ainda na pista", "entrar na mesma velocidade que vinha", "acionar seta e entrar rapidamente", "acionar a luz de direção, reduzir velocidade, entrar, colocar triângulo e ligar o pisca-alerta"], 
    correctAnswer: 3 
  },
  { 
    id: 69, category: Category.SINALIZACAO, 
    text: "As placas S-6, S-8, S-15, e S-16 indicam, respectivamente nessa ordem:", 
    options: ["parada de ônibus, borracheiro, pedágio e informação turística", "terminal rodoviário, serviço mecânico, informação turística e pedágio", "parada de ônibus, borracheiro, informação turística e pedágio", "terminal rodoviário, borracheiro, informação turística e pedágio"], 
    correctAnswer: 2, imageUrl: IMG.S15 
  },
  { 
    id: 70, category: Category.MECANICA, 
    text: "Para maior segurança nas curvas e frenagens, os equipamentos que devem estar em boas condições são", 
    options: ["amortecedores e pisca-alerta", "pisca-alerta e faróis", "suspensão e faróis", "suspensão e amortecedores"], 
    correctAnswer: 3 
  },
  { 
    id: 71, category: Category.MEIO_AMBIENTE, 
    text: "São fontes de poluição sonora veicular", 
    options: ["baterias com vazamentos", "combustível adulterado", "carcaça de pneus usados", "escapamento aberto e aparelhos de som"], 
    correctAnswer: 3 
  },
  { 
    id: 72, category: Category.SINALIZACAO, 
    text: "A placa de indicação S-11 pretende informar ao condutor a existência de área de", 
    options: ["estação ferroviária", "turismo", "estação rodoviária", "aeroporto"], 
    correctAnswer: 3, imageUrl: IMG.S11 
  },
  { 
    id: 73, category: Category.DIRECAO_DEFENSIVA, 
    text: "A conduta adequada e responsável do condutor, caso ingira bebida alcoólica, é", 
    options: ["lavar o rosto com água fria", "ingerir café", "tomar água", "não dirigir em hipótese alguma"], 
    correctAnswer: 3 
  },
  { 
    id: 74, category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-25c, qual deve ser a interpretação do condutor?", 
    options: ["é obrigatório seguir à direita", "é proibido seguir em frente ou à esquerda", "é obrigatório seguir em frente ou à direita", "é obrigatório seguir em frente ou à esquerda"], 
    correctAnswer: 3, imageUrl: IMG.R25c 
  },
  { 
    id: 75, category: Category.DIRECAO_DEFENSIVA, 
    text: "Após uma refeição pesada, em num dia ensolarado e quente, o condutor pode sofrer com", 
    options: ["fadiga", "preocupação", "euforia", "sono"], 
    correctAnswer: 3 
  },
  { 
    id: 76, category: Category.DIRECAO_DEFENSIVA, 
    text: "Em dias de chuva, a falta de aderência do pneu com a pista molhada pode ocasionar a", 
    options: ["força centrífuga", "corrente térmica", "corrente aerodinâmica", "aquaplanagem"], 
    correctAnswer: 3 
  },
  { 
    id: 77, category: Category.MECANICA, 
    text: "Indique sistemas vitais para a segurança do veículo em movimento que requerem providências urgentes", 
    options: ["freios, catalisador e pneus", "pneus, rodas e escapamento", "catalisador, direção e rodas", "freios, suspensão e pneus"], 
    correctAnswer: 3 
  },
  { 
    id: 78, category: Category.DIRECAO_DEFENSIVA, 
    text: "Dirigir por muitas horas seguidas sem descanso representa", 
    options: ["cuidado consigo mesmo", "dedicação à empresa", "alto espírito profissional", "condição adversa do condutor (fadiga) que pode gerar acidentes"], 
    correctAnswer: 3 
  },
  { 
    id: 79, category: Category.PRIMEIROS_SOCORROS, 
    text: "Em casos de parada cardiopulmonar, qual o procedimento correto feito pela equipe de socorro?", 
    options: ["respiração boca a boca", "ventilação natural", "massagem no coração", "compressão torácica"], 
    correctAnswer: 3 
  },
  { 
    id: 80, category: Category.LEGISLACAO, 
    text: "Os veículos que têm prioridade no trânsito são destinados a", 
    options: ["polícia e ambulância apenas", "prestadores de serviços de utilidade pública apenas", "rede de energia elétrica apenas", "socorro, polícia, fiscalização e operação de trânsito e ambulância"], 
    correctAnswer: 3 
  },
  { 
    id: 81, category: Category.DIRECAO_DEFENSIVA, 
    text: "Uma situação de risco que causa perda de estabilidade do veículo é", 
    options: ["ausência de acostamento", "ventos fortes laterais", "sinalização apagada", "neblina densa"], 
    correctAnswer: 1 
  },
  { 
    id: 82, category: Category.DIRECAO_DEFENSIVA, 
    text: "A distância percorrida do momento em que o freio é acionado até a parada total é chamada de", 
    options: ["distância de percepção", "distância de seguimento", "distância de frenagem", "distância de reação"], 
    correctAnswer: 2 
  },
  { 
    id: 83, category: Category.MEIO_AMBIENTE, 
    text: "A demonstração de respeito ao pedestre e de boa convivência no trânsito é observada quando o condutor", 
    options: ["dá prioridade ao pedestre, retendo o veículo a uma distância segura", "avança com o veículo na direção dele", "para sobre a faixa", "usa buzina ostensiva"], 
    correctAnswer: 0 
  },
  { 
    id: 84, category: Category.DIRECAO_DEFENSIVA, 
    text: "Em direção defensiva, o elemento básico decisão depende", 
    options: ["da habilidade, tempo, prática, previsão e conhecimento das condições", "somente do tempo de experiência", "somente das condições da via", "da habilidade e experiência"], 
    correctAnswer: 0 
  },
  { 
    id: 85, category: Category.SINALIZACAO, 
    text: "As placas de identificação de atrativo turístico têm por objetivo", 
    options: ["indicar e orientar os usuários sobre os pontos turísticos da região", "regulamentar os pontos turísticos", "advertir usuários", "regulamentar acessos"], 
    correctAnswer: 0 
  },
  { 
    id: 86, category: Category.LEGISLACAO, 
    text: "A velocidade mínima permitida em uma rodovia sinalizada com a velocidade máxima de 100 km/h é", 
    options: ["50 km/h", "60 km/h", "40 km/h", "30 km/h"], 
    correctAnswer: 0 
  },
  { 
    id: 87, category: Category.DIRECAO_DEFENSIVA, 
    text: "São condições adversas do veículo", 
    options: ["revisões em dia", "manutenção periódica", "mau estado de conservação e pneus gastos", "equipamentos funcionando"], 
    correctAnswer: 2 
  },
  { 
    id: 88, category: Category.LEGISLACAO, 
    text: "É considerado crime de trânsito dirigir veículo automotor", 
    options: ["acima da velocidade permitida", "desobedecendo ordem do agente", "sem estar habilitado e gerando perigo de dano", "deixando de dar passagem"], 
    correctAnswer: 2 
  },
  { 
    id: 89, category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-9, qual deve ser a ação do condutor?", 
    options: ["não deverá transitar com caminhões a partir da placa", "não deverá transitar com caminhões com carga", "pode transitar sem carga", "poderá transitar com caminhões"], 
    correctAnswer: 0, imageUrl: IMG.R9 
  },
  { 
    id: 90, category: Category.DIRECAO_DEFENSIVA, 
    text: "Indique a alternativa que descreve uma ação correta do condutor ao perceber buracos na via", 
    options: ["parar imediatamente", "reduzir a velocidade usando os freios e ficar atento às condições de tráfego", "acelerar para passar rápido", "mudar de faixa sem sinalizar"], 
    correctAnswer: 1 
  },
  { 
    id: 91, category: Category.MECANICA, 
    text: "O conjunto da embreagem fica situado no sistema de transmissão e está localizado entre", 
    options: ["o volante do motor e a caixa de mudanças", "os semieixos e a caixa", "o diferencial e os eixos", "o motor e os eixos"], 
    correctAnswer: 0 
  },
  { 
    id: 92, category: Category.LEGISLACAO, 
    text: "Transitar em marcha à ré em distâncias desnecessárias é uma infração", 
    options: ["leve", "média", "grave", "gravíssima"], 
    correctAnswer: 2 
  },
  { 
    id: 93, category: Category.DIRECAO_DEFENSIVA, 
    text: "Indique a alternativa que contém uma atitude que desvia sua atenção ao dirigir", 
    options: ["falar e digitar mensagens ao telefone celular", "prestar atenção às luzes do painel", "manter mãos no volante", "olhar os retrovisores"], 
    correctAnswer: 0 
  },
  { 
    id: 94, category: Category.MEIO_AMBIENTE, 
    text: "Dos materiais listados, qual demora mais tempo para se decompor?", 
    options: ["jornal", "pneu", "filtro de cigarro", "papelão"], 
    correctAnswer: 1 
  },
  { 
    id: 95, category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-30 obriga o pedestre a andar à esquerda da via. Atentar para:", 
    options: ["escolares à direita", "pedestres em circulação à esquerda da via", "crianças à direita", "pedestres à direita"], 
    correctAnswer: 1, imageUrl: IMG.R30 
  },
  { 
    id: 96, category: Category.LEGISLACAO, 
    text: "O candidato que pretende habilitar-se na categoria \"E\" deverá", 
    options: ["estar habilitado no mínimo há um ano na categoria \"C\"", "estar habilitado no mínimo há dois anos na categoria \"B\"", "estar habilitado no mínimo há dois anos na categoria \"A\"", "estar habilitado no mínimo há um ano na categoria \"B\""], 
    correctAnswer: 0 
  },
  { 
    id: 97, category: Category.MECANICA, 
    text: "A função do silencioso é", 
    options: ["aumentar a potência", "controlar poluentes", "reduzir ruídos produzidos pelo motor", "melhorar a queima"], 
    correctAnswer: 2 
  },
  { 
    id: 98, category: Category.LEGISLACAO, 
    text: "Transitar com o veículo produzindo fumaça acima dos níveis fixados tem como medida administrativa", 
    options: ["retenção do veículo para regularização", "suspensão do direito de dirigir", "apreensão do veículo", "cassação da CNH"], 
    correctAnswer: 0 
  },
  { 
    id: 99, category: Category.DIRECAO_DEFENSIVA, 
    text: "Qual deve ser a atitude do condutor ao constatar que se encontra com fadiga?", 
    options: ["parar para descansar em local seguro", "reclinar o banco e continuar", "resistir ao cansaço", "ingerir bebidas energéticas e concluir a viagem"], 
    correctAnswer: 0 
  },
  { 
    id: 100, category: Category.LEGISLACAO, 
    text: "O candidato à primeira habilitação considerado apto receberá a PPD válida por", 
    options: ["2 anos", "1 ano", "5 anos", "6 meses"], 
    correctAnswer: 1 
  },
  { 
    id: 101, category: Category.PRIMEIROS_SOCORROS, 
    text: "Em caso de acidente de trânsito com vítima, o motorista deve", 
    options: ["oferecer água à vítima", "transportar a vítima ao hospital", "avaliar o estado geral da vítima e solicitar socorro", "remover a vítima do veículo"], 
    correctAnswer: 2 
  },
  { 
    id: 102, category: Category.LEGISLACAO, 
    text: "A circulação de bicicletas nos passeios públicos é", 
    options: ["proibida para aros acima de 24", "permitida se largura superior a 1 metro", "permitida, desde que autorizada e sinalizada pelo órgão", "permitida apenas para crianças"], 
    correctAnswer: 2 
  },
  { 
    id: 103, category: Category.LEGISLACAO, 
    text: "Um condutor com PPD que comete infração de natureza grave ao final de um ano", 
    options: ["fará curso de reciclagem", "receberá CNH com multa", "terá de reiniciar todo o processo de habilitação", "manterá a PPD por mais um ano"], 
    correctAnswer: 2 
  },
  { 
    id: 104, category: Category.DIRECAO_DEFENSIVA, 
    text: "A ocorrência de aquaplanagem é agravada quando", 
    options: ["a profundidade dos sulcos do pneu está abaixo do limite mínimo", "o sistema de embreagem está gasto", "o condutor reduz a velocidade", "o sistema de suspensão é novo"], 
    correctAnswer: 0 
  },
  { 
    id: 105, category: Category.MECANICA, 
    text: "Entre outros fatores, a durabilidade dos pneus também é determinada por", 
    options: ["manutenção da injeção", "conferir regularmente o alinhamento e o balanceamento das rodas", "troca de câmaras", "balancear o cardan"], 
    correctAnswer: 1 
  },
  { 
    id: 106, category: Category.LEGISLACAO, 
    text: "Para dirigir veículos de transporte de carga cujo peso bruto total exceda a 3.500 kg, a categoria exigida é", 
    options: ["Categoria C", "Categoria B", "Categoria E", "Categoria D"], 
    correctAnswer: 0 
  },
  { 
    id: 107, category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-29, o condutor deve estar alerta devido", 
    options: ["às obras na pista", "à possibilidade de alagamento", "ao risco de acidente por possibilidade de cascalho na via", "à pista irregular"], 
    correctAnswer: 2, imageUrl: IMG.A29 
  },
  { 
    id: 108, category: Category.DIRECAO_DEFENSIVA, 
    text: "São condições adversas, em vias pavimentadas, geradoras de riscos de acidentes", 
    options: ["acostamento em desnível", "presença de óleo e areia na pista", "pavimento em bom estado", "trechos de retas"], 
    correctAnswer: 1 
  },
  { 
    id: 109, category: Category.MECANICA, 
    text: "Um componente cuja má condição representa risco potencial de acidente em velocidade é", 
    options: ["roda trincada", "palheta do limpador ressecada", "rodas desalinhadas", "bateria fraca"], 
    correctAnswer: 0 
  },
  { 
    id: 110, category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-19, qual deve ser a ação do condutor?", 
    options: ["reduzir a velocidade, pois há depressão", "reduzir a velocidade, pois a via apresenta uma lombada", "reduzir a velocidade, pois é parada de ônibus", "manter a velocidade"], 
    correctAnswer: 1, imageUrl: IMG.A19 
  },
  { 
    id: 111, category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-1, o condutor deve", 
    options: ["seguir sem parar", "parar e acessar a via com segurança", "parar se não estiver na preferencial", "atravessar devagar e com cuidado"], 
    correctAnswer: 1, imageUrl: IMG.R1 
  },
  { 
    id: 112, category: Category.MECANICA, 
    text: "Nos veículos com tração dianteira, a peça que liga o semieixo à roda é a", 
    options: ["ponta cinética", "caixa de câmbio", "junta homocinética", "embreagem"], 
    correctAnswer: 2 
  },
  { 
    id: 113, category: Category.DIRECAO_DEFENSIVA, 
    text: "Para conversão à esquerda em rodovias com acostamento e sem local apropriado, o condutor deve", 
    options: ["cruzar sem parar", "acessar o acostamento à direita, parar e aguardar momento seguro", "parar o veículo no meio da pista", "reduzir e cruzar rápido"], 
    correctAnswer: 1 
  },
  { 
    id: 114, category: Category.MECANICA, 
    text: "Especialmente à noite, ao sinalizar mudança de direção, a manobra será prejudicada se estiverem queimadas as luzes de", 
    options: ["freio", "setas indicadoras de direção", "lanterna", "ré"], 
    correctAnswer: 1 
  },
  { 
    id: 115, category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-33a, o condutor deve redobrar a atenção pois se aproxima de", 
    options: ["área com circulação de escolares e risco de atropelamento", "passagem sinalizada de pedestres", "área de lazer", "crianças brincando"], 
    correctAnswer: 0, imageUrl: IMG.A33a 
  },
  { 
    id: 116, category: Category.MECANICA, 
    text: "A redução do atrito entre as peças internas do motor é proporcionada pelo(a)", 
    options: ["velas de ignição", "água", "óleo do motor", "fluido de freios"], 
    correctAnswer: 2 
  },
  { 
    id: 117, category: Category.DIRECAO_DEFENSIVA, 
    text: "No trânsito, o condutor deve ter percepção e respeito, observando", 
    options: ["preferencialmente os retrovisores e a pista à frente", "fixamente a via à frente", "periodicamente o painel", "constantemente todo o ambiente no trânsito à sua volta"], 
    correctAnswer: 3 
  },
  { 
    id: 118, category: Category.DIRECAO_DEFENSIVA, 
    text: "O condutor que, na ultrapassagem por outro veículo, mantém ou diminui a velocidade está", 
    options: ["dificultando a ultrapassagem", "provocando o outro condutor", "retardando o fluxo", "agindo com prudência, facilitando a ultrapassagem e indo a favor do bom convívio"], 
    correctAnswer: 3 
  },
  { 
    id: 119, category: Category.MEIO_AMBIENTE, 
    text: "O bom relacionamento no trânsito se deve ao", 
    options: ["controle emocional do indivíduo e ao respeito às normas e regulamentos", "respeito às normas apenas", "controle emocional apenas", "respeito ao cidadão apenas"], 
    correctAnswer: 0 
  },
  { 
    id: 120, category: Category.LEGISLACAO, 
    text: "A distância mínima que deve ser observada em relação às esquinas para estacionar é de", 
    options: ["5 metros", "4 metros", "3 metros", "2 metros"], 
    correctAnswer: 0 
  },
  { 
    id: 121, category: Category.PRIMEIROS_SOCORROS, 
    text: "Em caso de atendimento a vítima que apresenta sangramento, é aconselhável", 
    options: ["estancar com torniquete", "oferecer água", "usar luva de borracha para evitar contaminações", "ministrar analgésico"], 
    correctAnswer: 2 
  },
  { 
    id: 122, category: Category.LEGISLACAO, 
    text: "A CNH e a PPD terão validade para a condução do veículo quando forem", 
    options: ["comprovadas por meio físico e/ou digital", "cópias autenticadas em cartório", "cópias autenticadas pelo Detran", "apresentadas com a Carteira de Identidade"], 
    correctAnswer: 0 
  },
  { 
    id: 123, category: Category.SINALIZACAO, 
    text: "A placa de advertência A-32b alerta o condutor para trecho com", 
    options: ["fiscalização", "obras", "passagem sinalizada de pedestres", "alto índice de atropelamento"], 
    correctAnswer: 2, imageUrl: IMG.A32b 
  },
  { 
    id: 124, category: Category.DIRECAO_DEFENSIVA, 
    text: "Para evitar acidentes envolvendo motociclistas, o motorista deve ficar atento", 
    options: ["à distância lateral e frontal de motocicletas", "somente às motocicletas com farol aceso", "somente a motocicletas pela esquerda", "somente a motocicletas pela direita"], 
    correctAnswer: 0 
  },
  { 
    id: 125, category: Category.PRIMEIROS_SOCORROS, 
    text: "A ação correta do condutor que presta primeiros socorros deve ser:", 
    options: ["retirar o capacete de motociclista", "fazer torniquete na perna", "não movimentar a vítima e aguardar a equipe de socorro", "oferecer água"], 
    correctAnswer: 2 
  },
  { 
    id: 126, category: Category.DIRECAO_DEFENSIVA, 
    text: "A condição adversa que impede o condutor de parar o veículo a tempo de evitar colisão é relacionada ao sistema de", 
    options: ["arrefecimento", "freios desregulados ou com falhas", "iluminação traseira", "direção com folgas"], 
    correctAnswer: 1 
  },
  { 
    id: 127, category: Category.DIRECAO_DEFENSIVA, 
    text: "Um exemplo de risco por condição adversa relacionada com o clima e/ou ambiente é", 
    options: ["pneus descalibrados", "luz do sol incidindo sobre o semáforo, impedindo a identificação das luzes", "sono durante a noite", "via com alterações no asfalto"], 
    correctAnswer: 1 
  },
  { 
    id: 128, category: Category.LEGISLACAO, 
    text: "O condutor infrator será submetido a curso de reciclagem e avaliação psicológica quando", 
    options: ["se envolver em acidente grave para o qual tenha contribuído", "cometer uma infração de natureza grave", "exceder velocidade até 20%", "estacionar a 1 metro da guia"], 
    correctAnswer: 0 
  },
  { 
    id: 129, category: Category.LEGISLACAO, 
    text: "O transporte de criança em motocicleta é permitido a partir de", 
    options: ["dez anos de idade", "quatro anos de idade", "seis anos de idade", "cinco anos de idade"], 
    correctAnswer: 0 
  },
  { 
    id: 130, category: Category.MECANICA, 
    text: "O freio do tipo ABS torna mais segura a frenagem pois", 
    options: ["evita que a roda bloqueie e o veículo derrape", "aplica força menor na frente", "aplica força menor atrás", "bloqueia todas as rodas simultaneamente"], 
    correctAnswer: 0 
  },
  { 
    id: 131, category: Category.PRIMEIROS_SOCORROS, 
    text: "Indique a maneira mais correta de verificar hemorragia na vítima", 
    options: ["pelo pulso", "pela medula", "pela observação de sangramentos pelo nariz, boca ou ferimentos", "pelo inchaço"], 
    correctAnswer: 2 
  },
  { 
    id: 132, category: Category.DIRECAO_DEFENSIVA, 
    text: "Quais condições da via comprometem a visibilidade do condutor?", 
    options: ["pistas esburacadas", "pistas irregulares", "retas planas", "curvas, aclives e declives"], 
    correctAnswer: 3 
  },
  { 
    id: 133, category: Category.LEGISLACAO, 
    text: "Ultrapassar outro veículo pelo acostamento em interseções terá como penalidade", 
    options: ["retenção", "remoção", "recolhimento da CNH", "multa"], 
    correctAnswer: 3 
  },
  { 
    id: 134, category: Category.LEGISLACAO, 
    text: "Crianças menores de 10 anos e com menos de 1,45m devem ir no banco traseiro, exceto quando", 
    options: ["o condutor estiver sozinho", "em emergência", "tiver mais de 1,20m", "o veículo for dotado exclusivamente de bancos dianteiros"], 
    correctAnswer: 3 
  },
  { 
    id: 135, category: Category.DIRECAO_DEFENSIVA, 
    text: "Granizo e chuva são classificados como condições adversas de", 
    options: ["veículo", "trânsito", "luz", "tempo"], 
    correctAnswer: 3 
  },
  { 
    id: 136, category: Category.SINALIZACAO, 
    text: "A placa de advertência A-11b alerta o condutor sobre", 
    options: ["escolas", "animais", "obras", "junção com duas vias laterais, a primeira à direita"], 
    correctAnswer: 3, imageUrl: IMG.A11b 
  },
  { 
    id: 137, category: Category.DIRECAO_DEFENSIVA, 
    text: "Ofuscamento e chuva são fatores classificados como condições de", 
    options: ["tempo e trânsito", "luz e trânsito", "trânsito e estrada", "luz e tempo"], 
    correctAnswer: 3 
  },
  { 
    id: 138, category: Category.PRIMEIROS_SOCORROS, 
    text: "Em casos de acidente com perda de consciência e falta de batimentos, o condutor deve informar sinais de", 
    options: ["crise de asma", "infecção", "hemorragia interna", "parada cardiorrespiratória"], 
    correctAnswer: 3 
  },
  { 
    id: 139, category: Category.DIRECAO_DEFENSIVA, 
    text: "Para evitar colisão em caso de freada brusca do veículo à frente, a ação é", 
    options: ["frear bruscamente", "manter distância apenas se pressentir perigo", "dirigir com atenção sem se preocupar com distância", "manter distância de seguimento e estar atento para frear a tempo"], 
    correctAnswer: 3 
  },
  { 
    id: 140, category: Category.LEGISLACAO, 
    text: "A pessoa que pretende habilitar-se na categoria \"D\" deverá", 
    options: ["estar habilitado há um ano na D", "estar habilitado há dois anos na B ou um na A", "estar habilitado há um ano na B ou dois na C", "estar habilitado há dois anos na B ou um na C"], 
    correctAnswer: 3 
  },
  { 
    id: 141, category: Category.MECANICA, 
    text: "Em um motor, os componentes do sistema de alimentação são", 
    options: ["vela e bobina", "bomba e bobina", "ignição", "carburador e injeção eletrônica"], 
    correctAnswer: 3 
  },
  { 
    id: 142, category: Category.LEGISLACAO, 
    text: "Caracteriza-se crime de trânsito conduzir veículo com concentração de álcool por litro de sangue superior a", 
    options: ["6 decigramas", "8 decigramas", "4 decigramas", "2 decigramas"], 
    correctAnswer: 0 
  },
  { 
    id: 143, category: Category.PRIMEIROS_SOCORROS, 
    text: "O equipamento necessário para auxiliar em acidente de trânsito é o", 
    options: ["pneus 1,6mm", "sistema escapamento", "luzes freio", "triângulo de segurança"], 
    correctAnswer: 3 
  },
  { 
    id: 144, category: Category.LEGISLACAO, 
    text: "Segundo o CTB, quanto à tração, os veículos classificam-se em", 
    options: ["motos e triciclos", "trator e caminhão", "camioneta", "automotor, elétrico, propulsão humana, tração animal, reboque"], 
    correctAnswer: 3 
  },
  { 
    id: 145, category: Category.DIRECAO_DEFENSIVA, 
    text: "Ao observar um buraco a distância, para evitar acidentes com motociclistas o condutor deve", 
    options: ["frear bruscamente", "reduzir a velocidade e sinalizar com antecedência", "aumentar e mudar faixa", "não sinalizar"], 
    correctAnswer: 1 
  },
  { 
    id: 146, category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-3, qual deve ser a ação?", 
    options: ["seguir se não houver veículo vindo", "não deverá seguir em frente, pois é proibido", "emergência pode", "morador pode"], 
    correctAnswer: 1, imageUrl: IMG.R3 
  },
  { 
    id: 147, category: Category.MECANICA, 
    text: "O sistema elétrico é responsável principalmente pelo acionamento", 
    options: ["da ignição e acessórios", "direção hidráulica", "pedal embreagem", "suspensão"], 
    correctAnswer: 0 
  },
  { 
    id: 148, category: Category.SINALIZACAO, 
    text: "As placas S-5, S-11 e S-14 indicam respectivamente:", 
    options: ["pronto-socorro, aeroporto e ponto de parada", "camping", "turística", "rodoviário"], 
    correctAnswer: 0, imageUrl: IMG.S14 
  },
  { 
    id: 149, category: Category.LEGISLACAO, 
    text: "Equipamentos obrigatórios para bicicletas aro > 20:", 
    options: ["campainha, espelho esquerdo e luzes", "direção apenas", "pisca-alerta", "apenas lateral"], 
    correctAnswer: 0 
  },
  { 
    id: 150, category: Category.SINALIZACAO, 
    text: "A placa R-31 obriga pedestre andar à direita. O condutor deve atentar para:", 
    options: ["crianças esquerda", "escolares", "pedestres à direita", "pedestres esquerda"], 
    correctAnswer: 2, imageUrl: IMG.R31 
  },
  { 
    id: 151, category: Category.LEGISLACAO, 
    text: "Ultrapassar pela direita é infração média, exceto se", 
    options: ["carro frente lento", "ele permitir", "ele estiver na faixa certa e sinalizar esquerda", "qualquer situação"], 
    correctAnswer: 2 
  },
  { 
    id: 152, category: Category.MECANICA, 
    text: "Para reter impurezas do combustível é necessário trocar o filtro", 
    options: ["de combustível", "de ar", "de óleo", "AC"], 
    correctAnswer: 0 
  },
  { 
    id: 153, category: Category.SINALIZACAO, 
    text: "A placa R-36a indica que", 
    options: ["permitida circulação ciclistas e pedestres", "ciclistas devem andar à esquerda e pedestres à direita", "proibida circulação", "lado a lado"], 
    correctAnswer: 1, imageUrl: IMG.R36a 
  },
  { 
    id: 154, category: Category.DIRECAO_DEFENSIVA, 
    text: "Distância do tirar pé do acelerador até colocar no pedal de freio é a", 
    options: ["distância de reação", "frenagem", "seguimento", "parada"], 
    correctAnswer: 0 
  },
  { 
    id: 155, category: Category.LEGISLACAO, 
    text: "Pane por falta de combustível resulta em", 
    options: ["multa leve", "não infração", "infração média, multa e remoção", "multa apenas"], 
    correctAnswer: 2 
  },
  { 
    id: 156, category: Category.SINALIZACAO, 
    text: "A placa A-12 alerta para situação de risco relacionada a", 
    options: ["interseção três vias", "interseção em círculo (rotatória)", "retorno", "preferência"], 
    correctAnswer: 1, imageUrl: IMG.A12 
  },
  { 
    id: 157, category: Category.LEGISLACAO, 
    text: "Documento suficiente para conduzir ciclomotor:", 
    options: ["CRLV", "ACC", "Categoria B", "Qualquer categoria"], 
    correctAnswer: 1 
  },
  { 
    id: 158, category: Category.DIRECAO_DEFENSIVA, 
    text: "Para evitar ofuscamento por farol alto contrário, deve-se", 
    options: ["farol alto também", "pisca-alerta", "apagar luzes", "desviar visão para referência na faixa à direita"], 
    correctAnswer: 3 
  },
  { 
    id: 159, category: Category.MECANICA, 
    text: "Emergências elétricas evitadas com manutenção de", 
    options: ["cabos e partida", "carburação", "correias", "escape"], 
    correctAnswer: 0 
  },
  { 
    id: 160, category: Category.SINALIZACAO, 
    text: "Diante da placa A-1b, reduzir velocidade pois a via apresenta", 
    options: ["sinuosa à direita", "curva fechada esquerda", "curva acentuada à direita", "sinuosa esquerda"], 
    correctAnswer: 2, imageUrl: IMG.A1b 
  },
  { 
    id: 161, category: Category.SINALIZACAO, 
    text: "Diante da placa R-11, qual a ação do condutor?", 
    options: ["animais silvestres", "animais apenas", "veículos carga", "proibido o trânsito de veículos de tração animal"], 
    correctAnswer: 3, imageUrl: IMG.R11 
  },
  { 
    id: 162, category: Category.SINALIZACAO, 
    text: "A placa R-17 estabelece preservação da via observando", 
    options: ["largura máxima", "peso carga", "peso máximo por eixo", "tara"], 
    correctAnswer: 2, imageUrl: IMG.R17 
  },
  { 
    id: 163, category: Category.SINALIZACAO, 
    text: "A placa R-40 proíbe carrinhos de mão. O condutor deve:", 
    options: ["não se importar", "dirigir sem preocupação", "ignorar", "redobrar a atenção pela possível presença irregular"], 
    correctAnswer: 3, imageUrl: IMG.R40 
  },
  { 
    id: 164, category: Category.DIRECAO_DEFENSIVA, 
    text: "Equipamento obrigatório para proteger ocupantes em acidente:", 
    options: ["retrovisor", "chave roda", "triângulo", "cinto de segurança"], 
    correctAnswer: 3 
  },
  { 
    id: 165, category: Category.SINALIZACAO, 
    text: "Diante da placa A-2a, reduzir velocidade pois a via apresenta", 
    options: ["curva esquerda", "sinuosa", "curva S", "curva à direita"], 
    correctAnswer: 3, imageUrl: IMG.A2a 
  },
  { 
    id: 166, category: Category.MEIO_AMBIENTE, 
    text: "Principais causadores da poluição do ar nos grandes centros:", 
    options: ["veículos automotores e indústrias", "fábricas", "usinas", "queimadas"], 
    correctAnswer: 0 
  },
  { 
    id: 167, category: Category.LEGISLACAO, 
    text: "Para virar esquerda em vias urbanas de duplo sentido, deve-se", 
    options: ["atingir linha divisória e ceder passagem", "forçar passagem", "pisca-alerta", "aguardar direita"], 
    correctAnswer: 0 
  },
  { 
    id: 168, category: Category.MEIO_AMBIENTE, 
    text: "Falta de consciência ambiental é observada quando o condutor", 
    options: ["vazamento óleo", "substitui silencioso", "troca pneus", "deixa cair parte da carga ou descarta peças na via"], 
    correctAnswer: 3 
  },
  { 
    id: 169, category: Category.SINALIZACAO, 
    text: "Diante da placa A-16, estar alerta pois há circulação de", 
    options: ["locomotiva", "reboque", "bonde", "ônibus elétrico"], 
    correctAnswer: 2, imageUrl: IMG.A16 
  },
  { 
    id: 170, category: Category.LEGISLACAO, 
    text: "Linhas duplas contínuas amarelas representam", 
    options: ["ultrapassagem permitida um sentido", "permitida dois sentidos", "ultrapassagem proibida para os dois sentidos", "proibida um sentido"], 
    correctAnswer: 2 
  },
  { 
    id: 171, category: Category.SINALIZACAO, 
    text: "A placa R-22 indica como providência a", 
    options: ["troca pneus barro", "utilização de correntes nos pneus", "pneus lisos", "calibragem"], 
    correctAnswer: 1, imageUrl: IMG.R22 
  },
  { 
    id: 172, category: Category.SINALIZACAO, 
    text: "A placa A-44 alerta para trecho de via", 
    options: ["sujeito a ventos fortes que podem desestabilizar", "inundação", "animais", "incêndio"], 
    correctAnswer: 0, imageUrl: IMG.A44 
  },
  { 
    id: 173, category: Category.LEGISLACAO, 
    text: "Recebendo PPD na categoria B, pode conduzir passeio até", 
    options: ["carga articulada", "acima 3.500kg", "3.500 kg e lotação até oito lugares", "acima 8 lugares"], 
    correctAnswer: 2 
  },
  { 
    id: 174, category: Category.SINALIZACAO, 
    text: "A placa R-27 estabelece que veículos de grande porte", 
    options: ["proibida circulação", "faixa esquerda", "devem circular pela faixa direita da via", "não parar"], 
    correctAnswer: 2, imageUrl: IMG.R27 
  },
  { 
    id: 175, category: Category.LEGISLACAO, 
    text: "O embarque/desembarque de passageiros deve ocorrer", 
    options: ["sempre do lado da calçada", "lado rua", "lado esquerdo", "qualquer lado"], 
    correctAnswer: 0 
  },
  { 
    id: 176, category: Category.MECANICA, 
    text: "Eletricidade para o motor de arranque provém", 
    options: ["alternador", "ignição", "da bateria", "velas"], 
    correctAnswer: 2 
  },
  { 
    id: 177, category: Category.SINALIZACAO, 
    text: "A placa A-39 alerta cruzamento ferroviário", 
    options: ["sem barreira", "com barreira", "obstáculo", "duas vias"], 
    correctAnswer: 0, imageUrl: IMG.A39 
  },
  { 
    id: 178, category: Category.SINALIZACAO, 
    text: "Diante da placa R-29, qual a ação?", 
    options: ["passagem permitida", "passagem proibida", "manter a atenção pois proibido trânsito de pedestres", "não há necessidade velocidade"], 
    correctAnswer: 2, imageUrl: IMG.R29 
  },
  { 
    id: 179, category: Category.SINALIZACAO, 
    text: "A placa R-35a indica que ciclista", 
    options: ["faixa direita", "está obrigado a circular pelo lado esquerdo da via", "faixa exclusiva", "lado direito"], 
    correctAnswer: 1, imageUrl: IMG.R35a 
  },
  { 
    id: 180, category: Category.SINALIZACAO, 
    text: "A placa A-45 informa que a rua", 
    options: ["autorização", "particular", "não tem continuidade", "exclusiva moradores"], 
    correctAnswer: 2, imageUrl: IMG.A45 
  }
];
