import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Row, Column } from 'hedron';
import { Link, useStaticQuery } from 'gatsby';
import SEO from "../components/seo"

import Speakers from '../components/Bodensee/speakers';
import Schedule from '../components/Bodensee/schedule';
import BodenseeSponsors from '../components/Bodensee/sponsors';

import bodensee from './static/bodensee.png';

const BG = styled.div`
	background: linear-gradient(
		180deg,
		rgba(245, 97, 153, 0) 0%,
		rgba(245, 97, 153, 0.15) 100%
	);
`;

const Hero = styled.section`
	padding: 64px 32px;

	.row {
		max-width: 1200px;
		margin: 0 auto;
	}

	.column {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	h1 {
		margin-bottom: 16px;
	}
	h2 {
		margin-bottom: 32px;
		color: #626467;
	}

	.subheader {
		font-size: 1em;
		line-height: 2;
		color: #656565;
		margin-bottom: 32px;
	}

	.bodensee {
		max-height: 400px;
	}

	button {
		padding: 16px 32px;
		border-radius: 5px;
		font-size: 16px;
		font-weight: 500;
		cursor: pointer;
		transition: all 0.5s;
	}

	button:hover {
		box-shadow: 0 16px 32px 0 rgba(62, 57, 107, 0.18), 0 0 0 transparent;
		transform: translate(0px, -5px);
	}

	button:disabled {
		background: lightgray;
		cursor: default;

		:hover {
			transform: none;
			box-shadow: none;
		}
	}

	.dark {
		background: #db3f74;
		color: white;
		border: none;
		margin-right: 16px;

		@media (max-width: 435px) {
			margin-right: 0;
			margin-bottom: 16px;
		}
	}

	.light {
		background: white;
		color: #db3f74;
		border: 2px solid #db3f74;
	}
`;

const VenueSection = styled.section`
	max-width: 1140px;
	margin: 0 auto;
	margin-bottom: 64px;

	h2 {
		color: rgb(219, 63, 116);
		line-height: 1.1;
		font-weight: 600;
		font-size: 20px;
		text-transform: uppercase;
		letter-spacing: 0.5px;
		margin: 16px 0;
	}
	ul {
		margin: 0;
		padding: 0;
	}
	p {
		font-size: 1em;
		line-height: 1.75;
		color: #656565;
		margin-bottom: 32px;
		max-width: 35rem;
	}
	li {
		display: flex;
		justify-content: space-between;
		margin: 0;
		max-width: 350px;
		margin-bottom: 10px;
		border-bottom: 1px dashed lightgray;
	}
`;

const PageWrapper = styled.div`
	padding: 64px 32px;
`;

const BodenseePage = () => {

	const { gcms: {events} } = useStaticQuery(
		graphql`
		  query {
			  gcms {
			events(where: {
			  title_contains: "Bodensee"
			}) {
			  twitterCard {
			  url
			}
			  ogCard {
				url
			  }
			}
		  }
		}
		`
	  )

	  
	
	return (<Layout>
		<SEO
			title="Bodensee, September 6th"
			description="GraphQL Day Bodensee is a single-day conference focusing on adopting GraphQL and getting the most out of it in production."
			ogTwitterImage={events[0].twitterCard.url}
			ogSiteImage={events[0].ogCard.url}
			/>
		<BG>
			<Hero>
				<Row className="row">
					<Column lg={6} sm={12} className="column">
						<div>
							<h1>Join us at GraphQL Day Bodensee!</h1>
							<h2>September 6th in beautiful Kosntanz, Germany</h2>
							<p className="subheader">
								GraphQL Day Bodensee is a single-day conference focusing on
								adopting GraphQL and getting the most out of it in production.
								Learn from a lineup of thought leaders and connect with other
								forward-thinking local developers and technical leaders.
							</p>
							<div className="buttons">
								<a
									href="https://www.eventbrite.ie/e/graphql-day-bodensee-tickets-60886463050"
									target="_blank"
									rel="noopener noreferrer"
								>
									<button className="dark">Get tickets</button>
								</a>
								<Link
									to="/sponsors"
									alt="More information about sponsoring GraphQL day Bodensee"
								>
									<button className="light">Become a Sponsor</button>
								</Link>
							</div>
						</div>
					</Column>
					<Column lg={6} sm={12} className="column">
						<img
							src={bodensee}
							alt="hero graphic of bodensee germany"
							className="bodensee"
						/>
					</Column>
				</Row>
			</Hero>
		</BG>
		<PageWrapper>
			<Speakers />
			<Schedule />
			<VenueSection>
			<h2>The Venue</h2>
			<p>The event will be held in the beautiful town of Konstanz in southern Germany, right on the shores of Lake Constance (the Bodensee). With ancient, roman ruins, a towering cathedral right next to the conference center and a bustling old-town filled with both modern and boutique shops, <a href="https://www.konstanz-tourismus.de/"> there's something for everyone in this trendy city.</a> We will be in the <a href="https://www.konstanz.de/start/kultur+_+freizeit/kulturamt.html">Kulturzentrum, Konstanz</a> which is in the heart of the old-town.</p>

			<h2>Welcome to the Lake, it's Summer!</h2>
			<p>For those who aren't familiar with the Bodensee region, it's popular, so hotels can go quick! But not to worry, the commute system (yes, planes, trains and automobiles) will get you everywhere you need to go. The closest major airport is Zürich, around 1 hour to the south of the event.</p>
			<p>You can reach any major city around the lake easily with either train or ferry.</p>
			
			<p><ul>
			<li><strong>Kreuzlingen (CH)</strong><strong>3 Minutes</strong></li>
			<li><strong>Allensbach</strong><strong>10 Minutes</strong></li>
			<li><strong>Radolfzell</strong><strong>15 Minutes</strong></li>
			<li><strong>Singen</strong><strong>30 Minutes</strong></li>
			<li><strong>Meersburg (Ferry)</strong><strong>35 Minutes</strong></li>
			<li><strong>Schaffhausen (CH)</strong><strong>49 Minutes</strong></li>
			<li><strong>Überlingen</strong><strong>1 Hour</strong></li>
			</ul></p>
			</VenueSection>
			<BodenseeSponsors />
		</PageWrapper>
	</Layout>
)};

export default BodenseePage;
