import { useContext } from "react";
import { ManageThemesContext } from "./MMOGamesContext";

export const useManageThemes = () => useContext(ManageThemesContext);