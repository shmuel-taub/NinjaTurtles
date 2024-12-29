import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type {ToppingObj} from "../src/interfaces"


const initialState: {topps: ToppingObj[]} = {
    topps: []
}


const TopSlice = createSlice({
    name: 'Toppings',
    initialState,
    reducers: {
        addTop: (state, newTop: PayloadAction<ToppingObj>) => {
            state.topps.push(newTop.payload)
        }
    }
})

export const {addTop} = TopSlice.actions

export default TopSlice.reducer;