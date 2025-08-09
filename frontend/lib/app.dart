import 'package:flutter/material.dart';
import 'package:teal/screens/auth/login_screen.dart';
import 'package:teal/screens/dashboard_screen.dart';
import 'package:teal/services/auth_service.dart';
import 'package:provider/provider.dart';
import 'package:teal/theme/app_theme.dart';
import 'package:teal/screens/projects_screen.dart';
import 'package:teal/screens/tasks_screen.dart';
import 'package:teal/screens/notifications_screen.dart';
import 'package:teal/screens/add_task_screen.dart';
import 'package:teal/widgets/app_drawer.dart';
import 'package:teal/widgets/custom_app_bar.dart';

class TealApp extends StatelessWidget {
  const TealApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Teal',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.lightTheme,
      darkTheme: AppTheme.darkTheme,
      home: Consumer<AuthService>(
        builder: (context, auth, child) {
          return auth.isAuthenticated ? const MainApp() : const LoginScreen();
        },
      ),
    );
  }
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  int _currentIndex = 0;

  final List<Widget> _screens = [
    const DashboardScreen(),
    const ProjectsScreen(),
    const TasksScreen(),
    const NotificationsScreen(),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: CustomAppBar(title: _getAppBarTitle()),
      drawer: MediaQuery.of(context).size.width > 600
          ? const AppDrawer()
          : null,
      body: _screens[_currentIndex],
      bottomNavigationBar: MediaQuery.of(context).size.width <= 600
          ? BottomNavigationBar(
              currentIndex: _currentIndex,
              onTap: (index) => setState(() => _currentIndex = index),
              type: BottomNavigationBarType.fixed,
              items: const [
                BottomNavigationBarItem(
                  icon: Icon(Icons.dashboard),
                  label: 'Dashboard',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.folder),
                  label: 'Projects',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.checklist),
                  label: 'Tasks',
                ),
                BottomNavigationBarItem(
                  icon: Icon(Icons.notifications),
                  label: 'Notifications',
                ),
              ],
            )
          : null,
      floatingActionButton: _currentIndex == 2
          ? FloatingActionButton(
              onPressed: () {
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) => const AddTaskScreen(),
                  ),
                );
              },
              child: const Icon(Icons.add),
            )
          : null,
    );
  }

  String _getAppBarTitle() {
    switch (_currentIndex) {
      case 0:
        return 'Dashboard';
      case 1:
        return 'Projects';
      case 2:
        return 'Tasks';
      case 3:
        return 'Notifications';
      default:
        return 'Teal';
    }
  }
}
