import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
      <script
        key="https://tithe.ly/widget/v3/give.js?3"
        src="https://tithe.ly/widget/v3/give.js?3"
        crossOrigin="anonymous"
        defer
      />,
      <script>var tw = create_tithely_widget();</script>,
    ])
  }