import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Kedua extends React.Component {
  render() {
    return (
        <View style={styles.containerMain}>
        <View style={[styles.box1, styles.makeCenter]}>
        <Text style={styles.teksWhite}>Penjualan</Text>
        </View>
        
<View style={styles.box3}>
<View style={styles.boxChild1}>
<Text> Kode Barang :</Text> 
<View style={[styles.boxChild2, styles.makeCenter]}>
<Text style={styles.teksBlack}></Text>
</View>
</View>
<View style={styles.boxChild1}>
<Text> Jumlah Beli :</Text> 
<View style={[styles.boxChild2, styles.makeCenter]}>
<Text style={styles.teksBlack}></Text>
</View>
</View>
<View style={styles.boxChild1}>
<Text> Jumlah Harga :</Text> 
<View style={[styles.boxChild2, styles.makeCenter]}>
<Text style={styles.teksBlack}></Text>
</View>
</View>
</View>
<View style={[styles.box2, styles.makeCenter]}>
<Text style={styles.teksWhite}>Hitung</Text>
</View>
<View style={[styles.box4, styles.makeCenter]}>
<Text style={styles.teksBlack}>Total Belanja adalah</Text>
<View style={styles.boxChild1}>
<Text> Uang Bayar :</Text> 
<View style={[styles.boxChild2, styles.makeCenter]}>
<Text style={styles.teksBlack}></Text>
</View>
</View>
<Text style={styles.teksBlack}>Kembaliannya adalah</Text>
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
flex: 2,
backgroundColor: '#322C9F',
},
box3: {
flex: 2,
backgroundColor: 'white', 
margin: 10,
},
box4: {
flex: 1,
backgroundColor: 'white', 
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