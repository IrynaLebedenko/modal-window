import UserSettingForm from "./components/Modal/UserSettingForm";
// import React from 'react';
// import UserForm from './UserForm';

const App = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <UserSettingForm onSubmit={handleSubmit} />
    </div>
  );
};

export default App;