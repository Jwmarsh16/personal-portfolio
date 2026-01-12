// client/src/utils/scrollToSection.js
export function scrollToSection(id, options = {}) {
  const element = document.getElementById(id)
  if (!element) return

  const { offset = 12, behavior, focus = false } = options

  const header = document.querySelector('.header')
  const headerHeight = header ? header.getBoundingClientRect().height : 0

  const prefersReducedMotion =
    window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches || false

  const finalBehavior = behavior ?? (prefersReducedMotion ? 'auto' : 'smooth')

  const elementTop = element.getBoundingClientRect().top + window.scrollY
  const targetTop = Math.max(0, elementTop - headerHeight - offset)

  window.scrollTo({ top: targetTop, behavior: finalBehavior })

  if (!focus) return

  const hadTabIndex = element.hasAttribute('tabindex')
  if (!hadTabIndex) element.setAttribute('tabindex', '-1')

  window.setTimeout(() => {
    element.focus({ preventScroll: true })
    if (!hadTabIndex) element.removeAttribute('tabindex')
  }, prefersReducedMotion ? 0 : 250)
}
