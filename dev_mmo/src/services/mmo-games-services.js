import axios from "axios";

const API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

const DefaultOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
    }
}

const defaultGet = (options) => {
    return axios.request(options).then(function (response) {
        return response.data;
    }).catch(function (error) {
        console.error(error);
    });
}

const GetLatestNews = async () => {
    var options = {...DefaultOptions, url: 'https://mmo-games.p.rapidapi.com/latestnews'}
    return await defaultGet(options).then(dados => dados);
}

const GetGamesList = async () => {
    var options = {...DefaultOptions, url: 'https://mmo-games.p.rapidapi.com/games' }
    return await defaultGet(options).then(dados => dados)
}

const GetGameDetails = async (id) => {
    var options = { ...DefaultOptions, url: 'https://mmo-games.p.rapidapi.com/game', params: { id: id } }
    return await defaultGet(options).then(dados => dados)
}

export const gamesApi = {
    GetLatestNews,
    GetGamesList,
    GetGameDetails
}