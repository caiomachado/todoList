import styled from "styled-components";

export const ItemWrap = styled.div`
  flex-shrink: 0;
  width: 30%;
  height: 200px;

  border-radius: 5px;

  border-top: 5px solid ${props => {switch (props.type) {
    case "Management":
      return "blue";
    case "Sales":
      return "yellow";
    case "Operations":
      return "red";
    case "Marketing":
      return "purple";
    case "Human Resources":
      return "orange";
    case "Finance":
      return "green";
    case "Customer Service":
      return "pink";
    default:
      return "black";
  }}};

  box-shadow: 7px 5px 10px black;
  
  background-color: white;

  display: flex;
  flex-direction: column;

  padding: 30px;

  span {
    color: rgba(255,0,0,0.5);
    font-size: 8px;

    font-style: italic;
    margin-top: 8px;
  }
`;

export const ItemType = styled.div`
  display: flex;
  align-items: center;

  position: relative;

  h3 {
    padding: 6px 15px;
    border-radius: 5px;

    font-size: 10px;

    background-color: ${props => {switch (props.type) {
      case "Management":
        return "#b9b9f6";
      case "Sales":
        return "#ececc5";
      case "Operations":
        return "#f2b8b8";
      case "Marketing":
        return "#f2c4f2";
      case "Human Resources":
        return "#f6dfb5";
      case "Finance":
        return "#c5f2c5";
      case "Customer Service":
        return "#f0dde0";
      default:
        return "black";
    }}};

    color: ${props => {switch (props.type) {
      case "Management":
        return "blue";
      case "Sales":
        return "yellow";
      case "Operations":
        return "red";
      case "Marketing":
        return "purple";
      case "Human Resources":
        return "orange";
      case "Finance":
        return "green";
      case "Customer Service":
        return "pink";
      default:
        return "black";
    }}};
  };
`;

export const IconBlock = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  right: -40px;
  top: -45px;

  div.edit-icon {
    border-radius: 50%;
    background-color: rgba(255,255,255,0.8);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-out;
    cursor: pointer;

    width: 40px;
    height: 40px;

    &:hover svg {
      transform: rotate(-15deg);
      stroke: green;
    }
  }

  div.trash-icon {
    border-radius: 50%;
    background-color: rgba(255,255,255,0.8);

    display: flex;
    justify-content: center;
    align-items: center;

    transition: all 0.2s ease-out;
    cursor: pointer;

    width: 40px;
    height: 40px;

    &:hover svg {
      transform: rotate(15deg);
      stroke: red;
    }
  }
`;

export const ItemContent = styled.div`
  margin-top: auto;

  p {
    font-size: 12px;
  }
`;