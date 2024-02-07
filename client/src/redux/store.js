// store.js
import { configureStore } from '@reduxjs/toolkit';
//import authReducer from './features/auth/authSlice';
import authSlice from './features/auth/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
});

export default store;
