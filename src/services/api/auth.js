import repository from "./repository";

const END_POINT = "/auth";

/**
 * Send a login request
 * 
 * @param { Object } request
 * @typedef { phone: String }
 */
const login = (request) => repository.post(END_POINT + "/login", request);

/**
 * Login via google (Backend Work In Process)
 */
const googleLogin = () => repository.get(END_POINT + "/google");

/**
 * Send a logout request
 */
const logout = () => repository.get(END_POINT + "/logout");

/**
 * Verify a login
 * 
 * @param {Object} request
 * @typedef { phone: String, code: String } 
 */
const verify = (request) =>
  repository.post(END_POINT + "/login/verify", request);

export { login, verify, logout, googleLogin };
