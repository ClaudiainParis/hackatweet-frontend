import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: 0,
};

export const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
        addLike: (state, action) => {
            state.value++;
        },
        removeLike: (state, action) => {
            state.value--;
        }
	},
});

export const { addLike, removeLike } = tweetsSlice.actions;
export default tweetsSlice.reducer;
