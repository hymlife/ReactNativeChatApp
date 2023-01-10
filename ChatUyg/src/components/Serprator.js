import React from "react";
import { View ,StyleSheet} from "react-native";


const Serprator = ()=>{
    return(
        <View style={styles.serprator} ></View>
    )
}
const styles=StyleSheet.create({
    serprator:{
        height:StyleSheet.hairlineWidth, //en ince kalınlığı almak için
        backgroundColor:'gray',
        marginStart:81,//row style da bulunan hortizal için eşitlendi
      }
})
export default Serprator;