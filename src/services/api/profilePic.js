import repository from "./repository";
const END_POINT = "/user/profile";

/**
 * Upload a file to the api
 *
 * @param { File } file - Image File
 */
const uploadPhoto = (file) => {
  return new Promise((resolve, reject) => {
    var formData = new FormData();
    formData.append("photo", file);
    repository
      .post(END_POINT, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => resolve(res))
      .catch((err) => reject(err));
  });
};

export { uploadPhoto };
