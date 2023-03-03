// recibir por parámetro un JSON con el nombre de usuario
// devolver un JSON que contenga la hora y data actual
// incluir middleware que añada HEADER: Cache-control: no-cache
// habilitar CORS (Cross-Origin Resource Sharing)
// consultas hechas en el chatG
const {days, months} = require('./../helpers/dateArrays.js')


const showDateTime = (req, res) => {
    const time = new Date()
    const response = {
        hours: time.getHours(),
        minuts: time.getMinutes(),
        seconds: time.getSeconds(),
        day: days[time.getDay()],
        month: months[time.getMonth()],
        year: time.getFullYear(),
        name: req.query.name
        }
        return res.json(response)
}

module.exports = {showDateTime}

