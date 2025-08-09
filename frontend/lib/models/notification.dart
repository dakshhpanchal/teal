enum NotificationType { completed, upcoming, alert }

class Notification {
  final String id;
  final NotificationType type;
  final String title;
  final String message;
  final String time;
  final bool read;

  const Notification({
    required this.id,
    required this.type,
    required this.title,
    required this.message,
    required this.time,
    required this.read,
  });
}
