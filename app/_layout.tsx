import { gql, useQuery,ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
import { Slot } from 'expo-router';


const client = new ApolloClient({
    uri: 'https://graphqlzero.almansi.me/api',
    cache: new InMemoryCache(),
  });

const App = () => {
    return (
        <ApolloProvider client={client}>
            <Slot />
            </ApolloProvider>
    )
}

export default App