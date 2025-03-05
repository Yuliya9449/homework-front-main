import { pureAddUser } from '../GreetingContainer';
import { UserType } from '../HW3';

let name: UserType['name'];

const setName = (a: UserType['name']) => {
  name = a;
};
let error: string;
const setError = (a: string) => {
  error = a;
};

let added: boolean;
const addUserCallback = () => {
  added = true;
};

beforeEach(() => {
  name = '';
  error = '';
  added = false;
});

test('name 1', () => {
  name = '1';
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe('');
  expect(error).toBe('');
  expect(added).toBe(true);
});

test('name 2', () => {
  name = '';
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe('');
  expect(error).toBe('Ошибка! Введите имя!');
  expect(added).toBe(false);
});
test('name 3', () => {
  name = '    ';
  pureAddUser(name, setError, setName, addUserCallback);
  expect(name).toBe('    ');
  expect(error).toBe('Ошибка! Введите имя!');
  expect(added).toBe(false);
});
