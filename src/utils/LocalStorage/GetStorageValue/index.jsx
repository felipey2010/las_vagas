export default function getStorageValue(key) {
  if (!key) return null

  return localStorage.getItem(key)
}
