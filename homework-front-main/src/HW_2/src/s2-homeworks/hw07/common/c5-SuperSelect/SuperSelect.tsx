import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
  type ReactNode,
} from 'react';
import s from './SuperSelect.module.css';
import type { Option } from '../../HW7.tsx';

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: Option[];
  onChangeOption?: (option: number) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  // onChange,
  onChangeOption,
  ...restProps
}) => {
  const mappedOptions: ReactNode[] = options
    ? options.map((o: Option) => (
        <option
          id={'hw7-option-' + o.id}
          className={s.option}
          key={o.id}
          value={o.id}
        >
          {o.value}
        </option>
      ))
    : []; // map options with key

  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // делают студенты
    console.log(e.currentTarget.value);
    if (onChangeOption) {
      onChangeOption(+e.currentTarget.value);
    }
  };

  const finalSelectClassName = s.select + (className ? ' ' + className : '');

  return (
    <select
      className={finalSelectClassName}
      onChange={onChangeCallback}
      {...restProps}
    >
      {mappedOptions}
    </select>
  );
};

export default SuperSelect;
