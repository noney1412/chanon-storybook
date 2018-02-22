import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo, setDefaults } from "@storybook/addon-info";
import backgrounds from "@storybook/addon-backgrounds";

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

~~~jsx
export const Card = styled.div\`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 300px;
	border-radius: 5px;
	cursor: pointer;
	background-color: #fff;
	

	&:hover {
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
	}

	img {
		border-radius: 5px 5px 0 0;
	}

	div {
		font-family: "proxima-nova-soft", sans-serif;
		margin: 0;
		padding: 0 0 20px 20px;
	}

	h3 {
		color: #e74c3c;
		font-size: 24px;
	}
\`;
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
