import {createSlice} from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  photo: string;
}

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export const { setSignOutState, setUserLoginDetails } = userSlice.actions;

export const selectUserName = (state: { user: UserState }) => state.user.name;
export const selectUserEmail = (state: { user: UserState }) => state.user.email;
export const selectUserPhoto = (state: { user: UserState }) => state.user.photo;

export default userSlice.reducer;