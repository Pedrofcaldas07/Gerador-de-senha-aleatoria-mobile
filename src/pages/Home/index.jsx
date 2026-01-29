import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";
import {ModalPassword} from '../../components/modal'

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" 

export function Home() {
  const [size, setSize] = useState(10);
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setmodalVisible] = useState(false)

  function generationPassword(){
    let password = ""
    for (let i = 0, n=charset.length; i < size; i++ ){
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setmodalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assents/logo.png")} style={styles.logo} />
      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#FF0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(value)=> setSize(value.toFixed(0))}
        />
      </View>

      <TouchableOpacity style={styles.btn} onPress={generationPassword}>
        <Text style={styles.btnText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={()=> setmodalVisible(false)}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3f3",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60,
  },
  title: {
    fontSize: 20,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 5,
  },
  btn: {
    height: 50,
    width: "38%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    backgroundColor: "#392de9",
  },
  btnText: {
    color: "#fff",
  },
});
