import { Text } from "react-native";
import { useAuth0 } from "react-native-auth0";

const ProfileInformation = () => {
  const { user, error } = useAuth0();

  return (
    <>
      {user && <Text>Logged in as {user.name}</Text>}
      {!user && <Text>Not logged in</Text>}
      {error && <Text>{error.message}</Text>}
    </>
  );
};

export default ProfileInformation;
