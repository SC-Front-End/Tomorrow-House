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
        { id: 0, name: '비침없는 도톰 레이스/쉬폰 커튼', count: 2, imageUrls: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/162303132447303472.jpeg?gif=1&w=360&h=360&c=c&q=0.8&webp=1" },
        { id: 2, name: '삼성전자 스마트모니터 M7 S43 화이트 4K UHD', count: 1, imageUrls: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/168610157896491054.jpg?gif=1&w=360&h=360&c=c&q=0.8&webp=1" }
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
