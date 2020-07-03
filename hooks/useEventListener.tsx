import { useEffect } from 'react'

import useSavedRef from './useSavedRef'
import { isFunction, isElement, isClient } from 'utils'
import { Elem } from 'types/general.types'

const isPassive = (name: string) =>
  ['scroll', 'touchstart', 'touchmove', 'wheel'].some(e => e === name)

function handleConfig(eventName: string): AddEventListenerOptions | boolean {
  return isPassive(eventName) ? { passive: true } : (false as boolean)
}

const ELEMENT = isClient() ? window : null

type EvenListenerEventMap =
  | keyof HTMLElementEventMap
  | keyof WindowEventMap
  | keyof WindowEventHandlersEventMap

/**
 * React custom hook that add's and removes an eventListener to provided element,
 * on provided eventName
 * @author Todd Matheson / https://github.com/toddmath
 * @param {string} eventName - The eventName to subscribe to
 * @param {Function} handler - Event handler function to run.
 * @param {HTMLElement|window} [element=window]
 */
export default function useEventListener(
  eventName: EvenListenerEventMap,
  handler: Function,
  element: Elem = ELEMENT
) {
  const savedHandler = useSavedRef(handler)

  useEffect(() => {
    const notSupported =
      !isClient() ||
      !isElement(element) ||
      !savedHandler.current ||
      !isFunction(savedHandler.current)

    if (notSupported) return

    const eventListener: EventListener = event => savedHandler.current(event)
    element.addEventListener(eventName, eventListener, handleConfig(eventName))

    console.count(`attached ${eventName} listener on ${element}`)

    return () => {
      element.removeEventListener(
        eventName,
        eventListener,
        handleConfig(eventName)
      )
      console.count(`removed ${eventName} listener from ${element}`)
    }
  }, [eventName, element, savedHandler])
}
