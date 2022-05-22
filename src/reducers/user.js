import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggedIn : false,
    address : null,
    balance : 0,
    loading: false,
    aave:0,
    uniswap:0,
    compound:0,
    nfts:[],
    distribution: []
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        walletLogin : (state,action) =>{
            state.loggedIn = true;
            state.loading = false;
            state.address = action.payload;
            localStorage.setItem("addr",action.payload);
        },
        updateBalance : (state,action) => {
            state.balance = action.payload;
        },
        updateAave: (state,action) => {
            state.aave = action.payload;
        },
        updateUniswapV1: (state,action) => {
            state.uniswap = action.payload;
        },
        updateCompound: (state,action) => {
            state.compound = action.payload;
        },
        setLoading : (state) => {
            state.loading = true;
        },
        unsetLoading : (state) => {
            state.loading = false;
        },
        loadNFTs : (state,action) => {
            state.nfts = action.payload
        },
        addDistribution : (state,action) => {
            state.distribution = action.payload;
        }
    }
})

export const {walletLogin, updateBalance, setLoading, unsetLoading, loadNFTs, addDistribution, updateAave, updateUniswapV1, updateCompound} = userSlice.actions;

export default userSlice.reducer;