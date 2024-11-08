import CardInterface from '../interfaces/CardInterface';
import ESC031 from '../assets/imagens/Aceleracao.png';
import ESC032 from '../assets/imagens/ArmaduraDeMetal.png';
import ESC033 from '../assets/imagens/AtaqueRetaliativo.png';
import ESC034 from '../assets/imagens/AtaqueVeloz.png';
import ESC035 from '../assets/imagens/AtivacaoDupla.png';
import ESC036 from '../assets/imagens/BatidaDeEscudo.png';
import ESC037 from '../assets/imagens/BotasDeInnobis.png';
import ESC038 from '../assets/imagens/Cura.png';
import ESC039 from '../assets/imagens/EscudoDeMadeira.png';
import ESC040 from '../assets/imagens/EspadaLonga.png';
import ESC041 from '../assets/imagens/EssenciaDaCura.png';
import ESC042 from '../assets/imagens/FintaPerfeita.png';
import ESC043 from '../assets/imagens/InpiracaoCelestial.png';
import ESC044 from '../assets/imagens/LuzSagrada.png';
import ESC045 from '../assets/imagens/MestreDasArmas.png';
import ESC046 from '../assets/imagens/PocaoDaFenix.png';
import ESC047 from '../assets/imagens/PocaoDeCura.png';
import ESC048 from '../assets/imagens/Refletir.png';
import ESC049 from '../assets/imagens/Reviver.png';
import ESC050 from '../assets/imagens/Sacrificio.png';

const cards: CardInterface[] = [
    {
        id: 'ESC031',
        img: ESC031,
        name: 'Aceleração',
        class: 'Guerreiro',
        cost: 4,
        type: 'Magia',
        subtype: 'Fortificação'
    },
    {
        id: 'ESC032',
        img: ESC032,
        name: 'Armadura de Metal',
        class: 'generica',
        cost: 6,
        type: 'equipamento',
        subtype: 'armadura'
    },
    {
        id: 'ESC033',
        img: ESC033,
        name: 'Ataque Retaliativo',
        class: 'Guerreiro',
        cost: 5,
        type: 'Reação',
        subtype: ''
    },
    {
        id: 'ESC034',
        img: ESC034,
        name: 'Ataque Veloz',
        class: 'Guerreiro',
        cost: 4,
        type: 'Ataque',
        subtype: ''
    },
    {
        id: 'ESC035',
        img: ESC035,
        name: 'Ativação Dupla',
        class: 'Guerreiro',
        cost: 6,
        type: 'Talento',
        subtype: ''
    },
    {
        id: 'ESC036',
        img: ESC036,
        name: 'Batida de Escudo',
        class: 'Guerreiro',
        cost: 4,
        type: 'Ataque',
        subtype: ''
    },
    {
        id: 'ESC037',
        img: ESC037,
        name: 'Botas de Innobis',
        class: 'generica',
        cost: 2,
        type: 'Equipamento',
        subtype: 'Botas'
    },
    {
        id: 'ESC038',
        img: ESC038,
        name: 'Cura',
        class: 'Clérigo',
        cost: 2,
        type: 'Magia',
        subtype: 'Cura'
    },
    {
        id: 'ESC039',
        img: ESC039,
        name: 'Escudo de Madeira',
        class: 'generica',
        cost: 2,
        type: 'Equipamento',
        subtype: 'Escudo'
    },
    {
        id: 'ESC040',
        img: ESC040,
        name: 'Espada Longa',
        class: 'Guerreiro',
        cost: 3,
        type: 'Arma',
        subtype: 'Espada'
    },
    {
        id: 'ESC041',
        img: ESC041,
        name: 'Essência da Cura',
        class: 'Clérigo',
        cost: 2,
        type: 'Equipamento',
        subtype: 'Cajado'
    },
    {
        id: 'ESC042',
        img: ESC042,
        name: 'Finta Perfeita',
        class: 'Guerreiro',
        cost: 6,
        type: 'Ataque',
        subtype: ''
    },
    {
        id: 'ESC043',
        img: ESC043,
        name: 'Inspiração Celestial',
        class: 'Clérigo',
        cost: 3,
        type: 'Talento',
        subtype: ''
    },
    {
        id: 'ESC044',
        img: ESC044,
        name: 'Luz Sagrada',
        class: 'Paladino',
        cost: 7,
        type: 'Magia',
        subtype: 'Combate'
    },
    {
        id: 'ESC045',
        img: ESC045,
        name: 'Mestre das Armas',
        class: 'Guerreiro',
        cost: 3,
        type: 'Talento',
        subtype: ''
    },
    {
        id: 'ESC046',
        img: ESC046,
        name: 'Poção da Fênix',
        class: 'generica',
        cost: 5,
        type: 'Item',
        subtype: 'Poção'
    },
    {
        id: 'ESC047',
        img: ESC047,
        name: 'Poção da Cura',
        class: 'generica',
        cost: 3,
        type: 'Item',
        subtype: 'Poção'
    },
    {
        id: 'ESC048',
        img: ESC048,
        name: 'Refletir',
        class: 'Clérigo',
        cost: 4,
        type: 'Reação',
        subtype: ''
    },
    {
        id: 'ESC049',
        img: ESC049,
        name: 'Reviver',
        class: 'Clérigo',
        cost: 7,
        type: 'Magia',
        subtype: 'Cura'
    },
    {
        id: 'ESC050',
        img: ESC050,
        name: 'Sacrificio',
        class: 'Clérigo',
        cost: 5,
        type: 'Talento',
        subtype: ''
    },
];

export default cards;