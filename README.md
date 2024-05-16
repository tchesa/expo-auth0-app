# expo-auth0-app

An example of implementation of Auth0 authentication in an Expo application

### Instructions

- Clone the project and install the depencencies;
- create an **Auth0 Application**;
- create a `.env` file and add the `EXPO_PUBLIC_AUTH0_DOMAIN` and `EXPO_PUBLIC_AUTH0_CLIENT_ID` based in your **Auth0 Application**;
- run `expo prebuild` and setup your `ios.bundleIdentifier` and `android.package` values in `app.json`;
- Setup your **Allowed Callback URLs** and **Allowed Logout URLs** based on your Auth0 domain and bundleIdentifier/packageName:
  - iOS: `BUNDLE_IDENTIFIER.auth0://AUTH_DOMAIN/ios/BUNDLE_IDENTIFIER/callback`;
  - Android: `PACKAGE_NAME.auth0://AUTH0_DOMAIN/android/PACKAGE_NAME/callback`;
- run `expo run ios` or `expo run android` to run your app using your custom development build.

More details: https://auth0.com/docs/quickstart/native/react-native-expo/interactive
