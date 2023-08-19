let myFavorites = []

const postFav = (req, res) => {
    const { personaje } = req.body
    myFavorites.push(personaje)

    res.json(myFavorites)
}

const deleteFav = (req, res) => {
    const { id } = req.params
    myFavorites = myFavorites.filter(fav => fav.id !== id)

    res.json(myFavorites)
}

module.exports = [
    postFav,
    deleteFav
]