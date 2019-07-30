import React from "react"
import styled from "styled-components"

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

export default ({sponsors}) => (
      <Section>
        <section>
          <h2>Organized by</h2>
          {sponsors.organizer.map((sponsorship, index) => {
            return (
              <>
              <a href={sponsorship.sponsor.url} rel="noopener noreferrer" target="_blank">
                <img style={{maxWidth: 200, maxHeight: 200}} src={sponsorship.sponsor.logo.url} alt={sponsorship.sponsor.url} className="padding" />
              </a>
              <br/>
              </>
            )
          })}
        </section>
        <section>
          <h2>Gold Sponsors</h2>
          {sponsors.gold.map((sponsorship, index) => {
            return (
              <>
              <a href={sponsorship.sponsor.url} rel="noopener noreferrer" target="_blank">
                <img style={{maxWidth: 200, maxHeight: 200}} src={sponsorship.sponsor.logo.url} alt={sponsorship.sponsor.url} className="padding" />
              </a>
              <br/>
              </>
            )
          })}
        </section>
        <section>
          <h2>Bronze Sponsors</h2>
          {sponsors.bronze.map((sponsorship, index) => {
            return (
              <>
              <a href={sponsorship.sponsor.url} rel="noopener noreferrer" target="_blank">
                <img style={{maxWidth: 200, maxHeight: 200}} src={sponsorship.sponsor.logo.url} alt={sponsorship.sponsor.url} className="padding" />
              </a>
              <br/>
              </>
            )
          })}
        </section>
        <section>
          <h2>Giveaway Sponsor</h2>
          {sponsors.giveaway.map((sponsorship, index) => {
            return (
              <>
              <a href={sponsorship.sponsor.url} rel="noopener noreferrer" target="_blank">
                <img style={{maxWidth: 200, maxHeight: 200}} src={sponsorship.sponsor.logo.url} alt={sponsorship.sponsor.url} className="padding" />
              </a>
              <br/>
              </>
            )
          })}
        </section>
        <section>
          <h2>Community Sponsors</h2>
          {sponsors.community.map((sponsorship, index) => {
            return (
              <>
              <a href={sponsorship.sponsor.url} rel="noopener noreferrer" target="_blank">
                <img style={{maxWidth: 200, maxHeight: 200}} src={sponsorship.sponsor.logo.url} alt={sponsorship.sponsor.url} className="padding" />
              </a>
              <br/>
              </>
            )
          })}
        </section>
      </Section>
    )
