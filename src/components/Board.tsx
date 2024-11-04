import { Box } from '@mui/material';
import Grid from '@mui/material/Grid2'
import CardModal from './CardModal';
import { useEffect, useState } from 'react';
import characters from '../characters/Characters';
import CharacterInterface from '../interfaces/CharacterInterface';

const cols = [1, 2, 3, 4, 5, 6];
const rows = [10, 20, 30, 40, 50, 60];


function Board() {
    const [selectedCard, setSelectedCard] = useState<CharacterInterface | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [playerHand, setPlayerHand] = useState<CharacterInterface[]>([]);

    const onHover = (card: CharacterInterface) => {
        console.log("Mouse Enter", card.name);
        setSelectedCard(card);
        setModalOpen(true);
    };

    const offHover = () => {
        console.log("Mouse Leave");
        setModalOpen(false);
    };

    useEffect(() => {
        const hand = characters.map(character => ({
            id: character.id,
            img: character.img,
            name: character.name,
            ap: character.ap,
            range: character.range,
            power: character.power,
            shield: character.shield,
            life: character.life,
            class: character.class,
            race: character.race,
        }));
        setPlayerHand(hand);
    }, []);

    return (
        <>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <Grid container sx={{ backgroundColor: 'blue', width: '900px', height: '720px' }}>
                {rows.map((row)=> cols.map((col)=> {
                    const id = row+col;
                    return (
                        <Grid key={id} size={{xs: 2}} border='solid 1px' sx={{width: '150px', height: '100px', backgroundColor: 'green'}}>
                            {id}
                        </Grid>
                    )
                }))}

                <Grid display={'flex'} padding={'5px'} sx={{width: '1000px', height: '120px', backgroundColor: 'red'}}>
                    {playerHand.map(card => (
                        <Box key={card.id}
                        onMouseEnter={()=> onHover(card)}
                        onMouseLeave={offHover}
                        sx={{cursor: 'pointer'}}>
                            <img src={card.img} alt="" style={{height: '110px', margin: '2px'}} />
                        </Box>
                    ))}
                </Grid>
            </Grid>

            <CardModal open={modalOpen} onClose={offHover} card={selectedCard}></CardModal>
        </Box>
        </>
    )
}

export default Board;