import 'package:flutter/material.dart';
import '../data/allah_names.dart';

class AllahNameCard extends StatelessWidget {
  final AllahName name;

  const AllahNameCard({Key? key, required this.name}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final textTheme = Theme.of(context).textTheme;
    final colorScheme = Theme.of(context).colorScheme;

    return Card(
      elevation: 4,
      margin: const EdgeInsets.symmetric(vertical: 8, horizontal: 16),
      child: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          children: [
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
                color: colorScheme.onSurface.withOpacity(0.8),
              ),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
