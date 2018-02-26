import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import styled from "styled-components";

const headerProps = { text: "I'm styled!" };

const scope = { styled, headerProps };

const code = `
  const Header = styled.div\`
    color: palevioletred;
    font-size: 18px;
  \`

  render(<Header>{headerProps.text}</Header>)
`;

const CustomLiveProvider = styled(LiveProvider)`
	font-size: 2vh;
	font-family: Consolas;
`;

export default () => (
	<CustomLiveProvider code={code} scope={scope} noInline={true}>
		<LiveEditor />
		<LiveError />
		<LivePreview />
	</CustomLiveProvider>
);
