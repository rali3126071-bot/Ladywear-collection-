# Lady Wear Collection Loyalty Club

This package contains:
- `index.html`: customer registration + inner loyalty card page
- `admin.html`: Firebase email/password admin login, search, stamp actions, reward marking, CSV export
- `firebase-config.example.js`: copy/rename to `firebase-config.js` and insert your Firebase Web App config
- `firestore.rules`: starter rules; review carefully before deployment

## Firebase setup
1. In Firebase Console, enable **Authentication → Sign-in method → Anonymous** for customers.
2. Enable **Email/Password** authentication for the admin.
3. Create a Firestore database.
4. Create the admin user in Authentication. Use a strong unique password.
5. Copy `firebase-config.example.js` to `firebase-config.js` and add your Firebase Web App config.
6. In Firestore Rules, deploy the contents of `firestore.rules`. Replace `REPLACE_WITH_ADMIN_EMAIL` with the exact admin email. Do not leave the placeholder.
7. Upload `index.html`, `admin.html`, `firebase-config.js` to the same GitHub Pages root.

## Important limitations
- Customer flow intentionally uses anonymous Firebase Authentication (no SMS OTP). A profile is tied to that browser's anonymous UID. If browser data is cleared or they change devices, the profile cannot be recovered by name + phone alone; staff will need a recovery workflow.
- Name + phone is not identity verification. Do not expose customer data or allow public collection reads.
- Review and test rules in Firebase Rules Playground before using real customer data. Admin search/listing requires the authenticated admin email to exactly match the email in rules.
- For stronger security, use server-side Cloud Functions for stamp/reward actions and audit logs. Never put a service-account private key in website files.
- This static project does not itself generate an Android APK. Once the website is working, package the admin page in an Android WebView/Capacitor build environment.
