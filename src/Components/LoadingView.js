import React from "react"
import { ActivityIndicator, View } from "react-native"
import colorConstant from "../utils/colorConstant"

const LoadingView = () => {
    return (<View style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.3)', height: '100%', width: '100%', zIndex: 10000000000, position: "absolute" }}>
        <ActivityIndicator size={"large"} color={colorConstant.Black} />

    </View>)

}
export default LoadingView