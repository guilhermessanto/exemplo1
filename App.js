import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={estilos.container}>
      <Text>Olá Mundo!</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItens: "center",
    justifyContent: "center",
  },
});
