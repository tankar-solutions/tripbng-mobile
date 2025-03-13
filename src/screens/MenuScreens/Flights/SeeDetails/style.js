import { Dimensions, StyleSheet } from "react-native";
import Color from "../../../../Theme/Color";
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Color.white,
  },
  container: {
    padding: 15,
  },
  seeMoreDetailsView:{
    padding:15,
    borderWidth:2,
    borderColor:Color.borderAuth,
    borderRadius:10,
    marginTop:-15
  },
  seeMoreDetails:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  seeDetailsTitle:{
    color:Color.black,
    fontSize:width*0.045,
    fontWeight:"500"
  },
  seeDetailsDesc:{
    color:Color.verifyTitle,
    fontSize:width*0.045,
    fontWeight:"300"
  },
  seeMorePrice:{
    color:Color.black,
    fontSize:width*0.05,
    fontWeight:"500"
  },
  seeMoreInfo:{
    flexDirection:"row",
    alignItems:"center",
    gap:75,
    marginTop:15
  },
  seeMoreInfoView:{
    marginLeft:20,
    marginTop:5
  },
  seemMoreIncon:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  seeMoreIconText:{
    color:Color.verifyTitle,
    fontSize:width*0.04,
    fontWeight:"400",
    width:width*0.25
  },
  lockBtn:{
    borderWidth:1.5,
    borderColor:Color.buttonBackgound,
    alignItems:"center",
    paddingVertical:8,
    paddingHorizontal:20,
    borderRadius:25
  },
  lockBtnText:{
    color:Color.buttonBackgound,
    fontSize:16,
    fontWeight:"400"
  },
  bookBtn:{
    backgroundColor:Color.buttonBackgound,
    alignItems:"center",
    paddingVertical:8,
    paddingHorizontal:20,
    borderRadius:25
  },
  bookBtnText:{
    color:Color.white,
    fontSize:16,
    fontWeight:"400"
  },
  seeBtnView:{
    flexDirection:"row",
    alignItems:"center",
    gap:15,
    alignSelf:"flex-end",
    marginTop:15
  }
});

export default styles;
