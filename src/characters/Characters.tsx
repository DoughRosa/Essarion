import dean from './../assets/imagens/Dean.png';
import gil from './../assets/imagens/Gil.png';
import lili from './../assets/imagens/Lili.png';
import varon from './../assets/imagens/Varon.png';
import erica from './../assets/imagens/Erica.png';
import darius from './../assets/imagens/Darius.png';
import CharacterInterface from '../interfaces/CharacterInterface';


const characters: CharacterInterface[] = [
    {
        id: 'ESC001',
        img: dean,
        name: 'Dean, Receptaculo Divino',
        ap: 2,
        range: 1,
        power: 4,
        shield: 4,
        life: 17,
        class: 'paladin',
        race: 'human',
    },
    {   
        id: 'ESC002',
        img: gil,
        name: 'Gil, Espada Trovão',
        ap: 2,
        range: 1,
        power: 4,
        shield: 2,
        life: 12,
        class: 'warrior',
        race: 'human',
    },
    {
        id: 'ESC003',
        img: darius,
        name: 'Darius, Guardião da Fé',
        ap: 2,
        range: 2,
        power: 1,
        shield: 1,
        life: 7,
        class: 'Cleric',
        race: 'human',
    },
    {
        id: 'ESC004',
        img: erica,
        name: 'Erica, a Curandeira',
        ap: 2,
        range: 2,
        power: 1,
        shield: 1,
        life: 6,
        class: 'cleric',
        race: 'human',
    },
    {
        id: 'ESC005',
        img: lili,
        name: 'Lili, Celestial Devota',
        ap: 2,
        range: 2,
        power: 2,
        shield: 1,
        life: 7,
        class: 'cleric',
        race: 'human',
    },
    {
        id: 'ESC006',
        img: varon,
        name: 'Varon, Campeã da Arena',
        ap: 2,
        range: 1,
        power: 2,
        shield: 1,
        life: 10,
        class: 'warrior',
        race: 'human',
    },
];

export default characters;