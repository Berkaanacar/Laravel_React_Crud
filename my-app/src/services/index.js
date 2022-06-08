import axios from "axios";

const baseUrl = 'http://127.0.0.1:8000/api';

const get = async (url) => {
    return await axios.get(baseUrl + url)
    .then(function(response) {
        return response.data;
    })
    .catch(function(error){
        console.log(error);
        return false;
    });
}

const post = async (url , payload) => {
    console.log(url);
    return await axios.post(baseUrl + url, payload)
    .then(function(response){
        return response;
    })
    .catch(function(error){
        console.log(error);
        return false;
    });
}

export {get , post};