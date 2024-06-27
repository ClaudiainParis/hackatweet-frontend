import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: []
};

export const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
        addNewTweet: (state, action) => {
			state.value.push(action.payload);
		},
        initialiseTweets: (state, action) =>{
            state.value=action.payload
        },
        removeTweet: (state, action) => {
            state.value = state.value.filter(tweet => tweet.text !== action.payload.text);
        },
        addLike: (state, action) => {
            state.value++;
        },
        removeLike: (state, action) => {
            state.value--;
        }
}
});

export const { addNewTweet, removeTweet, initialiseTweets } = tweetsSlice.actions;
export default tweetsSlice.reducer;
