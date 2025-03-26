import 'package:flutter/material.dart';
import '../data/allah_names.dart';
import '../widgets/allah_name_card.dart';
import '../widgets/custom_app_bar.dart';

class AllNamesScreen extends StatelessWidget {
  const AllNamesScreen({super.key});

  @override
  Widget build(BuildContext context) {
    // Get all 99 names sorted alphabetically by transliteration
    final allNames = [...AllahNamesData.names];
    allNames.sort((a, b) => a.transliteration.compareTo(b.transliteration));

    return Scaffold(
      extendBodyBehindAppBar: false,
      appBar: CustomAppBar(title: '99 Attributes of Allah'),
      body: ListView.builder(
        padding: EdgeInsets.only(
          top: kToolbarHeight + MediaQuery.of(context).padding.top + 24,
          bottom: 16,
          left: 16,
          right: 16,
        ),
        itemCount: allNames.length,
        itemBuilder: (context, index) {
          return AllahNameCard(
            name: allNames[index],
            showIndex: true,
            index: index + 1,
          );
        },
      ),
    );
  }
}
