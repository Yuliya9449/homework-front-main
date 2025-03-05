import { ChangeEvent, KeyboardEvent, useState } from 'react';
import Greeting from './Greeting';
import { UserType } from './HW3';

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: UserType['name']) => void;
};

export const pureAddUser = (
  name: UserType['name'],
  setError: (error: string) => void,
  setName: (name: UserType['name']) => void,
  addUserCallback: (name: UserType['name']) => void,
) => {
  const newUserName = name.trim();

  if (newUserName) {
    addUserCallback(name);
    setName('');
  } else {
    setError('Ошибка! Введите имя!');
  }
};

export const pureOnBlur = (
  name: UserType['name'],
  setError: (error: string) => void,
) => {
  if (!name.trim()) {
    setError('Ошибка! Введите имя!');
  }
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void,
) => {
  if (e.key === 'Enter') {
    addUser();
  }
};

const GreetingContainer = ({
  users,
  addUserCallback,
}: GreetingContainerPropsType) => {
  const [name, setName] = useState<UserType['name']>('');
  const [error, setError] = useState<string>('');

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);

    // error && setError('');
    if (error) {
      setError('');
    }
  };

  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length;
  const lastUserName = users[users.length - 1]?.name;

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
