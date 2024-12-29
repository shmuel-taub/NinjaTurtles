import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    msg: ''
}


const msgSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        setErr: (state, msg: PayloadAction<string>) => {
            state.msg = msg.payload
        }
    }
})

export const {setErr} = msgSlice.actions

export default msgSlice.reducer;