import { test, expect } from 'vitest'
import { getFormsMeta } from '@/apis/formsApis'

const teamCode = 28

test('getFormsMeta', async () => {
  await getFormsMeta(teamCode)
})
