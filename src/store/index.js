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
        },

        selectAchievementsTab: (state, action) => {
            state.activeTab = "achievements"
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

const contactFormSlice = createSlice({
    name: 'contactForm',
    initialState: {isVisible: false},
    reducers: {
        toggleVisibility: (state, action) => {
            state.isVisible = !state.isVisible;
        }
    }
})

const portfolioStore = configureStore({
    reducer: {tab: tabSlice.reducer, darkMode: darkModeSlice.reducer, contactForm: contactFormSlice.reducer}
})

export const tabSliceActions = tabSlice.actions;

export const darkModeSliceActions = darkModeSlice.actions;

export const contactFormSliceActions = contactFormSlice.actions;

export default portfolioStore;