import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';

export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState('morocco');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const auChangementDeLaRecherche = (text: string) => {
    setQuery(text);
  };

  async function handleSearch() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${query}`
      );
      const data = await response.json();
      setLoading(false);
      navigation.navigate('Results', { countries: data });
    } catch (e) {
      setLoading(false);
      setError('Erreur réseau');
    }
  }

  return (
    <View style={styles.conteneur}>
      <Text style={styles.description}>Recherche de pays</Text>

      <Image
        source={require('../../Ressources/worldMap.jpg')}
        style={styles.image}
      />

      {loading && <ActivityIndicator />}
      {error !== '' && <Text style={{ color: 'red' }}>{error}</Text>}

      <View style={styles.fluxDroite}>
        <TextInput
          style={styles.requeteEntree}
          value={query}
          onChangeText={auChangementDeLaRecherche}
          placeholder="Rechercher par nom de pays"
        />
        <Button
          onPress={handleSearch}
          color="#48AAEC"
          title="Démarrer"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteneur: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
  },
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565',
  },
  image: {
    width: 220,
    height: 140,
  },
  fluxDroite: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  requeteEntree: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48AAEC',
    borderRadius: 8,
    color: '#48AAEC',
  },
});