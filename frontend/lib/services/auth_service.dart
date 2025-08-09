import 'package:flutter/material.dart';
import 'package:teal/models/user.dart';

class AuthService with ChangeNotifier {
  User? _currentUser;
  bool _isAuthenticated = false;

  User? get currentUser => _currentUser;
  bool get isAuthenticated => _isAuthenticated;

  Future<void> signInWithGitHub() async {
    // Simulate authentication
    await Future.delayed(const Duration(seconds: 2));

    _currentUser = User(
      id: '1',
      name: 'John Doe',
      email: 'john.doe@example.com',
      avatarUrl: 'https://via.placeholder.com/150',
    );
    _isAuthenticated = true;
    notifyListeners();
  }

  Future<void> signOut() async {
    _currentUser = null;
    _isAuthenticated = false;
    notifyListeners();
  }
}
