import { Card } from "./";

const C = () => <C />;

test("My Card Components", () => {
	const component = shallow(<C />);
	const tree = toJson(component);
	expect(tree).toMatchSnapshot();
});
