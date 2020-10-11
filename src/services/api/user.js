import repository from "./repository";
const END_POINT = "/user";

/**
 * Get the current user
 */
const getUser = () => repository.get(END_POINT);

export { getUser };
