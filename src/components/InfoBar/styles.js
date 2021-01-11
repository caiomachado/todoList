import styled from 'styled-components';

export const ContentBar = styled.div`
  width: 280px;
  height: auto;
  background-color: rgba(0,0,0,0.5);
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 90px;

  border-bottom: 2px solid rgba(255,255,255,0.4);

  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;

  font-size: 32px;

  padding-left: 10px;
`;

export const TextBlock = styled.div`
  width: 100%;

  padding: 0 10px;
  margin-top: 30px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SpanText = styled.span`
  color: white;
  text-transform: capitalize;

  font-size: 10px;
`;

export const Quantity = styled.span`
  color: white;
  background-color: ${props => {switch (props.type) {
    case "management":
      return "#2c2c9d";
    case "sales":
      return "#cbcb44";
    case "operations":
      return "#c04d4d";
    case "marketing":
      return "#4d1b4d";
    case "humanresources":
      return "#a86c00";
    case "finance":
      return "#355c35";
    case "customerservice":
      return "#c62e49";
    default:
      return "black";
  }}};

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 20px;
  border-radius: 30px;
`;