import React from 'react';

import { FiTrash2, FiEdit2 } from 'react-icons/fi'

import { ItemWrap, ItemType, IconBlock, ItemContent } from './styles';

const Item = ({id, type, deadline, description, handleDelete, handleEditModal}) => {
  return (
    <ItemWrap type={type}>
      <ItemType type={type}>
        <h3>
          {type}
        </h3>
        <IconBlock>
          <div className="edit-icon" onClick={() => handleEditModal({id, type, date: deadline, description})}>
            <FiEdit2 size={30}/>
          </div>
          <div className="trash-icon" onClick={handleDelete}>
            <FiTrash2 size={30}/>
          </div>
        </IconBlock>
      </ItemType>
      <span>Deadline: {deadline}</span>
      <ItemContent>
        <p>
          {description}
        </p>
      </ItemContent>
    </ItemWrap>
  );
}

export default Item;