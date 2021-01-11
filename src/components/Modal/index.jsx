import React from 'react';

import { ModalWrap, Form, Label, Select, Option, Input, Textarea, ButtonBlock, CreateButton, CancelButton } from './styles';

const Modal = (
  {
    isModalOpen,
    isTaskCreated,
    handleModal, 
    createTask,
    editSaveTask,
    setType, 
    type, 
    setDate,
    date, 
    setDescription, 
    description,
    id
  }
) => {
  const handleType = (e) => {
    setType(e.target.value)
  }

  const handleDate = (e) => {
    setDate(e.target.value)
  }

  const handleDescription = (e) => {
    setDescription(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setType('');
    setDate('');
    setDescription('');
  }

  return (
    <ModalWrap isModalOpen={isModalOpen}>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="task-type">Choose the type:</Label>
        <Select value={type} name="task-type" onChange={handleType} required>
          <Option>Choose the type</Option>
          <Option value="Management">Management</Option>
          <Option value="Sales">Sales</Option>
          <Option value="Operations">Operations</Option>
          <Option value="Marketing">Marketing</Option>
          <Option value="Human Resources">Human Resources</Option>
          <Option value="Finance">Finance</Option>
          <Option value="Customer Service">Customer Service</Option>
        </Select>
        <Label htmlFor="task-date">Deadline:</Label>
        <Input value={date} type="date" name="task-date" onChange={handleDate} required/>
        <Label htmlFor="task-description">Description:</Label>
        <Textarea value={description} name="task-description" onChange={handleDescription} required maxLength="80"/>
        <ButtonBlock isTaskCreated={isTaskCreated}>
          {isTaskCreated ? 
            <CreateButton type="submit" onClick={() => editSaveTask(id)}>SAVE</CreateButton> : 
            <CreateButton type="submit" onClick={createTask}>CREATE</CreateButton>
          }
          <CancelButton type="button" onClick={handleModal}>CANCEL</CancelButton>
        </ButtonBlock>
      </Form>
    </ModalWrap>
  );
}

export default Modal;