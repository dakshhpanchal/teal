import 'package:flutter/material.dart';
import 'package:teal/app.dart';
import 'package:teal/services/auth_service.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(
    MultiProvider(
      providers: [ChangeNotifierProvider(create: (_) => AuthService())],
      child: const TealApp(),
    ),
  );
}
