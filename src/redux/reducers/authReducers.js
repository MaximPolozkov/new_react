import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  user: null,
  error: null,
  firstname: "",
  lastname: "",
  midlename: "",
  email: "",
  password: "",
  modalActive: true,
  setModalActive: "modal active",
  modalActiveR: false,
  setModalActiveR: "modal",
  nameUslugi: "",
  price: "",
  diskript: "",
  times: "",
  admin_id: ""
};

const authReducers = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFirstname: (state,action) => {
      state.firstname = action.payload;
    },
    setLastname: (state,action) => {
      state.lastname = action.payload;
    },
    setMidlename: (state,action) => {
      state.midlename = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setnameUslugi: (state,action) => {
      state.nameUslugi = action.payload
    },
    setprice: (state, action) => {
      state.price = action.payload
    },
    settimes: (state, action) => {
      state.times = action.payload
    },
    setdiskript: (state, action) => {
      state.diskript = action.payload
    },
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = null;
      state.modalActive = false;
      state.setModalActive = "modal";
    },
    loginError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.setModalActiveR = "modal active";
      state.modalActiveR = true;
    },
    setErrorMessage: (state, action) => {
      state.error = action.payload;
      state.loading = false;
      state.modalActive = true;
      state.setModalActive = "modal active";
    }
  }
});

export const { loginRequest, 
  loginSuccess, 
  loginError, 
  setFirstname, 
  setLastname, 
  setMidlename, 
  setEmail, 
  setPassword, 
  setErrorMessage,
  setnameUslugi,
  setprice,
  setdiskript,
  settimes
} = authReducers.actions;

export default authReducers.reducer;