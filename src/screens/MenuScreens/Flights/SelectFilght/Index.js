import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';

import {
  CALENDER,
  DATE,
  FROM,
  LEFTARROW,
  TO,
  VISA,
} from '../../../../Assets/Images/Index';
import AuthTitle from '../../../../Components/AuthTitle/Index';
import LinearGradient from 'react-native-linear-gradient';
import AirportSelectionModal from '../../../../Components/AirportSelectionModal';
import Color from '../../../../Theme/Color';
import {SafeAreaView} from 'react-native-safe-area-context';
import DateSelectionModal from '../../../../Components/DateSelectionModal';
import {useNavigation} from '@react-navigation/native';
import SelectPax from '../../../../Components/SelectPax';
import moment from 'moment';

const SelectFilght = () => {
  const today = new Date();
  const flightTypes = ['One Way', 'Roundtrip', 'Multicity'];
  const [selectedType, setSelectedType] = useState('One Way');
  const [isSelectingDeparture, setIsSelectingDeparture] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isSelectingFrom, setIsSelectingFrom] = useState(true);
  const [dateModalVisible, setDateModalVisible] = useState(false);
  const [paxModalVisible, setPaxModalVisible] = useState(false);
  const [departureDate, setDepartureDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(null);
  const [dateType, setDateType] = useState('departure');
  const [savedReturnDate, setSavedReturnDate] = useState(null);
  const [countyCode, setCountyCode] = useState(0);
  const [paxCount, setPaxCount] = useState({
    adults: 1,
    children: 0,
    infants: 0,
  });
  const [flightType, setFlightType] = useState('Economy');
  const navigation = useNavigation();

  const handlePaxSelection = (selectedPax, selectedFlightType) => {
    setPaxCount(selectedPax);
    setFlightType(selectedFlightType);
  };

  const [fromAirport, setFromAirport] = useState({
    municipality: 'Ahmedabad',
    iata_code: 'AMD',
    name: 'Sardar Vallabhbhai Patel International Airport',
    iso_country: 'IN',
  });

  const [toAirport, setToAirport] = useState({
    municipality: 'Mumbai',
    iata_code: 'BOM',
    name: 'Chhatrapati Shivaji International Airport',
    iso_country: 'IN',
  });
  useEffect(() => {

    if (fromAirport.iso_country === 'IN' && toAirport.iso_country === 'IN') {
      setCountyCode(0); 
    } else {
      setCountyCode(1);
    }
  }, [fromAirport, toAirport]); 
  console.log("adsa", toAirport);
  
  const [flightDetails, setFlightDetails] = useState([
    {
      Origin: fromAirport.iata_code,
      Destination: toAirport.iata_code,
      TravelDate: moment(departureDate).format('MM/DD/YYYY'),
    },
  ]);
  
  useEffect(() => {
    setFlightDetails([
      {
        Origin: fromAirport.iata_code,
        Destination: toAirport.iata_code,
        TravelDate: moment(departureDate).format('MM/DD/YYYY'),
      },
    ]);
  }, [fromAirport, toAirport, departureDate]);
  useEffect(() => {
    if (selectedType === 'Roundtrip') {
      const nextDay = new Date(departureDate);
      nextDay.setDate(nextDay.getDate() + 1);
      setReturnDate(nextDay);
    } else {
      setReturnDate(null);
    }
  }, [selectedType, departureDate]);

  const openDateModal = type => {
    setDateType(type);
    setDateModalVisible(true);
  };

  const handleDateSelect = ({departureDate, returnDate}) => {
    setDepartureDate(departureDate);

    if (returnDate) {
      setSavedReturnDate(returnDate);
      setReturnDate(returnDate);
      setSelectedType('Roundtrip');
    }
  };

  useEffect(() => {
    if (selectedType === 'One Way') {
      setReturnDate(null);
    } else {
      setReturnDate(savedReturnDate);
    }
  }, [selectedType]);

  const openModal = isFrom => {
    setIsSelectingFrom(isFrom);
    setModalVisible(true);
  };
  const openModalPax = () => {
    setPaxModalVisible(true);
  };

  const selectAirport = airport => {
    if (isSelectingFrom) {
      setFromAirport(airport);
    } else {
      setToAirport(airport);
    }
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.safeView}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#ffffff"
        translucent={false}
      />
      <View style={styles.container}>
        <AuthTitle backImg={LEFTARROW} authTitle="Flight Search" onPress={()=>{
          navigation.goBack()
        }} />
        <View style={styles.flightTypeContainer}>
          {flightTypes.map(type => (
            <TouchableOpacity
              key={type}
              style={[
                styles.flightTypeBtn,
                selectedType === type && styles.selectedBtn,
              ]}
              onPress={() => setSelectedType(type)}>
              <Text
                style={[
                  styles.flightTypeText,
                  selectedType === type && styles.selectedFlightTypeText,
                ]}>
                {type}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {selectedType === 'One Way' || 'Roundtrip' ? (
            <View>
              <View>
                <TouchableOpacity
                  style={styles.airportSelect}
                  onPress={() => openModal(true)}>
                  <Image source={FROM} style={{tintColor: Color.gray}} />
                  <View>
                    <Text style={styles.fromText}>FROM</Text>
                    <View style={styles.cityTextView}>
                      <Text style={styles.cityName}>
                        {fromAirport.municipality}
                      </Text>
                      <Text style={styles.cityNameCode}>
                        {fromAirport.iata_code}
                      </Text>
                    </View>
                    <Text style={styles.airportName}>{fromAirport.name}</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.airportSelect}
                  onPress={() => openModal(false)}>
                  <Image source={TO} style={{tintColor: Color.gray}} />
                  <View>
                    <Text style={styles.fromText}>TO</Text>
                    <View style={styles.cityTextView}>
                      <Text style={styles.cityName}>
                        {toAirport.municipality}
                      </Text>
                      <Text style={styles.cityNameCode}>
                        {toAirport.iata_code}
                      </Text>
                    </View>
                    <Text style={styles.airportName}>{toAirport.name}</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.dateView}>
                <TouchableOpacity
                  style={styles.dateSelect}
                  onPress={() => openDateModal('departure')}>
                  <Image source={CALENDER} style={{tintColor: 'gray'}} />
                  <View>
                    <Text style={styles.fromText}>DEPARTURE DATE</Text>
                    <View style={styles.cityTextView}>
                      <Text style={styles.cityName}>
                        {departureDate.toLocaleDateString('en-US', {
                          day: '2-digit',
                          month: 'short',
                        })}
                      </Text>
                      <Text style={styles.cityNameCode}>
                        {departureDate.toLocaleDateString('en-US', {
                          weekday: 'short',
                          year: 'numeric',
                        })}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.dateSelect}
                  onPress={() => openDateModal('return')}>
                  <Image source={CALENDER} style={{tintColor: 'gray'}} />
                  <View>
                    <Text style={styles.fromText}>RETURN DATE</Text>
                    <View style={styles.cityTextView}>
                      {selectedType === 'Roundtrip' && returnDate ? (
                        <>
                          <Text style={styles.cityName}>
                            {returnDate.toLocaleDateString('en-US', {
                              day: '2-digit',
                              month: 'short',
                            })}
                          </Text>
                          <Text style={styles.cityNameCode}>
                            {returnDate.toLocaleDateString('en-US', {
                              weekday: 'short',
                              year: 'numeric',
                            })}
                          </Text>
                        </>
                      ) : (
                        <Text style={styles.placeholderText}>
                          Choose Return Date
                        </Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                style={styles.airportSelect}
                onPress={openModalPax}>
                <Image source={FROM} style={{tintColor: Color.gray}} />
                <View>
                  <Text style={styles.fromText}>TRAVELLLERS & CLASS</Text>
                  <View style={styles.cityTextView}>
                    <Text style={styles.cityName}>
                      {paxCount.adults + paxCount.children + paxCount.infants},
                    </Text>
                    <Text style={styles.cityNameCode}>{flightType}</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.specialView}>
                <Text style={styles.specialText}>SPECIAL FARES (OPTIONAL)</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.discountDetails}>
                  <TouchableOpacity style={styles.discountBox}>
                    <Text style={styles.discountBoxName}>Student</Text>
                    <Text style={styles.discountText}>
                      Extra discounts/baggage
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.discountBox}>
                    <Text style={styles.discountBoxName}>Armed Forces</Text>
                    <Text style={styles.discountText}>Up to ₹ 600 off</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.discountBox}>
                    <Text style={styles.discountBoxName}>Senior Citizen</Text>
                    <Text style={styles.discountText}>Up to ₹ 600 off</Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <TouchableOpacity
                style={styles.searchBtn}
                onPress={() => {
                  navigation.navigate('OneWay', {flightDetails, paxCount, flightType, countyCode});
                }}>
                <LinearGradient
                  colors={['#fee87f', '#ffb450', '#FF8E00']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={styles.gradient}>
                  <Text style={styles.searchBtnText}>SEARCH FLIGHTS</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          ) : null}
        </ScrollView>
      </View>
      <AirportSelectionModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSelectAirport={selectAirport}
      />
      <DateSelectionModal
        visible={dateModalVisible}
        selectedType={dateType}
        selectedTypeFlight={selectedType}
        onClose={() => setDateModalVisible(false)}
        onSelectDate={handleDateSelect}
      />
      <SelectPax
        visible={paxModalVisible}
        onClose={() => setPaxModalVisible(false)}
        onSelectPax={handlePaxSelection}
      />
    </SafeAreaView>
  );
};

export default SelectFilght;
