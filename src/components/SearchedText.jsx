function SearchedText({ query, text }) {
  const start = text.toLowerCase().indexOf(query.toLowerCase())
  const end = start + query.length

  if (start < 0 || start === end) return text

  return (
    <>
      {text.slice(0, start)}
      <mark>{text.slice(start, end)}</mark>
      {text.slice(end)}
    </>
  )
}

export default SearchedText
