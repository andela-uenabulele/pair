// const localStorage = require('localStorage')
module.exports = {
    signUp: (req, res) => {
        const { username, password, firstName, lastName } = req.body
        // using localStorage here to mock DB implementation
        // no password encryption for minimum implementation sake
        localStorage[username] = { password, firstName, lastName }
        res.status(201).send({ message: 'user created', data: { username, firstName, lastName } })
    },

    login: (req, res) => {
        const { username, password } = req.body
        const userData = localStorage[username]
        if (userData && userData.password === password) {
            res.status(202).send({ message: 'success', data: {} })
        }
        return res.status(401).send({ message: 'invalid username or password', data: {} })
    }
}