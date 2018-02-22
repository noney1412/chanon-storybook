import React from "react";
import styled from "styled-components";

import backgrounds from "@storybook/addon-backgrounds";

import { storiesOf, addDecorator } from "@storybook/react";
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

import { withInfo, setDefaults } from "@storybook/addon-info";

import { Card } from "./demo";

const stories = storiesOf("💳 MY Card", module);

setDefaults({
	header: false,
	inline: true
});

const Backgrounds = backgrounds([
	{ name: "dark", value: "#090f0f" },
	{ name: "default", value: "#ffff", default: true }
]);

stories.addDecorator(withKnobs);
stories.addDecorator(Backgrounds);

stories.add(
	"👤 Profile",
	withInfo(`
## Component for React

~~~js
<Card>
	<img src="/static/img/50087.jpg"
	alt="Avatar"
	style={{ width: "100%", height: "200px" }}
	/>
	<div>
		<h3><b>Your Name</b></h3>
		<p>📧 nonpanpila@gmail.com </p>
		<p>💻 Computer Engineering </p>
	</div>
</Card>
~~~

`)(() => {
		const name = text("Name", "Chanon Panpila", groupId);

		const options = {
			range: true,
			min: 10,
			max: 42,
			step: 0.5
		};

		const groupId = "GROUP-ID1";

		const style = {
			fontSize: number("FontSize", 15, options, groupId),
			color: color("Color", "black", groupId)
		};

		return (
			<Card onClick={action("Clicked")} style={{ margin: "10px auto" }}>
				<img
					src="/img/50087.jpg"
					alt="Avatar"
					style={{ width: "100%", height: "200px" }}
				/>
				<div style={object("Style", style)}>
					<h3>
						<b>{name}</b>
					</h3>
					<p>📧 nonpanpila@gmail.com </p>
					<p>💻 Computer Engineering </p>
				</div>
			</Card>
		);
	})
);
