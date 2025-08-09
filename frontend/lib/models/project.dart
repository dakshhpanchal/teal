enum ProjectStatus { active, completed }

class Project {
  final String id;
  final String name;
  final String description;
  final int progress;
  final int members;
  final int branches;
  final String deadline;
  final ProjectStatus status;

  const Project({
    required this.id,
    required this.name,
    required this.description,
    required this.progress,
    required this.members,
    required this.branches,
    required this.deadline,
    required this.status,
  });
}
