import repository from './repository';

const END_POINT = '/auth';

const login = ( request ) => repository.post(END_POINT + '/login', request);

const googleLogin = () => repository.get(END_POINT + '/google');

const logout = () => repository.get(END_POINT + '/logout');

const verify = ( request ) => repository.post(END_POINT + '/login/verify', request);

export {
    login,
    verify,
    logout,
    googleLogin
}