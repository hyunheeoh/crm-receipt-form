import type { FormArticle } from '@/models/FormArticle'

export interface FormMetaListResponse {
  id: number
  team_id: number
  user_id: number
  title: string
  description: string
  version: string
  form_data: string
  is_active: number
  created_at: string
  updated_at: string
  deleted_at: string | null
  published_at: string | null
}

export interface FormMetaRequest {
  id: number
  title: string
  description: string
  version: string
  is_active: 1 // ??? 이건 왜 필요한거지 ?
}

export interface FormAppliesRequest {
  id: number
  form_id: number
  mode: 'save' | 'submit'
  name: string
  mobile: string
}

export interface FormData {
  id: string // 0: create, number: update
  name: string
  version: string
  description: string
  updated_at: string
  published_at: string | null
  is_active: boolean
  display_order: number
  articles: FormArticle[]
}
