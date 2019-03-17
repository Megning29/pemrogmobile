import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Kedua from './src/Kasir/Kedua.js';
import Ketiga from './src/Kasir/Ketiga.js';
import Keempat from './src/Kasir/Keempat.js';

export default class Awal extends React.Component {
  render() {
    return (
        <View style={styles.containerMain}>
        <View style={[styles.box1, styles.makeCenter]}>
        <Text style={styles.teksWhite}>Aplikasi Kasir</Text>
        </View>
        <View style={[styles.box2, styles.makeCenter]}>
        <Image
style={styles.gambar}
source={require("./kopi.jpg")}
resizeMode = "stretch"
/></View>

<View style={styles.box3}>
<View style={styles.boxChild1}>
<View style={[styles.boxChild2, styles.makeCenter]}>
<Text style={styles.teksBlack}>Penjualan</Text>
</View>
<View style={[styles.boxChild2, styles.makeCenter]}>
<Text style={styles.teksBlack}>Data Barang</Text>
</View>
</View>
<View style={styles.boxChild1}>
<View style={[styles.boxChild2, styles.makeCenter]}>
<Text style={styles.teksBlack}>Tentang Kami</Text>
</View>
</View>
</View>
<View style={[styles.box4, styles.makeCenter]}>
<Text style={styles.teksWhite}>@meganingrum299</Text>
</View>
</View>
)
}
}

const styles = StyleSheet.create({
containerMain: {
flex: 1,
backgroundColor: '#BFD5FB',
},
makeCenter: { alignItems: 'center', justifyContent: 'center',
},

box1: {
flex: 1,
backgroundColor: '#322C9F',
},
box2: {
  flex: 1,
  backgroundColor: 'orange',
  },
gambar: {
  width: 400,
  height: 120
  },
box3: {
flex: 2,
backgroundColor: 'white', 
margin: 10,
},
box4: {
flex: 1,
backgroundColor: '#322C9F', 
margin: 10,
},
boxChild1: { flex: 1, 
flexDirection: 'row',
},
boxChild2: {
flex: 1,
margin: 20,
 backgroundColor: 'orange',
},
teksBlack: { 
    fontSize: 20, color: 'black',
},
teksWhite: { fontSize: 20, color: 'white',
},
})