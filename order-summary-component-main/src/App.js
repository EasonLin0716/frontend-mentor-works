import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

const devices = {
  mobile: `(max-width: 375px)`,
};

const Wrapper = styled.div`
  background-image: url("../images/pattern-background-desktop.svg");
  background-color: hsl(225, 100%, 94%);
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 0 16px;
  @media ${devices.mobile} {
    background-image: url("../images/pattern-background-mobile.svg");
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 375px;
  border-radius: 16px;
  border: 1px solid transparent;
  overflow: hidden;
  background-color: #fff;
  align-self: flex-start;
  margin-top: 48px;
`;

const Inner = styled.div`
  padding: 24px;
`;

const Banner = styled.div``;

const Title = styled.h1`
  text-align: center;
  color: hsl(223, 47%, 23%);
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 16px;
`;

const Info = styled.p`
  text-align: center;
  line-height: 1.25;
  color: hsl(224, 23%, 55%);
`;

const Song = styled.div`
  background-color: hsl(225, 100%, 98%);
  padding: 16px;
  margin: 20px 0;
  display: grid;
  grid-template-columns: 36px 1fr 40px;
  gap: 16px;
  align-items: center;
  border-radius: 16px;
  a {
    font-size: 12px;
    font-weight: bolder;
  }
`;

const SongInfo = styled.div`
  font-size: 13px;
  position: relative;
  justify-content: space-between;
  height: 100%;
  span {
    display: block;
    position: absolute;
  }
  span:first-child {
    top: 2px;
    color: hsl(223, 47%, 23%);
    font-weight: 600;
  }
  span:last-child {
    color: hsl(224, 23%, 55%);
    bottom: 2px;
  }
`;

const Button = styled.button`
  display: block;
  text-align: center;
  width: 100%;
  border: none;
  background-color: transparent;
  font-weight: bolder;
  color: hsl(224, 23%, 55%);
  font-size: 12px;
  padding: 12px 0;
`;

const ProceedButton = styled(Button)`
  background-color: hsl(245, 75%, 52%);
  box-shadow: 0px 10px 15px 2px rgba(114, 128, 167, 0.35);
  color: #fff;
  border-radius: 8px;
  margin-bottom: 12px;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Banner>
            <img src="../images/illustration-hero.svg" />
          </Banner>
          <Inner>
            <Title>Order Summary</Title>
            <Info>You can now listen to millions of songs, </Info>
            <Info>
              audiobooks, and podcasts on any device anywhere you like!
            </Info>
            <Song>
              <img src="../images/icon-music.svg" />
              <SongInfo>
                <span>Annual Plan</span>
                <span>$59.99/year</span>
              </SongInfo>
              <a href="#">Change</a>
            </Song>
            <ProceedButton>Proceed to Payment</ProceedButton>
            <Button>Cancel Order</Button>
          </Inner>
        </Container>
      </Wrapper>
    );
  }
}

export default hot(App);
