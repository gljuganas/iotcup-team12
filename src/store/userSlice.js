import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: null, 
        balance: 0, 
        permission: 0, 
    },
    reducers: {
        setUser: (state, action) => {
            state.name = action.payload.name;
            state.balance = action.payload.balance; 
            state.permission = action.payload.permission; 
        },
        clearUser: (state) => {
            state.name = null;
            state.balance = 0;
            state.permission = 0;
        },
        setBalance: (state, action) => {
            state.balance = action.payload; 
        },
        updateBalance: (state) => {
            if (state.user) {
                state.balance = state.user.balance; 
            }
        },
    },
});

export const { setUser, clearUser, setBalance, updateBalance } = userSlice.actions;
export default userSlice.reducer;