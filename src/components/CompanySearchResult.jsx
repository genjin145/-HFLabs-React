import { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import SearchedText from './SearchedText'

const CompanySearchResult = ({ query, isVisible, companys, selectCompany }) => {
  const nodeRef = useRef()

  return (
    <CSSTransition
      nodeRef={nodeRef}
      in={isVisible}
      classNames="result"
      addEndListener={(done) =>
        nodeRef.current.addEventListener('transitionend', done, false)
      }
      unmountOnExit={true}
    >
      <ul ref={nodeRef}>
        {companys.map((company) => (
          <li key={company.data?.hid}>
            <button onClick={() => selectCompany(company)}>
              <SearchedText query={query} text={company.unrestricted_value} />
              <span>
                <SearchedText query={query} text={company.data?.inn || ''} />
                {company.data.address?.value}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </CSSTransition>
  )
}

export default CompanySearchResult
