import {
  gql,
  useQuery, useSuspenseQuery
} from "@apollo/client";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  FlatList, StyleSheet,
  Text,
  View
} from "react-native";
import { FetchAllTodosDocument } from "../__generated__/graphql";

gql`
  query FetchAllTodos {
    todos {
      data {
        id
        title
      }
    }
  }
`;

export default function App() {
  const { data } = useQuery(FetchAllTodosDocument);
  const {} = useSuspenseQuery(FetchAllTodosDocument);

  return (
    <View style={styles.container}>
      <Text>index Page</Text>
      <Link href="/about">go to about</Link>
      <StatusBar style="auto" />
      <FlatList
        data={data?.todos?.data}
        renderItem={({ item }) => (
          <View
            key={item?.id}
            style={{
              borderTopColor: "gray",
              borderBottomColor: "gray",
              borderTopWidth: 1,
              borderBottomWidth: 1,
              paddingVertical: 4,
            }}
          >
            <Text>{item?.title}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
