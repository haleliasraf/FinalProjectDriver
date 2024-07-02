import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    connectedUser: JSON.parse(localStorage.getItem('user')) || null,
    // users:[],
    // count: 0,
    // flag: false,
}

const userSlice = createSlice({
    name: "user",
    initialState: initialValue,
    reducers: {
        setConnectedUser: (state, action) => {
            state.connectedUser = action.payload;
            localStorage.setItem('user', JSON.stringify(action.payload));
        },
        setUnConnectedUser: (state, action) => {
            state.connectedUser = null;
            localStorage.removeItem('user');
        }
    }
})

export const {setConnectedUser, setUnConnectedUser} = userSlice.actions;
export default userSlice.reducer;

