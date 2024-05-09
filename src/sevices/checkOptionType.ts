import type {
  FormArticle,
  TextShortFormArticle,
  TextLongFormArticle,
  SelectFormArticle,
  CheckboxFormArticle
} from '@/models/FormArticle'

interface CheckOptionType {
  isTextShortFormArticle: (formArticle: FormArticle) => boolean
  isTextLongFormArticle: (formArticle: FormArticle) => boolean
  isSelectFormArticle: (formArticle: FormArticle) => boolean
  isCheckboxFormArticle: (formArticle: FormArticle) => boolean
}

const checkOptionType: CheckOptionType = {
  isTextShortFormArticle,
  isTextLongFormArticle,
  isSelectFormArticle,
  isCheckboxFormArticle
}

function isTextShortFormArticle(formArticle: FormArticle): formArticle is TextShortFormArticle {
  return (formArticle as TextShortFormArticle).shortAnswer !== undefined
}

function isTextLongFormArticle(formArticle: FormArticle): formArticle is TextLongFormArticle {
  return (formArticle as TextLongFormArticle).longAnswer !== undefined
}

function isSelectFormArticle(formArticle: FormArticle): formArticle is SelectFormArticle {
  return (formArticle as SelectFormArticle).answer !== undefined
}

function isCheckboxFormArticle(formArticle: FormArticle): formArticle is CheckboxFormArticle {
  return (formArticle as CheckboxFormArticle).answers !== undefined
}

export default checkOptionType
