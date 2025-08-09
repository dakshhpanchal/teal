enum TaskPriority { low, medium, high }

enum TaskStatus { todo, inProgress, completed }

class Task {
  final String id;
  final String title;
  final String project;
  final TaskPriority priority;
  final TaskStatus status;
  final String dueDate;
  final String assignedTo;

  const Task({
    required this.id,
    required this.title,
    required this.project,
    required this.priority,
    required this.status,
    required this.dueDate,
    required this.assignedTo,
  });
}
