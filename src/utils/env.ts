import getConfig from "next/config";

const convertStringToBool = (str: string):boolean => {
  return str?.toUpperCase() === ("TRUE" || "1");
}

const settings = () => {
  const { publicRuntimeConfig, serverRuntimeConfig } = getConfig();
  return {
    IDI: {
      BASE_URL: serverRuntimeConfig.IDI_BASE_URL,
      IDI_TOKEN: serverRuntimeConfig.IDI_TOKEN,
      ENDPOINT: {
        TOKEN: serverRuntimeConfig.IDI_TOKEN_ENDPOINT,
        SEARCH: serverRuntimeConfig.IDI_SEARCH_ENDPOINT,
      }
    }
  }
}

export const environment = settings;