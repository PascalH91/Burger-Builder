import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-b5427.firebaseio.com/'
});


 export default instance