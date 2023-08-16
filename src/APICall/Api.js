import instance from "./AxiosInstance";

// instance has you BaseUrl and content type and authorization as well
// instead of url use your own url endpoint here

// --------------------------------------------- //
//            Auth / users apis call             //
// --------------------------------------------- //

// -- create new user --
export const registerUser = async (params) => {
  let Response = await instance.post(`/url`, params);
  return Response;
};

// -- send forgot link --
export const onForgotPassword = async (id) => {
  let res = await instance.put(`/url`);
  return res.data;
};

export const userLogin = async (params) => {
  let res = await instance.post(`/url`, params);
  return res.data;
};

// -- get profile --
export const getProfile = async () => {
  let res = await instance.get(`/url`);
  return res;
};

// -- edit profile --
export const editProfile = async (params) => {
  let res = await instance.put(`/url`, params);
  return res;
};

// -- Reset password --
export const resetPassword = async (paramsBody) => {
  let { id, pwd } = paramsBody;
  let res = await instance.put(`url/${id}`, pwd);
  return res.data.data;
};
// -- logout User --
export const authLogOut = async () => {
  let res = await instance.put(`url`);
  return res;
};
