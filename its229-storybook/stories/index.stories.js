import React from "react";
import styled from "styled-components";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import {
	withKnobs,
	text,
	boolean,
	number,
	object,
	select,
	color
} from "@storybook/addon-knobs";

import { Card } from "./demo";

const stories = storiesOf("💳 MY Card", module);

stories.addDecorator(withKnobs);

stories.add("👤 Profile", () => {
	const options = {
		range: true,
		min: 10,
		max: 42,
		step: 0.5
	};

	const colorOPt = {
		Red: "red",
		Blue: "blue",
		Yellow: "yellow",
		Rainbow: ["red", "orange", "etc"],
		None: null
	};
	const groupId = "GROUP-ID1";
	const groupId2 = "GROUP-ID2";

	const style = {
		fontSize: number("FontSize", 15, options, groupId),
		color: color("Color", "black", groupId)
	};

	return (
		<Card onClick={action("Clicked")}>
			<img
				src="/50087.jpg"
				alt="Avatar"
				style={{ width: "100%", height: "200px" }}
			/>
			<div style={object("Style", style)}>
				<h3>
					<b>Chanon Panpila</b>
				</h3>
				<p>📧 nonpanpila@gmail.com </p>
				<p>💻 Computer Engineering </p>
			</div>
		</Card>
	);
});
