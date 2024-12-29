import { configureStore } from "@reduxjs/toolkit";
import msgReducer from './MsgSlice'
import topReducer from './ToppingsSlice'



export const store = configureStore({
    reducer: {
        error: msgReducer,
        toppings: topReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;