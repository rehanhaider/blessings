import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, SafeAreaView, StatusBar, View, Platform, RefreshControl } from 'react-native';
import Animated, {
  useAnimatedRef,
  useScrollViewOffset,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/ThemedView';
import { useColorScheme } from '@/hooks/useColorScheme';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 44 : StatusBar.currentHeight || 0;

type Props = PropsWithChildren<{
  headerImage?: ReactElement;
  headerBackgroundColor: { dark: string; light: string };
  title?: string;
  refreshControl?: ReactElement;
}>;

export default function CompactParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
  title,
  refreshControl,
}: Props) {
  const colorScheme = useColorScheme() ?? 'light';
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const backgroundColor = headerBackgroundColor[colorScheme];
  const isDark = colorScheme === 'dark';

  return (
    <ThemedView style={[styles.container, { backgroundColor }]}>
      <Animated.ScrollView
        ref={scrollRef}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        bounces={true}
        overScrollMode="never"
        refreshControl={refreshControl}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },
  header: {
    height: 80,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
  },
}); 