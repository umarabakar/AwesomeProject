import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Scr, ScrollView, Image } from 'react-native';
import Transactions from './components/Transactions';

export default function App() {

  const transactions = [{
    date: '12th Sept 2022',
    transactions: [
      {
        amount: "52,000",
        merchant: "Global Sports",
        timestamp: "4:50pm"
      },
      {
        amount: "10,500",
        merchant: "Konga Online Payment",
        timestamp: "5:20pm"
      },
      {
        amount: "90,500",
        merchant: "Dice House",
        timestamp: "9:00pm"
      }
    ]
},{
  date: '15th Sept 2022',
    transactions: [
      {
        amount: "500",
        merchant: "Shopping Centre",
        timestamp: "2:30pm"
      },
      {
        amount: "45,500",
        merchant: "Lake Plaza",
        timestamp: "1:50pm"
      },
      {
        amount: "52,000",
        merchant: "Pizza Hut",
        timestamp: "8:00pm"
      }
       ]
},{
  date: '20th Sept 2022',
    transactions: [
      {
        amount: "1,500",
        merchant: "JD Sports",
        timestamp: "4:50pm"
      },
      {
        amount: "+5,0000,000",
        merchant: "PayGo Monthly Salary",
        timestamp: "4:50pm"
      },
    ]
}]
  return (
    <View style={styles.container}>
      <View style={styles.balanceContainer}>
          <View style={styles.header}>
            <View style={{marginTop: 40, flexDirection: 'row'}}>
              <Image style={styles.profilepic} source={require('./assets/images/faced.jpeg')}/>
              <Text style={styles.headerTitle}>Hi Umar!</Text>
            </View>
            <View style={{marginTop: 40,width: 150, flexDirection: 'row'}}>
              <Text style={styles.headerTitle}>Add Account</Text>
              <Text style={styles.headerTitle}>+</Text>
            </View>
          </View>        
          <View style={styles.textWrapper}>
            <Text style={styles.textHeader}>Account Balance</Text>
            <Text style={styles.text}>N 4,000</Text>
            <View>
              <View></View>
              <View></View>
              <View></View>
            </View>
          </View>
          <StatusBar style="auto" />
        </View>
        <ScrollView style={{width: '100%', flex:1, backgroundColor: "#171616" }}>
          <View style={{width: '100%', flexDirection: 'row',  justifyContent: 'center'}}>
            <View style={styles.card}>
              <View style={{flexDirection: 'row', alignItems:'center', justifyContent: 'center', width: 50}}>
                <Text style={{color:'white'}}>Place</Text>
              </View>
              <View style = {{width: 270,}}>
                <Text style={{color: 'white', fontWeight: 'bold', marginTop: 10}}>Create Username</Text>
                <Text style={{color:'white'}}>Recieve Money by using registered bank Username</Text>
              </View>
            </View>
          </View>
          <View style={{marginTop: 25, marginLeft: 10, marginBottom: 15}}>
              <Text style= {{color: 'white', fontSize: 20}}>Recent Transactions</Text>
          </View>
          {
            transactions.map( (bills, index) => {
              return(
                <View key={`transaction-${index}`}>
                  <View key={`trans-${index}`} style={styles.dateContainer}><Text style={styles.dateText}>{bills.date}</Text></View>                
                  {bills.transactions.map( (trans, i) => {
                    return <Transactions key={`bills-${i}`} desc={trans.merchant.substring(0,1)} merchant={trans.merchant} amount={trans.amount} timestamp = {trans.timestamp} />;                  
                  })}
              </View> 
              )  
            })
          }
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>22nd Sept 2022</Text>
          </View>
          <Transactions merchant={"Bolt Payment"} amount={"600"} timestamp={"6:00pm"}/>
          <Transactions merchant={"Uber Taxi"} amount={"1600"} timestamp={"7:00pm"}/>
          <Transactions merchant={"Jumia Stores"} amount={"6200"} timestamp={"8:00pm"}/>
          <View style={styles.dateContainer}>
            <Text style={styles.dateText}>23rd Sept 2022</Text>
          </View>
          <Transactions merchant={"Boch Jewelery"} amount={"109,800"} timestamp={"4:00pm"}/>
          <Transactions merchant={"Bolt Payment"} amount={"2000"} timestamp={"6:00pm"}/>
       </ScrollView>
    </View>
   
  );
}

const styles = StyleSheet.create({      
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    width: '100%',
    marginTop: 20,
    marginBottom: 20,
  },
  headerTitle: {
    color: 'white',
    marginHorizontal: 10,
    fontSize: 18,

  },
  balanceContainer: {
    height: '38%',
    backgroundColor: "#171616",
    width: '100%',
    alignItems: 'center',

  },
  textWrapper: {
    marginHorizontal: 1,
    marginTop: 20,
    height: 150,
    width: 370,
    backgroundColor: '#4a167d',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    elevation: 10,
    shadowColor: "purple",
    shadowOffset: { width: 100, height:10},
    shadowOpacity: 1,

  },
  text: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  textHeader: {
    color: 'lavender',
    fontSize: 15,
    marginBottom: 10
    
  },
  card: {
    backgroundColor: '#212121',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    width: 370,
    borderRadius: 5,
  },
  profilepic: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginHorizontal: 10
  },
  dateContainer: {backgroundColor: 'black',  height: 30, flexDirection: 'row', alignItems: 'center'},
  dateText: {color:'white', fontSize: 10, color: 'grey', marginLeft: 4},

});
