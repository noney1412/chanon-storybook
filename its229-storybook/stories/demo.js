import styled from "styled-components";

export const Card = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 300px;
	border-radius: 5px;
	cursor: pointer;

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
`;
