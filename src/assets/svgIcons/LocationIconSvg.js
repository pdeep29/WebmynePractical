import * as React from "react"
import Svg, { Path } from "react-native-svg"

function LocationIconSvg(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 64 64"
            xmlSpace="preserve"
            {...props}
        >
            <Path
                fill={props.customStroke ? props.customStroke : "#000"}
                d="M32 0C18.746 0 8 10.746 8 24c0 5.219 1.711 10.008 4.555 13.93.051.094.059.199.117.289l16 24a4.001 4.001 0 006.656 0l16-24c.059-.09.066-.195.117-.289C54.289 34.008 56 29.219 56 24 56 10.746 45.254 0 32 0zm0 32a8 8 0 110-16 8 8 0 010 16z"
            />
        </Svg>
    )
}

export default LocationIconSvg
