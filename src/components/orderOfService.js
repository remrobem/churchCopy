import React from "react"
import * as styles from "./orderOfService.module.css"
import { Document, Page } from "react-pdf"

const OrderOfService = ({ pdf }) => {
  return (
    <div className={styles.container} id="orderOfService">
        <Document file={pdf} options={{ workerSrc: "/pdf.worker.js" }}>
          <Page pageNumber={1} />
          <Page pageNumber={2} />
          <Page pageNumber={3} />
          <Page pageNumber={4} />
          <Page pageNumber={5} />
          <Page pageNumber={6} />
          <Page pageNumber={7} />
          <Page pageNumber={8} />
        </Document>
    </div>
  )
}

export default OrderOfService
