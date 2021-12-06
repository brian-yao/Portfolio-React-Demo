import React from "react";
import aboutBackground from "../images/aboutbackground.jpg";
import styled from "styled-components";

const AboutSection = () => {
	return (
		<AboutContainer>
			<About>
				<AboutHeader>
					<h1>About Me</h1>
				</AboutHeader>

				<HeaderQuote>
					<h3>Sharing a little bit of my story...</h3>
				</HeaderQuote>

				<General>
					<h2>General Overview</h2>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry's standard dummy text
						ever since the 1500s, when an unknown printer took a galley of type
						and scrambled it to make a type specimen book. It has survived not
						only five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged. It was popularised in the 1960s
						with the release of Letraset sheets containing Lorem Ipsum passages,
						and more recently with desktop publishing software like Aldus
						PageMaker including versions of Lorem Ipsum
					</p>
				</General>

				<Statistics>
					<h2>Statistics</h2>
					<h5>
						<em>And for those that don't fancy reading:</em>
					</h5>
					<p>Male, 200 years old.</p>
					<p>Five feet 110 inches</p>
					<p>Favorite fonts:Roboto </p>
					<p>Loves to learn new things</p>
				</Statistics>

				<ContactButton>
					<div>
						<a href="#contact" className="btn btn-default btn-black-border">
							Contact
						</a>
					</div>
				</ContactButton>
			</About>
		</AboutContainer>
	);
};

const AboutContainer = styled.div`
	background: linear-gradient(
			rgba(225, 225, 225, 0.94),
			rgba(225, 225, 225, 0.94)
		),
		url(${aboutBackground});
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center center;
`;

const About = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	width: 70%;
	margin: auto;
	color: #333;
`;

const AboutHeader = styled.div`
	font-family: "Source Sans Pro", sans-serif;
	font-size: 1.5rem;
  margin-top: 2rem;
`;
const HeaderQuote = styled.div`
	font-family: "Roboto", Helvetica, serif;
	font-style: italic;
	margin-bottom: 50px;
	font-size: 1.4rem;
`;

const General = styled.div`
	margin-right: auto;
	line-height: 22px;
	h2 {
		font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 2rem;
	}
	p {
		font-family: "Roboto", Helvetica, serif;
	}
`
const Statistics = styled.div`
	margin-right: auto;
	line-height: 22px;
  h5 {
    font-family: "Roboto", Helvetica, serif;
  }
	h2 {
		font-family: "Source Sans Pro", Arial, sans-serif;
    font-size: 2rem;
	}
	p {
		font-family: "Roboto", Helvetica, serif;
	}
`;

const ContactButton = styled.div`
	background-color: transparent;
	text-align: center;
	width: 25%;
	margin: 2rem auto;
	padding: 0.5rem 0;
	font-family: "Roboto", Helvetica, serif;
	font-size: 1.4rem;
	border: 2px solid black;
	-webkit-transition: all 200ms ease-out;
	-moz-transition: all 200ms ease-out;
	-o-transition: all 200ms ease-out;
	-ms-transition: all 200ms ease-out;
	transition: all 200ms ease-out;
  cursor: pointer;

	a {
		color: black;
	}
	&:hover {
		border: 2px solid #464646;
		background-color: #464646;
		a {
			color: white;
		}
	}
`;

export default AboutSection;
