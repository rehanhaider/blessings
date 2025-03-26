import 'package:flutter/material.dart';
import '../data/allah_names.dart';
import '../widgets/allah_name_card.dart';

class AllNamesScreen extends StatelessWidget {
  const AllNamesScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    // Get all names sorted alphabetically by transliteration
    final allNames = [...AllahNamesData.names];
    allNames.sort((a, b) => a.transliteration.compareTo(b.transliteration));

    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        elevation: 4,
        centerTitle: true,
        title: Text(
          'All Names of Allah',
          style: TextStyle(
            fontSize: 28,
            fontWeight: FontWeight.w600,
            letterSpacing: 1.2,
            color: Theme.of(context).colorScheme.primary,
            shadows: [
              Shadow(
                blurRadius: 2.0,
                color: Colors.black.withOpacity(0.3),
                offset: const Offset(1, 1),
              ),
            ],
          ),
        ),
      ),
      body: ListView.builder(
        padding: const EdgeInsets.symmetric(vertical: 16),
        itemCount: allNames.length,
        itemBuilder: (context, index) {
          return AllahNameCard(name: allNames[index]);
        },
      ),
    );
  }
}
