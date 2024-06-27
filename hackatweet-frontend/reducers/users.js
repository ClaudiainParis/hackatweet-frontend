import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: { username:'', token:'', firstname: '' }
};

export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		login: (state, action) => {
			state.value.username = action.payload.username ;
			state.value.token = action.payload.token ;
			state.value.firstname = action.payload.firstname ;
		},
		logout: (state) => {
            state.value.username = '';
			state.value.token = ''
		},
	},
});

export const { login, logout } = usersSlice.actions;
export default usersSlice.reducer;
