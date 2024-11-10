import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import CardInterface from "../../interfaces/CardInterface";
import CharacterInterface from "../../interfaces/CharacterInterface";

interface GameState {
  playerHand: CardInterface[];
  playerHoster: CharacterInterface[];
  boardCharacters: CharacterInterface[];
  selectedCard: CardInterface | null;
  selectedCharacter: CharacterInterface | null;
  modalOpen: boolean;
}

const initialState: GameState = {
  playerHand: [],
  playerHoster: [],
  boardCharacters: [],
  selectedCard: null,
  selectedCharacter: null,
  modalOpen: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setPlayerHand: (state, action: PayloadAction<CardInterface[]>) => {
      state.playerHand = action.payload;
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
  },
});

export const {
  setPlayerHand,
  setPlayerHoster,
  setBoardCharacters,
  setSelectedCard,
  setSelectedCharacter,
  setModalOpen,
} = gameSlice.actions;

export default gameSlice.reducer;