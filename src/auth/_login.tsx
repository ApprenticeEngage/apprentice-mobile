import * as React from "react";
import { Text, TextInput, TouchableOpacity, View, StyleSheet } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  // start the sign up process.
  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        firstName,
        lastName,
        emailAddress,
        password,
      });

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // change the UI to our pending section.
      setPendingVerification(true);
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  // This verifies the user using email code that is delivered.
  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      await setActive({ session: completeSignUp.createdSessionId });
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <View style={styles.container}>
      {!pendingVerification && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={firstName}
            placeholder="First Name..."
            onChangeText={(firstName) => setFirstName(firstName)}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={lastName}
            placeholder="Last name..."
            onChangeText={(lastName) => setLastName(lastName)}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={emailAddress}
            placeholder="email..."
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          />
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            value={password}
            placeholder="password..."
            onChangeText={(password) => setPassword(password)}
          />

          <TouchableOpacity style={styles.signUpButton} onPress={onSignUpPress}>
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      )}
      {pendingVerification && (
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={code}
            placeholder="Code..."
            onChangeText={(code) => setCode(code)}
          />
          <TouchableOpacity style={styles.verifyButton} onPress={onPressVerify}>
            <Text style={styles.buttonText}>Verify Email</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    fontSize: 16,
    height: 40,
  },
  signUpButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  verifyButton: {
    backgroundColor: "#28a745",
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});