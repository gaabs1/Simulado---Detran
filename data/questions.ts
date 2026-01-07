
import { Category, Question } from '../types';

export const QUESTIONS: Question[] = [
  { 
    id: 1, 
    category: Category.MECANICA, 
    text: "O controle da temperatura de um motor é realizado pelo sistema de:", 
    options: ["resfriamento ou arrefecimento", "carburação e ventilação forçada", "ventilação forçada e freio", "velas e ventilação circulante"], 
    correctAnswer: 0 
  },
  { 
    id: 2, 
    category: Category.MEIO_AMBIENTE, 
    text: "Os fatores que interferem positivamente para que o trânsito seja humano e seguro são:", 
    options: ["educação, habilidades, atenção, cooperação e solidariedade", "individualismo, habilidades, atenção, cooperação e solidariedade", "educação, egoísmo, atenção, cooperação e solidariedade", "educação, habilidades, displicência, cooperação e solidariedade"], 
    correctAnswer: 0 
  },
  { 
    id: 3, 
    category: Category.LEGISLACAO, 
    text: "A velocidade máxima permitida em rodovias de pista dupla, nas quais não exista sinalização regulamentadora, para automóveis, camionetas e motocicletas, é de:", 
    options: ["110 km/h", "80 km/h", "90 km/h", "60 km/h"], 
    correctAnswer: 0 
  },
  { 
    id: 4, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "'Pontos cegos' são regiões da via em que veículos podem ficar escondidos momentaneamente do campo de visão dos espelhos. O procedimento que ajuda a minimizar esse problema é o ajuste:", 
    options: ["do espelho externo, apenas", "dos espelhos externos e internos para maior campo de visão traseira e lateral", "do espelho interno, apenas", "do espelho interno voltado para a lateral esquerda"], 
    correctAnswer: 1 
  },
  { 
    id: 5, 
    category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-39 indica que a área, via ou faixa:", 
    options: ["impede a circulação de caminhões e furgões", "se destina à circulação exclusiva de caminhões do tipo furgão", "se destina, exclusivamente, para a circulação de caminhões", "se destina à circulação de veículos de transporte de produtos perecíveis"], 
    correctAnswer: 2 
  },
  { 
    id: 6, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-4a (Proibido virar à esquerda), qual deve ser a ação do condutor?", 
    options: ["deve virar à esquerda", "não deve virar à esquerda", "não deve virar à direita", "deve virar à direita"], 
    correctAnswer: 1 
  },
  { 
    id: 7, 
    category: Category.PRIMEIROS_SOCORROS, 
    text: "Ao se procurar desobstruir as vias aéreas de uma vítima de acidente, não se deve movimentar sua cabeça, pois poderá ocorrer:", 
    options: ["fratura dos membros inferiores", "lesão na coluna", "traumatismo craniano", "fratura da bacia"], 
    correctAnswer: 1 
  },
  { 
    id: 8, 
    category: Category.LEGISLACAO, 
    text: "Os requisitos necessários, dentre outros, para obter a Carteira Nacional de Habilitação (CNH) são:", 
    options: ["ter concluído o Ensino Médio", "ter concluído o Ensino Fundamental", "saber ler e escrever", "estar matriculado no Ensino Fundamental"], 
    correctAnswer: 2 
  },
  { 
    id: 9, 
    category: Category.LEGISLACAO, 
    text: "A validade da Permissão para Dirigir (PPD) é de:", 
    options: ["seis meses", "dois anos", "um ano", "três meses"], 
    correctAnswer: 2 
  },
  { 
    id: 10, 
    category: Category.SINALIZACAO, 
    text: "A linha simples contínua de divisão de fluxo, na cor amarela, dividindo a via em duas mãos direcionais indica que:", 
    options: ["a ultrapassagem é permitida", "os deslocamentos laterais são permitidos", "a ultrapassagem e os deslocamentos laterais são proibidos", "a ultrapassagem e os deslocamentos laterais são permitidos"], 
    correctAnswer: 2 
  },
  { 
    id: 11, 
    category: Category.LEGISLACAO, 
    text: "Quando o motorista estacionar junto de hidrantes de incêndio devidamente identificados, terá como medida administrativa:", 
    options: ["remoção do veículo", "recolhimento da CNH", "retenção do veículo", "recolhimento do CRLV"], 
    correctAnswer: 0 
  },
  { 
    id: 12, 
    category: Category.MECANICA, 
    text: "Para que os cilindros do motor realizem o ciclo de funcionamento, é necessário que ocorra:", 
    options: ["o fornecimento de energia mecânica pela bateria", "a queima do óleo nos cilindros", "o funcionamento das válvulas de admissão e de escape", "o funcionamento da ignição eletrônica e do carburador"], 
    correctAnswer: 2 
  },
  { 
    id: 13, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-6c (Proibido parar e estacionar), qual deve ser a ação do condutor?", 
    options: ["pode colocar o veículo para operações de carga e descarga", "pode colocar o veículo para embarque e desembarque", "pode colocar o veículo aos sábados, domingos e feriados", "em nenhuma hipótese pode parar ou estacionar o veículo na extensão indicada"], 
    correctAnswer: 3 
  },
  { 
    id: 14, 
    category: Category.LEGISLACAO, 
    text: "Estacionar o veículo no passeio (calçada) ou sobre a faixa destinada a pedestres é considerada infração:", 
    options: ["leve", "gravíssima", "média", "grave"], 
    correctAnswer: 3 
  },
  { 
    id: 15, 
    category: Category.MECANICA, 
    text: "A estabilidade de um veículo nas retas e curvas é garantida pela manutenção dos sistemas:", 
    options: ["de freios e de rodagem", "de suspensão e de transmissão", "de transmissão e de direção", "de direção e de suspensão"], 
    correctAnswer: 3 
  },
  { 
    id: 16, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Chuva e freios deficientes são condições adversas relacionadas, respectivamente, com:", 
    options: ["via e veículo", "via e condutor", "clima e condutor", "clima e/ou ambiente e veículo"], 
    correctAnswer: 3 
  },
  { 
    id: 17, 
    category: Category.MEIO_AMBIENTE, 
    text: "A convivência social no trânsito é facilitada se o condutor:", 
    options: ["demonstrar agilidade no manuseio dos equipamentos", "conhecer como funciona o motor do veículo", "entrar em atrito com outros condutores se julgar ter a razão", "conhecer e cumprir as regras de circulação e de conduta"], 
    correctAnswer: 3 
  },
  { 
    id: 18, 
    category: Category.PRIMEIROS_SOCORROS, 
    text: "Ao solicitar resgate para atender vítimas de um acidente, deve-se:", 
    options: ["informar a localização e liberar vias aéreas da vítima", "isolar a área e fazer mutirão com outros condutores", "informar o tipo de acidente e retirar a vítima imediatamente", "informar identificação do solicitante, localização, estado das vítimas e tipo de acidente"], 
    correctAnswer: 3 
  },
  { 
    id: 19, 
    category: Category.MECANICA, 
    text: "No sistema de arrefecimento à água do motor, os componentes básicos são:", 
    options: ["válvula termostática, reservatório e alternador", "termômetro, radiador, água com solução e bomba de expansão", "bomba-d'água, câmaras de resfriamento e correia de ventilação", "radiador, bomba-d'água e depósito de expansão do radiador"], 
    correctAnswer: 3 
  },
  { 
    id: 20, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Situações de risco que reduzem a aderência entre pneus e a pista dificultando frenagens são:", 
    options: ["rodas trincadas e suspensão deficiente", "neblina densa e fumaça de queimadas", "depressões e lombadas no pavimento", "barro em estradas de terra e lâmina de água sobre a pista"], 
    correctAnswer: 3 
  },
  { 
    id: 21, 
    category: Category.LEGISLACAO, 
    text: "As vias rurais abertas à circulação de veículos classificam-se em:", 
    options: ["via de trânsito rápido e arterial", "via arterial, coletora e local", "rodovias e estradas", "via de trânsito rápido, arterial, coletora, local, rodovias e estradas"], 
    correctAnswer: 2 
  },
  { 
    id: 22, 
    category: Category.PRIMEIROS_SOCORROS, 
    text: "As três regras fundamentais de primeiros socorros são:", 
    options: ["tranquilizar o acidentado e fazer massagem local", "aquecer o acidentado com bebida quente", "afastar curiosos, telefonar para resgate e oferecer água", "não entrar em pânico, pensar nas condutas e avaliar riscos para o acidentado"], 
    correctAnswer: 3 
  },
  { 
    id: 23, 
    category: Category.LEGISLACAO, 
    text: "O candidato à habilitação deverá submeter-se a exames na seguinte ordem:", 
    options: ["aptidão física e mental; escrito; e de direção veicular", "escrito; aptidão física e mental; e de direção veicular", "de direção veicular; aptidão física e mental; e escrito", "aptidão física e mental; de direção veicular e escrito"], 
    correctAnswer: 0 
  },
  { 
    id: 24, 
    category: Category.PRIMEIROS_SOCORROS, 
    text: "Um condutor pode agravar o estado de saúde da vítima de acidente se:", 
    options: ["não retirar o capacete de um motociclista", "soltar o cinto de segurança da vítima presa ao veículo", "prestar o maior número de informações à equipe de emergência", "oferecer alimentos ou bebidas para os acidentados"], 
    correctAnswer: 3 
  },
  { 
    id: 25, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Em curvas com sobrelevação negativa (inclinação para fora), a redução da velocidade evita o risco de:", 
    options: ["derrapagem por perda total de aderência", "perda total do sistema de freios", "estouro do pneu traseiro por esforço", "deslocamento do veículo para a contramão devido à força centrífuga"], 
    correctAnswer: 3 
  },
  { 
    id: 26, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa R-25d, qual deve ser a interpretação do condutor quanto ao sentido de circulação?", 
    options: ["é proibido seguir em frente ou à direita", "é obrigatório seguir em frente ou à esquerda", "é obrigatório seguir à esquerda", "é obrigatório seguir em frente ou à direita"], 
    correctAnswer: 3 
  },
  { 
    id: 27, 
    category: Category.MECANICA, 
    text: "Sobre o estado dos freios e sua relação com a segurança, afirma-se que:", 
    options: ["freios em bom estado eliminam a aquaplanagem", "não é necessário descer vias em declive engrenado", "boa conservação elimina necessidade de manter distância", "quanto mais eficientes forem os freios, mais segurança haverá nas frenagens"], 
    correctAnswer: 3 
  },
  { 
    id: 28, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa de regulamentação R-5a (Proibido retornar à esquerda), qual deve ser a ação do condutor?", 
    options: ["deve retornar na via", "não deve virar à direita", "deve virar à esquerda na via", "não deve retornar na via"], 
    correctAnswer: 3 
  },
  { 
    id: 29, 
    category: Category.LEGISLACAO, 
    text: "Transitar pela contramão em vias de sentido único é uma infração:", 
    options: ["média", "grave", "leve", "gravíssima"], 
    correctAnswer: 3 
  },
  { 
    id: 30, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "A baixa calibragem dos pneus:", 
    options: ["reduz sua vida útil", "aumenta a capacidade de frenagem", "favorece a estabilidade em curvas", "aumenta sua vida útil"], 
    correctAnswer: 0 
  },
  { 
    id: 31, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Entende-se por 'condições adversas':", 
    options: ["situações inadequadas geradas pelas autoridades", "condições pessoais do condutor ou fora do seu controle que podem ser causa de acidentes", "riscos totalmente fora do controle do condutor", "situações normais que por distração geram risco"], 
    correctAnswer: 1 
  },
  { 
    id: 32, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-21a, o condutor deve estar alerta:", 
    options: ["ao estreitamento da pista à esquerda", "ao estreitamento da pista ao centro", "à ponte estreita na pista", "ao alargamento da pista à esquerda"], 
    correctAnswer: 0 
  },
  { 
    id: 33, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "A visibilidade do condutor é mais reduzida ao dirigir:", 
    options: ["em túnel com iluminação pública", "em via urbana iluminada", "à noite, com chuva, garoa ou neblina", "em dia claro com céu azul"], 
    correctAnswer: 2 
  },
  { 
    id: 34, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Sono e vias em véspera de feriados prolongados são classificados como condições adversas de:", 
    options: ["condutor e trânsito", "tempo e condutor", "condutor e via", "via e trânsito"], 
    correctAnswer: 0 
  },
  { 
    id: 35, 
    category: Category.LEGISLACAO, 
    text: "O CTB estabelece regras para todo o território nacional para:", 
    options: ["apenas rodovias e estradas federais", "ruas, avenidas, logradouros, rodovias, estradas, praias e vias internas de condomínios", "apenas ruas e avenidas urbanas", "vias estaduais e municipais somente"], 
    correctAnswer: 1 
  },
  { 
    id: 36, 
    category: Category.LEGISLACAO, 
    text: "A via que se caracteriza por interseções em nível não semaforizadas, destinada ao acesso local, é:", 
    options: ["via arterial", "via coletora", "via local", "via de trânsito rápido"], 
    correctAnswer: 2 
  },
  { 
    id: 37, 
    category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-24b indica:", 
    options: ["início de trecho em declive", "passagem obrigatória à direita", "sentido proibido", "conversão à direita"], 
    correctAnswer: 1 
  },
  { 
    id: 38, 
    category: Category.SINALIZACAO, 
    text: "A placa de advertência A-13a alerta para risco de acidente relacionado a:", 
    options: ["confluência com via lateral à esquerda", "cruzamento movimentado", "passagem de mão única para dupla", "confluência lateral à direita"], 
    correctAnswer: 0 
  },
  { 
    id: 39, 
    category: Category.MECANICA, 
    text: "A velocidade instantânea desenvolvida pelo veículo é indicada no painel pelo:", 
    options: ["termômetro", "velocímetro", "hodômetro", "conta-giros"], 
    correctAnswer: 1 
  },
  { 
    id: 40, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "O condutor que dirigir sob efeito de bebida alcoólica:", 
    options: ["melhora a autoconfiança", "compromete a percepção de riscos e diminui a coordenação motora", "aumenta os reflexos essenciais", "melhora a visão periférica"], 
    correctAnswer: 1 
  },
  { 
    id: 41, 
    category: Category.PRIMEIROS_SOCORROS, 
    text: "Em caso de acidente com vítima, primeiros socorros são:", 
    options: ["providências iniciais e temporárias até a chegada de socorro", "procedimentos exclusivos de médicos", "ações realizadas apenas por profissionais", "atendimento em substituição às equipes de saúde"], 
    correctAnswer: 0 
  },
  { 
    id: 42, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Ao perceber vento lateral forte em uma rodovia, o recomendável é:", 
    options: ["reduzir a velocidade e transitar pelo acostamento", "reduzir a velocidade adequando a marcha para manter estabilidade", "acelerar para aumentar o atrito", "segurar o volante levemente para evitar capotagem"], 
    correctAnswer: 1 
  },
  { 
    id: 43, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa de advertência A-9 (Bifurcação em Y), o condutor deve saber que à frente:", 
    options: ["há estreitamento da via", "há cruzamento entre vias", "a via passa a ter mão dupla", "há bifurcação da via"], 
    correctAnswer: 3 
  },
  { 
    id: 44, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Condição adversa que gera risco potencial de acidente é:", 
    options: ["veículo em bom estado", "dia sem chuva com visibilidade total", "condutor bem disposto e alimentado", "conservação inadequada da via, buracos e sinalização apagada"], 
    correctAnswer: 3 
  },
  { 
    id: 45, 
    category: Category.MEIO_AMBIENTE, 
    text: "Sobre manutenção veicular e meio ambiente, é correto afirmar:", 
    options: ["catalisadores não precisam ser substituídos", "combustíveis aditivados eliminam poluição totalmente", "monóxido de carbono é inofensivo", "abastecer com combustível de procedência e revisões periódicas reduzem gases poluentes"], 
    correctAnswer: 3 
  },
  { 
    id: 46, 
    category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-7 estabelece que é proibida a:", 
    options: ["ultrapassagem", "ultrapassagem de motocicletas", "parada em fila dupla", "circulação de automóveis"], 
    correctAnswer: 0 
  },
  { 
    id: 47, 
    category: Category.SINALIZACAO, 
    text: "A sinalização vertical é classificada de acordo com sua função em:", 
    options: ["placas, marcas de solo e luzes", "proibição, solo e apito", "regulamentação, gestos e buzina", "regulamentação, advertência e indicação"], 
    correctAnswer: 3 
  },
  { 
    id: 48, 
    category: Category.LEGISLACAO, 
    text: "Estacionar em desacordo com as posições estabelecidas no CTB tem como penalidade:", 
    options: ["suspensão do direito de dirigir", "apreensão do veículo", "advertência", "multa"], 
    correctAnswer: 3 
  },
  { 
    id: 49, 
    category: Category.PRIMEIROS_SOCORROS, 
    text: "O melhor local do corpo para verificar pulsação de vítima adulta inconsciente é:", 
    options: ["perna", "pulso", "peito", "pescoço"], 
    correctAnswer: 3 
  },
  { 
    id: 50, 
    category: Category.SINALIZACAO, 
    text: "A placa de regulamentação R-20 proíbe os condutores de:", 
    options: ["utilizar qualquer sinalizador visual", "utilizar aparelho de som no interior", "produzir som alto com a buzina", "acionar buzina ou sinal sonoro"], 
    correctAnswer: 3 
  },
  { 
    id: 51, 
    category: Category.MECANICA, 
    text: "A energia mecânica produzida pelo motor é transmitida às rodas pelo sistema de:", 
    options: ["câmbio", "marchas", "embreagem", "transmissão"], 
    correctAnswer: 3 
  },
  { 
    id: 52, 
    category: Category.LEGISLACAO, 
    text: "Transitar pela contramão em vias de sentido único constitui infração de natureza:", 
    options: ["grave", "média", "leve", "gravíssima"], 
    correctAnswer: 3 
  },
  { 
    id: 53, 
    category: Category.MECANICA, 
    text: "O sistema que liga e desliga a força motriz do motor da parte restante da transmissão é:", 
    options: ["sistema de freios", "correia transmissora", "dínamo", "embreagem"], 
    correctAnswer: 3 
  },
  { 
    id: 54, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa A-12 (Interseção em círculo), o condutor deve:", 
    options: ["passar pelo centro quando não houver veículos", "manter velocidade pois não há risco", "acelerar pois tem preferência", "reduzir a velocidade pois se trata de área de cruzamento"], 
    correctAnswer: 3 
  },
  { 
    id: 55, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa A-4b, o condutor deve reduzir a velocidade pois a via apresenta:", 
    options: ["pista sinuosa", "curva acentuada à esquerda", "curva acentuada em S à direita", "estreitamento de pista à direita"], 
    correctAnswer: 2 
  },
  { 
    id: 56, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Em vias de 60 km/h, qual distância mínima para sinalizar acidente à noite com neblina?", 
    options: ["120 metros ou 120 passos", "60 metros ou 60 passos", "80 metros ou 80 passos", "40 metros ou 40 passos"], 
    correctAnswer: 0 
  },
  { 
    id: 57, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Condutor que pratica direção defensiva é aquele que:", 
    options: ["ultrapassa lentos pelo acostamento", "mantém-se atento ao comportamento dos demais usuários", "desce em declive desengrenado", "usa luz alta sob chuva intensa"], 
    correctAnswer: 1 
  },
  { 
    id: 58, 
    category: Category.SINALIZACAO, 
    text: "As placas educativas têm como função:", 
    options: ["indicar locais de serviços auxiliares", "indicar atrativos turísticos", "orientar sobre destinos geográficos", "orientar usuários quanto ao comportamento adequado e seguro no trânsito"], 
    correctAnswer: 3 
  },
  { 
    id: 59, 
    category: Category.SINALIZACAO, 
    text: "As placas S-2, S-7 e S-13 indicam respectivamente:", 
    options: ["telefone, hotel e ferrovia", "telefone, restaurante e pronto-socorro", "telefone, restaurante e terminal rodoviário", "serviço telefônico, restaurante e terminal ferroviário"], 
    correctAnswer: 3 
  },
  { 
    id: 60, 
    category: Category.LEGISLACAO, 
    text: "Estacionar o veículo ao lado de outro, em fila dupla, tem penalidade de:", 
    options: ["apreensão do veículo", "suspensão do direito de dirigir", "multa", "advertência"], 
    correctAnswer: 2 
  },
  { 
    id: 61, 
    category: Category.LEGISLACAO, 
    text: "A velocidade mínima permitida em vias arteriais sem sinalização regulamentadora é:", 
    options: ["40 km/h", "20 km/h", "30 km/h", "50 km/h"], 
    correctAnswer: 2 
  },
  { 
    id: 62, 
    category: Category.MEIO_AMBIENTE, 
    text: "Um dos meios para evitar a poluição é:", 
    options: ["observar a vida útil dos filtros de ar e óleo", "acelerar com o veículo parado", "manter motor ligado em parada prolongada", "transitar com excesso de carga"], 
    correctAnswer: 0 
  },
  { 
    id: 63, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "O condutor apresenta redução da capacidade de decisão, não podendo dirigir, ao consumir:", 
    options: ["bebidas alcoólicas ou substâncias psicoativas", "refrigerantes dietéticos", "sucos naturais", "café sem açúcar"], 
    correctAnswer: 0 
  },
  { 
    id: 64, 
    category: Category.LEGISLACAO, 
    text: "Desobediência ao sinal vermelho ou parada obrigatória é infração gravíssima punida com:", 
    options: ["multa e remoção", "multa apenas", "multa e apreensão do veículo", "multa e apreensão da CNH"], 
    correctAnswer: 1 
  },
  { 
    id: 65, 
    category: Category.MEIO_AMBIENTE, 
    text: "Transportar animais silvestres sem autorização gera autuação por crimes ambientais de acordo com:", 
    options: ["Ibama", "Detran", "Anvisa", "Denatran"], 
    correctAnswer: 0 
  },
  { 
    id: 66, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Ausência de acostamento em situação de emergência é uma condição adversa relacionada com:", 
    options: ["clima", "condutor", "via", "veículo"], 
    correctAnswer: 2 
  },
  { 
    id: 67, 
    category: Category.MECANICA, 
    text: "Os sulcos dos pneus, com profundidade mínima de 1,6 mm, existem para:", 
    options: ["escoar água e manter o atrito", "reduzir ruído", "garantir estabilidade em alta velocidade", "distinguir marcas de fabricantes"], 
    correctAnswer: 0 
  },
  { 
    id: 68, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Condutor que vai parar no acostamento deve:", 
    options: ["acionar pisca-alerta ainda na pista", "entrar na mesma velocidade que vinha", "acionar seta e entrar rapidamente", "acionar seta, reduzir velocidade, entrar, colocar triângulo e ligar pisca-alerta"], 
    correctAnswer: 3 
  },
  { 
    id: 69, 
    category: Category.SINALIZACAO, 
    text: "As placas S-6, S-8, S-15 e S-16 indicam respectivamente:", 
    options: ["ônibus, borracheiro, pedágio, turismo", "rodoviária, mecânico, turismo, pedágio", "ônibus, borracheiro, turismo, pedágio", "terminal rodoviário, borracheiro, informação turística e pedágio"], 
    correctAnswer: 3 
  },
  { 
    id: 70, 
    category: Category.MECANICA, 
    text: "Equipamentos que garantem segurança em curvas e frenagens e devem estar em boas condições:", 
    options: ["amortecedores e pisca-alerta", "pisca-alerta e faróis", "suspensão e faróis", "suspensão e amortecedores"], 
    correctAnswer: 3 
  },
  { 
    id: 71, 
    category: Category.MEIO_AMBIENTE, 
    text: "São fontes de poluição sonora veicular:", 
    options: ["baterias com vazamento", "combustível adulterado", "pneus usados", "escapamento aberto e aparelhos de som"], 
    correctAnswer: 3 
  },
  { 
    id: 72, 
    category: Category.SINALIZACAO, 
    text: "A placa de indicação S-11 informa existência de área de:", 
    options: ["estação ferroviária", "turismo", "estação rodoviária", "aeroporto"], 
    correctAnswer: 3 
  },
  { 
    id: 73, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Conduta adequada do condutor caso ingira bebida alcoólica:", 
    options: ["lavar o rosto com água fria", "ingerir café", "tomar água", "não dirigir em hipótese alguma"], 
    correctAnswer: 3 
  },
  { 
    id: 74, 
    category: Category.SINALIZACAO, 
    text: "Placa R-25c indica que:", 
    options: ["é obrigatório seguir à direita", "é proibido seguir em frente ou esquerda", "é obrigatório seguir em frente ou à direita", "é obrigatório seguir em frente ou à esquerda"], 
    correctAnswer: 3 
  },
  { 
    id: 75, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Após refeição pesada em dia quente, o condutor pode sofrer com a condição adversa de:", 
    options: ["fadiga", "preocupação", "euforia", "sono"], 
    correctAnswer: 3 
  },
  { 
    id: 76, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Falta de aderência do pneu com a pista molhada causa o fenômeno da:", 
    options: ["força centrífuga", "corrente térmica", "corrente aerodinâmica", "aquaplanagem"], 
    correctAnswer: 3 
  },
  { 
    id: 77, 
    category: Category.MECANICA, 
    text: "Sistemas vitais para segurança que requerem providências urgentes se falharem:", 
    options: ["freios, catalisador e pneus", "pneus, rodas e escapamento", "catalisador, direção e rodas", "freios, suspensão e pneus"], 
    correctAnswer: 3 
  },
  { 
    id: 78, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Dirigir por muitas horas seguidas sem descanso representa:", 
    options: ["cuidado consigo mesmo", "dedicação à empresa", "espírito profissional", "condição adversa do condutor (fadiga) que gera acidentes"], 
    correctAnswer: 3 
  },
  { 
    id: 79, 
    category: Category.PRIMEIROS_SOCORROS, 
    text: "Procedimento correto em parada cardiopulmonar feito por equipe de socorro:", 
    options: ["respiração boca a boca", "ventilação natural", "massagem no coração", "compressão torácica"], 
    correctAnswer: 3 
  },
  { 
    id: 80, 
    category: Category.LEGISLACAO, 
    text: "Veículos com prioridade no trânsito são destinados a:", 
    options: ["polícia e ambulância apenas", "utilidade pública apenas", "rede elétrica apenas", "socorro, polícia, fiscalização e ambulância"], 
    correctAnswer: 3 
  },
  { 
    id: 81, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Situação que causa perda de estabilidade do veículo:", 
    options: ["ausência de acostamento", "ventos fortes laterais", "sinalização apagada", "neblina densa"], 
    correctAnswer: 1 
  },
  { 
    id: 82, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Distância percorrida do acionamento do freio até a parada total:", 
    options: ["percepção", "seguimento", "frenagem", "reação"], 
    correctAnswer: 2 
  },
  { 
    id: 83, 
    category: Category.MEIO_AMBIENTE, 
    text: "Respeito ao pedestre e boa convivência são observados quando o condutor:", 
    options: ["dá prioridade ao pedestre retendo o veículo a distância segura", "avança na direção do pedestre", "para sobre a faixa", "usa buzina ostensiva"], 
    correctAnswer: 0 
  },
  { 
    id: 84, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Em direção defensiva, o elemento 'decisão' depende de:", 
    options: ["habilidade, tempo, prática, previsão e conhecimento da via/veículo", "apenas experiência", "apenas condições da via", "apenas habilidade"], 
    correctAnswer: 0 
  },
  { 
    id: 85, 
    category: Category.SINALIZACAO, 
    text: "Placas de atrativo turístico têm por objetivo:", 
    options: ["indicar e orientar sobre pontos turísticos", "regulamentar acessos", "advertir perigos", "alertar usuários externos"], 
    correctAnswer: 0 
  },
  { 
    id: 86, 
    category: Category.LEGISLACAO, 
    text: "Velocidade mínima permitida em rodovia de 100 km/h máxima é:", 
    options: ["50 km/h", "60 km/h", "40 km/h", "30 km/h"], 
    correctAnswer: 0 
  },
  { 
    id: 87, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Condições adversas do veículo são:", 
    options: ["revisões em dia", "manutenção periódica", "mau estado de conservação e pneus gastos", "equipamentos obrigatórios funcionando"], 
    correctAnswer: 2 
  },
  { 
    id: 88, 
    category: Category.LEGISLACAO, 
    text: "É considerado crime de trânsito dirigir veículo automotor:", 
    options: ["acima da velocidade permitida", "desobedecendo o agente", "sem estar habilitado e gerando perigo de dano", "deixando de dar passagem a batedores"], 
    correctAnswer: 2 
  },
  { 
    id: 89, 
    category: Category.SINALIZACAO, 
    text: "Diante da placa R-9 (Proibido trânsito de caminhões), o condutor:", 
    options: ["não deverá transitar com caminhões a partir da placa", "não deve levar carga", "pode transitar sem carga", "pode transitar normalmente"], 
    correctAnswer: 0 
  },
  { 
    id: 90, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Ação correta do condutor ao perceber buracos na via:", 
    options: ["parar imediatamente", "reduzir a velocidade usando os freios e ficar atento ao tráfego", "acelerar para passar rápido", "mudar de faixa sem sinalizar"], 
    correctAnswer: 1 
  },
  { 
    id: 91, 
    category: Category.MECANICA, 
    text: "O conjunto da embreagem está localizado entre:", 
    options: ["volante do motor e caixa de mudanças", "semieixos e caixa", "diferencial e eixos", "motor e eixos"], 
    correctAnswer: 0 
  },
  { 
    id: 92, 
    category: Category.LEGISLACAO, 
    text: "Transitar em marcha à ré em distâncias desnecessárias é infração:", 
    options: ["leve", "média", "grave", "gravíssima"], 
    correctAnswer: 2 
  },
  { 
    id: 93, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Atitude que desvia a atenção ao dirigir:", 
    options: ["falar e digitar no celular", "olhar luzes do painel", "mãos no volante", "olhar retrovisores"], 
    correctAnswer: 0 
  },
  { 
    id: 94, 
    category: Category.MEIO_AMBIENTE, 
    text: "Qual material demora mais tempo para se decompor?", 
    options: ["jornal", "pneu", "filtro de cigarro", "papelão"], 
    correctAnswer: 1 
  },
  { 
    id: 95, 
    category: Category.SINALIZACAO, 
    text: "Placa R-30 obriga pedestre a andar à esquerda. O condutor deve atentar para:", 
    options: ["escolares à direita", "pedestres em circulação à esquerda", "crianças à direita", "pedestres à direita"], 
    correctAnswer: 1 
  },
  { 
    id: 96, 
    category: Category.LEGISLACAO, 
    text: "Para habilitar-se na categoria 'E' o condutor deve estar habilitado há no mínimo:", 
    options: ["um ano na categoria 'C'", "dois anos na 'B'", "dois anos na 'A'", "um ano na 'B'"], 
    correctAnswer: 0 
  },
  { 
    id: 97, 
    category: Category.MECANICA, 
    text: "A função do silencioso é:", 
    options: ["aumentar a potência", "controlar poluentes", "reduzir ruídos produzidos pelo motor", "melhorar a queima"], 
    correctAnswer: 2 
  },
  { 
    id: 98, 
    category: Category.LEGISLACAO, 
    text: "Medida administrativa para veículo produzindo fumaça acima dos níveis:", 
    options: ["retenção do veículo para regularização", "suspensão da CNH", "apreensão do veículo", "cassação da CNH"], 
    correctAnswer: 0 
  },
  { 
    id: 99, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Atitude ao constatar fadiga ao dirigir:", 
    options: ["parar para descansar em local seguro", "reclinar o banco e seguir", "resistir ao cansaço", "ingerir bebidas energéticas e seguir"], 
    correctAnswer: 0 
  },
  { 
    id: 100, 
    category: Category.LEGISLACAO, 
    text: "Após aprovado nos exames, o candidato recebe a PPD válida por:", 
    options: ["2 anos", "1 ano", "5 anos", "6 meses"], 
    correctAnswer: 1 
  },
  { 
    id: 101, 
    category: Category.PRIMEIROS_SOCORROS, 
    text: "Em caso de acidente com vítima, o motorista deve:", 
    options: ["dar água à vítima", "transportar ao hospital", "avaliar o estado geral e solicitar socorro", "remover do veículo"], 
    correctAnswer: 2 
  },
  { 
    id: 102, 
    category: Category.LEGISLACAO, 
    text: "Circulação de bicicletas nos passeios públicos é:", 
    options: ["proibida para aros acima de 24", "permitida se largura for maior que 1m", "permitida desde que autorizada e sinalizada pelo órgão", "permitida apenas para crianças"], 
    correctAnswer: 2 
  },
  { 
    id: 103, 
    category: Category.LEGISLACAO, 
    text: "Condutor com PPD que comete infração grave no primeiro ano:", 
    options: ["faz curso de reciclagem", "recebe CNH com multa", "terá de reiniciar todo o processo de habilitação", "mantém a PPD por mais um ano"], 
    correctAnswer: 2 
  },
  { 
    id: 104, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Aquaplanagem é agravada quando:", 
    options: ["profundidade dos sulcos está abaixo do mínimo", "embreagem está gasta", "reduz a velocidade antes da água", "suspensão é nova"], 
    correctAnswer: 0 
  },
  { 
    id: 105, 
    category: Category.MECANICA, 
    text: "Durabilidade dos pneus é determinada por:", 
    options: ["manutenção da injeção", "conferir alinhamento e balanceamento das rodas", "troca de câmaras", "balancear cardan"], 
    correctAnswer: 1 
  },
  { 
    id: 106, 
    category: Category.LEGISLACAO, 
    text: "Habilitação exigida para carga acima de 3.500 kg de PBT:", 
    options: ["Categoria C", "Categoria B", "Categoria E", "Categoria D"], 
    correctAnswer: 0 
  },
  { 
    id: 107, 
    category: Category.SINALIZACAO, 
    text: "Placa A-29 alerta para:", 
    options: ["obras", "alagamento", "riscos de cascalho na via", "pista irregular"], 
    correctAnswer: 2 
  },
  { 
    id: 108, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Condições adversas em vias pavimentadas geradoras de riscos:", 
    options: ["acostamento em desnível", "presença de óleo e areia na pista", "pavimento bom", "trechos de retas"], 
    correctAnswer: 1 
  },
  { 
    id: 109, 
    category: Category.MECANICA, 
    text: "Componente cuja má condição representa risco potencial em velocidade:", 
    options: ["roda trincada", "palheta ressecada", "rodas desalinhadas", "bateria fraca"], 
    correctAnswer: 0 
  },
  { 
    id: 110, 
    category: Category.SINALIZACAO, 
    text: "Placa A-19 (Lombada) exige:", 
    options: ["reduzir pois há depressão", "reduzir pois há lombada", "reduzir pois há parada de ônibus", "manter velocidade"], 
    correctAnswer: 1 
  },
  { 
    id: 111, 
    category: Category.SINALIZACAO, 
    text: "Placa R-1 (Parada Obrigatória) exige que condutor reduza e:", 
    options: ["siga sem parar", "pare e acesse com segurança", "pare apenas se houver preferencial", "atravesse devagar"], 
    correctAnswer: 1 
  },
  { 
    id: 112, 
    category: Category.MECANICA, 
    text: "Peça que liga o semieixo à roda permitindo transmissão nos tração dianteira:", 
    options: ["ponta cinética", "caixa de câmbio", "junta homocinética", "embreagem"], 
    correctAnswer: 2 
  },
  { 
    id: 113, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "Para conversão à esquerda em rodovia sem local apropriado, o condutor deve:", 
    options: ["cruzar sem parar", "acessar acostamento à direita e aguardar momento seguro", "parar na pista no centro", "reduzir e cruzar à esquerda rápido"], 
    correctAnswer: 1 
  },
  { 
    id: 114, 
    category: Category.MECANICA, 
    text: "Manobra noturna prejudicada se estiverem queimadas as luzes de:", 
    options: ["freio", "setas indicadoras de direção", "lanterna", "ré"], 
    correctAnswer: 1 
  },
  { 
    id: 115, 
    category: Category.SINALIZACAO, 
    text: "Placa A-33a alerta para aproximação de:", 
    options: ["área com escolares e risco de atropelamento", "passagem de pedestres", "área de lazer", "crianças brincando"], 
    correctAnswer: 0 
  },
  { 
    id: 116, 
    category: Category.MECANICA, 
    text: "Redução do atrito entre peças internas do motor é proporcionada pelo:", 
    options: ["velas", "água", "óleo do motor", "fluido de freio"], 
    correctAnswer: 2 
  },
  { 
    id: 117, 
    category: Category.DIRECAO_DEFENSIVA, 
    text: "No trânsito, o condutor deve ter percepção e respeito, observando:", 
    options: ["apenas retrovisores", "apenas via à frente", "luzes do painel", "constantemente todo o ambiente ao seu redor"], 
    correctAnswer: 3 
  }
];
