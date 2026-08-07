import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import { Pagination } from '@mui/material'
import s from './SuperPagination.module.css'
import type { ChangeEvent } from 'react';

export type SuperPaginationPropsType = {
  id?: string
  page: number
  itemsCountForPage: number
  totalCount: number
  onChange: (page: number, count: number) => void
}

const SuperPagination = (
  {
    page, itemsCountForPage, totalCount, onChange, id = 'hw15',
  }: SuperPaginationPropsType,
) => {
  const lastPage = Math.ceil(totalCount / itemsCountForPage)
  // пишет студент // вычислить количество страниц

  const onChangeCallback = (_event: unknown, page: number) => {
    onChange(page, itemsCountForPage)
    // пишет студент
  }

  const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const newCount = +event.target.value
    onChange(1, newCount) // page=1 при смене count
    // пишет студент
  }

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + '-pagination'}
        sx={{
          // стили для Pagination // пишет студент
          '& .MuiPaginationItem-root': {
            color: '#000000',
            borderRadius: '4px',
          },
          '& .MuiPaginationItem-root:hover': {
            backgroundColor: 'rgba(11, 90, 168, 0.5)',
          },
          '& .Mui-selected': {
            backgroundColor: '#0b5aa8',
            color: '#FFFFFF',
          },
        }}
        page={page}
        count={lastPage}
        onChange={onChangeCallback}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>
                показать
            </span>

      <SuperSelect
        id={id + '-pagination-select'}
        value={itemsCountForPage}
        options={[
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 10, value: 10 },
        ]}
        onChange={onChangeSelect}
      />

      <span className={s.text2}>
                строк в таблице
            </span>
    </div>
  )
}

export default SuperPagination
