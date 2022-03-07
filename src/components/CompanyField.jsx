const CompanyField = ({ label, ...props }) => {
  return (
    <label>
      <span>{label}</span>
      <input type="text" {...props} />
    </label>
  )
}

export default CompanyField
