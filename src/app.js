const fastify  = require('fastify')
const app = fastify()
app.get('/', async () => {
    return {
        message:'Finance API running'
    }
})

module.exports = app