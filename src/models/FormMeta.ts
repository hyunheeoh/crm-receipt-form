export interface FormMeta {
  id: string
  name: string
  description: string
  publishedAt: string | null
  isActive: boolean
  displayOrder: number
  formData: string // JSON array of FormArticle
}
