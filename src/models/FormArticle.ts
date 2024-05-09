import exp from 'constants'

export interface FormArticle {
  id: string
  formMetaId: string
  displayText: string
  isDelete: boolean
  isCreate: boolean
  displayOrder: number
}

export interface TextShortFormArticle extends FormArticle {
  shortAnswer: string
}

export interface TextLongFormArticle extends FormArticle {
  longAnswer: string
}

export interface SelectFormArticle extends FormArticle {
  options: OptionType[]
  answer: string
}

export interface CheckboxFormArticle extends FormArticle {
  options: OptionType[]
  answers: string[]
}

export interface OptionType {
  displayText: string
  displayOrder: number
  isEtc: boolean
}
