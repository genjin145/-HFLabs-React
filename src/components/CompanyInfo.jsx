import { useState } from 'react'
import CompanySearch from './CompanySearch'
import CompanyBody from './CompanyBody'

const CompanyInfo = () => {
  const [company, setCompany] = useState({})

  return (
    <section className="company-info">
      <h1>Компания или ИП</h1>
      <CompanySearch
        setCompany={setCompany}
        placeholder="Введите название, ИНН, ОГРН или адрес организации"
      />
      <CompanyBody company={company} />
    </section>
  )
}

export default CompanyInfo
