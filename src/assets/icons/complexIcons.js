import React from "react";
import styled from "styled-components";
import {loadingRing} from "../../components/animations/keyframes";

const Moon = styled.span`
font-size: 4rem;
`

const IconMoon = () => {
	return (
		<Moon className="icon-moon">
			<span className="path1"></span>
			<span className="path2"></span>
			<span
				className="path3"></span>
			<span className="path4"></span>
			<span className="path5"></span>
			<span
				className="path6"></span>
			<span className="path7"></span>
			<span className="path8"></span>
			<span
				className="path9"></span>
			<span className="path10"></span>
			<span className="path11"></span>
			<span
				className="path12"></span>
			<span className="path13"></span>
			<span className="path14"></span><span
			className="path15"></span>
			<span className="path16"></span>
		</Moon>
	
	)
}

const Loader = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid #fff;
  border-radius: 50%;
  animation: ${loadingRing} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: #fff transparent transparent transparent;
}
div:nth-child(1) {
  animation-delay: -0.45s;
}
div:nth-child(2) {
  animation-delay: -0.3s;
}
div:nth-child(3) {
  animation-delay: -0.15s;
}

`

const LoadingSpinner = () => {
	return (
		<Loader className="lds-ring">
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</Loader>)
}

export {IconMoon, LoadingSpinner}