import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    connectedUser: null,
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
        },
        setUnConnectedUser: (state, action) => {
            state.connectedUser = null;
        }
    }
})

export const {setConnectedUser, setUnConnectedUser} = userSlice.actions;
export default userSlice.reducer;

