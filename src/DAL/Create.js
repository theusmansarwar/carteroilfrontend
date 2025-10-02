import { invokeApi } from "../utils/InvokeApi";
export const CreateLeads = async (data) => {
  const reqObj = {
    path: "/CreateLeads",
    method: "POST",
    headers: {},
    postData: data,
  };
  return invokeApi(reqObj);
};

