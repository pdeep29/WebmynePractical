import * as React from "react"
import Svg, { Path } from "react-native-svg"

function BedIconSvg(props) {
    return (
        <Svg
            width="800px"
            height="800px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M3 5v14m0-3h18m0 3v-5.8c0-1.12 0-1.68-.218-2.108a2 2 0 00-.874-.874C19.48 10 18.92 10 17.8 10H11v5.727M7 12h.01M8 12a1 1 0 11-2 0 1 1 0 012 0z"
                stroke={props.customStroke ? props.customStroke : "#000"}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </Svg>
    )
}

export default BedIconSvg
