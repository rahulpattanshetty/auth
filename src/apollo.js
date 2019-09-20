import { HttpLink } from "apollo-link-http";
import ApolloClient from 'apollo-client'
import { InMemoryCache } from "apollo-cache-inmemory";

const host = "http://192.168.43.77:3000/api/v1/graphql"

const makeApolloClient = () => {
  const link = new HttpLink({
    uri: host
  })

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    link,
    cache
  })
  return client
}

export default makeApolloClient;