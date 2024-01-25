import { gql, useQuery,ApolloClient, InMemoryCache, ApolloProvider, } from '@apollo/client';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import { FetchAllTodosDocument } from '../__generated__/graphql';


gql`
query FetchAllTodos {
  todos {
    data {
      id
      title
    }
  }
}
`


export default function App() {
  const {data} = useQuery(FetchAllTodosDocument)

  return (
    <View style={styles.container}>
      <Text>index Page</Text>
      <Link href="/about">go to about</Link>
      <StatusBar style="auto" />
      <ScrollView>
        {data?.todos?.data?.map(todo =>
        <View 
        key={todo?.id}
        style={{
          borderTopColor: 'gray',
          borderBottomColor: 'gray',
          borderTopWidth: 1,
          borderBottomWidth: 1,
          paddingVertical: 4
        }}>
            <Text>{todo?.title}</Text>
        </View>
            )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
