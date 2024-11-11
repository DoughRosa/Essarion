import { Box } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardModal from "./modals/CardModal";
import { useEffect, useState } from "react";
import characters from "../characters/Characters";
import cards from "../cards/Cards";
import CharacterInterface from "../interfaces/CharacterInterface";
import CardInterface from "../interfaces/CardInterface";
import PlayerHand from "./CardBoxes/PlayerHand";
import PlayerHoster from "../components/CardBoxes/PlayerHoster";
import {
  setSelectedCard,
  setSelectedCharacter,
  setModalOpen,
  setDialogOpen,
  setPlayerHoster,
  setPlayerHand,
  setBoardCharacters,
  setPossibleMoves,
} from "../store/models/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import OptionsDialog from "./modals/OptionsDialog";

const cols = [1, 2, 3, 4, 5, 6];
const rows = [10, 20, 30, 40, 50, 60];

function Board() {
  const [hosterHover, setHosterHover] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  
  const {
    playerHand,
    playerHoster,
    boardCharacters,
    selectedCharacter,
    possibleMoves,
    selectedCard,
    modalOpen,
    dialogOpen,
  } = useAppSelector((state) => state.rootReducers.game);

  const calculatePossibleMoves = (character: CharacterInterface) => {
    const position = character.position;
    const moves: number[] = [];

    const possiblePositions = [
      position-1,
      position+1,
      position-10,
      position+10,
    ];

    possiblePositions.forEach((position) => {
      if (position >= 1 && position <= 66){
        moves.push(position);
      }
    });

    dispatch(setPossibleMoves(moves));
  };

  const gridColor = (id: number) => {
    return possibleMoves.includes(id) ? 'lightgreen' : 'green';
  };

  const handleMoveAction = () =>{
    if (selectedCharacter){
      calculatePossibleMoves(selectedCharacter);
    }
  };

  const handleMoveCharacter = (id: number) => {
    if(selectedCharacter && possibleMoves.includes(id)){
      const updatedCharacter = {...selectedCharacter, position: id};
      const updatedBoard = boardCharacters.map((character) => character.id === selectedCharacter.id ? updatedCharacter : character);

      dispatch(setBoardCharacters(updatedBoard));
    }
  };

  useEffect(() => {
    const hand = cards.map((card) => ({
      id: card.id,
      img: card.img,
      name: card.name,
      cost: card.cost,
      class: card.class,
      type: card.type,
      subtype: card.subtype,
    }));
    dispatch(setPlayerHand(hand));
  }, [dispatch]);
  
  useEffect(() => {
    const hoster = characters.map((character) => ({
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
      position: character.position,
    }));
    dispatch(setPlayerHoster(hoster));
  }, [dispatch]);

  const onHoverCard = (card: CardInterface | null) => {
    dispatch(setSelectedCard(card));
    dispatch(setModalOpen(true));
  };

  const onHoverCharacter = (character: CharacterInterface | null) => {
    dispatch(setSelectedCharacter(character));
    dispatch(setModalOpen(true));
  };

  const onClickCharacter = (character: CharacterInterface | null) => {
    dispatch(setSelectedCharacter(character));
    dispatch(setDialogOpen(true));
  };

  const offHover = () => {
    dispatch(setSelectedCharacter(null));
    dispatch(setSelectedCard(null));
    dispatch(setModalOpen(false));
  };

  const handleSelectedCharacter = (character: CharacterInterface) => {
    dispatch(setSelectedCharacter(character));
  };

  const handleDragStart = (
    e: React.DragEvent,
    character: CharacterInterface
  ) => {
    e.dataTransfer.setData("characterId", character.id.toString());
  };

  const handleDrop = (e: React.DragEvent, targetPosition: number) => {
    const characterId = e.dataTransfer.getData("characterId");
    const character = playerHoster.findIndex((char) => char.id === characterId);

    if (character !== -1 && targetPosition >= 61 && targetPosition <= 66) {
      const characterToMove = { ...playerHoster[character], position: targetPosition }   
      
      const updatedHoster = [
          ...playerHoster.slice(0, character),
          ... playerHoster.slice(character + 1),
         ];
          
          dispatch(setPlayerHoster(updatedHoster));
          dispatch(setBoardCharacters([... boardCharacters, characterToMove]));
          dispatch(setSelectedCharacter(null));
    }
  };
  
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };
  
  return (
    <>
      <PlayerHoster
        hover={() => setHosterHover(true)}
        unHover={() => setHosterHover(false)}
        sx={{ display: playerHoster.length === 0 ? "none" : "flex" }}
        >
        {playerHoster
          .filter((character) => character.position === 0)
          .slice(0, 6)
          .map((character) => (
            <Grid
              key={character.id}
              onMouseEnter={() => onHoverCharacter(character)}
              onMouseLeave={offHover}
              onClick={() => handleSelectedCharacter(character)}
              onDragStart={(e) => handleDragStart(e, character)}
              sx={{ cursor: "pointer" }}
              size={{ xs: 3 }}
            >
              <img
                src={character.img}
                alt={character.name}
                style={{ height: "110px", margin: "2px" }}
              />
            </Grid>
          ))}
      </PlayerHoster>

      <PlayerHand>
        {playerHand.slice(0, 6).map((card) => (
          <Grid
            key={card.id}
            onMouseEnter={() => onHoverCard(card)}
            onMouseLeave={offHover}
            sx={{ cursor: "pointer" }}
            size={{ xs: 3 }}
          >
            <img
              src={card.img}
              alt=""
              style={{ height: "110px", margin: "2px" }}
            />
          </Grid>
        ))}
      </PlayerHand>

      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Grid
          container
          sx={{ backgroundColor: "blue", width: "900px", height: "720px" }}
        >
          {rows.map((row) =>
            cols.map((col) => {
              const id = row + col;
              const characterInCell = boardCharacters.find(
                (character) => character.position === id
              );

              return (
                <Grid
                  key={id}
                  onMouseEnter={(e) => {
                    characterInCell && onHoverCharacter(characterInCell);
                  }}
                  onMouseLeave={offHover}
                  onClick={() => characterInCell ? onClickCharacter(characterInCell) : null}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, id)}
                  size={{ xs: 2 }}
                  border="solid 1px"
                  sx={{
                    width: "150px",
                    height: "120px",
                    backgroundColor:
                      id >= 61 && id <= 66 && selectedCharacter && selectedCharacter.position === 0 
                        ? "lightgreen"
                        : "green",
                    cursor:
                      id >= 61 && id <= 66 && selectedCharacter
                        ? "pointer"
                        : characterInCell
                        ? "pointer"
                        : "default",
                  }}
                >
                  {characterInCell ? (
                    <img
                      src={characterInCell.img}
                      alt={characterInCell.name}
                      style={{ height: "110px", margin: "2px" }}
                    />
                  ) : (
                    id
                  )}
                </Grid>
              );
            })
          )}
        </Grid>

        <Box>
          <CardModal
            open={modalOpen}
            onClose={offHover}
            card={selectedCard ? selectedCard : selectedCharacter}
          ></CardModal>
        </Box>

        <Box>
          <OptionsDialog open={dialogOpen} onClose={offHover} selectedValue={selectedCharacter || null}>
          </OptionsDialog>
        </Box>
      </Box>
    </>
  );
}

export default Board;
