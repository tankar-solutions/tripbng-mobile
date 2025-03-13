import {StyleSheet, Platform, StatusBar, Dimensions, PixelRatio} from 'react-native';
import Color from '../../../../Theme/Color';
const {width, height} = Dimensions.get('window');
const scale = width / 375;

const responsiveSize = (size) => Math.round(PixelRatio.roundToNearestPixel(size * scale));

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    flex:1,
    paddingVertical: responsiveSize(18),
    padding: responsiveSize(12),
  },
  flightTypeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: responsiveSize(10),
    padding: responsiveSize(5),
    backgroundColor: '#F4F4F4',
    borderRadius: responsiveSize(25),
  },
  flightTypeBtn: {
    paddingVertical: responsiveSize(6),
    paddingHorizontal: responsiveSize(20),
    borderRadius: responsiveSize(20),
  },
  selectedBtn: {
    backgroundColor: 'rgba(255, 142, 0, 0.2)',
    borderRadius: responsiveSize(20),
    borderWidth: 1,
    borderColor: Color.buttonBackgound,
  },
  flightTypeText: {
    fontSize: responsiveSize(14),
    fontWeight: '600',
    color: '#555',
  },
  selectedFlightTypeText: {
    fontSize: responsiveSize(14),
    color: Color.buttonBackgound,
    fontWeight: '600',
  },
  airportSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(10),
    borderWidth: 1,
    borderColor: Color.greyText,
    borderRadius: responsiveSize(8),
    backgroundColor: 'rgba(165, 167, 172, 0.2)',
    paddingVertical: responsiveSize(3),
    paddingHorizontal: responsiveSize(8),
    marginBottom: responsiveSize(6),
  },
  cityTextView: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: responsiveSize(5),
  },
  fromText: {
    color: Color.gray,
    fontSize: responsiveSize(12),
    fontWeight: '600',
  },
  cityName: {
    color: Color.textBlack,
    fontWeight: '700',
    fontSize: responsiveSize(14),
  },
  cityNameCode: {
    color: Color.textBlack,
    fontSize: responsiveSize(10),
    fontWeight: '400',
  },
  airportName: {
    color: Color.gray,
    fontSize: responsiveSize(12),
    fontWeight: '400',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dateSelect: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(10),
    borderWidth: 1,
    borderColor: Color.greyText,
    borderRadius: responsiveSize(8),
    backgroundColor: 'rgba(165, 167, 172, 0.2)',
    paddingVertical: responsiveSize(3),
    paddingHorizontal: responsiveSize(8),
    marginBottom: responsiveSize(6),
    width: '49%',
  },
  specialText: {
    color: Color.gray,
    fontSize: responsiveSize(12),
    fontWeight: '600',
  },
  specialView: {
    marginTop: responsiveSize(5),
  },
  discountDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(5),
    marginTop: responsiveSize(5),
  },
  discountBox: {
    borderWidth: 1.5,
    paddingVertical: responsiveSize(6),
    paddingHorizontal: responsiveSize(8),
    borderRadius: responsiveSize(12),
    borderColor: Color.greyText,
  },
  discountBoxName: {
    fontSize: responsiveSize(14),
    color: Color.black,
    fontWeight: '500',
  },
  discountText: {
    fontSize: responsiveSize(12),
    color: Color.mainText,
    fontWeight: '500',
  },
  searchBtn: {
    overflow: 'hidden',
    marginTop: responsiveSize(8),
  },
  gradient: {
    borderRadius: responsiveSize(50),
    alignItems: 'center',
    width: '100%',
  },
  searchBtnText: {
    color: Color.white,
    fontWeight: '700',
    fontSize: responsiveSize(16),
    paddingVertical: responsiveSize(10),
  },
});

export default styles;
