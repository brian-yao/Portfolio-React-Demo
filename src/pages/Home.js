import React from "react";
import styled from "styled-components";
import MainBg from "../images/apple-1838564_1920-main.jpg";
import AboutSection from "../components/About";
import SummarySection from "../components/Summary";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const HomePage = () => {
	return (
		<>
			<Nav />
			<HomeContainer>
				<EntryBanner id="entry-banner">
					<p id="hello">Hello, I'm</p>
					<p id="name">XXXX</p>
					<p id="description">UI Developer. UX Desinger. Problem Solver.</p>
				</EntryBanner>
				<BannerButtons>
					<div className="entry-button">
						<a href="#about">Info</a>
					</div>
					<div className="entry-button">
						<a href="#projects">Portfolio</a>
					</div>
				</BannerButtons>
			</HomeContainer>
			<AboutSection />
			<SummarySection />
			<Footer />
		</>
	);
};

const HomeContainer = styled.div`
	background: linear-gradient(rgba(20, 20, 20, 0.7), rgba(20, 20, 20, 0.7)),
		url(${MainBg});
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
	color: white;
	height: 100vh;
`;

const EntryBanner = styled.div`
	font-family: "Source Sans Pro", Arial, sans-serif;
	height: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-end;
	font-weight: bold;
	#hello {
		font-size: 2.5rem;
	}
	#name {
		font-size: 8rem;
	}
	#description {
		font-size: 2.8rem;
	}
`;

const BannerButtons = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	width: 20%;
	margin: 2rem auto;
	.entry-button {
		background-color: transparent;
		width: 33%;
		color: white;
		font-family: "Roboto", Helvetica, serif;
		font-size: 1.2rem;
		border: 2px solid white;
		transition: all 200ms ease-out;
		text-align: center;
		padding: 8px 0;
		margin: 1rem 0;
		cursor: pointer;
		&:hover {
			border: 2px solid white;
			background-color: white;
			a {
				color: #333;
			}
		}
		a {
			color: white;
		}
	}
`;

export default HomePage;
