import repository from './repository';

// End point 
const END_POINT = '/user';

// Get label by id
const getUser = () => repository.get(END_POINT);

// Export label api functions
export {
    getUser
}