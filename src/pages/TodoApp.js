import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoCreate from '../components/Todo/TodoCreate';
import TodoHead from '../components/Todo/TodoHead';
import TodoList from '../components/Todo/TodoList';
import { TodoProvider } from '../components/Todo/TodoContext';
import TodoTemplate from '../components/Todo/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

const TodoApp = () => {
  return (
    <TodoProvider>
      <GlobalStyle />
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  )
}

export default TodoApp;