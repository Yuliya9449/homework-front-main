import { useState } from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW13.module.css'
import { SuperButton } from '../hw04/common/c2-SuperButton/SuperButton'
import axios, { isAxiosError } from 'axios'
import success200 from './images/200.svg'
import error400 from './images/400.svg'
import error500 from './images/500.svg'
import errorUnknown from './images/error.svg'

/*
* 1 - дописать функцию send
* 2 - дизэйблить кнопки пока идёт запрос
* 3 - сделать стили в соответствии с дизайном
* */

type ApiResponse = {
  errorText: string
  info: string
}

type StatusCodes = 0 | 200 | 400 | 500

const statusConfig: Record<StatusCodes, { image: string; code: string }> = {
  200: { image: success200, code: 'Код 200!' },
  400: { image: error400, code: 'Ошибка 400!' },
  500: { image: error500, code: 'Ошибка 500!' },
  0: { image: errorUnknown, code: 'Error!' },
}

const createParams = (status: StatusCodes) => {
  return statusConfig[status] ?? statusConfig[0]
}

const HW13 = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [code, setCode] = useState('')
  const [text, setText] = useState('')
  const [info, setInfo] = useState('')
  const [image, setImage] = useState('')

  const buttonProps = { disabled: isLoading, xType: 'secondary' as const }

  const send = (x?: boolean | null) => () => {
    setIsLoading(true)
    const url =
      x === null
        ? 'https://xxxxxx.ccc' // имитация запроса на не корректный адрес
        : 'https://samurai.it-incubator.io/api/3.0/homework/test'

    setCode('')
    setImage('')
    setText('')
    setInfo('...loading')

    axios
      .post<ApiResponse>(url, { success: x })
      .then((res) => {
        const { image, code } = createParams(res.status as StatusCodes)
        setImage(image)
        setCode(code)
        setText(res.data.errorText)
        setInfo(res.data.info)
      })
      .catch((error: unknown) => {
        console.dir(error)
        if (isAxiosError(error)) {
          const status: StatusCodes = error.request?.status ?? 0
          const { image, code } = createParams(status)
          setImage(image)
          setCode(code)
          setText(error.response?.data.errorText || error.message)
          setInfo(error.response?.data.info || error.name)
        }
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div id={'hw13'}>
      <div className={s2.hwTitle}>Homework #13</div>

      <div className={s2.hw}>
        <div className={s.buttonsContainer}>
          <SuperButton
            id={'hw13-send-true'}
            onClick={send(true)}
            {...buttonProps}>
            Send true
          </SuperButton>
          <SuperButton
            id={'hw13-send-false'}
            onClick={send(false)}
            {...buttonProps}>
            Send false
          </SuperButton>
          <SuperButton
            id={'hw13-send-undefined'}
            onClick={send(undefined)}
            {...buttonProps}>
            Send undefined
          </SuperButton>
          <SuperButton
            id={'hw13-send-null'}
            onClick={send(null)} // имитация запроса на не корректный адрес
            {...buttonProps}>
            Send null
          </SuperButton>
        </div>

        <div className={s.responseContainer}>
          <div className={s.imageContainer}>
            {image && <img src={image}
                           className={s.image}
                           alt="status" />}
          </div>

          <div className={s.textContainer}>
            <div id={'hw13-code'}
                 className={s.code}>
              {code}
            </div>
            <div id={'hw13-text'}
                 className={s.text}>
              {text}
            </div>
            <div id={'hw13-info'}
                 className={s.info}>
              {info}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW13
