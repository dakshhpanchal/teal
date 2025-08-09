import 'package:flutter/material.dart';
import 'package:teal/models/task.dart';

class TaskItem extends StatelessWidget {
  final Task task;

  const TaskItem({super.key, required this.task});

  @override
  Widget build(BuildContext context) {
    Color getPriorityColor() {
      switch (task.priority) {
        case TaskPriority.high:
          return Colors.red;
        case TaskPriority.medium:
          return Colors.orange;
        case TaskPriority.low:
          return Colors.green;
      }
    }

    IconData getStatusIcon() {
      switch (task.status) {
        case TaskStatus.completed:
          return Icons.check_circle;
        case TaskStatus.inProgress:
          return Icons.access_time;
        case TaskStatus.todo:
          return Icons.radio_button_unchecked;
      }
    }

    Color getStatusColor() {
      switch (task.status) {
        case TaskStatus.completed:
          return Colors.green;
        case TaskStatus.inProgress:
          return Colors.orange;
        case TaskStatus.todo:
          return Colors.grey;
      }
    }

    String getStatusText() {
      switch (task.status) {
        case TaskStatus.completed:
          return 'Completed';
        case TaskStatus.inProgress:
          return 'In Progress';
        case TaskStatus.todo:
          return 'To Do';
      }
    }

    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: Row(
        children: [
          Expanded(
            flex: 3,
            child: Row(
              children: [
                const Icon(Icons.checklist, color: Colors.grey),
                const SizedBox(width: 8),
                Text(task.title),
              ],
            ),
          ),
          Expanded(child: Text(task.project)),
          Expanded(
            child: Chip(
              label: Text(
                task.priority.toString().split('.').last,
                style: TextStyle(color: getPriorityColor(), fontSize: 12),
              ),
              backgroundColor: getPriorityColor().withOpacity(0.1),
              padding: EdgeInsets.zero,
            ),
          ),
          Expanded(
            child: Row(
              children: [
                Icon(getStatusIcon(), color: getStatusColor(), size: 16),
                const SizedBox(width: 4),
                Text(
                  getStatusText(),
                  style: TextStyle(color: getStatusColor(), fontSize: 12),
                ),
              ],
            ),
          ),
          Expanded(child: Text(task.dueDate)),
          Expanded(child: Text(task.assignedTo)),
        ],
      ),
    );
  }
}
