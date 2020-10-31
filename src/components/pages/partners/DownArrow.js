import React from "react"
import "./partners.scss"

function DownArrow({ hover }) {

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16.483"
      height="15.596"
      viewBox="0 0 36.483 35.596"
    >
      <path
        className="down-arrow"
        id="downArrow"
        d="M581.208,444.868,569.55,465.1l22.966,4.017"
        transform="translate(-641.399 351.432) rotate(-65)"
        fill="none"
        stroke={hover ? "white" : "#0d6989"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      />
    </svg>
  )
}

export default DownArrow
