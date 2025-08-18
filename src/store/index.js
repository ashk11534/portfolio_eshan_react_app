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

const portfolioStore = configureStore({
    reducer: {tab: tabSlice.reducer}
})

export const tabSliceActions = tabSlice.actions;

export default portfolioStore;