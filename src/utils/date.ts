export const dateFormatter = (isoDate?: string) => {
  if (isoDate) {
    const date = new Date(isoDate);

    const formattedDate = date.toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    })

    return formattedDate
  } else {
    return undefined
  }

}