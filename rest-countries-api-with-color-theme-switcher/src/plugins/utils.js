export function debounce(func, delay) {
  let timeout = null
  return function () {
    let context = this
    let args = arguments
    clearTimeout(timeout)

    timeout = setTimeout(function () {
      func.apply(context, args)
    }, delay)
  }
}
