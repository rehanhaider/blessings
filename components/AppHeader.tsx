import React from 'react';
import { StyleSheet, View, Platform, StatusBar } from 'react-native';
import { ThemedText } from './ThemedText';
import { useColorScheme } from '@/hooks/useColorScheme';

interface AppHeaderProps {
  title: string;
}

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0;

export function AppHeader({ title }: AppHeaderProps) {
  const colorScheme = useColorScheme() ?? 'light';
  const isDark = colorScheme === 'dark';

  const accentColor = isDark ? '#2c8463' : '#1F6E59';
  const bgColor = isDark ? '#05111D' : '#F6F8FA';

  return (
    <>
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <View style={[styles.container, { backgroundColor: bgColor, paddingTop: STATUSBAR_HEIGHT }]}>
        <ThemedText style={[styles.title, { color: accentColor }]}>
          {title}
        </ThemedText>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56 + (STATUSBAR_HEIGHT || 0),
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
    shadowOpacity: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
}); 