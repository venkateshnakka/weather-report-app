import { createSlice } from "@reduxjs/toolkit";
const toggleMode = createSlice(
    {
        name: "mode",
        initialState : {
            modeStatus: false
        },
        reducers:{
            changeMode : (state)=>{
                state.modeStatus = !state.modeStatus
            }
        }
    }
    
)
export const {changeMode}  = toggleMode.actions;
export default toggleMode.reducer;