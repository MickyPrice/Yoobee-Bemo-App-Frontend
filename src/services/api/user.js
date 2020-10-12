import repository from "./repository";
const END_POINT = "/user";

/**
 * Get the current user
 */
const getUser = () => repository.get(END_POINT);
const getUserById = (userId) => repository.get(END_POINT + "/" + userId);

// Export label api functions
export {
    getUser,
    getUserById
}