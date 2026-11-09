export function scrollToSection(id, options = {}) {
  const element = document.getElementById(id)
  if (!element) return false

  const { offset = 12, behavior = 'smooth', focus = false } = options
  const headerHeight = document.querySelector('.header')?.getBoundingClientRect().height || 0
  const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
  const elementTop = element.getBoundingClientRect().top + window.scrollY

  window.scrollTo({
    top: Math.max(0, elementTop - headerHeight - offset),
    behavior: reduceMotion ? 'auto' : behavior
  })

  if (focus) {
    const hadTabIndex = element.hasAttribute('tabindex')
    if (!hadTabIndex) {
      element.setAttribute('tabindex', '-1')
      element.addEventListener('blur', () => element.removeAttribute('tabindex'), { once: true })
    }
    element.focus({ preventScroll: true })
  }

  return true
}
