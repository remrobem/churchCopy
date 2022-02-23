import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
    setPostBodyComponents([
      // <script
      //   key="https://tithe.ly/widget/v3/give.js?3"
      //   src="https://tithe.ly/widget/v3/give.js?3"
      //   crossOrigin="anonymous"
      //   defer
      // />,
      // <script>var tw = create_tithely_widget();</script>,
      // <script>src="//epiphanyeden.us17.list-manage.com/generate-js/?u=a3f429c9b2ab91d27de19f6cd&fid=13041&show=10"</script>
    ])
  }