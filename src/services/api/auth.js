import repository from "./repository";

const END_POINT = "/auth";

const login = (request) => repository.post(END_POINT + "/login", request);

const signup = (request) => repository.post(END_POINT + "/signup", request);

const verify = (request) =>
  repository.post(END_POINT + "/login/verify", request);

const logout = () => repository.get(END_POINT + "/logout");

const googleLogin = () => repository.get(END_POINT + "/google");

export { login, signup, verify, logout, googleLogin };
