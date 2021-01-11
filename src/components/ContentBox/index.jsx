import React from 'react';

import { ContentWrapper, TopLine, SearchInput, SearchIcon, ProfileLine, Welcome, TodoList } from './styles';

import { FiSearch } from 'react-icons/fi';

import Item from '../Item';

const ContentBox = ({ items, setItems, handleEditModal }) => {
  const handleDelete = (itemToDeleteIndex) => {
    setItems(items.filter((_, index) => index !== itemToDeleteIndex))
  }

  return (
    <ContentWrapper>
      <TopLine>
        <SearchIcon>
          <FiSearch size={30} color={'purple'} />
        </SearchIcon>
        <SearchInput placeholder={'Search task'}/>
      </TopLine>
      <ProfileLine>
        <Welcome>Welcome Back, Caio</Welcome>
      </ProfileLine>
      <TodoList>
        {items.map( (item, index) => 
          <Item
            index={index} 
            key={item.id} 
            id={item.id} 
            handleEditModal={handleEditModal} 
            handleDelete={() => handleDelete(index)}
            type={item.type} 
            deadline={item.deadline} 
            description={item.description} 
          />
        )}
      </TodoList>
    </ContentWrapper>
  );
}

export default ContentBox;