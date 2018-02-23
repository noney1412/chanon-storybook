import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo, setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import backgrounds from "@storybook/addon-backgrounds";

const stories = storiesOf("💳 Card", module);

setDefaults({
	header: false
});

const Backgrounds = backgrounds([
	{ name: "lightgrey", value: "#fafafa", default: true },
	{ name: "dark", value: "#090f0f" },
	{ name: "white", value: "#ffff" },
	{ name: "grey", value: "#ebebeb" }
]);

stories.addDecorator(withKnobs);
stories.addDecorator(Backgrounds);
stories.addDecorator(story => (
	<div style={{ marginTop: "20px" }}>{story()}</div>
));

export { stories, withInfo };
