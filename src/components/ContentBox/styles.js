import styled from 'styled-components';

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;

  background-color: rgba(0,0,0,0.3);

  display: flex;
  flex-direction: column;
`;

export const TopLine = styled.div`
  width: 100%;
  height: 90px;

  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  width: 10%;
  height: 20px;

  margin: 0 30px 0 10px;
  padding: 0 15px;
  border: 1px solid white;

  font-size: 8px;

  background-color: transparent;

  outline: none;

  transition: all 0.2s ease-in-out;

  border-radius: 15px;

  &:hover {
    background-color: white;
    width: 100%;
    height: 30px;
    font-size: 12px;
  }

  &:focus {
    background-color: white;
    width: 100%;
    height: 30px;
    font-size: 12px;
  }
`;

export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 30px;
`;

export const ProfileLine = styled.div`
  width: 100%;
`;

export const Welcome = styled.h1`
  color: white;

  margin-left: 30px;

  font-size: 30px;
`;

export const TodoList = styled.div`
  width: 100%;
  flex: 1;

  overflow: auto;

  padding: 30px;
  
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  
  gap: 20px;

  ::-webkit-scrollbar {
    display: none;
  }

  & > div:last-of-type {
    margin-right: auto;
  }
`;