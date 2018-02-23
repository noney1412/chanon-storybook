import { action } from "@storybook/addon-actions";
import { Card } from "./_styled";
import info from "./_info";
import { text, number, object, color } from "@storybook/addon-knobs";

export default info(() => {
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
});
