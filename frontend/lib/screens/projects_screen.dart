import 'package:flutter/material.dart';
import 'package:teal/models/project.dart';
import 'package:teal/widgets/project_card.dart';
import 'package:teal/theme/app_text_styles.dart';

class ProjectsScreen extends StatelessWidget {
  const ProjectsScreen({super.key});

  final List<Project> projects = const [
    Project(
      id: '1',
      name: 'TeamHub Dashboard',
      description: 'College team management system',
      progress: 75,
      members: 4,
      branches: 3,
      deadline: '2023-12-15',
      status: ProjectStatus.active,
    ),
    Project(
      id: '2',
      name: 'Library App',
      description: 'Digital library management',
      progress: 30,
      members: 3,
      branches: 2,
      deadline: '2024-01-20',
      status: ProjectStatus.active,
    ),
    Project(
      id: '3',
      name: 'Alumni Portal',
      description: 'College alumni network',
      progress: 100,
      members: 5,
      branches: 4,
      deadline: '2023-11-10',
      status: ProjectStatus.completed,
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: [
              Text('Projects', style: AppTextStyles.headline2),
              ElevatedButton(
                onPressed: () {
                  // Navigate to create project
                },
                child: const Text('New Project'),
              ),
            ],
          ),
          const SizedBox(height: 16),
          GridView.builder(
            shrinkWrap: true,
            physics: const NeverScrollableScrollPhysics(),
            gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
              crossAxisCount: MediaQuery.of(context).size.width > 900
                  ? 3
                  : MediaQuery.of(context).size.width > 600
                  ? 2
                  : 1,
              crossAxisSpacing: 16,
              mainAxisSpacing: 16,
              childAspectRatio: 0.9,
            ),
            itemCount: projects.length + 1,
            itemBuilder: (context, index) {
              if (index == projects.length) {
                return Card(
                  child: InkWell(
                    onTap: () {
                      // Navigate to create project
                    },
                    borderRadius: BorderRadius.circular(12),
                    child: Padding(
                      padding: const EdgeInsets.all(16.0),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Icon(Icons.add, size: 48, color: Colors.grey),
                          SizedBox(height: 8),
                          Text('New Project'),
                        ],
                      ),
                    ),
                  ),
                );
              }
              return ProjectCard(project: projects[index]);
            },
          ),
        ],
      ),
    );
  }
}
