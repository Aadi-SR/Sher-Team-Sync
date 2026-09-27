import { createSlice } from "@reduxjs/toolkit";

const initialMode = localStorage.getItem("team-sync-theme") || "light";
document.documentElement.setAttribute("data-theme", initialMode);

const themeSlice = createSlice({
    name: "theme",
    initialState: {
        mode: initialMode,
    },
    reducers: {
        toggleTheme: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
            localStorage.setItem("team-sync-theme", state.mode);
            document.documentElement.setAttribute("data-theme", state.mode);

            // document.socument element targets <html> 
            // use data-theme atr me state daal diya hai 
        },
    }
});
export const {toggleTheme} = themeSlice.actions;
export default themeSlice.reducer;