import axios from 'axios';

export default axios.create (
    {
        baseURL: 'https://eanpay-53b8f.firebaseio.com/'
    }
)