import { useContext } from "react";
import { MyThemesContext } from "./MyThemesContext";

export const useMyThemes = () => useContext(MyThemesContext);