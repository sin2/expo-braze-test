import React from "react";
import { StyleSheet, Text, View, Alert, Linking } from "react-native";
import ReactAppboy from "react-native-appboy-sdk";

export default class App extends React.Component {
  componentDidMount() {
    ReactAppboy.changeUser("717461d7-4e51-46de-9e2d-3dc912a562d6");

    Linking.getInitialURL().then(url => {
      console.log(`Deeplink URL ${url || ""}`);
      if (url) {
        Alert.alert("Deeplink URL", url);
      }
    });

    ReactAppboy.getInitialURL(pushNotificationURL => {
      console.log(`Appboy Deeplink URL ${pushNotificationURL || ""}`);
      if (pushNotificationURL) {
        Alert.alert("Appboy Deeplink URL", pushNotificationURL);
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
