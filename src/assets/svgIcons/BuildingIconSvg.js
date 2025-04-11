import * as React from "react"
import Svg, { G, Path } from "react-native-svg"

function BuildingIconSvg(props) {
    return (
        <Svg

            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <G fill="none" fillRule="evenodd">
                <Path d="M0 0h32v32H0z" />
                <Path
                    d="M17 0a4 4 0 013.995 3.8L21 4v2.535a3.976 3.976 0 011.729-.526L23 6h5a4 4 0 013.995 3.8L32 10v22H14v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6H0V4A4 4 0 013.8.005L4 0zm10 26h-3a1 1 0 000 2h3a1 1 0 000-2zm0-4h-3a1 1 0 000 2h3a1 1 0 000-2zM6 19H5a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm5 0h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm5 0h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm11-1h-3a1 1 0 000 2h3a1 1 0 000-2zM6 14H5a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm5 0h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm5 0h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm11 0h-3a1 1 0 000 2h3a1 1 0 000-2zM6 9H5a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm5 0h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm5 0h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1v-1a1 1 0 00-1-1zm11 1h-3a1 1 0 000 2h3a1 1 0 000-2zM6 4H5a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1zm5 0h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1zm5 0h-1a1 1 0 00-1 1v1a1 1 0 001 1h1a1 1 0 001-1V5a1 1 0 00-1-1z"
                    fill={props.customStroke ? props.customStroke : "none"}
                    fillRule="nonzero"
                />
            </G>
        </Svg>
    )
}

export default BuildingIconSvg
