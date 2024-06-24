import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: { username: ''}
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		login: (state, action) => {
			state.value.username = action.payload.username ;
		},
		logout: (state) => {
            state.value.username = ''
		},
	},
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
