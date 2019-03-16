import React from "react";
import i18n from ".";

const i18nTarget = new i18n("PL");

export const i18nContext = React.createContext(i18nTarget);
