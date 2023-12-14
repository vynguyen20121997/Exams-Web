// import { createSlice } from '@reduxjs/toolkit';
// import { fetchCurrentUser } from './authActions';

// const initialState = {
//     isAuthenticated: false,
//     error: null,

//     fetchCurrentUserPending: false,
//     fetchCurrentUserError: null,
//     currentUser: {},
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {
//         logout: (state) => {
//             localStorage.removeItem('accessToken');
//             state.isAuthenticated = false;
//         },
//     },
//     extraReducers: (builder) => {
//         // Handle async action
//         builder
//             .addCase(fetchCurrentUser.pending, (state) => {
//                 state.fetchCurrentUserPending = true;
//                 state.error = null;
//             })
//             .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
//                 state.currentUser = payload;
//                 state.isAuthenticated = true;
//                 state.fetchCurrentUserPending = false;
//             })
//             .addCase(fetchCurrentUser.rejected, (state, { payload }) => {
//                 state.fetchCurrentUserPending = false;
//                 state.isAuthenticated = false;
//                 state.fetchCurrentUserError = payload;
//             });
//     },
// });

// export const { login, logout } = authSlice.actions;

// export default authSlice.reducer;
