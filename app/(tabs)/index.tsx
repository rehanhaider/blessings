import { StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';

import CompactParallaxScrollView from '@/components/CompactParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AllahNameCard } from '@/components/AllahNameCard';
import { AllahName, getRandomNames } from '@/constants/AllahNames';

export default function HomeScreen() {
  const [randomNames, setRandomNames] = useState<AllahName[]>([]);

  useEffect(() => {
    setRandomNames(getRandomNames(3));
  }, []);

  return (
    <CompactParallaxScrollView
      headerBackgroundColor={{ light: '#f5f7fa', dark: '#121212' }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.titleText}>Names of Allah</ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.namesContainer}>
        {randomNames.map((name) => (
          <AllahNameCard key={name.id} name={name} />
        ))}
      </ThemedView>
      
      <ThemedView style={styles.refreshContainer}>
        <ThemedText 
          style={styles.refreshButton}
          onPress={() => setRandomNames(getRandomNames(3))}>
          Refresh Names
        </ThemedText>
      </ThemedView>
    </CompactParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 20,
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    paddingVertical: 4,
  },
  namesContainer: {
    gap: 16,
    paddingHorizontal: 16,
  },
  refreshContainer: {
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 20,
  },
  refreshButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    backgroundColor: '#2E7D32',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
  },
});
