import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import SplashScreen from 'react-native-splash-screen'
import MyLoader from './src/Components/MyLoader'
import BannerLoader from './src/Components/Loaders/BannerLoader'
import { moderateScale, moderateScaleVertical, width } from './src/styles/responsiveSize'
import HeaderLoader from './src/Components/Loaders/HeaderLoader'
import Pagination from './src/Screens/Pagination/Pagination'


const App = () => {
  const [isLoading, setisLoading] = useState(true)
useEffect( () => {
 hide()
}, [])

const hide = async () => {
  await setTimeout(() => {
    SplashScreen.hide()
    setTimeout(() => {
      setisLoading(false)
    }, 2000);
  }, 2000);
}


  return (
    < >
      {isLoading ?( 
         <View>
         <HeaderLoader
           widthLeft={moderateScale(180)}
           rectWidthLeft={moderateScale(180)}
           rectHeightLeft={moderateScaleVertical(60)}
           isRight={false}
           rx={4}
           ry={4}
           viewStyles={{
             marginVertical: moderateScale(20),
           }}
         />
         <BannerLoader
           viewStyles={{marginTop: moderateScale(8)}}
           homeLoaderHeight={moderateScaleVertical(180)}
         />
         <View style={{flexDirection:'row', width: width-40 }} >
         <BannerLoader
           viewStyles={{marginTop: moderateScale(8)}}
           homeLoaderHeight={moderateScaleVertical(80)}
           isBannerDots ={ false}
           isVendorLoader = {false}
          //  vendorTxtStyles = {{}}
           homeLoaderWidth = {moderateScaleVertical(100)}
         />
         <BannerLoader
           viewStyles={{marginTop: moderateScale(8)}}
           homeLoaderHeight={moderateScaleVertical(80)}
           isBannerDots ={ false}
           isVendorLoader = {false}
          //  vendorTxtStyles = {{}}
           homeLoaderWidth = {moderateScaleVertical(100)}
         />
         </View>
       </View>
      ) : (<>
      <View style={{flex:1, padding:24 }} >
        <Pagination/>
        </View></>)}
    </>
  )
}

export default App