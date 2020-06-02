import {keyframes} from "styled-components";

const spinRight = keyframes`
    100% {
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`
const loadingRing = keyframes`
	0% {
		transform: rotate(0deg);
}
	100% {
		transform: rotate(360deg);
}
`
export {spinRight, loadingRing}