import { Slot } from 'expo-router';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
  url: 'https://graphqlzero.almansi.me/api',
  exchanges: [cacheExchange, fetchExchange],
  suspense: true,
});

const App = () => (
  <Provider value={client}>
    <Slot />
  </Provider>
);

export default App;
