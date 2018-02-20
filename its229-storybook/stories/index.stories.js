import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";

import { Card } from "../components/Card";

storiesOf("Welcome", module).add("to Storybook", () => (
	<Welcome showApp={linkTo("Button")} />
));

storiesOf("Button", module)
	.add("with text", () => (
		<Button onClick={action("clicked")}>Hello Button</Button>
	))
	.add("with some emoji", () => (
		<Button onClick={action("clicked")}>😀 😎 👍 💯</Button>
	))
	.add("My Card", () => (
		<Card>
			<img
				src="/50087.jpg"
				alt="Avatar"
				style={{ width: "100%", height: "500px" }}
			/>
			<div>
				<h4>
					<b>Chanon Panpila</b>
				</h4>
				<p>Computer Engineer</p>
			</div>
		</Card>
	));
