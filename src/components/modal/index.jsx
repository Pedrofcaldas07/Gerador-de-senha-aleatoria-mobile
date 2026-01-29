import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from "react-native";
import * as Clipboard from "expo-clipboard"
import useStorage from "../../hooks/useStorage"

export function ModalPassword({ password, handleClose }) {
const {saveItem} = useStorage()

  async function handleCopy(){
    await Clipboard.setStringAsync(password)
    alert("Senha copiada com sucesso")
    handleClose()
    await saveItem("@pass", password)
  }

  async function handleSave(){
    alert("Senha salva com sucesso")
    handleClose()
    await saveItem("@pass", password)
  }

  return (
    <View style={styles.container}>
      <View style={styles.caixaGerada}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.innerpassword} onLongPress={handleCopy}>
          <Text style={styles.password}>{password}</Text>
        </Pressable>
        <View style={[styles.btnArea]}>
          <TouchableOpacity style={styles.btn} onPress={handleClose}>
            <Text style={styles.btnText}>
              Voltar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btn, styles.btnSave]} onPress={handleSave}>
            <Text style={styles.btnTextSave} >Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24, 24, 24, 0.6)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  caixaGerada: {
    backgroundColor: "#fff",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerpassword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    padding: 18,
    borderRadius: 8,
  },
  password: {
    color: "#fff",
    textAlign: "center",
  },
  btnArea: {
    flexDirection: "row",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  btn: {
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 8,
    borderRadius: 8,
  },
  btnSave: {
    backgroundColor: "#392de9",
  },
  btnTextSave: {
    color: "#fff",
    fontWeight: "bold",
  },
});
