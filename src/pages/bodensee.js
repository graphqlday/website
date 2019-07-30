import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { Row, Column } from 'hedron';
import { Link, useStaticQuery, graphql } from 'gatsby';
import SEO from "../components/seo"

import Speakers from '../components/Bodensee/speakers';
import Schedule from '../components/Bodensee/schedule';
import BodenseeSponsors from '../components/Bodensee/sponsors';

import konstanzImage from '../pages/static/konstanz_image.jpg'

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
	display: flex;
	flex-wrap: wrap;

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
	}
	li {
		display: flex;
		justify-content: space-between;
		margin-bottom: 10px;
		border-bottom: 1px dashed lightgray;
	}

	.box {
		flex: 1 0 30rem;
		box-sizing: border-box;
		padding: 1rem;
		margin-bottom: 3rem;
	}
`;

const PageWrapper = styled.div`
	padding: 64px 32px;
`;

const BodenseePage = () => {

	const {gcms} = useStaticQuery(
		graphql`
		fragment Sponsor on GraphCMS_Sponsorship {
			sponsorLevel
			sponsor {
			  logo {
				url
				
			  }
			}
		  }
		  {
			gcms {
			  conferences: conferences(where: {name_contains: "Bodensee"}) {
				events(first: 1) {
				  twitterCard {
					url
				  }
				  ogCard {
					url
				  }
				  organizer: sponsorships(where: {
					sponsorLevel: Organizer
				  }) {
					...Sponsor
				  }
				  goldSponsors: sponsorships(where: {
					sponsorLevel: Gold
				  }) {
					...Sponsor
				  }
				  
				  bronzeSponsors: sponsorships(where: {
					sponsorLevel: Bronze
				  }) {
					...Sponsor
				  }
				  
				  commSponsors: sponsorships(where: {
					sponsorLevel: Community
				  }) {
					...Sponsor
				  }
				  
				  giveawaySponsors: sponsorships(where: {
					sponsorLevel: Giveaway
				  }) {
					...Sponsor
				  }
				  
				  silverSponsors: sponsorships(where: {
					sponsorLevel: Silver
				  }) {
					...Sponsor
				  }
				  
				  schedule: scheduleEntries(orderBy: start_ASC) {
					start
					title
					icon {
					  url
					}
					title
					talk {
					  title
					  speaker {
						  name
						headshot {
						  url
						}
					  }
					}
				  }
				}
			  }
			  speakers: speakers(where: {talks_some: {scheduleEntries_every: {event: {conference: {name_contains: "Bodensee"}}}}}) {
				name
				position
				githubLink
				twitterLink
				headshot {
				  url
				}
			  }
			}
		  }
		  
		`
	  )
	const event = gcms.conferences[0].events[0]
	return (<Layout>
		<SEO
			title="Bodensee, September 6th"
			description="GraphQL Day Bodensee is a single-day conference focusing on adopting GraphQL and getting the most out of it in production."
			ogTwitterImage={event.twitterCard.url}
			ogSiteImage={event.ogCard.url}
			/>
		<BG>
			<Hero>
				<Row className="row">
					<Column lg={6} sm={12} className="column">
						<div>
							<h1>Join us at GraphQL Day Bodensee!</h1>
							<h2>September 6th in beautiful Konstanz, Germany</h2>
							<p className="subheader">
								GraphQL Day Bodensee is a single-day conference focusing on
								adopting GraphQL and getting the most out of it in production.
								Learn from a lineup of thought leaders and connect with other
								forward-thinking local developers and technical leaders.
							</p>
							<div className="buttons">
								<a
									href="https://www.eventbrite.ie/e/graphql-day-bodensee-tickets-60886463050"
									target="_blank" rel="noopener noreferrer"
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
			<Speakers speakers={gcms.speakers} />
			<Schedule schedule={event.schedule} />
			<VenueSection>
			<section className="box">
			<h2>The Venue <br/>Kulturzentrum, Konstanz</h2>
			<p>The event will be held in the beautiful town of Konstanz in southern Germany, right on the shores of Lake Constance (the Bodensee). With ancient, Roman ruins, a towering cathedral right next to the conference center and a bustling old town filled with both modern and boutique shops, <a target="_blank" rel="noopener noreferrer" href="https://www.konstanz-tourismus.de/"> there's something for everyone in this trendy city.</a> We will be in the <a target="_blank" rel="noopener noreferrer" href="https://www.konstanz.de/start/kultur+_+freizeit/kulturamt.html">Kulturzentrum, Konstanz</a> which is in the heart of the old town.</p>
			
			<img src={konstanzImage} width="100%" />
			</section>
			<section className="box">
			<h2>Welcome to the Lake <br/>it's Summer!</h2>
			<p>For those who aren't familiar with the Bodensee region, it's popular, so hotels can go quick! But not to worry, the commute system (yes, planes, trains and automobiles) will get you everywhere you need to go. The closest major airport is Zürich, around 1 hour to the south of the event.</p>
			<p>You can reach any major city around the lake easily with either train or ferry.</p>
			
			<p><ul>
			<li>
				<strong>
					<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/hotels+in+Kreuzlingen,+Switzerland/@47.6574796,9.1524585,14z/data=!3m1!4b1!4m7!2m6!5m5!5m4!1s2019-09-05!2i2!4m1!1i1">Kreuzlingen (CH)</a>
				</strong>
				<strong>3 Minutes</strong>
			</li>
			<li>
				<strong>
					<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/hotels+in+Allensbach,+Germany/@47.7205673,9.0619297,15.02z/data=!4m7!2m6!5m5!5m4!1s2019-09-05!2i2!4m1!1i1">Allensbach</a>
				</strong>
				<strong>10 Minutes</strong>
			</li>
			<li>
				<strong>
					<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/hotels+in+Radolfzell+am+Bodensee/@47.752138,8.9393425,13z/data=!4m9!2m8!5m6!5m4!1s2019-09-05!2i2!4m1!1i1!10e1!6e3">Radolfzell</a>
				</strong>
				<strong>15 Minutes</strong>
			</li>
			<li>
				<strong>
					<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/hotels+in+Singen/@47.7607077,8.8457983,13.26z/data=!4m7!2m6!5m5!5m4!1s2019-09-05!2i2!4m1!1i1">Singen</a>
				</strong>
				<strong>30 Minutes</strong>
			</li>
			<li>
				<strong>
					<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/hotels+in+Meersburg/@47.6866527,9.2731655,14z/data=!3m1!4b1!4m7!2m6!5m5!5m4!1s2019-09-05!2i2!4m1!1i1">Meersburg (Ferry)</a>
				</strong>
				<strong>35 Minutes</strong>
			</li>
			<li>
				<strong>
					<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/hotels+in+Schaffhausen,+Switzerland/@47.7011403,8.6501567,13z/data=!3m1!4b1!4m7!2m6!5m5!5m4!1s2019-09-05!2i2!4m1!1i1">Schaffhausen (CH)</a>
				</strong>
				<strong>49 Minutes</strong>
			</li>
			<li>
				<strong>
					<a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/search/hotels+in+%C3%9Cberlingen/@47.7784625,9.1544277,13z/data=!3m1!4b1!4m7!2m6!5m5!5m4!1s2019-09-05!2i2!4m1!1i1">Überlingen</a>
				</strong>
				<strong>1 Hour</strong>
			</li>
			</ul></p>
			</section>
			</VenueSection>
			<BodenseeSponsors sponsors={({community: event.commSponsors, gold: event.goldSponsors, silver: event.silverSponsors, giveaway: event.giveawaySponsors, bronze: event.bronzeSponsors, organizer: event.organizer})}/>
		</PageWrapper>
	</Layout>
)};

export default BodenseePage;
