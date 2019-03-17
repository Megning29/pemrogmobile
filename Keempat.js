import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Keempat extends React.Component {
  render() {
    return (
        <View style={styles.containerMain}>
        <View style={[styles.box1, styles.makeCenter]}>
        <Text style={styles.teksWhite}>Tentang Kami</Text>
        </View>
        
        
        <View style={styles.makeCenter}>
        <Image
style={styles.gambar}
source={require("./aku.jpg")}
resizeMode = "stretch"
/></View>

<View style={styles.boxChild1}>
<View style={[styles.boxChild2, styles.makeRight]}>
<Text style={styles.teksBlack}>Nama: </Text>

</View>
</View>
<View style={styles.boxChild1}>
<View style={[styles.boxChild2, styles.makeRight]}>
<Text style={styles.teksBlack}>Nim:</Text>

</View>
</View>
<View style={styles.boxChild1}>
<View style={[styles.boxChild2, styles.makeRight]}>
<Text style={styles.teksBlack}>Skills:</Text>

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
gambar: {
    width: 300,
    height: 300
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
 backgroundColor: 'orange',
},
teksBlack: { 
    fontSize: 20, color: 'black',
},
teksWhite: { fontSize: 20, color: 'white',
},
})