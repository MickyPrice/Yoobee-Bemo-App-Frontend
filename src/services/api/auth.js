import repository from "./repository";

const END_POINT = "/auth";

const signup = (request) => repository.post(END_POINT + "/signup", request);

const login = (request) => repository.post(END_POINT + "/login", request);

const logout = () => repository.get(END_POINT + "/logout");

const verify = (request) =>
  repository.post(END_POINT + "/login/verify", request);

export { signup, login, verify, logout };
