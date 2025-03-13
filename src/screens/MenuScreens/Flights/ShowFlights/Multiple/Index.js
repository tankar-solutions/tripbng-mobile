import {
    View,
    Text,
    SafeAreaView,
    StatusBar,
    FlatList,
  } from 'react-native';
  import React from 'react';
  import styles from './style';
  import { BELL, EDIT, LEFTARROW } from '../../../../../Assets/Images/Index';
  import FlightHeader from '../../../../../Components/FlightHeader/Index';
  import FlightDates from '../../../../../Components/FlightDates/Index';
  import FlightDetailsBox from '../../../../../Components/FlightDetailsBox/Index';
  
  const flightsData = [
    {
      id: '1',
      fromCity: 'Hanoi',
      fromCountry: 'Vietnam',
      toCity: 'Danang',
      toCountry: 'Vietnam',
      departureTime: '23:00 hours',
      departureDate: 'August 28, 2021',
      arrivalTime: '8:00 AM',
      arrivalDate: 'August 29, 2021',
      airline: 'Vietnam Airway',
      price: '₹ 3000',
    },
    {
      id: '2',
      fromCity: 'Ho Chi',
      fromCountry: 'Vietnam',
      toCity: 'Hanoi',
      toCountry: 'Vietnam',
      departureTime: '10:00 hours',
      departureDate: 'September 15, 2021',
      arrivalTime: '12:00 PM',
      arrivalDate: 'September 15, 2021',
      airline: 'Vietnam Airway',
      price: '₹ 4000',
    },
    // Add more flights here
  ];
  
  const Multiple = () => {
    const renderFlightDetails = ({ item }) => {
      return (
        <FlightDetailsBox flightData={item} />
      );
    };
  
    return (
      <SafeAreaView style={styles.safeView}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <View style={styles.container}>
          <FlightHeader />
          <FlightDates />
          <FlatList
            data={flightsData}
            renderItem={renderFlightDetails}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 50 }}
          />
        </View>
      </SafeAreaView>
    );
  };
  
  export default Multiple;
  