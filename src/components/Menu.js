import React from "react";
import "../App.css";

const Menu = ({ setLineColor, setLineWidth,
setLineOpacity }) => {
return (
	<div className="Menu">
	<label>Brush Color </label>
	<input
		className="color"
		type="color"
		onChange={(e) => {
		setLineColor(e.target.value);
		}}
	/>
	<label>Brush Width </label>
	<input
	className="width"
		type="range"
		min="3"
		max="20"
		onChange={(e) => {
		setLineWidth(e.target.value);
		}}
	/>
	<label>Brush Opacity</label>
	<input
		className="opacity"
		type="range"
		min="1"
		max="100"
		onChange={(e) => {
		setLineOpacity(e.target.value / 100);
		}}
	/>
		
	</div>
);
};

export default Menu;
