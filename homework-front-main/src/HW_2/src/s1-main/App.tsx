import s from './App.module.css';
import HW5 from '../s2-homeworks/hw05/HW5';
import { Provider } from 'react-redux';
import { store } from '../s2-homeworks/hw10/bll/store';

export function App() {
  return (
    <Provider store={store}>
      <div className={s.App}>
        {/* <HW1 /> */}
        {/*раскомментировать по ходу выполнения*/}
        {/* <HW2 /> */}
        {/* <HW3 /> */}
        {/* <HW4 /> */}

        {/*при выполнении дз 5 и более - закомментировать здесь дз 1-4, так как они есть внутри дз 5*/}
        <HW5 />
      </div>
    </Provider>
  );
}
