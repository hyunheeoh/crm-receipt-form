import axios from 'axios'
import type { FormMetaRequest, FormAppliesRequest } from '@/apis/formsApisTypes'

const baseUrl = `${import.meta.env.VITE_ENV_FORM_API_URL}/api`
const endPoint = '/form-applies'
const url = `${baseUrl}${endPoint}`
