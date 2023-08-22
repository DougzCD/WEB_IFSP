const axios = require('axios')

const m = 100;

const porta = 3000;

const URL2 = `http://10.120.72.95:${porta}/soman/6`;

const URL = `http://localhost:${porta}/soman/6`;

async function makeRequests() {


    let requests = [];

    for (let i = 0; i < m; i++) {
        requests.push(axios.get(URL));
    }

    const responses = await Promise.all(requests);

    for (let response of responses)
        console.log(response.data);
}

makeRequests();