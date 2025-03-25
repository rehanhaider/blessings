import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
}>;

export default function CompactParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const backgroundColor = headerBackgroundColor[colorScheme];

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <ThemedView style={styles.container}>
        <Animated.ScrollView
          ref={scrollRef}
          scrollEventThrottle={16}
          contentContainerStyle={styles.scrollContent}>
          {headerImage && (
            <Animated.View
              style={[
                styles.header,
                { backgroundColor },
              ]}>
              {headerImage}
            </Animated.View>
          )}
          <ThemedView style={styles.content}>
            {children}
          </ThemedView>
        </Animated.ScrollView>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 20,
    paddingBottom: 30,
  },
  header: {
    height: 80,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
}); 