import { useState } from 'react';
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan';
import { restoreState, saveState } from './localStorage/localStorage';
import s2 from '../../s1-main/App.module.css';
import { SuperButton } from '../hw04/common/c2-SuperButton/SuperButton';
import s from './HW6.module.css';

/*
 * 1 - в файле SuperEditableSpan.tsx дописать логику функций onEnterCallback, onBlurCallback, onDoubleClickCallBack
 * 2 - дописать логику функции restore
 * 3 - сделать стили в соответствии с дизайном
 */

const HW6 = () => {
  const [editMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>('');

  const onEnter = () => {
    setEditMode(false);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // выключить editMode при нажатии за пределами инпута // делают студенты
    if (e.currentTarget) {
      setEditMode(false);
    }
  };

  const onDoubleClick = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    // включить editMode при двойном клике // делают студенты
    if (e.currentTarget) {
      setEditMode(true);
    }
  };

  const save = () => {
    saveState<string>('hw6-editable-span-value', value);
  };
  const restore = () => {
    // делают студенты
    const restoredValue = restoreState(
      'hw6-editable-span-value',
      'nothing in localStorage',
    );
    setValue(restoredValue);
  };

  return (
    <div id={'hw6'}>
      <div className={s2.hwTitle}>Homework #6</div>

      {/*демонстрация возможностей компоненты:*/}
      <div className={s2.hw}>
        <div className={s.editableSpanContainer}>
          <SuperEditableSpan
            id={'hw6-spanable-input'}
            value={value}
            onChangeText={setValue}
            spanProps={{
              id: 'hw6-editable-span',
              defaultText: 'enter text...',
              onDoubleClick,
            }}
            onEnter={onEnter}
            onBlur={onBlur}
            onDoubleClick={onDoubleClick}
            editMode={editMode}
          />
        </div>

        <div className={s.buttonsContainer}>
          <SuperButton id={'hw6-save'} onClick={save}>
            Save to ls
          </SuperButton>
          <SuperButton id={'hw6-restore'} onClick={restore} xType={'secondary'}>
            Get from ls
          </SuperButton>
        </div>
      </div>
    </div>
  );
};

export default HW6;
