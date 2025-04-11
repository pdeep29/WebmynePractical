import * as React from "react"
import Svg, { Path } from "react-native-svg"

function MeetingRoomIconSvg(props) {
    return (
        <Svg
            width="800px"
            height="800px"
            viewBox="-96 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path d="M96 512l224-51.2V51.2L96 0v48H0v416h96v48zM32 80h64v352H32V80zm112 208c8.837 0 16-10.745 16-24s-7.163-24-16-24-16 10.745-16 24 7.163 24 16 24z" />
        </Svg>
    )
}

export default MeetingRoomIconSvg
