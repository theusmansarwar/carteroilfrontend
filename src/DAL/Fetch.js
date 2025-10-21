import { invokeApi } from "../utils/InvokeApi";

export const fetchAllProducts = async () => {
  const reqObj = {
    path: `/products/list`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchProductBySlug = async (slug) => {
  const reqObj = {
    path: `/products/view/${slug}`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};
export const fetchProductsSlugs = async () => {
  const reqObj = {
    path: `/products/slugs`,
    method: "GET",
    headers: {},
    body: {},
  };
  return invokeApi(reqObj);
};

