import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        _id: '',
        email: '',
        firstName: '',
        lastName: '',
    },
    reducers: {
        setAuth: (state, { payload }) => {
            state.isAuthenticated = !!payload._id;
            state._id = payload._id;
        },
    },
});

export const { setAuth } = userSlice.actions;
