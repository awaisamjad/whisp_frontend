// @ts-nocheck
import { getContext, setContext } from 'svelte'

const key = Symbol('layout-slots')

export function initSlots () {
  const slots = $state({})
  return setContext(key, slots)
}

export function setSlots (slots) {
  const context = getContext(key)
  Object.assign(context, slots)
}
