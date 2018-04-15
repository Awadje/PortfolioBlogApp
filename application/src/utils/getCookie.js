export default function getCookie (name) {
  const matches = document.cookie.match(new window.RegExp(
    '(?:^|; )' + name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') + '=([^;]*)'
  ))

  return matches ? decodeURIComponent(matches[1]) : undefined
}
