import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { AllahName } from '@/constants/AllahNames';
import { useColorScheme } from '@/hooks/useColorScheme';

interface AllahNameCardProps {
  name: AllahName;
}

export function AllahNameCard({ name }: AllahNameCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  
  // Card colors based on theme
  const cardBackground = colorScheme === 'light' 
    ? '#ffffff' 
    : '#1e2a32';
  
  const borderColor = colorScheme === 'light' 
    ? 'rgba(0, 0, 0, 0.08)' 
    : 'rgba(255, 255, 255, 0.1)';
  
  const arabicColor = colorScheme === 'light'
    ? '#333333'
    : '#ffffff';

  return (
    <View style={styles.cardShadowContainer}>
      <ThemedView 
        style={[
          styles.container, 
          { 
            backgroundColor: cardBackground, 
            borderColor: borderColor 
          }
        ]}>
        <View style={styles.arabicContainer}>
          <ThemedText style={[styles.arabic, { color: arabicColor }]}>{name.arabic}</ThemedText>
        </View>
        <ThemedText style={styles.transliteration}>{name.transliteration}</ThemedText>
        <ThemedText style={styles.meaning}>{name.meaning}</ThemedText>
      </ThemedView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardShadowContainer: {
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 8,
  },
  container: {
    alignItems: 'center',
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
  },
  arabicContainer: {
    minHeight: 60,
    justifyContent: 'center',
    marginBottom: 12,
    width: '100%',
  },
  arabic: {
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 60,
    includeFontPadding: false,
    textAlignVertical: 'center',
  },
  transliteration: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  meaning: {
    fontSize: 18,
    textAlign: 'center',
    opacity: 0.7,
  },
}); 