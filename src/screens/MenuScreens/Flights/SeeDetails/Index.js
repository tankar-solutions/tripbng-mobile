import {
  View,
  Text,
  StatusBar,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './style';
import FlightHeader from '../../../../Components/FlightHeader/Index';
import FlightDates from '../../../../Components/FlightDates/Index';
import FlightDetailsBox from '../../../../Components/FlightDetailsBox/Index';
import MoreFlightDetailsBox from '../../../../Components/MoreFlightDetailsBox/Index';
import {SEEMORE1, SEEMORE2, SEEMORE3, SEEMORE4, SEEMORE5, SEEMORE6} from '../../../../Assets/Images/Index';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SeeDetails = () => {
  const navigation = useNavigation()
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
    // Add more flights here
  ];
  const renderFlightDetails = ({item}) => {
    return <MoreFlightDetailsBox flightData={item} />;
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
        <ScrollView contentContainerStyle={{ paddingBottom: 150 }} showsVerticalScrollIndicator={false}>
          <FlatList
            data={flightsData}
            renderItem={renderFlightDetails}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingBottom: 50}}
          />
          <View style={styles.seeMoreDetailsView}>
            <View style={styles.seeMoreDetails}>
              <View>
                <Text style={styles.seeDetailsTitle}>Saver</Text>
                <Text style={styles.seeDetailsDesc}>
                  Fare offered by airline.
                </Text>
              </View>
              <Text style={styles.seeMorePrice}>₹ 340</Text>
            </View>
            <View style={styles.seeMoreInfoView}>
              <View style={styles.seeMoreInfo}>
                <View style={styles.seemMoreIncon}>
                  <Image source={SEEMORE1} />
                  <Text style={styles.seeMoreIconText}>Cabin bag</Text>
                </View>
                <Text style={styles.seeMoreIconText}>7 Kgs</Text>
              </View>
              <View style={styles.seeMoreInfo}>
                <View style={styles.seemMoreIncon}>
                  <Image source={SEEMORE2} />
                  <Text style={styles.seeMoreIconText}>Check-in</Text>
                </View>
                <Text style={styles.seeMoreIconText}>15 Kgs</Text>
              </View>
              <View style={styles.seeMoreInfo}>
                <View style={styles.seemMoreIncon}>
                  <Image source={SEEMORE3} />
                  <Text style={styles.seeMoreIconText}>Cancellation</Text>
                </View>
                <Text style={styles.seeMoreIconText}>Cancellation fee  ₹399</Text>
              </View>
              <View style={styles.seeMoreInfo}>
                <View style={styles.seemMoreIncon}>
                  <Image source={SEEMORE4} />
                  <Text style={styles.seeMoreIconText}>Date Change</Text>
                </View>
                <Text style={styles.seeMoreIconText}>Date Change fee ₹399</Text>
              </View>
              <View style={styles.seeMoreInfo}>
                <View style={styles.seemMoreIncon}>
                  <Image source={SEEMORE5} />
                  <Text style={styles.seeMoreIconText}>Seat</Text>
                </View>
                <Text style={styles.seeMoreIconText}>Chargeable</Text>
              </View>
              <View style={styles.seeMoreInfo}>
                <View style={styles.seemMoreIncon}>
                  <Image source={SEEMORE6} />
                  <Text style={styles.seeMoreIconText}>Meal</Text>
                </View>
                <Text style={styles.seeMoreIconText}>Chargeable</Text>
              </View>
            </View>
            <View style={styles.seeBtnView}>
              <TouchableOpacity style={styles.lockBtn}>
                <Text style={styles.lockBtnText}>Lock Price</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bookBtn} onPress={()=>{
                navigation.navigate("FlightBookDetails")
              }}>
                <Text style={styles.bookBtnText}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default SeeDetails;
