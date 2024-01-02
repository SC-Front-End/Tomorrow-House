import { configureStore, createSlice } from '@reduxjs/toolkit';

let user = createSlice({
    name: "user",
    initialState: { name: 'kim', age: 20 },
    reducers: {
        changeName(state) {
            return { name: 'park', age: 20 }
        }
    }
})

export let { changeName } = user.actions


let cart = createSlice({
    name: "cart",
    initialState: [
        { id: 0, name: 'white and black', count: 2 },
        { id: 2, name: 'gray yordan', count: 1 }
    ],
    reducers: {
        addCount(state, actions) {
            state[actions.payload].count++
        },
        addItem(state, action) {
            state.push(action.payload)
        }
    }
});

export let { addCount, addItem } = cart.actions

export default configureStore({
    reducer: {
        user: user.reducer,
        cart: cart.reducer
    }
});
