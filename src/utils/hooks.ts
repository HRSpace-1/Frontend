import { useState } from 'react'
import { IEmploymentObj, ISkillObj, IWorkFormatObj } from './types'

type IInputValue = {
  [name: string]:
    | string
    | number
    | Array<ISkillObj>
    | null
    | Array<IWorkFormatObj>
    | Array<IEmploymentObj>
}

export function useForm(values: IInputValue) {
  const [inputValues, setInputValues] = useState(values)

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = evt.target
    setInputValues({ ...inputValues, [name]: value })
  }

  const addValue = (
    name: string,
    value:
      | string
      | number
      | Array<IEmploymentObj>
      | Array<IWorkFormatObj>
      | Array<ISkillObj>
  ) => {
    setInputValues({ ...inputValues, [name]: value })
  }

  return { inputValues, handleChange, setInputValues, addValue }
}
