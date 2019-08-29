import React from "react"
import styled from "styled-components"
import { Row, Column } from "hedron"
//import Img from 'gatsby-image';
import { graphql, StaticQuery } from "gatsby"
import dateFormat from "dateformat"

const CardGrid = styled.div`
  /* display: grid;
	grid-auto-columns: auto;
	grid-template-rows: repeat(auto-fit, minmax(233rem, 1fr));
	grid-gap: 1rem 5rem;
	grid-auto-flow: column; */
  /* columns: 33rem;
	break-before: column; */
`

const Title = styled.div`
  max-width: 1140px;
  margin: 0 auto;

  h2 {
    color: rgb(219, 63, 116);
    line-height: 1.1;
    font-weight: 600;
    font-size: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 16px 0;
  }
  subtitle {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 32px;
    opacity: 0.75;
  }
`

const ScheduleRow = styled(Row)`
  max-width: 1140px;
  margin: 0 auto;
`

const Schedule = styled.div`
  display: flex;
  /* flex: 0 1 33rem; */
  /* max-width: 33rem; */
  align-items: center;
  margin: 1rem;
  min-width: 33rem;
  float: left;
`

const Time = styled.time`
  font-size: 18px;
  font-variant-numeric: tabular-nums;
  color: rgb(175, 175, 175);
  flex: 0 0 130px;
`

const Card = styled.div`
  width: 100%;
  min-height: 75px;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  border-left: 3px #db3f74 solid;
  border-radius: 5px;
  background: rgb(254, 238, 244);

  img {
    margin: 0 20px;
    /* height: 45px; */
    width: 45px;
    clip-path: circle(50% at 50% 50%);
  }

  .placeholder {
    width: 85px;
  }

  .content {
    padding-right: 20px;
  }

  h3 {
    color: #db3f74;
    font-weight: 600;
    font-size: 18px;
    padding: 0px;
    margin: 0px;
  }

  p {
    color: rgba(16, 20, 33, 0.5);
    font-size: 16px;
    padding: 0px;
    margin: 3px 0px 0px;
  }
`

export default ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        gcms {
          bodenseeSchedules(orderBy: time_ASC) {
            time
            icon {
              url
            }
            item
            subitem
          }
        }
      }
    `}
    render={data => {
      const split = 9
      const firstHalf = [...data.gcms.bodenseeSchedules].slice(0, split)
      const lastHalf = [...data.gcms.bodenseeSchedules].slice(split)

      console.log(firstHalf)
      return (
        <React.Fragment>
          <Title>
            <h2>SCHEDULE</h2>
            <p className="subtitle">
              Optional GraphQL Workshop, Thursday Sept 5th. More details soon.
            </p>
          </Title>
          <ScheduleRow>
            <Column lg={6} md={12}>
              {firstHalf.map((schedule, index) => (
                <Schedule key={index}>
                  <Time dateTime={schedule.time}>
                    {dateFormat(new Date(schedule.time), "HH:MM")}
                  </Time>
                  <Card>
                    {schedule.icon ? (
                      <img src={schedule.icon.url} alt="schedule icon" />
                    ) : (
                      <div className="placeholder" />
                    )}
                    <div className="content">
                      <h3>{schedule.item}</h3>
                      <p className="subitem">{schedule.subitem}</p>
                    </div>
                  </Card>
                </Schedule>
              ))}
            </Column>
            <Column lg={6} md={12}>
              {lastHalf.map((schedule, index) => (
                <Schedule key={index}>
                  <Time dateTime={schedule.time}>
                    {dateFormat(new Date(schedule.time), "HH:MM")}
                  </Time>
                  <Card>
                    {schedule.icon ? (
                      <img src={schedule.icon.url} alt="schedule icon" />
                    ) : (
                      <div className="placeholder" />
                    )}
                    <div className="content">
                      <h3>{schedule.item}</h3>
                      <p className="subitem">{schedule.subitem}</p>
                    </div>
                  </Card>
                </Schedule>
              ))}
            </Column>
          </ScheduleRow>
        </React.Fragment>
      )
    }}
  />
)
