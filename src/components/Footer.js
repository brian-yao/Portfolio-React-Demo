import React from "react";
import styled from "styled-components";
import facebook from "../images/facebook.svg";
import linkedin from "../images/linkedin.svg";
import pinterest from "../images/pinterest.svg";
import email from "../images/email.svg";

const Footer = () => {
	return (
		<StyledFooter>
			<div className="footer">
				<MediaLinks>
					<div className="facebook">
						<a href="#">
							<img className="img-responsive" src={facebook} />
						</a>
					</div>

					<div className="linkedin">
						<a href="#">
							<img className="img-responsive" src={linkedin} />
						</a>
					</div>

					<div className="pinterest">
						<a href="#">
							<img className="img-responsive" src={pinterest} />
						</a>
					</div>

					<div className="email-icon">
						<a href="#">
							<img className="img-responsive" src={email} />
						</a>
					</div>
				</MediaLinks>

				<ContactInfo>
					<div className="personal-contact phone">
						<h4>Phone: XXXXXX</h4>
					</div>

					<div className="personal-contact email-personal-contact">
						<h4>Email: XXXXX@gmail.com</h4>
					</div>
				</ContactInfo>

				<FooterDetails>
					<div className="company-information">
						<h3>XXXX</h3>
						<h4>Copyright &copy; 2021</h4>
						<h4>NY</h4>
					</div>

					<div className="home-footer">
						<h4>
							<a href="#">Home</a>
						</h4>
					</div>

					<div className="portfolio-footer">
						<h4>
							<a href="#">Portfolio</a>
						</h4>
						<ul>
							<li>
								<a href="#">Project1</a>
							</li>
							<li>
								<a href="#">Project2</a>
							</li>
							<li>
								<a href="#">Project3</a>
							</li>
							<li>
								<a href="#">See All</a>
							</li>
						</ul>
					</div>

					<div className="resume-footer">
						<h4>
							<a href="#">Resume</a>
						</h4>
						<ul>
							<li>
								<a href="#">Download</a>
							</li>
						</ul>
					</div>

					<div className="contact-footer">
						<h4>
							<a href="#">Contact</a>
						</h4>
					</div>
				</FooterDetails>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.div`
	min-height: 30vh;
	background-color: black;
	color: white;
	font-family: "Roboto", Helvetica, serif;
	text-align: center;
	a {
		color: white;
	}
	ul {
		list-style: none;
	}
	img {
		background-color: #8a8a8a;
		max-width: 2.5rem;
		&:hover {
			background-color: white;
		}
	}
`;

const MediaLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ContactInfo = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const FooterDetails = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export default Footer;
