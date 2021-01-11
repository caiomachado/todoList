import styled from 'styled-components';

export const Bar = styled.div`
  width: 160px;
  height: auto;
  background-color: black;

  border-radius: 8px 0 0 8px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const TopBlock = styled.div`
  width: 100%;
  height: 90px;

  border-bottom: 2px solid rgba(255,255,255,0.4);
`;

export const AddBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: auto;
  margin-top: 20px;

  width: 50%;
  height: 50px;

  border-radius: 10px;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }
`;

export const MidBlock = styled.div`
  width: 100%;

  margin-bottom: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconBlock = styled.div`
  background-color: rgba(255, 255, 255, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 50%;
  height: 50px;

  border-radius: 10px;
`;

export const BottomBlock = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top: 2px solid rgba(255,255,255,0.4);
`;
