import { useContext } from "react";
import { MMOGamesContext } from "./MMOGamesContext";

export const useMMOGames = () => useContext(MMOGamesContext);