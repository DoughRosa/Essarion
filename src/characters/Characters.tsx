import dean from './../assets/imagens/Dean.png';
import gil from './../assets/imagens/Gil.png';
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
    }
];

export default characters;