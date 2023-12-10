import { createSlice } from "@reduxjs/toolkit";

const generateRandomStats = () => {
    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
    return {
        health: getRandomInt(3, 18),
        mana: getRandomInt(3, 18),
        armor: getRandomInt(3, 18),
        gold: getRandomInt(3, 18),
        abilities: {
            strength: getRandomInt(3, 18),
            dexterity: getRandomInt(3, 18),
            constitution: getRandomInt(3, 18),
            intelligence: getRandomInt(3, 18),
            wisdom: getRandomInt(3, 18),
            charisma: getRandomInt(3, 18),
        }
    }
}

const characterSlice = createSlice({
    name: "character",
    initialState: [],
    reducers: {
        createCharacter: (state, action) => {
            const { id, name } = action.payload;
            const randomStats = generateRandomStats();
            const newCharacter = {
                id,
                name,
                ...randomStats
            }
            state.push(newCharacter);
        },
        updateCharacter: (state, action) => {
            const { id, updatedCharacter } = action.payload
            const character = state.find((char) => char.id === id)
            if (character) {
                Object.assign(character, updatedCharacter)
            }
        },
        deleteCharacter: (state, action) => {
            return state.filter((character) => character.id !== action.payload)

        },
    }

})

export const { createCharacter, updateCharacter, deleteCharacter } = characterSlice.actions;
export default characterSlice.reducer;

