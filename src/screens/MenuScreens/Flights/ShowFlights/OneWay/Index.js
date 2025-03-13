import {
  View,
  Text,
  StatusBar,
  FlatList,
  ActivityIndicator,
  Animated,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import styles from './style';
import FlightHeader from '../../../../../Components/FlightHeader/Index';
import FlightDates from '../../../../../Components/FlightDates/Index';
import FlightDetailsBox from '../../../../../Components/FlightDetailsBox/Index';
import {SafeAreaView} from 'react-native-safe-area-context';
import {apiService} from '../../../../../Api';
import moment from 'moment';
import LinearGradient from 'react-native-linear-gradient';
import {useRoute} from '@react-navigation/native';

const OneWay = () => {
  const route = useRoute();
  const {flightDetails, paxCount, flightType, countyCode} = route.params;

  const [flights, setFlights] = useState([]);
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    moment().format('MM/DD/YYYY'),
  );
  const [loading, setLoading] = useState(false);

  const shimmerAnim = useRef(new Animated.Value(0)).current;
  let flightTypeIndex;
  switch (flightType) {
    case 'Economy':
      flightTypeIndex = 0;
      break;
    case 'Business':
      flightTypeIndex = 1;
      break;
    case 'First Class':
      flightTypeIndex = 2;
      break;
    case 'Premium Economy':
      flightTypeIndex = 3;
      break;
    default:
      flightTypeIndex = -1;
      break;
  }
  useEffect(() => {
    generateDates();
  }, []);

  useEffect(() => {
    allFlights();
  }, [selectedDate]);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(shimmerAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(shimmerAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, []);

  const generateDates = () => {
    const today = moment();
    const next15Days = [];

    for (let i = 0; i < 15; i++) {
      const date = today.clone().add(i, 'days');
      next15Days.push({
        day: date.format('ddd'),
        date: date.format('MM/DD/YYYY'),
        displayDate: date.format('ddd, MMM D'),
        price: `₹ ${3000 + i * 100}`,
      });
    }

    setDates(next15Days);
  };

  const allFlights = async () => {
    const flightData = flightDetails;
    setLoading(true);
    try {
      const response = await apiService.post('/flight/searchFlight', {
        Travel_Type: countyCode,
        Booking_Type: 0,
        TripInfo: flightData,
        Adult_Count: paxCount.adults,
        Child_Count: paxCount.children,
        Infant_Count: paxCount.infants,
        Class_Of_Travel: flightTypeIndex,
        Filtered_Airline: [{Airline_Code: ''}],
        stops: [0, 1, 2, 3],
        priceRange: {min: 0, max: 250000},
        departureFromOrigin: null,
        arrivalAtDestination: null,
        sort: {name: 'price', method: 'desc'},
      });

      if (response?.success) {
        setFlights(response?.data);
      } else {
        console.error('Error:', response?.message || 'Something went wrong!');
      }
    } catch (error) {
      console.error(
        'API Error:',
        error?.response?.status,
        error?.response?.data || error.message,
      );
    }
    setLoading(false); // Stop loading
  };

  const renderFlightDetails = ({item}) => (
    <FlightDetailsBox flightData={item} />
  );

  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.container}>
        <FlightHeader />
        <FlightDates
          dates={dates}
          selectedDate={selectedDate}
          onDateSelect={setSelectedDate}
        />

        {loading ? (
          <SkeletonLoader shimmerAnim={shimmerAnim} />
        ) : (
          <FlatList
            data={flights?.TripDetails?.[0]?.Flights}
            renderItem={renderFlightDetails}
            keyExtractor={item => item.id}
            contentContainerStyle={{paddingBottom: 50}}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={
              !loading && (
                <Text style={{textAlign: 'center', marginTop: 20}}>
                  No flights available
                </Text>
              )
            }
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const SkeletonLoader = ({shimmerAnim}) => {
  return (
    <View>
      {[...Array(4)].map((_, index) => (
        <View style={styles.detailsContainer}>
          <View style={styles.detailsView}>
            <SkeletonBox width={80} height={20} shimmerAnim={shimmerAnim} />
            <SkeletonBox width={100} height={20} shimmerAnim={shimmerAnim} />
            <SkeletonBox width={80} height={20} shimmerAnim={shimmerAnim} />
          </View>
          <View style={styles.dashedBorder}></View>
          <View style={styles.detailsView}>
            <SkeletonBox width={120} height={20} shimmerAnim={shimmerAnim} />
            <SkeletonBox width={80} height={20} shimmerAnim={shimmerAnim} />
          </View>
          <View style={styles.detailsView}>
            <SkeletonBox width={100} height={40} shimmerAnim={shimmerAnim} />
            <SkeletonBox width={100} height={40} shimmerAnim={shimmerAnim} />
          </View>
        </View>
      ))}
    </View>
  );
};

const SkeletonBox = ({width, height, shimmerAnim}) => {
  const translateX = shimmerAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [-width, width],
  });

  return (
    <View
      style={{
        width,
        height,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: '#E0E0E0',
      }}>
      <Animated.View
        style={{
          width: '150%',
          height: '100%',
          transform: [{translateX}],
        }}>
        <LinearGradient
          colors={['#E0E0E0', '#F5F5F5', '#E0E0E0']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{width: '100%', height: '100%'}}
        />
      </Animated.View>
    </View>
  );
};

export default OneWay;
