import React, { useState } from "react"
import styles from "./gift.module.css"
import EstimateProgressBar from "./estimateProgressBar"

import {
  EMAILJS_USER,
  EMAILJS_SERVICE,
  EMAILJS_TEMPLATEID,
} from "gatsby-env-variables"
import emailjs from "emailjs-com"
import { init } from "emailjs-com"
init(EMAILJS_USER)

const Gift = ({ env }) => {
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [donorAmount, setDonorAmount] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false)

  const handleNameChange = event => {
    setDonorName(event.target.value)
  }
  const handleEmailChange = event => {
    setDonorEmail(event.target.value)
  }
  const handleAmountChange = event => {
    setDonorAmount(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const serviceID = EMAILJS_SERVICE
    const templateID = EMAILJS_TEMPLATEID
    const templateParams = {
      donorName,
      donorEmail,
      donorAmount,
    }

    sendEmail(serviceID, templateID, templateParams)

    setFormSubmitted(true)
  }

  const sendEmail = (serviceID, templateID, templateParams) => {
    console.log("in Send: ", serviceID, templateID, templateParams)
    emailjs
      .send(serviceID, templateID, templateParams)
      .then(res => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true)
        }
      })
      // Handle errors here however you like
      .catch(err =>
        console.error("Failed to send the estimate of giving. Error: ", err)
      )
  }

  if (formSubmitted && formSubmitSuccessful) {
    return <h2>Thank You! Your Estimate of Giving has been sent.</h2>
  }

  return (
    <div id="gift">
      <div className={styles.container}>
        <h2 className={styles.title}>Growing In Faith Together</h2>
        <p className={styles.text}>
          Epiphany is asking for an estimate of your financial giving for 2022.
        </p>
        <p className={styles.text}>
          Since 1844, people have been growing in faith together at Epiphany.
        </p>
        <p className={styles.text}>
          We grow in faith together through worship, outreach and fellowship. We
          grow together through celebration and mourning, giving and receiving,
          agreement and disagreement. And we also grow together in faith through
          questioning and doubt, revelation and understanding and the acceptance
          of Jesus and the Holy Spirit in our lives.
        </p>
        <p className={styles.text}>
          And through the generosity of people like you sharing God's gifts with
          Epiphany, we will continue growing in faith together.
        </p>

        <p className={styles.text}>
          It requires at least $180,000 per year to operate our church.
        </p>
        <p className={styles.text}>
          Your estimate of giving is very important for the vestry to plan and
          budget for 2022, and to be good stewards of the financial gifts the
          church receives.
        </p>
        <EstimateProgressBar />
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Your Estimate of Giving for 2022</h2>
          <label>
            <input
              className={styles.textInput}
              type="text"
              name="donorName"
              id="donorName"
              placeholder="Your Name(s)"
              required
              onChange={e => handleNameChange(e)}
            />
          </label>

          <label>
            <input
              className={styles.textInput}
              type="email"
              name="donorEmail"
              // value="donorEmail"
              id="donorEmail"
              placeholder="Email"
              onChange={e => handleEmailChange(e)}
            />
          </label>

          <label>
            <input
              className={styles.textInput}
              type="number"
              min="10"
              step="10"
              name="donorAmount"
              id="donorAmount"
              placeholder="Annual Amount"
              required
              onChange={e => handleAmountChange(e)}
            />
          </label>

          <div>
            <input type="submit" value="Submit" className={styles.button} />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Gift
