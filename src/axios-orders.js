import axios from 'axios';

const instance=axios.create({
    baseURL: 'https://react-burger-builder-a16c7.firebaseio.com/'
});

export default instance