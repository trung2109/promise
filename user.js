const axios = require('axios');
const getUserData = async () => {
    const userData = await axios.get('https://randomuser.me/api');
    userData.data.results.forEach(item => {
        console.log(item.name)});
}
getUserData();