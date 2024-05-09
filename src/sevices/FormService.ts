import type { FormArticle } from '@/models/FormArticle'
import type { FormMeta } from '@/models/FormMeta'

export interface FormeService {
  getAllFormMeta: (teamCode: number) => Promise<FormMeta[]>
  getFormMetaById: (teamCode: number, formId: string) => Promise<FormMeta>
  getFormArticles: (teamCode: number, formId: string) => Promise<FormArticle[]>
}
