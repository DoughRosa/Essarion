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
  setPlayerHoster,
  setPlayerHand,
} from "../store/models/gameSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const cols = [1, 2, 3, 4, 5, 6];
const rows = [10, 20, 30, 40, 50, 60];

function Board() {

  const [hosterHover, setHosterHover] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { playerHand, playerHoster, selectedCard, selectedCharacter, modalOpen } =
  useAppSelector((state) => state.rootReducers.game);

  const onHoverCard = (card: CardInterface | null) => {
    dispatch(setSelectedCard(card)); 
    dispatch(setModalOpen(true));
  };

  const onHoverCharacter = (character: CharacterInterface | null) => {
    dispatch(setSelectedCharacter(character))
    dispatch(setModalOpen(true));
  };

  const offHover = () => {
    dispatch(setSelectedCharacter(null))
    dispatch(setSelectedCard(null))
    dispatch(setModalOpen(false));
  };

  const handleSelectedCharacter = (character: CharacterInterface) => {
    dispatch(setSelectedCharacter(character));
  };

  const handlePositionCharacter = (position: number) => {
    if (selectedCharacter && position >= 61 && position <= 66) {
      dispatch(
        setPlayerHoster(
          playerHoster.map((character) =>
            character.id === selectedCharacter.id
              ? { ...character, position }
              : character
          )
        )
      );
      dispatch(setSelectedCharacter(null));
    }
  };

  const handleDragStart = (
    e: React.DragEvent,
    character: CharacterInterface
  ) => {
    e.dataTransfer.setData("characterId", character.id.toString());
  };

  const handleDrop = (e: React.DragEvent, targetPosition: number) => {
    const characterId = e.dataTransfer.getData("characterId");
    const character = playerHoster.find((char) => char.id === characterId);

    if (character && targetPosition >= 61 && targetPosition <= 66) {
      dispatch(
        setPlayerHoster(
          playerHoster.map((char) =>
            char.id === character.id
              ? {
                  ...char,
                  position: targetPosition,
                }
              : char
          )
        )
      );
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
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

  return (
    <>
      <PlayerHoster hover={() => setHosterHover(true)} unHover={() => setHosterHover(false)}>
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
              const characterInCell = playerHoster.find(
                (character) => character.position === id
              );
              return (
                <Grid
                  key={id}
                  onClick={() => handlePositionCharacter(id)}
                  onMouseEnter={(e) =>
                    {
                      characterInCell && onHoverCharacter(characterInCell)
                    }
                  }
                  onMouseLeave={offHover}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, id)}
                  size={{ xs: 2 }}
                  border="solid 1px"
                  sx={{
                    width: "150px",
                    height: "120px",
                    backgroundColor:
                      id >= 61 && id <= 66 && hosterHover
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
      </Box>
    </>
  );
}

export default Board;