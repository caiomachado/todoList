import React from 'react';

import { IoIosAdd } from 'react-icons/io'
import { FiLogOut, FiFileText } from 'react-icons/fi'

import { Bar, TopBlock, AddBlock, IconBlock, MidBlock, BottomBlock } from './styles';
import SpaceShip from '../SpaceShip';

const SideBar = ({handleOpenModal}) => {
  return (
    <Bar>
      <TopBlock>
        <SpaceShip />
      </TopBlock>
      <AddBlock onClick={handleOpenModal}>
        <IoIosAdd size={40} color={'purple'}/>
      </AddBlock>
      <MidBlock>
        <IconBlock>
          <FiFileText size={40} color={'purple'}/>
        </IconBlock>
      </MidBlock>
      <BottomBlock>
        <FiLogOut size={40} color={'purple'} />
      </BottomBlock>
    </Bar>
  );
}

export default SideBar;