import 'package:flutter/material.dart';
import 'package:teal/widgets/stat_card.dart';
import 'package:teal/theme/app_colors.dart';
import 'package:teal/theme/app_text_styles.dart';

class DashboardScreen extends StatelessWidget {
  const DashboardScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text('Dashboard', style: AppTextStyles.headline2),
          const SizedBox(height: 16),
          GridView.count(
            crossAxisCount: MediaQuery.of(context).size.width > 600 ? 3 : 2,
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            crossAxisSpacing: 16,
            mainAxisSpacing: 16,
            childAspectRatio: 1.5,
            children: const [
              StatCard(
                title: 'Tasks Overview',
                value: '85/120',
                subtitle: 'Completed Tasks',
                icon: Icons.check_circle,
                color: AppColors.primaryLight,
                progress: 85 / 120,
              ),
              StatCard(
                title: 'Active Projects',
                value: '5',
                subtitle: 'Ongoing Projects',
                icon: Icons.folder,
                color: Colors.blue,
              ),
              StatCard(
                title: 'Team Members',
                value: '12',
                subtitle: 'Active Members',
                icon: Icons.people,
                color: Colors.green,
              ),
            ],
          ),
          const SizedBox(height: 24),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Recent Activity', style: AppTextStyles.headline4),
                  const SizedBox(height: 16),
                  ListTile(
                    leading: const CircleAvatar(child: Icon(Icons.person)),
                    title: const Text('John completed UI Redesign task'),
                    subtitle: const Text('2 hours ago'),
                    trailing: Icon(
                      Icons.check_circle,
                      color: Colors.green.shade400,
                    ),
                  ),
                  const Divider(),
                  ListTile(
                    leading: const CircleAvatar(child: Icon(Icons.person)),
                    title: const Text('Meeting reminder in 30 minutes'),
                    subtitle: const Text('30 minutes ago'),
                    trailing: Icon(
                      Icons.access_time,
                      color: Colors.orange.shade400,
                    ),
                  ),
                  const Divider(),
                  ListTile(
                    leading: const CircleAvatar(child: Icon(Icons.person)),
                    title: const Text('API integration task due tomorrow'),
                    subtitle: const Text('1 day ago'),
                    trailing: Icon(Icons.warning, color: Colors.red.shade400),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
