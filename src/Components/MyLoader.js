import React from "react"
import { Dimensions } from 'react-native'
import ContentLoader, { Rect, Circle, Path } from "react-content-loader/native"

var {width, height} = Dimensions.get('window')
const MyLoader = (props) => (
    <>
<ContentLoader
    width={width}
    height={400}
    viewBox="0 0 450 400"
    // viewBox={'0','0',"450", '400'}
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <Rect x="10" y="10" rx="10" ry="10" width={width} height="217" />

  </ContentLoader>
  
  <ContentLoader
    width={400}
    height={400}
    viewBox="0 0 450 400"
    // viewBox={'0','0',"450", '400'}
    backgroundColor="#f0f0f0"
    foregroundColor="#dedede"
    {...props}
  >
    <Rect x="0" y="0" rx="30" ry="30" width="60" height="60" />
  </ContentLoader>
  </>
)

export default MyLoader
