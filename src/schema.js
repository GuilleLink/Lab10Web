const { gql } = require('apollo-server')

const typeDefs = gql`
    type User {
        id: Int!
        name: String!
        latitude: String!
        longitude: String!
        updatedAt: String!
    }

    type Query {
        #Puede tener cualquier nombre        
        allUsers: [User!]!
    }

    type Mutation {
        createUser(name: String!, latitude: String!, longitude: String!): User!
    }
`

module.exports = typeDefs