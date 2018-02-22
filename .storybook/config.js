import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

const req = require.context("../stories", true, /.stories.js$/);

function loadStories() {
	req.keys().forEach(filename => req(filename));
}

setOptions({
	name: "Chanon Panpila",
	url: "https://github.com/noney1412/chanon-storybook",
	addonPanelInRight: true,
	sidebarAnimations: false
});

configure(loadStories, module);
