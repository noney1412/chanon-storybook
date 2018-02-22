import { storiesOf, addDecorator } from "@storybook/react";
import { withInfo, setDefaults } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import backgrounds from "@storybook/addon-backgrounds";

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

export { stories, withInfo };
