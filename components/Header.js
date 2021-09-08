import React from "react";
import { View, Text, StyleSheet} from "react-native";


const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor:"#f72875",
    width: "100%",
    height: 90,
    padding: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color:"black",
    fontSize:20,
  },
});
export default Header;