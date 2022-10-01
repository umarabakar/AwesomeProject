import { StyleSheet, Text, View} from 'react-native';

function Transactions({ merchant, timestamp , amount, desc}){

    return(
        <View style={{backgroundColor: "#171616", height: 60, borderBottomWidth: 1, borderColor: '#333333', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 12}}>
            <View style={{flexDirection: 'row', height: '100%', flexDirection: 'row', alignItems: 'center' }}>
            <View style={styles.transactionInfo}>
              <Text>{desc}</Text>
            </View>
            <View>
                <Text style={styles.transactionText}>{merchant}</Text>
                <Text style={styles.transactionText}>{timestamp}</Text>
            </View>
            </View>
            <View><Text style={styles.transactionText}>{amount}</Text></View>
      </View>
    );
}

const styles = StyleSheet.create({      
    transactionInfo: { 
      width: 25, 
      height: 25,
       backgroundColor: 'lavender', 
       borderRadius: 12.5, 
       marginHorizontal: 15, 
       flexDirection: "row", 
       justifyContent: "center", 
       alignItems: 'center',
    },
    transactionText: {
      color: 'white'
    }
  
  
  });
  
export default Transactions;