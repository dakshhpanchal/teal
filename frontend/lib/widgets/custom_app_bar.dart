import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:teal/services/auth_service.dart';
import 'package:teal/theme/app_colors.dart';

class CustomAppBar extends StatelessWidget implements PreferredSizeWidget {
  final String title;

  const CustomAppBar({super.key, required this.title});

  @override
  Size get preferredSize => const Size.fromHeight(kToolbarHeight);

  @override
  Widget build(BuildContext context) {
    final user = Provider.of<AuthService>(context).currentUser;

    return AppBar(
      title: Text(title),
      actions: [
        if (user != null)
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16.0),
            child: CircleAvatar(
              backgroundImage: user.avatarUrl != null
                  ? NetworkImage(user.avatarUrl!)
                  : const AssetImage('assets/default_avatar.png')
                        as ImageProvider,
            ),
          ),
      ],
    );
  }
}
