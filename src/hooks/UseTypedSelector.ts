import { useSelector, TypedUseSelectorHook } from "react-redux";
import { IStore } from "types/IStore";

export const UseTypedSelector : TypedUseSelectorHook<IStore>= useSelector
