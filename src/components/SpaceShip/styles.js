import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Ship = styled.div`
  width: 100px;
  height: 47px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: rotate(330deg);
`;

export const Head = styled.div`
  width: 30px;
  height: 15px;
  border-radius: 50px 50px 0 0;
  background-color: #75737354;
`;

export const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 20px;
  background-color: #f1f1f154;
  border-radius: 50px;
`;

export const Window = styled.div`
  width: 5px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
  transition: all 0.2s ease-out;

  animation-name: circle;
  animation-duration: 0.2s;
  animation-iteration-count: infinite;
  animation-direction: reverse;
  animation-timing-function: linear;

  &:last-of-type {
    animation-name: disappear;
    animation-duration: 0.2s;
  }

  @keyframes circle {
    0% {
      transform: translateX(0px);
      opacity: 1;
    }

    50% {
      transform: translateX(10px);
      opacity: 0.3;
    }

    100% {
      transform: translateX(30px);
      opacity: 0;
    }
  }

  @keyframes disappear {
    0% {
      transform: translateX(0px);
      opacity: 0.05;
    }

    50% {
      transform: translateX(10px);
      opacity: 0.02;
    }

    100% {
      transform: translateX(30px);
      opacity: 0;
    }
  }
`;

export const Bottom = styled.div`
  background-color: white;
  width: 30px;
  height: 2px;

  box-shadow: 0 1px 7px white;
`;

