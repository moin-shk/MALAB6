import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import { getUsers } from "./lib/supabase_crud";

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const records = await getUsers();
        setData(records);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text style={styles.loadingText}>Loading data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sample Database Records</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={[styles.cell, styles.idCell]}>{item.id}</Text>
            <Text style={[styles.cell, styles.boolCell]}>
              {item.SampleData ? "True" : "False"}
            </Text>
            <Text style={[styles.cell, styles.taskCell]}>{item.Tasks}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: "#333",
  },
  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    paddingTop: 30,
    marginBottom: 20,
    color: "#333",
  },
  listContent: {
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cell: {
    fontSize: 16,
    color: "#555",
  },
  idCell: {
    flex: 0.3,
    fontWeight: "600",
  },
  boolCell: {
    flex: 0.3,
    textAlign: "center",
  },
  taskCell: {
    flex: 1,
    textAlign: "left",
    paddingLeft: 10,
  },
  error: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

