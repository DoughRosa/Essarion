import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CardInterface from "../../interfaces/CardInterface";
import CharacterInterface from "../../interfaces/CharacterInterface";

interface GameState {
  playerHand: CardInterface[];
  playerHoster: CharacterInterface[];
  boardCharacters: CharacterInterface[];
  possibleMoves: number[];
  selectedCard: CardInterface | null;
  selectedCharacter: CharacterInterface | null;
  modalOpen: boolean;
  dialogOpen: boolean;
}

const initialState: GameState = {
  playerHand: [],
  playerHoster: [],
  boardCharacters: [],
  possibleMoves: [],
  selectedCard: null,
  selectedCharacter: null,
  modalOpen: false,
  dialogOpen: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayerHand: (state, action: PayloadAction<CardInterface[]>) => {
      state.playerHand = action.payload;
    },
    setPossibleMoves: (state, action: PayloadAction<number[]>) => {
      state.possibleMoves = action.payload;
    },
    setPlayerHoster: (state, action: PayloadAction<CharacterInterface[]>) => {
      state.playerHoster = action.payload;
    },
    setBoardCharacters: (state, action: PayloadAction<CharacterInterface[]>) => {
      state.boardCharacters = action.payload;
    },
    setSelectedCard: (state, action: PayloadAction<CardInterface | null>) => {
      state.selectedCard = action.payload;
    },
    setSelectedCharacter: (
      state,
      action: PayloadAction<CharacterInterface | null>
    ) => {
      state.selectedCharacter = action.payload;
    },
    setModalOpen: (state, action: PayloadAction<boolean>) => {
      state.modalOpen = action.payload;
    },
    setDialogOpen: (state, action: PayloadAction<boolean>) => {
      state.dialogOpen = action.payload;
    }
  },
});

export const {
  setPlayerHand,
  setPlayerHoster,
  setBoardCharacters,
  setPossibleMoves,
  setSelectedCard,
  setSelectedCharacter,
  setModalOpen,
  setDialogOpen,
} = gameSlice.actions;

export default gameSlice.reducer;