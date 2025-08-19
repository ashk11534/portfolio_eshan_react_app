import { configureStore, createSlice } from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: 'tab',
    initialState: {activeTab: "portfolio"},
    reducers: {
        selectPortfolioTab: (state, action) => {
            state.activeTab = "portfolio"
        },

        selectAboutTab: (state, action) => {
            state.activeTab = "about"
        }
    }
})

const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState: {isDark: false},
    reducers: {
        toggleMode: (state, action) => {
            state.isDark = !state.isDark;
        }
    }
})

const portfolioStore = configureStore({
    reducer: {tab: tabSlice.reducer, darkMode: darkModeSlice.reducer},
})

export const tabSliceActions = tabSlice.actions;

export const darkModeSliceActions = darkModeSlice.actions;

export default portfolioStore;