import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const EmailIcon = (props: SvgProps) => (
    <Svg
        width={23}
        height={20}
        viewBox="0 0 23 20"
        fill="none"
        {...props}
    >
    <Path
        d="M16.375 18.4583H5.95833C2.83333 18.4583 0.75 16.8958 0.75 13.25V5.95833C0.75 2.3125 2.83333 0.75 5.95833 0.75H16.375C19.5 0.75 21.5833 2.3125 21.5833 5.95833V13.25C21.5833 16.8958 19.5 18.4583 16.375 18.4583Z"
        stroke="#A5A4BC"
        strokeWidth={1.5}
        strokeMiterlimit={10}
        strokeLinecap="round"
        strokeLinejoin="round"
    />
    <Path
        d="M18.2185 5.19666L12.4404 9.66155C11.6901 10.2412 10.643 10.2412 9.89271 9.66155L4.11456 5.19666"
        stroke="#A5A4BC"
        strokeWidth={1.5}
        strokeLinecap="round"
    />
    </Svg>
);
export default EmailIcon;
