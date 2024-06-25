import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: { id: ''}
};

export const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
        // getTweetId: (state, action) => {
		// 	// state.value.id = action.payload.username ;
		// },
	},
});

export const {  } = tweetsSlice.actions;
export default tweetsSlice.reducer;
