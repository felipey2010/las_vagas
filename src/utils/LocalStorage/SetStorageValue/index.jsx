export default function setStorageValue(key, value) {
  if (!key) return null

  return localStorage.setItem(key, value)
}
