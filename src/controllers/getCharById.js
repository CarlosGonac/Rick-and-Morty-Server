const axios = require('axios')
const URL = 'https://rickandmortyapi.com/api/character/'

const getCharById = (res, id) => {
    axios(`${URL}${id}`)
        .then(resp => {
            const { name, gender, species, origin, image, status } = resp.data
            const character = {id, name, gender, species, origin, image, status}

            if (character.name) res.json(character)
            else res
                .status(404)
                .send('Not Found')
        })
        .catch(error => {
            res
                .status(500)
                .send(error.message)
        })
}

module.exports = getCharById