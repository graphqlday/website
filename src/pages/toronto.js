import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import SEO from "../components/seo"
// import { Row, Column } from 'hedron';
// import { Link } from 'gatsby';

import TorontoSchedule from '../components/Toronto/schedule';
import TorontoSpeakers from '../components/Toronto/Speakers';
import TorontoSponsors from '../components/Toronto/Sponsors';
import Hero from '../components/Toronto/Hero';

const PageWrapper = styled.div`
	padding: 64px 32px;
`;

const TorontoPage = () => (
	<Layout>
	<SEO title="Toronto" />
		<PageWrapper>
			<Hero />
			<TorontoSpeakers />
			<TorontoSchedule />
			<TorontoSponsors />
		</PageWrapper>
	</Layout>
);

export default TorontoPage;
