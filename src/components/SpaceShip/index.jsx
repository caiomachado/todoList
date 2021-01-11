import React from 'react';

import { Container, Ship, Head, Body, Window, Bottom } from './styles';

const SpaceShip = () => {
  return (
    <Container>
      <Ship>
        <Head />
        <Body>
          <Window></Window>
          <Window></Window>
          <Window></Window>
          <Window></Window>
          <Window></Window>
          <Window></Window>
        </Body>
        <Bottom />
      </Ship>
    </Container>
  )
}

export default SpaceShip;