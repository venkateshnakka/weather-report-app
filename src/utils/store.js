import { configureStore } from "@reduxjs/toolkit";
import toggleMode from "./toggleMode";
const store = configureStore(
    {
        reducer:{
            mode: toggleMode
        }
    }
)
export default store