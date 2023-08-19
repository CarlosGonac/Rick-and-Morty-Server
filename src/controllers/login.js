const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query
    let acces = false

    users.map(user => {
        if (user.email === email && user.password === password) acces = true
    })

    res
        .status(200)
        .json({acces: acces})
}

module.exports = login