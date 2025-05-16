import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    name: null,
    balance: 0,
    permission: 0,
    rfid: null,
    email: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.balance = action.payload.balance;
      state.permission = action.payload.permission;
      state.rfid = action.payload.rfid;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.name = null;
      state.balance = 0;
      state.permission = 0;
      state.rfid = null;
      state.email = null;
    },
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
    setRfid: (state, action) => {
      state.rfid = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    updateBalance: (state) => {
      if (state.user) {
        state.balance = state.user.balance;
      }
    },
  },
});

export const {
  setUser,
  clearUser,
  setBalance,
  setRfid,
  setEmail,
  updateBalance,
} = userSlice.actions;
export default userSlice.reducer;
