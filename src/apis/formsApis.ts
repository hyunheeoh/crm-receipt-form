import axios from 'axios'
import type { FormMetaListResponse } from '@/apis/formsApisTypes'

const baseUrl = `${import.meta.env.VITE_ENV_FORM_API_URL}/api`
const endPoint = '/forms'
const url = `${baseUrl}${endPoint}`

// POST /api/forms
export async function getFormsMeta(teamCode: number): Promise<FormMetaListResponse[]> {
  const res = await axios({
    method: 'GET',
    url: `${url}/${teamCode}`
  })

  return res.data.data[1]
}
