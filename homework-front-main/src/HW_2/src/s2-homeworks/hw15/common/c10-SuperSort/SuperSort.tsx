import upIcon from '../../../../../../assets/upIcon.png'
import downIcon from '../../../../../../assets/downIcon.png'
import noneIcon from '../../../../../../assets/noneIcon.png'

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
  id?: string
  sort: string
  value: string
  onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
  if (sort === '') return down
  if (sort === down) return up
  if (sort === up) return ''
  return down

  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...

}

const SuperSort = (
  {
    sort, value, onChange, id = 'hw15',
  }: SuperSortPropsType,
) => {
  const up = '0' + value
  const down = '1' + value

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up))
  }

  const icon = sort === down
    ? downIcon
    : sort === up
      ? upIcon
      : noneIcon

  return (
    <span style={{ display: 'flex', alignItems: 'center' }}
          id={id + '-sort-' + value}
          onClick={onChangeCallback}
    >
            {/*сделать иконку*/}
      <img
        id={id + '-icon-' + sort}
        src={icon}
        alt={sort === down ? 'sort down' : sort === up ? 'sort up' : 'sort none'}
      />

      {/*{icon} /!*а это убрать*!/*/}
        </span>
  )
}

export default SuperSort
