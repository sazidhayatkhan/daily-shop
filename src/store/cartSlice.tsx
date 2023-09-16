import {createSlice} from '@reduxjs/toolkit'

const initialState:any =[];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        add(state:any,action){
            state.push(action.payload)
        },
        remove(state:any,action){
            return state.filter((item:any) => item.id !== action.payload)
        }
    }
})


export const {add,remove} = cartSlice.actions
export default cartSlice.reducer