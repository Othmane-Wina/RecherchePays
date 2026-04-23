import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

function CountryItem({ item }: any) {
  return (
    <TouchableHighlight
      underlayColor="#e0f0ff"
      onPress={() => {}}>
      <View style={styles.item}>
        <Text style={styles.name}>{item.name?.official}</Text>
        <Text style={styles.detail}>🌍 {item.region}</Text>
        <Text style={styles.detail}>🏙️ {item.capital?.[0]}</Text>
        <Text style={styles.detail}>
          👥 {item.population?.toLocaleString()} habitants
        </Text>
      </View>
    </TouchableHighlight>
  );
}

export default function ResultsScreen({ route }: any) {
  const { countries } = route.params;

  return (
    <FlatList
      data={countries}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => <CountryItem item={item} />}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
  },
});