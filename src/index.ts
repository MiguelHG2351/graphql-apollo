import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'

const app = express()
// Middleware
app.use(cors())

// configuration
app.set("port", 5000)

const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true,
})

server.applyMiddleware({ app })

app.listen(app.get("port"), () => {
    console.log(`Server on port ${app.get("port")}`)
})