import { basePath, apiVersion } from "./config";
// import { Result } from "antd";


export function getMenuApi() {
  const url = `${basePath}/${apiVersion}get-menus`;

  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      return result;
    })
    .catch((err) => {
      return err.message;
    });
}
