class User {
  final String id;
  final String name;
  final String email;
  final String? avatarUrl;
  final String? rollNumber;
  final String? branch;
  final String? year;
  final String? position;
  final String? bio;
  final List<String> skills;
  final Map<String, String> socialLinks;

  const User({
    required this.id,
    required this.name,
    required this.email,
    this.avatarUrl,
    this.rollNumber,
    this.branch,
    this.year,
    this.position,
    this.bio,
    this.skills = const [],
    this.socialLinks = const {},
  });

  User copyWith({
    String? id,
    String? name,
    String? email,
    String? avatarUrl,
    String? rollNumber,
    String? branch,
    String? year,
    String? position,
    String? bio,
    List<String>? skills,
    Map<String, String>? socialLinks,
  }) {
    return User(
      id: id ?? this.id,
      name: name ?? this.name,
      email: email ?? this.email,
      avatarUrl: avatarUrl ?? this.avatarUrl,
      rollNumber: rollNumber ?? this.rollNumber,
      branch: branch ?? this.branch,
      year: year ?? this.year,
      position: position ?? this.position,
      bio: bio ?? this.bio,
      skills: skills ?? this.skills,
      socialLinks: socialLinks ?? this.socialLinks,
    );
  }
}
