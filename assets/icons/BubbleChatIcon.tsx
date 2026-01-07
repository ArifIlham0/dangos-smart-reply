import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const BubbleChatIcon = (props: SvgProps) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        {...props}
    >
    <Path
        d="M7.75 10.5625H16.75"
        stroke="#093D89"
        strokeWidth={2}
        strokeLinecap="round"
    />
    <Path
        d="M7.75 14.5H13.9375"
        stroke="#093D89"
        strokeWidth={2}
        strokeLinecap="round"
    />
    <Path
        d="M17.875 2.50505C16.2202 1.54784 14.2991 1 12.25 1C6.03679 1 1 6.03679 1 12.25C1 14.0497 1.42257 15.7505 2.17389 17.2591C2.37356 17.6599 2.44001 18.1181 2.32426 18.5507L1.6542 21.055C1.36332 22.1421 2.35789 23.1366 3.44502 22.8458L5.94931 22.1758C6.38192 22.06 6.84011 22.1265 7.24097 22.3261C8.74942 23.0774 10.4503 23.5 12.25 23.5C18.4631 23.5 23.5 18.4631 23.5 12.25C23.5 10.2009 22.9521 8.27973 21.995 6.625"
        stroke="#093D89"
        strokeWidth={2}
        strokeLinecap="round"
    />
    </Svg>
);
export default BubbleChatIcon;
