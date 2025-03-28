import { ChangeEvent, KeyboardEvent } from 'react';
import s from './Greeting.module.css';
import { UserType } from './HW3';

type GreetingPropsType = {
  name: UserType['name'];
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void;
  addUser: () => void;
  onBlur: () => void;
  onEnter: (e: KeyboardEvent<HTMLInputElement>) => void;
  error: string;
  totalUsers: number;
  lastUserName?: string;
};

// презентационная компонента (для верстальщика)
const Greeting = ({
  name,
  setNameCallback,
  addUser,
  onEnter,
  onBlur,
  error,
  totalUsers,
  lastUserName,
}: GreetingPropsType) => {
  const inputClass = `${s.input} ${error ? s.errorInput : ''}`; // need to fix with (?:)
  // const inputClass = s.errorInput; // need to fix with (?:)

  return (
    <div id={'hw3-form'} className={s.greetingForm}>
      <div className={s.text}>
        {'Людей добавили: '}
        <span id={'hw3-users-total'}>{totalUsers}</span>
      </div>

      <div className={s.inputAndButtonContainer}>
        <div>
          <input
            id={'hw3-input'}
            value={name}
            onChange={setNameCallback}
            className={inputClass}
            onKeyDown={onEnter}
            onBlur={onBlur}
          />
          <div id={'hw3-error'} className={s.error}>
            {error}
          </div>
        </div>

        <button
          id={'hw3-button'}
          onClick={addUser}
          className={s.button}
          disabled={!name.trim()}
        >
          add
        </button>
      </div>

      {lastUserName && (
        <div className={s.greeting}>
          Привет <span id={'hw3-last-user'}>{lastUserName}</span>!
        </div>
      )}
    </div>
  );
};

export default Greeting;
