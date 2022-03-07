import { useState, useRef, useEffect } from 'react'
import CompanySearchResult from './CompanySearchResult'
import { useDebounce } from '../hooks/useDebounce'
import { fetchSuggestions } from '../api'

const CompanySearch = ({ count = 5, placeholder, setCompany }) => {
  const [query, setQuery] = useState('')
  const [companys, setCompanys] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const inputRef = useRef()
  const toggleVisible = (companys) => setIsVisible(Boolean(companys.length))

  useEffect(() => {
    const handleClickDocument = (evt) => {
      if (evt.target !== inputRef.current) setIsVisible(false)
    }

    document.addEventListener('click', handleClickDocument)

    return () => {
      document.removeEventListener('click', handleClickDocument)
    }
  }, [])

  const debounceQuery = useDebounce((query) => {
    fetchSuggestions({ query, count }).then((json) => {
      const data = json?.suggestions || []
      setCompanys(data)
      toggleVisible(data)
    })
  }, 400)

  const handleChangeQuery = (evt) => {
    const text = evt.target.value
    setQuery(text)
    debounceQuery(text)
  }

  const handleClickQuery = () => {
    toggleVisible(companys)
  }

  const selectCompany = (company) => {
    setCompany(company)
    setQuery(company.unrestricted_value)
  }

  const handleEnterQuery = (evt) => {
    if (evt.code !== 'Enter' || !companys.length) return
    selectCompany(companys[0])
    setIsVisible(false)
  }

  return (
    <div className="company-search">
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={handleChangeQuery}
        onClick={handleClickQuery}
        onKeyDown={handleEnterQuery}
        placeholder={placeholder}
      />
      <CompanySearchResult
        query={query}
        isVisible={isVisible}
        companys={companys}
        selectCompany={selectCompany}
      />
    </div>
  )
}

export default CompanySearch
