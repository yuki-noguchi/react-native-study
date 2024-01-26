import { Link } from 'expo-router';
import { Suspense } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import { useQuery } from 'urql';

import { FetchAllTodosDocument } from '../gql/graphql';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ height: 100, paddingVertical: 40 }}>
        <Text>index Page</Text>
        <Link href="/about/">go to about</Link>
      </View>
      <Suspense fallback={<ActivityIndicator />}>
        <TodoList />
      </Suspense>
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
const TodoList = () => {
  const [{ data }] = useQuery({
    query: FetchAllTodosDocument,
  });

  return (
    <FlatList
      data={data?.todos?.data}
      renderItem={({ item }) => (
        <View>
          <Text>{item?.title}</Text>
        </View>
      )}></FlatList>
  );
};
