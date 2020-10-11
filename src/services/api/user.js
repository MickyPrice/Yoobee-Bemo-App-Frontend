import repository from './repository';

// End point 
const END_POINT = '/user';

// Get label by id
const getUser = () => repository.get(END_POINT);
const getUserById = (userId) => repository.get(END_POINT + "/" + userId);

// Export label api functions
export {
    getUser,
    getUserById
}