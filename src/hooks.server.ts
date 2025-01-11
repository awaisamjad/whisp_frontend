// src/hooks.server.ts
import type { Handle } from '@sveltejs/kit'
import { themes } from '$lib/themes'

export const handle: Handle = async ({ event, resolve }) => {
  const session_id = event.cookies.get('session_id')
  const theme = event.cookies.get('theme')

  if (!theme || !themes.includes(theme)) {
    return await resolve(event)
  }

  return await resolve(event, {
    transformPageChunk: ({ html }) => {
      return html.replace('data-theme=""', `data-theme="${theme}"`)
    }
  })
}
