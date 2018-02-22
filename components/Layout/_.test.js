import C from './'

test('Post component should render the title not as a link', () => {
  const component = shallow(<C />)
  const tree = toJson(component)
  expect(tree).toMatchSnapshot()
})


