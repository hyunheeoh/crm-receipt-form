import { getFormsMeta } from '@/apis/formsApis'
import type { FormeService } from '@/sevices/FormService'
import type { FormMeta } from '@/models/FormMeta'
import type { FormData } from '@/apis/formsApisTypes'
import type {
  FormArticle,
  SelectFormArticle,
  CheckboxFormArticle,
  TextLongFormArticle,
  TextShortFormArticle
} from '@/models/FormArticle'

import checkOptionType from '@/sevices/checkOptionType'

const formService: FormeService = {
  getAllFormMeta,
  getFormMetaById,
  getFormArticles
}

async function getAllFormMeta(teamCode: number): Promise<FormMeta[]> {
  const res = await getFormsMeta(teamCode)

  const formMetaList: FormMeta[] = res.map((formMeta) => {
    return {
      id: `${formMeta.id}`,
      name: formMeta.title,
      description: formMeta.description,
      publishedAt: formMeta.published_at,
      isActive: formMeta.is_active === 1 ? true : false,
      displayOrder: 1,
      formData: formMeta.form_data
    }
  })
  return formMetaList
}

async function getFormMetaById(teamCode: number, formId: string): Promise<FormMeta> {
  const record = await getAllFormMeta(teamCode)
  return record.find((formMeta) => formMeta.id === formId)!
}

async function getFormArticles(teamCode: number, formId: string): Promise<FormArticle[]> {
  const formMeta = await getFormMetaById(teamCode, formId)
  const formData: FormData = JSON.parse(formMeta.formData)

  return formData.articles.map((article) => {
    if (checkOptionType.isSelectFormArticle(article)) {
      const formArticle: SelectFormArticle = {
        id: article.id,
        formMetaId: article.formMetaId,
        displayText: article.displayText,
        isDelete: article.isDelete,
        isCreate: false,
        displayOrder: article.displayOrder,
        options: (article as SelectFormArticle).options,
        answer: (article as SelectFormArticle).answer
      }
      return formArticle
    } else if (checkOptionType.isCheckboxFormArticle(article)) {
      const formArticle: CheckboxFormArticle = {
        id: article.id,
        formMetaId: article.formMetaId,
        displayText: article.displayText,
        isDelete: article.isDelete,
        isCreate: false,
        displayOrder: article.displayOrder,
        options: (article as CheckboxFormArticle).options,
        answers: (article as CheckboxFormArticle).answers
      }
      return formArticle
    } else if (checkOptionType.isTextShortFormArticle(article)) {
      const formArticle: TextShortFormArticle = {
        id: article.id,
        formMetaId: article.formMetaId,
        displayText: article.displayText,
        isDelete: article.isDelete,
        isCreate: false,
        displayOrder: article.displayOrder,
        shortAnswer: (article as TextShortFormArticle).shortAnswer
      }
      return formArticle
    } else if (checkOptionType.isTextLongFormArticle(article)) {
      const formArticle: TextLongFormArticle = {
        id: article.id,
        formMetaId: article.formMetaId,
        displayText: article.displayText,
        isDelete: article.isDelete,
        isCreate: false,
        displayOrder: article.displayOrder,
        longAnswer: (article as TextLongFormArticle).longAnswer
      }
      return formArticle
    } else {
      const formArticle: FormArticle = {
        id: article.id,
        formMetaId: article.formMetaId,
        displayText: article.displayText,
        isDelete: article.isDelete,
        isCreate: false,
        displayOrder: article.displayOrder
      }
      return formArticle
    }
  })
}

export default formService
