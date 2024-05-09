import { test, expect } from 'vitest'
import formService from '@/sevices/ApiFormService'
const teamCode = 28

test('getFormsMeta', async () => {
  await formService.getAllFormMeta(teamCode)
})

test('getFormMetaById', async () => {
  const formMetaList = await formService.getAllFormMeta(teamCode)
  await formService.getFormMetaById(teamCode, formMetaList[0].id)
})

test('getFormArticles', async () => {
  const formMetaList = await formService.getAllFormMeta(teamCode)
  await formService.getFormArticles(teamCode, formMetaList[0].id)
})
