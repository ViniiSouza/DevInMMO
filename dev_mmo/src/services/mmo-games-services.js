import axios from "axios";

const API_HOST = process.env.REACT_APP_RAPID_API_HOST;
const API_KEY = process.env.REACT_APP_RAPID_API_KEY;

const LatestNewsOptions = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/latestnews',
    headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
    }
};

const GamesListOptions = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/games',
    headers: {
        'x-rapidapi-host': API_HOST,
        'x-rapidapi-key': API_KEY
    }
}

const GameDetailsOptions = {
    method: 'GET',
    url: 'https://mmo-games.p.rapidapi.com/game',
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
    
    var resultado = await defaultGet(LatestNewsOptions).then(dados => dados);
    return await resultado;
}

const GetGamesList = () => {
    
    return defaultGet(GamesListOptions).then(dados => dados)
}

const GetGameDetails = (id) => {
    var options = {...GameDetailsOptions, params: { id: id}}
    return defaultGet(options).then(dados => dados)
}

export const gamesApi = {
    GetLatestNews,
    GetGamesList,
    GetGameDetails
}