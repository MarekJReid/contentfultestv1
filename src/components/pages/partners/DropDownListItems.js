import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import "./partners.scss"

function DropDownListItems({ visible }) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allCountriesJson {
        edges {
          node {
            country
          }
        }
      }
    }
  `)

  const countryNames = data.allCountriesJson.edges

  return (
    <div class="">
      {visible ? (
        <ul>
          {countryNames.map(item => (
            <li>
              <Link
                to={`/partners/${item.node.country}/`}
                exact={true}
                className=""
              >
                <p>{item.node.country}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}

export default DropDownListItems
