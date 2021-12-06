import React from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";
import MainBg from "../images/apple-1838564_1920-main.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<StyledNav>
			<Logo>
				<a href="index.html">
					<img src={logo} />
				</a>
			</Logo>
			<PrimaryNav>
				<ul>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/portfolio">Portfolio</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</PrimaryNav>
		</StyledNav>
	);
};

const StyledNav = styled.div`
	width: 100%;
	padding: 10px 0px;
	display: flex;
	align-items: center;
	position: relative;
	/* background: linear-gradient(rgba(20, 20, 20, 1), rgb(20, 20, 20, 1)); */
	background: linear-gradient(rgba(20, 20, 20, 0.8), rgba(20, 20, 20, 0.8)),
		url(${MainBg});
	background-repeat: no-repeat;
	background-position: center center;
	background-attachment: fixed;
`;

const Logo = styled.div`
	margin-left: 4rem;
	img {
		max-width: 90px;
	}
`;

const PrimaryNav = styled.div`
	padding-right: 50px;
	position: absolute;
	right: 0;
	ul {
		height: 100%;
	}
	li {
		display: inline-block;
		margin: 0px 20px;
		color: white;
		font-size: 13pt;
	}
	a {
		color: white;
	}
	a:hover {
		text-decoration: none;
		color: white;
		border-bottom: 2px solid #f5f5f5;
	}
`;

export default Nav;
