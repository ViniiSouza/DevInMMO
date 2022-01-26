import { useContext } from "react";
import { LatestNewsContext } from "./LatestNewsContext";

export const useLatestNews = () => useContext(LatestNewsContext)