import {apiImage} from './api';

const uploadImage = async(image) => {
    return await apiImage.post('Image/uploadImage', image).then(res => res);
}

export{ uploadImage}
