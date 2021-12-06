import React from "react";
import styled from "styled-components";
import developerImg from "../images/developerdesign.svg";
import responsiveImg from "../images/responsivedesign.svg";
import innovation from "../images/innovativesolutions.svg";
import passion from "../images/passion.svg";
import summaryBG from "../images/architecture-2178604_1920-main1.jpg"

const SummarySection = () => {
	return (
		<Summary>
			<SummaryContainer>
				<div className="development-summary card">
					<div className="development-img">
						<img className="img-responsive" src={developerImg} alt="designer" />
					</div>
					<div className="development-description">
						<h3>Development and Design</h3>
						<p>
							I aim to put my creativity to the test, designing and building
							unique, meaningful products for clients or merely for my own
							interests.
						</p>
					</div>
				</div>
				<div className="responsive-summary card">
					<div className="responsive-img">
						<img
							className="img-responsive"
							src={responsiveImg}
							alt="responsive"
						/>
					</div>
					<div className="responsive-description card">
						<h3>Responsive Layouts</h3>
						<p>
							Development and design isn't merely putting information on the site
							or preferred media outlet. I organize content and present
							information in an engaging fashion, driving new and unique layouts
							in tandem with novel solutions and cool animations.
						</p>
					</div>
				</div>
				<div className="ideas-summary card">
					<div className="idea-img">
						<img className="img-responsive" src={innovation} alt="solutions" />
					</div>
					<div className="idea-description">
						<h3>Ideas and Solutions</h3>
						<p>
							There are still many problems that exist in today's society,
							including laziness. Luckily, I hope to combat these issues by
							innovating, developing easy-to-use programs, solutions, or products.
						</p>
					</div>
				</div>
				<div className="passion-summary card">
					<div className="passion-img">
						<img className="img-responsive" src={passion} alt="passion" />
					</div>
					<div className="passion-description">
						<h3>Passion and Dedication</h3>
						<p>
							With my profound interest and commitment to my field of study, my
							projects rarely go unfinished and my problems are never left
							unresolved.{" "}
						</p>
					</div>
				</div>
			</SummaryContainer>
		</Summary>
	);
};

const Summary = styled.div`
background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)),
		url(${summaryBG});
	background-attachment: fixed;
	background-attachment: center center;
  color: white;
	min-height: 60vh;
	position: relative;
`

const SummaryContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
	grid-gap: 4rem;
	width: 80%;
	position: absolute;
	top:0;
	bottom: 0;
	left: 10%;
	align-items: center;
`

export default SummarySection;
