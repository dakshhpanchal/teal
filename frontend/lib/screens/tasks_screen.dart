import 'package:flutter/material.dart';
import 'package:teal/models/task.dart';
import 'package:teal/screens/add_task_screen.dart';
import 'package:teal/widgets/task_item.dart';
import 'package:teal/theme/app_text_styles.dart';

class TasksScreen extends StatelessWidget {
  const TasksScreen({super.key});

  final List<Task> tasks = const [
    Task(
      id: '1',
      title: 'Design dashboard UI',
      project: 'TeamHub',
      priority: TaskPriority.high,
      status: TaskStatus.inProgress,
      dueDate: '2023-12-10',
      assignedTo: 'You',
    ),
    Task(
      id: '2',
      title: 'Implement authentication',
      project: 'TeamHub',
      priority: TaskPriority.medium,
      status: TaskStatus.todo,
      dueDate: '2023-12-15',
      assignedTo: 'John',
    ),
    Task(
      id: '3',
      title: 'Write API documentation',
      project: 'Library App',
      priority: TaskPriority.low,
      status: TaskStatus.completed,
      dueDate: '2023-11-28',
      assignedTo: 'Sarah',
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
              Text('Tasks', style: AppTextStyles.headline2),
              ElevatedButton.icon(
                onPressed: () {
                  Navigator.push(
                    context,
                    MaterialPageRoute(
                      builder: (context) => const AddTaskScreen(),
                    ),
                  );
                },
                icon: const Icon(Icons.add),
                label: const Text('New Task'),
              ),
            ],
          ),
          const SizedBox(height: 16),
          Card(
            child: Padding(
              padding: const EdgeInsets.all(16.0),
              child: Column(
                children: [
                  Row(
                    children: const [
                      Expanded(
                        flex: 3,
                        child: Text(
                          'Task',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      Expanded(
                        child: Text(
                          'Project',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      Expanded(
                        child: Text(
                          'Priority',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      Expanded(
                        child: Text(
                          'Status',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      Expanded(
                        child: Text(
                          'Due Date',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                      Expanded(
                        child: Text(
                          'Assigned To',
                          style: TextStyle(fontWeight: FontWeight.bold),
                        ),
                      ),
                    ],
                  ),
                  const Divider(height: 24),
                  ...tasks.map((task) => TaskItem(task: task)).toList(),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}
