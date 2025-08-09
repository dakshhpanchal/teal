import 'package:flutter/material.dart';
import 'package:teal/models/user.dart';
import 'package:teal/theme/app_text_styles.dart';

class SettingsScreen extends StatefulWidget {
  const SettingsScreen({super.key});

  @override
  State<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends State<SettingsScreen> {
  final _formKey = GlobalKey<FormState>();
  late User _user;
  bool _isLoading = true;
  bool _isSaving = false;

  @override
  void initState() {
    super.initState();
    _loadUserData();
  }

  Future<void> _loadUserData() async {
    // Simulate API call
    await Future.delayed(const Duration(seconds: 1));

    setState(() {
      _user = User(
        id: '1',
        name: 'John Doe',
        email: 'john.doe@example.com',
        avatarUrl: 'https://via.placeholder.com/150',
        rollNumber: '2023001',
        branch: 'Computer Science',
        year: '3',
        position: 'Developer',
        bio: 'Full-stack developer with experience in Flutter and Node.js',
        skills: ['Flutter', 'Dart', 'Node.js', 'Firebase'],
        socialLinks: {
          'github': 'https://github.com/johndoe',
          'linkedin': 'https://linkedin.com/in/johndoe',
          'portfolio': 'https://johndoe.dev',
        },
      );
      _isLoading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    if (_isLoading) {
      return const Center(child: CircularProgressIndicator());
    }

    return Scaffold(
      appBar: AppBar(title: const Text('Profile Settings')),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text('Personal Information', style: AppTextStyles.headline3),
            const SizedBox(height: 16),
            Form(
              key: _formKey,
              child: Column(
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Column(
                        children: [
                          CircleAvatar(
                            radius: 50,
                            backgroundImage: NetworkImage(_user.avatarUrl),
                          ),
                          const SizedBox(height: 8),
                          TextButton.icon(
                            onPressed: () {},
                            icon: const Icon(Icons.camera_alt),
                            label: const Text('Change'),
                          ),
                        ],
                      ),
                      const SizedBox(width: 24),
                      Expanded(
                        child: Column(
                          children: [
                            TextFormField(
                              initialValue: _user.name,
                              decoration: const InputDecoration(
                                labelText: 'Full Name',
                                border: OutlineInputBorder(),
                              ),
                              onChanged: (value) {
                                setState(() {
                                  _user = _user.copyWith(name: value);
                                });
                              },
                            ),
                            const SizedBox(height: 16),
                            TextFormField(
                              initialValue: _user.email,
                              decoration: const InputDecoration(
                                labelText: 'Email',
                                border: OutlineInputBorder(),
                              ),
                              keyboardType: TextInputType.emailAddress,
                              onChanged: (value) {
                                setState(() {
                                  _user = _user.copyWith(email: value);
                                });
                              },
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  TextFormField(
                    initialValue: _user.rollNumber,
                    decoration: const InputDecoration(
                      labelText: 'Roll Number',
                      border: OutlineInputBorder(),
                    ),
                    onChanged: (value) {
                      setState(() {
                        _user = _user.copyWith(rollNumber: value);
                      });
                    },
                  ),
                  const SizedBox(height: 16),
                  DropdownButtonFormField<String>(
                    value: _user.branch,
                    decoration: const InputDecoration(
                      labelText: 'Branch',
                      border: OutlineInputBorder(),
                    ),
                    items:
                        const [
                          'Computer Science',
                          'Information Technology',
                          'Electronics',
                          'Mechanical',
                          'Civil',
                          'Electrical',
                        ].map((branch) {
                          return DropdownMenuItem(
                            value: branch,
                            child: Text(branch),
                          );
                        }).toList(),
                    onChanged: (value) {
                      setState(() {
                        _user = _user.copyWith(branch: value);
                      });
                    },
                  ),
                  const SizedBox(height: 16),
                  DropdownButtonFormField<String>(
                    value: _user.year,
                    decoration: const InputDecoration(
                      labelText: 'Year',
                      border: OutlineInputBorder(),
                    ),
                    items: const ['1', '2', '3', '4'].map((year) {
                      return DropdownMenuItem(
                        value: year,
                        child: Text('Year $year'),
                      );
                    }).toList(),
                    onChanged: (value) {
                      setState(() {
                        _user = _user.copyWith(year: value);
                      });
                    },
                  ),
                  const SizedBox(height: 16),
                  DropdownButtonFormField<String>(
                    value: _user.position,
                    decoration: const InputDecoration(
                      labelText: 'Position',
                      border: OutlineInputBorder(),
                    ),
                    items:
                        const [
                          'Member',
                          'Team Lead',
                          'Project Manager',
                          'Developer',
                          'Designer',
                          'Analyst',
                        ].map((position) {
                          return DropdownMenuItem(
                            value: position,
                            child: Text(position),
                          );
                        }).toList(),
                    onChanged: (value) {
                      setState(() {
                        _user = _user.copyWith(position: value);
                      });
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    initialValue: _user.skills.join(', '),
                    decoration: const InputDecoration(
                      labelText: 'Skills (comma separated)',
                      border: OutlineInputBorder(),
                    ),
                    onChanged: (value) {
                      setState(() {
                        _user = _user.copyWith(
                          skills: value
                              .split(',')
                              .map((e) => e.trim())
                              .toList(),
                        );
                      });
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    initialValue: _user.bio,
                    decoration: const InputDecoration(
                      labelText: 'Bio',
                      border: OutlineInputBorder(),
                    ),
                    maxLines: 3,
                    onChanged: (value) {
                      setState(() {
                        _user = _user.copyWith(bio: value);
                      });
                    },
                  ),
                  const SizedBox(height: 24),
                  Text('Social Links', style: AppTextStyles.headline4),
                  const SizedBox(height: 16),
                  TextFormField(
                    initialValue: _user.socialLinks['github'],
                    decoration: const InputDecoration(
                      labelText: 'GitHub URL',
                      prefixIcon: Icon(Icons.code),
                      border: OutlineInputBorder(),
                    ),
                    keyboardType: TextInputType.url,
                    onChanged: (value) {
                      setState(() {
                        _user.socialLinks['github'] = value;
                      });
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    initialValue: _user.socialLinks['linkedin'],
                    decoration: const InputDecoration(
                      labelText: 'LinkedIn URL',
                      prefixIcon: Icon(Icons.link),
                      border: OutlineInputBorder(),
                    ),
                    keyboardType: TextInputType.url,
                    onChanged: (value) {
                      setState(() {
                        _user.socialLinks['linkedin'] = value;
                      });
                    },
                  ),
                  const SizedBox(height: 16),
                  TextFormField(
                    initialValue: _user.socialLinks['portfolio'],
                    decoration: const InputDecoration(
                      labelText: 'Portfolio URL',
                      prefixIcon: Icon(Icons.public),
                      border: OutlineInputBorder(),
                    ),
                    keyboardType: TextInputType.url,
                    onChanged: (value) {
                      setState(() {
                        _user.socialLinks['portfolio'] = value;
                      });
                    },
                  ),
                  const SizedBox(height: 32),
                  SizedBox(
                    width: double.infinity,
                    child: ElevatedButton(
                      onPressed: _isSaving
                          ? null
                          : () async {
                              if (_formKey.currentState!.validate()) {
                                setState(() => _isSaving = true);
                                // Simulate API call
                                await Future.delayed(
                                  const Duration(seconds: 2),
                                );
                                setState(() => _isSaving = false);
                                ScaffoldMessenger.of(context).showSnackBar(
                                  const SnackBar(
                                    content: Text(
                                      'Profile updated successfully!',
                                    ),
                                  ),
                                );
                              }
                            },
                      child: _isSaving
                          ? const CircularProgressIndicator()
                          : const Text('Save Changes'),
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
