import styled from 'styled-components';

export const ModalWrap = styled.div`
  display: ${props => props.isModalOpen ? 'block' : 'none'};
  
  background-color: rgba(0,0,0,0.8);
  width: 500px;
  height: 400px;

  border-radius: 20px;

  top: 20%;
  right: 30%;

  position: absolute;
  z-index: 1000;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  height: 100%;

  padding: 50px;
`;

export const Label = styled.label`
  color: white;
`;

export const Select = styled.select`
  outline: none;
  border-radius: 5px;

  height: 30px;

  padding: 5px;
`;

export const Option = styled.option`
`;

export const Input = styled.input`
  outline: none;
  border-radius: 5px;

  height: 30px;

  padding: 5px;
`;

export const Textarea = styled.textarea`
  resize: none;

  padding: 10px;
  border-radius: 5px;

  outline: none;

  height: 80px;
`;

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const CreateButton = styled.button`
  background-color: purple;
  border-radius: 10px;

  height: 30px;

  margin-top: 2%;
  padding: 0 10px;

  border: none;
  outline: none;

  cursor: pointer;

  color: white;
  font-weight: bold;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.15);
    background-color: #134113;
  }
`;

export const CancelButton = styled.button`
  background-color: purple;
  border-radius: 10px;

  height: 30px;

  margin-top: 2%;
  padding: 0 10px;

  border: none;
  outline: none;

  cursor: pointer;

  color: white;
  font-weight: bold;

  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.15);
    background-color: #721e1e;
  }
`;