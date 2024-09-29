import { createContext } from "react";

const LocaleContext = createContext();

export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;
export default LocaleContext;
