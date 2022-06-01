import React from 'react';
import './assets/scss/normalize.scss';
import Homework from './entities/Homework';
import TestPage from './entities/TestPage';
import UsersPage from './entities/UsersPage';
import PageLayout from './layouts/PageLayout';

const App = () => {
  return (
    <PageLayout>
      {/* <UsersPage /> */}
      {/* <TestPage /> */}
      <Homework />
    </PageLayout>
  );
};

export default App;
