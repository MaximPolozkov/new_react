import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../reducers/authReducers';

const store = configureStore({
    reducer:{
        auth: authReducers
    },
});

export default store;