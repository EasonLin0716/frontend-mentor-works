import React from "react";
import { hot } from "react-hot-loader/root";
import styled from "styled-components";

const Wrapper = styled.div`
  background-image: url("../images/pattern-background-desktop.svg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 375px;
`;

const Banner = styled.div``;

const Title = styled.h1`
  text-align: center;
`;

const Info = styled.p`
  text-align: center;
`;

const Song = styled.div``;

const Button = styled.button``;

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <Wrapper>
        <Container>
          <Banner>
            <img src="../images/illustration-hero.svg" />
          </Banner>
          <Title>Order Summary</Title>
          <Info>You can now listen to millions of songs, </Info>
          <Info>audiobooks, and podcasts on any device anywhere you like!</Info>
          <Song>Annual Plan $59.99/year Change</Song>
          <Button>Proceed to Payment</Button>
          <Button>Cancel Order</Button>
        </Container>
      </Wrapper>
    );
  }
}

export default hot(App);
