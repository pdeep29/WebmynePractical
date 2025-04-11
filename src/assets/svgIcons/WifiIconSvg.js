import * as React from "react"
import Svg, { Path } from "react-native-svg"

function WifiIconSvg(props) {
    return (
        <Svg
            width="800px"
            height="800px"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M0 7l1.172-1.172a9.657 9.657 0 0113.656 0L16 7l-1.414 1.414-1.172-1.171a7.657 7.657 0 00-10.828 0L1.414 8.414 0 7z"
                fill={props.customStroke ? props.customStroke : "#000"}
            />
            <Path
                d="M4.243 11.243L2.828 9.828 4 8.657a5.657 5.657 0 018 0l1.172 1.171-1.415 1.415-1.171-1.172a3.657 3.657 0 00-5.172 0l-1.171 1.172z"
                fill={props.customStroke ? props.customStroke : "#000"}
            />
            <Path
                d="M8 15l-2.343-2.343 1.171-1.172a1.657 1.657 0 012.344 0l1.171 1.172L8 15z"
                fill={props.customStroke ? props.customStroke : "#000"}
            />
        </Svg>
    )
}

export default WifiIconSvg
