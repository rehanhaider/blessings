import 'package:flutter/material.dart';
import '../data/allah_names.dart';

class AllahNameCard extends StatelessWidget {
  final AllahName name;
  final bool showIndex;
  final int index;

  const AllahNameCard({
    super.key,
    required this.name,
    this.showIndex = false,
    this.index = 0,
  });

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;

    return Card(
      elevation: 4,
      margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
            if (showIndex)
              Align(
                alignment: Alignment.topRight,
                child: Container(
                  width: 30,
                  height: 30,
                  decoration: BoxDecoration(
                    color: colorScheme.primaryContainer,
                    shape: BoxShape.circle,
                  ),
                  child: Center(
                    child: Text(
                      '$index',
                      style: TextStyle(
                        color: colorScheme.onPrimaryContainer,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                ),
              ),
            Text(
              name.arabic,
              style: TextStyle(
                fontSize: 36,
                fontWeight: FontWeight.bold,
                color: colorScheme.primary,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              name.transliteration,
              style: TextStyle(
                fontSize: 24,
                fontWeight: FontWeight.w500,
                color: colorScheme.secondary,
              ),
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 8),
            Text(
              name.meaning,
              style: TextStyle(
                fontSize: 18,
                fontStyle: FontStyle.italic,
                color: colorScheme.onSurface.withValues(alpha: 0.8),
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
