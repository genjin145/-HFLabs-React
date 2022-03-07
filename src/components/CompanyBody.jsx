import React from 'react'
import CompanyField from './CompanyField'
import { join, typeDescription } from '../helpers'

const CompanyBody = ({ company }) => {
  const type = company.data?.type
  const name = company.value || ''
  const fullName = company.data?.name?.full_with_opf || ''
  const inn = company.data?.inn || ''
  const kpp = company.data?.kpp || ''
  const innkpp = join([inn, kpp], ' / ')
  const address = company.data?.address?.unrestricted_value || ''

  return (
    <>
      <p>{type && `${typeDescription(type)} (${type})`}</p>
      <CompanyField label="Краткое наименование" defaultValue={name} />
      <CompanyField label="Полное наименование" defaultValue={fullName} />
      <CompanyField label="ИНН / КПП" defaultValue={innkpp} />
      <CompanyField label="Адрес" defaultValue={address} />
    </>
  )
}

export default CompanyBody
