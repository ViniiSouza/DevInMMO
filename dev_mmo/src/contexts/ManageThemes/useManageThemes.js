import { useContext } from "react";
import { ManageThemesContext } from "./ManageThemesContext";

export const useManageThemes = () => useContext(ManageThemesContext);