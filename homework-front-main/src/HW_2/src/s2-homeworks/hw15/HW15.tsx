import { useEffect, useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import { useSearchParams } from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import CircularProgress from '@mui/material/CircularProgress';

/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */

type TechType = {
  id: number
  tech: string
  developer: string
}

type ParamsType = {
  sort: string
  page: number
  count: number
}

const getTechs = (params: ParamsType) => {
  return axios
    .get<{ techs: TechType[], totalCount: number }>(
      'https://samurai.it-incubator.io/api/3.0/homework/test3',
      { params },
    )
    .catch((e) => {
      alert(e.response?.data?.errorText || e.message)
    })
}

const HW15 = () => {
  const [sort, setSort] = useState('')
  const [page, setPage] = useState(1)
  const [count, setCount] = useState(4)
  const [isLoading, setIsLoading] = useState(false)
  const [totalCount, setTotalCount] = useState(100)
  const [searchParams, setSearchParams] = useSearchParams()
  const [techs, setTechs] = useState<TechType[]>([])

  const sendQuery = (params: ParamsType) => {
    setIsLoading(true)

    getTechs(params)
      // делает студент
      // сохранить пришедшие данные
      .then((res) => {
        setTechs(res?.data?.techs || [])
        setTotalCount(res?.data?.totalCount || 0)
      }).catch((error) => {
      console.error('Error fetching techs:', error)
    })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const onChangePagination = (newPage: number, newCount: number) => {
    // делает студент
    setPage(newPage)
    setCount(newCount)
    sendQuery({ page: newPage, count: newCount, sort })

    setSearchParams({
      page: String(newPage),
      count: String(newCount),
      sort,
    })
  }

  const onChangeSort = (newSort: string) => {
    // делает студент

    setSort(newSort)
    setPage(1) // при сортировке сбрасывать на 1 страницу
    sendQuery({ page: 1, count, sort: newSort })
    setSearchParams({
      page: '1',
      count: String(count),
      sort: newSort,
    })
  }

  useEffect(() => {
    const params = Object.fromEntries(searchParams)
    const pageParam = +params.page || 1
    const countParam = +params.count || 4
    const sortParam = params.sort || ''

    setPage(pageParam)
    setCount(countParam)
    setSort(sortParam)

    sendQuery({
      page: pageParam,
      count: countParam,
      sort: sortParam,
    })
  }, [])

  const mappedTechs = techs.map(t => (
    <div key={t.id} className={s.row}>
      <div id={'hw15-tech-' + t.id} className={s.tech}>
        {t.tech}
      </div>

      <div id={'hw15-developer-' + t.id} className={s.developer}>
        {t.developer}
      </div>
    </div>
  ))

  return (
    <div id={'hw15'}>
      <div className={s2.hwTitle}>Homework #15</div>

      <div className={s2.hw} style={isLoading ? { opacity: 0.3 } : undefined}>
        {isLoading &&
            <div id={'hw15-loading'} className={s.loading}>
              {/*<CircularProgress  aria-label="Loading…" />*/}
                <CircularProgress size={200} aria-label="Loading…" />
            </div>
        }

        <SuperPagination
          page={page}
          itemsCountForPage={count}
          totalCount={totalCount}
          onChange={onChangePagination}
        />

        <div className={s.rowHeader}>
          <div className={s.techHeader}>
            tech
            <SuperSort sort={sort} value={'tech'} onChange={onChangeSort} />
          </div>

          <div className={s.developerHeader}>
            developer
            <SuperSort sort={sort} value={'developer'} onChange={onChangeSort} />
          </div>
        </div>

        {mappedTechs}
      </div>
    </div>
  )
}

export default HW15
