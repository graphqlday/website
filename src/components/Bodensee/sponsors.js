import React from "react"
import styled from "styled-components"
// import { Row, Column } from 'hedron';
import { StaticQuery, graphql } from "gatsby"

const Section = styled.section`
  text-align: center;
  padding-top: 32px;

  .padding {
    padding-right: 32px;
  }

  > section {
    margin-bottom: 48px;
  }

  h2 {
    color: rgb(219, 63, 116);
    line-height: 1.1;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 16px 0 32px 0;
  }
  img {
    max-width: 375px;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      fragment Image on GraphCMS_Sponsor {
        logo {
          url
        }
        url
      }

      {
        gcms {
          graphcms: sponsor(where: { id: "cjwkoabnzbfk70910uivr7vv5" }) {
            ...Image
          }
          appsync: sponsor(where: { id: "cjwko0z8kb1y10941qkjv5e2o" }) {
            ...Image
          }
          gatsby: sponsor(where: { id: "cjy9n99trdstw0941hlf0qy6u" }) {
            ...Image
          }
          holidaycheck: sponsor(where: { id: "ck06omwghaaua0b20cae0j5ov" }) {
            ...Image
          }
          jetbrains: sponsor(where: { id: "cjy9nldk3lybd0d53tbvf34fl" }) {
            ...Image
          }
          honeypot: sponsor(where: { id: "cjuvfq9gpe7uh0c15pf4zkzzw" }) {
            ...Image
          }
          prisma: sponsor(where: { id: "cjuvfqtbee8ga0c15nx7youyo" }) {
            ...Image
          }
        }
      }
    `}
    render={data => (
      <Section>
        <section>
          <h2>Organized by</h2>
          <a href={data.gcms.graphcms.url} target="_blank">
            <img
              style={{ maxWidth: 250 }}
              src={data.gcms.graphcms.logo.url}
              alt="GraphCMS logo"
              className="padding"
            />
          </a>
          <a href={data.gcms.honeypot.url} target="_blank">
            <img src={data.gcms.honeypot.logo.url} alt="honeypot logo" />
          </a>
        </section>
        <section>
          <h2>Gold Sponsors</h2>
          <a href={data.gcms.appsync.url} target="_blank">
            <img src={data.gcms.appsync.logo.url} alt="AWS App-Sync logo" />
          </a>
        </section>
        <section>
          <h2>Bronze Sponsors</h2>
          <a href={data.gcms.gatsby.url} target="_blank">
            <img
              src={data.gcms.gatsby.logo.url}
              alt="GatsbyJs logo"
              style={{ maxWidth: 335 }}
            />
          </a>
          <br />
          <a href={data.gcms.holidaycheck.url} target="_blank">
            <img
              src={data.gcms.holidaycheck.logo.url}
              alt="HolidayCheck logo"
              style={{ marginTop: 32 }}
            />
          </a>
        </section>
        <section>
          <h2>Giveaway Sponsor</h2>
          <a href={data.gcms.jetbrains.url} target="_blank">
            <img
              src={data.gcms.jetbrains.logo.url}
              alt="Jet Brains logo"
              style={{ maxWidth: 175 }}
            />
          </a>
        </section>
        <section>
          <h2>Community Sponsors</h2>
          <a href={data.gcms.prisma.url} target="_blank">
            <img src={data.gcms.prisma.logo.url} alt="prisma logo" />
          </a>
        </section>
      </Section>
    )}
  />
)
