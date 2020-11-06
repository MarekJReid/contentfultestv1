import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./partners.scss"

function DropDownListItems({ visible }) {
  const data = useStaticQuery(graphql`
  query CountryList {
    allContentfulCountryDetails {
      edges {
        node {
          country
          institution
        }
      }
    }
  }
  `)

  const countryNames = data.allContentfulCountryDetails.edges

  return (
    <div class="">
      {visible ? (
        <ul>
          {countryNames.map(item => (
            <li
            style={{textAlign: `center`, padding: `0`}}
            >
              <Link
                to={`/partners/${item.node.country.toLowerCase()}/`}
                exact={true}
                className=""
              >
                <p>{item.node.country}</p><br/>
                <p
                style={{textAlign: `center`, fontStyle: `italic`, fontSize: `.9rem`, color: `lightslategray`}}
                >({item.node.institution})</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default DropDownListItems
