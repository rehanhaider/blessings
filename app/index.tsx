import { StyleSheet, View, TouchableOpacity, Dimensions, RefreshControl, Text } from 'react-native';
import React, { useEffect, useState, useCallback } from 'react';

import CompactParallaxScrollView from '@/components/CompactParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { AllahNameCard } from '@/components/AllahNameCard';
import { AllahName, getRandomNames } from '@/constants/AllahNames';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AppHeader } from '@/components/AppHeader';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const [randomNames, setRandomNames] = useState<AllahName[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const colorScheme = useColorScheme() ?? 'light';

  const isPrimaryDark = colorScheme === 'dark';
  
  // Theme colors
  const theme = {
    primary: isPrimaryDark ? '#05111D' : '#F6F8FA',
    secondary: isPrimaryDark ? '#122333' : '#FFFFFF',
    accent: isPrimaryDark ? '#2c8463' : '#1F6E59',
    text: isPrimaryDark ? '#E9ECEF' : '#212529', 
    textMuted: isPrimaryDark ? '#ADB5BD' : '#6C757D',
    border: isPrimaryDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)',
  };

  const handleRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRandomNames(getRandomNames(3));
      setRefreshing(false);
    }, 800);
  }, []);

  useEffect(() => {
    setRandomNames(getRandomNames(3));
  }, []);

  return (
    <ThemedView style={{ flex: 1, backgroundColor: theme.primary }}>
      <AppHeader title="Blessings" />

      <CompactParallaxScrollView
        headerBackgroundColor={{ 
          light: theme.primary, 
          dark: theme.primary 
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={[theme.accent]}
            tintColor={theme.accent}
            progressBackgroundColor={theme.secondary}
          />
        }>
        <ThemedView style={[styles.contentContainer, { backgroundColor: theme.primary }]}>
          <ThemedView style={[styles.namesContainer, { backgroundColor: theme.secondary }]}>
            {randomNames.map((name, index) => (
              <React.Fragment key={name.id}>
                <AllahNameCard name={name} />
                {index < randomNames.length - 1 && (
                  <View style={[styles.divider, { backgroundColor: theme.border }]} />
                )}
              </React.Fragment>
            ))}
          </ThemedView>
        </ThemedView>
      </CompactParallaxScrollView>

      {/* Circular Refresh Button */}
      <TouchableOpacity 
        style={[styles.refreshButton, { backgroundColor: theme.accent }]}
        activeOpacity={0.8}
        onPress={handleRefresh}>
        <Text style={styles.refreshButtonIcon}>↻</Text>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingBottom: 20,
    paddingTop: 16,
  },
  namesContainer: {
    borderRadius: 20,
    overflow: 'hidden',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 22,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 10,
    marginBottom: 24,
  },
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 20,
  },
  refreshButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  refreshButtonIcon: {
    fontSize: 28,
    color: 'white',
    fontWeight: 'bold',
  },
}); 