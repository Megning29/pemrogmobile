import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Ketiga extends React.Component {
  render() {
    return (
        <View style={styles.containerMain}>
        <View style={[styles.box1, styles.makeCenter]}>
        <Text style={styles.teksWhite}>Data Barang = </Text>
        </View>
       
<View style={styles.boxChild1}>
<View style={[styles.boxChild2, styles.makeRight]}>
<Text style={styles.teksBlack}>Kode 001</Text>
<Text style={styles.teksBlack}>Kopi Nescape</Text>
</View>
</View>
<View style={styles.boxChild1}>
<View style={[styles.boxChild2, styles.makeRight]}>
<Text style={styles.teksBlack}>Kode 002</Text>
<Text style={styles.teksBlack}>Sabun Mandi</Text>
</View>
</View>
<View style={styles.boxChild1}>
<View style={[styles.boxChild2, styles.makeRight]}>
<Text style={styles.teksBlack}>Kode 003</Text>
<Text style={styles.teksBlack}>Indomie</Text>
</View>
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

box3: {
flex: 2,
backgroundColor: 'white', 
margin: 10,
},
boxChild1: { flex: 1, 
flexDirection: 'row',
},
boxChild2: {
flex: 1,
margin: 20,
 backgroundColor: 'grey',
},
teksBlack: { 
    fontSize: 20, color: 'black',
},
teksWhite: { fontSize: 20, color: 'white',
},
})