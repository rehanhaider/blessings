import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemedText } from './ThemedText';
import { ThemedView } from './ThemedView';
import { AllahName } from '@/constants/AllahNames';
import { useColorScheme } from '@/hooks/useColorScheme';

interface AllahNameCardProps {
  name: AllahName;
}

export function AllahNameCard({ name }: AllahNameCardProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const isDark = colorScheme === 'dark';
  
  // Theme colors
  const theme = {
    accent: isDark ? '#2c8463' : '#1F6E59',
    accentLight: isDark ? 'rgba(44, 132, 99, 0.1)' : 'rgba(31, 110, 89, 0.05)',
    text: isDark ? '#E9ECEF' : '#212529',
    textSecondary: isDark ? '#ADB5BD' : '#6C757D',
    arabicColor: isDark ? '#FFFFFF' : '#333333',
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={[styles.arabic, {color: theme.arabicColor}]}>
        {name.arabic}
      </Text>
      
      <ThemedText style={[styles.transliteration, {color: theme.accent}]}>
        {name.transliteration}
      </ThemedText>
      
      <View style={[styles.meaningWrapper, {backgroundColor: theme.accentLight}]}>
        <ThemedText style={[styles.meaning, {color: theme.textSecondary}]}>
          {name.meaning}
        </ThemedText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  arabic: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  transliteration: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  meaningWrapper: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  meaning: {
    fontSize: 15,
    fontWeight: '500',
    textAlign: 'center',
  },
}); 