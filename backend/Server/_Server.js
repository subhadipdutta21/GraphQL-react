const express = require('express')
const graphqlHttp = require('express-graphql')
const schema = require('./Schema')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

app.use(cors())
app.use('/graphql', graphqlHttp({
    schema,
    graphiql: true
}))

mongoose.connect("mongodb+srv://subhadip1994:subhadip1994@devconnector-y5ruq.mongodb.net/gql-server?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }, err => {
        if (err) console.log(err)
        else {
            console.log('mongo connected !')
            app.listen(4000, () => {
                console.log('server started !')
            })
        }
    }
)