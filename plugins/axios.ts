import axios, { type CreateAxiosDefaults } from "axios";

export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl:string = "http://localhost:4050";

  let api = axios.create({
    baseUrl: defaultUrl,
    headers: {
      common: {},
    },
  }as CreateAxiosDefaults );
return {
    provide: {
      api: api,
    },
  };
});