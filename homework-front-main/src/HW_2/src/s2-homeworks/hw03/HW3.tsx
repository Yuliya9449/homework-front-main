import { useState } from 'react';
import { v1 } from 'uuid';
import s2 from '../../s1-main/App.module.css';
import GreetingContainer from './GreetingContainer';

// types
export type UserType = {
  _id: string;
  name: string;
};

export const pureAddUserCallback = (
  name: UserType['name'],
  setUsers: (users: UserType[]) => void,
  users: UserType[],
) => {
  const user: UserType = {
    _id: v1(),
    name,
  };
  setUsers([...users, user]);
};

export const HW3 = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  const addUserCallback = (name: UserType['name']) => {
    pureAddUserCallback(name, setUsers, users);
  };

  return (
    <div id={'hw3'}>
      <div className={s2.hwTitle}>Homework #3</div>
      {/*для автоматической проверки дз (не менять)*/}

      <div className={s2.hw}>
        <GreetingContainer users={users} addUserCallback={addUserCallback} />
      </div>
    </div>
  );
};
