import React, { useState } from "react"
import * as styles from "./gift.module.css"
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
  const [donorComment, setDonorComment] = useState("")
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

  const handleCommentChange = event => {
    setDonorComment(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()

    const serviceID = EMAILJS_SERVICE
    const templateID = EMAILJS_TEMPLATEID
    const templateParams = {
      donorName,
      donorEmail,
      donorAmount,
      donorComment,
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

  // if (formSubmitted && formSubmitSuccessful) {
  //   return (
  //     <div id="pledge">
  //       <div className={styles.container}>
  //         <h2 className={styles.title}>Pledge for 2023</h2>
  //         <br />
  //         <br />
  //         <br />
  //         <h2 className={styles.title}>Thank You!</h2>
  //         <br />
  //         <h2 className={styles.title}>Your Pledge has been received.</h2>
  //         <br />
  //         <br />
  //         <br />
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div id="pledge">
      <div className={styles.container}>
        <h2 className={styles.title}>Pledge for 2023</h2>
        <p className={styles.text}>
          Epiphany is asking for a pledge of your financial giving for 2023.
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
          budget for 2023, and to be good stewards of the financial gifts the
          church receives.
        </p>
        {/* <EstimateProgressBar /> */}

        {formSubmitted && formSubmitSuccessful ? (
          <div>
            <div className={styles.container}>
              <br />
              <br />
              <h2 className={styles.title}>Thank You!</h2>
              <br />
              <h2 className={styles.title}>Your Pledge has been received.</h2>
              <br />
              <br />
            </div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <h2>Your Pledge for 2023</h2>
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
                step="5"
                name="donorAmount"
                id="donorAmount"
                placeholder="Annual Amount"
                required
                onChange={e => handleAmountChange(e)}
              />
            </label>

            <label>
              <input
                className={styles.textInput}
                type="text"
                name="donorComment"
                id="donorComment"
                placeholder="Comments"
                onChange={e => handleCommentChange(e)}
              />
            </label>

            <div>
              <input type="submit" value="Submit" className={styles.button} />
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default Gift
