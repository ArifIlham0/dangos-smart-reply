import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const UserIcon = (props: SvgProps) => (
    <Svg
        width={17}
        height={21}
        viewBox="0 0 17 21"
        fill="none"
        {...props}
    >
    <Path
        d="M8.41683 8.41667C10.5339 8.41667 12.2502 6.70042 12.2502 4.58333C12.2502 2.46624 10.5339 0.75 8.41683 0.75C6.29974 0.75 4.5835 2.46624 4.5835 4.58333C4.5835 6.70042 6.29974 8.41667 8.41683 8.41667Z"
        stroke="#A29EBF"
        strokeWidth={1.5}
    />
    <Path
        d="M16.0835 15.6042C16.0835 17.9859 16.0835 19.9167 8.41679 19.9167C0.750122 19.9167 0.750122 17.9859 0.750122 15.6042C0.750122 13.2224 4.1826 11.2917 8.41679 11.2917C12.651 11.2917 16.0835 13.2224 16.0835 15.6042Z"
        stroke="#A29EBF"
        strokeWidth={1.5}
    />
    </Svg>
);
export default UserIcon;
