const db = require("../../database/models");

module.exports = {
    list: (req, res) =>{
        db.user.findAll()
        .then(users => {
            let data = [];
            const baseUrl = `${req.protocol}://${req.headers.host}`
            for (user of users){
                data.push({
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    detail: baseUrl + "/api/users/" + user.id,
                })
            }
            return res.json({
                count: users.length,
                users: data
            })
            })
        },

    detail: (req, res)=> {
        db.user.findByPk(req.params.id)
        .then(user => {
            const baseUrl = `${req.protocol}://${req.headers.host}`
            return res.json({
                id: user.id,
                nombre: user.nombre,
                apellido: user.apellido,
                username: user.username,
                email: user.email,
                profilePic: baseUrl + user.profilePic
            })
        })
    }
    }
