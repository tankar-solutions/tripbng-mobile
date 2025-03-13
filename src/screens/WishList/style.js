import { Dimensions, StyleSheet } from "react-native";
import Color from "../../Theme/Color";
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
  },
  detailsContainer: {
    // marginTop: 20,
    padding: 15,
    backgroundColor: Color.white,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Color.borderAuth,
  },
  detailsView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    // paddingHorizontal:10
  },
  heartIcon:{
// marginRight:6
paddingHorizontal:8,
  },
  timingView: {
    alignItems: 'center',
  },
  detailsName: {
    color: Color.boxText,
    fontSize: 16,
    fontWeight: '500',
  },
  detailsDesc: {
    color: Color.verifyTitle,
    fontSize: 14,
    fontWeight: '500',
  },
  leftSide: {
    alignItems: 'flex-start',
  },
  rightSide: {
    alignItems: 'flex-end',
  },
  wishlistView:{
    borderWidth:2,
    borderColor:Color.borderAuth,
    borderRadius:15,
    padding:8
  },
  whislistDetails:{
    flexDirection:"row",
    // alignItems:"center",
    padding:10,
    gap:5
  },
  locationDetails:{
    flexDirection:"row",
    alignItems:"center",
    gap:5
  },
  wishlistBanner:{
    width:120,
    height:100,
    borderRadius:10
  },
  hotelRoomName:{
    color:Color.shadeBlack,
    fontSize:width*0.05,
    fontWeight:"500",
    marginBottom:10
  },
  hotelRoomLocation:{
    color:Color.shadeBlack,
    fontSize:width*0.045,
    fontWeight:"500"
  },
  loginContainer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},
loginIcon: {
  width: 80,
  height: 80,
  marginBottom: 20,
  tintColor: '#0D5B9B',
},
loginMessage: {
  fontSize: 18,
  color: '#333',
  textAlign: 'center',
  marginBottom: 20,
},
loginButton: {
  backgroundColor: '#0D5B9B',
  paddingVertical: 10,
  paddingHorizontal: 30,
  borderRadius: 10,
},
loginButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
loginContainer: {
  // flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 20,
},
loginIcon: {
  width: 80,
  height: 80,
  marginBottom: 20,
  tintColor: '#0D5B9B',
},
loginMessage: {
  fontSize: 18,
  color: '#333',
  textAlign: 'center',
  marginBottom: 20,
},
loginButton: {
  backgroundColor: '#0D5B9B',
  paddingVertical: 10,
  paddingHorizontal: 30,
  borderRadius: 10,
},
loginButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},

})

export default styles