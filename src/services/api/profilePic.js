import repository from './repository';

// End point 
const END_POINT = '/user/profile';

// upload profile photo
const uploadPhoto = (file) => {
    return new Promise((resolve, reject) => {
        var formData = new FormData();
        formData.append("photo", file);
        repository.post(END_POINT, formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
        })
        .then(res => resolve(res))
        .catch(err => reject(err));
    });

};



// Export label api functions
export {
    uploadPhoto
}