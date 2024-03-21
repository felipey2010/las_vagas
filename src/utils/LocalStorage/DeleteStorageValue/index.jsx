export default function deleteStorageValue(key) {
  if (!key) return null

  return localStorage.removeItem(key)
}
