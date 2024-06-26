import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: [],
};

export const tweetsSlice = createSlice({
	name: 'tweets',
	initialState,
	reducers: {
        // displayTweets: (state, action) => {
        //         fetch('http://localhost:3000/tweets/alltweets')
        //           .then(response => response.json())
        //           .then(data => {
        //             setLastTweets(data.alltweets)
        //           })
        // },
        addNewTweet: (state, action) => {
			// state.value.text.push(action.payload.text);
		},
        removeTweet: (state, action) => {
            state.value = state.value.filter(tweet => tweet.text !== action.payload.text);
        }
        // addLike: (state, action) => {
        //     state.value++;
        // },
        // removeLike: (state, action) => {
        //     state.value--;
        // }
}
});

export const { addNewTweet, removeTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;
