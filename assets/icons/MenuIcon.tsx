import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const MenuIcon = (props: SvgProps) => (
    <Svg
        width={22}
        height={10}
        viewBox="0 0 22 10"
        fill="none"
        {...props}
    >
    <Path
        d="M0.75 9.25H20.5833M0.75 0.75H20.5833"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    </Svg>
);
export default MenuIcon;
