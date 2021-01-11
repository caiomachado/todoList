import React, { useState } from 'react';

import { Container } from './styles';
import SideBar from '../SideBar';
import InfoBar from '../InfoBar';
import ContentBox from '../ContentBox';
import Modal from '../Modal';

const Platform = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTaskCreated, setIsTaskCreated] = useState(false)
  const [items, setItems] = useState([])
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [currentId, setCurrentId] = useState('');

  function handleModal() {
    setIsTaskCreated(false)
    setType('')
    setDate('')
    setDescription('')
    setIsModalOpen(!isModalOpen)
  }

  function handleEditModal({ id, date, type, description }) {
    setCurrentId(id)
    setIsTaskCreated(true)
    setType(type)
    setDate(date)
    setDescription(description)
    setIsModalOpen(!isModalOpen)
  }

  function editSaveTask() {
    const editedItems = items.filter((item) => item.id !== currentId)
    setItems(() => [...editedItems, {id: Date.now(), type: type, deadline: date, description: description}])
    setIsModalOpen(!isModalOpen)
  }
  
  function createTask() {
    setItems((prevState) => [...prevState, {id: Date.now(), type: type, deadline: date, description: description}])
    setIsModalOpen(!isModalOpen)
  }
  
  return (
    <Container>
      <Modal
        setIsModalOpen={setIsModalOpen} 
        isModalOpen={isModalOpen}
        isTaskCreated={isTaskCreated}
        handleModal={handleModal}
        createTask={createTask}
        editSaveTask={editSaveTask} 
        setItems={setItems}
        items={items}
        setType={setType}
        type={type} 
        setDate={setDate} 
        date={date}
        setDescription={setDescription}
        description={description}
      />
      <SideBar handleOpenModal={handleModal}/>
      <InfoBar items={items}/>
      <ContentBox 
        items={items} 
        setItems={setItems} 
        handleModal={handleModal} 
        handleEditModal={handleEditModal} 
      />
    </Container>
  );
}

export default Platform;