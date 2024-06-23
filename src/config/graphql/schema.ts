import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Query {
    randomFact: Fact
    factById(id: String!): Fact
    factsByQuery(search: String!, limit: Int): [Fact]
  }

  type Health {
    status: String
  }
  
  type Fact {
    id: String
    categories: [String]
    url: String
    icon_url: String
    value: String
    updated_at: String
    created_at: String
  } 
`)

export default schema;