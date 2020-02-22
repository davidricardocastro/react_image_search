import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID a4bb014e31d5e864b46c6b0f7242abdc87c954efd72f4424830f047b7a16ebe2'
    }
});