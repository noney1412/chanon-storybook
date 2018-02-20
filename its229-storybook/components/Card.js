import styled from "styled-components";

export const Card = styled.div`
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition: 0.3s;
	width: 30%;
	border-radius: 5px;

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

	h4 {
		color: #e74c3c;
		font-size: 20px;
	}
`;

export default () => (
	<Card>
		<img
			src="/static/50087.jpg"
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
);
