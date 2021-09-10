import React, { useState } from "react"
import styles from "./gift.module.css"

import Footer from "../../../src/components/footer"
import Header from "../../../src/components/header"

import {
  EMAILJS_USER,
  EMAILJS_SERVICE,
  EMAILJS_TEMPLATEID,
} from "gatsby-env-variables"
import emailjs from "emailjs-com"
import { init } from "emailjs-com"
init(EMAILJS_USER)

const GIFT = ({ env }) => {
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [donorAmount, setDonorAmount] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false)

  // const senderEmail = GATSBY_EMAILJS_SENDEREMAIL

  const handleCancel = () => {
    setDonorName("")
    setDonorEmail("")
    setDonorAmount("")
  }

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
    <div className={styles.container}>
      <Header />
      <form className={styles.form} onSubmit={handleSubmit}>
      <h2>Estimate of Giving for 2022</h2>
      <label>
        <input
          className={styles.textInput}
          type="text"
          name="donorName"
          // value="donorName"
          id="donorName"
          placeholder="Your Name(s)"
          required
          onChange={ (e) => handleNameChange(e)}
        />
      </label>

      <label>
        {/* Your email: */}
        <input
          className={styles.textInput}
          type="email"
          name="donorEmail"
          // value="donorEmail"
          id="donorEmail"
          placeholder="Email"
          onChange={ (e) => handleEmailChange(e)}
        />
      </label>

      <label>
        {/* Your Estimate of Giving Amount for 2022: */}
        <input
          className={styles.textInput}
          type="number"
          min="1"
          step="1"
          name="donorAmount"
          // value="donorAmount"
          id="donorAmount"
          placeholder="Amount"
          required
          onChange={ (e) => handleAmountChange(e)}
        />
      </label>

      <div >
        {/* <button className="btn btn--cancel" onClick={handleCancel}>
          Cancel
        </button> */}
        <input type="submit" value="Submit" className={styles.button} />
      </div>
    </form>
   
      <h2 className={styles.title}>Growing In Faith Together</h2>
      <p className={styles.text}>
         Epiphany is asking for an estimate of your financial giving for 2022.
         </p>
       <p className={styles.text}>
         Since 1844, people have been growing in faith together at Epiphany.
       </p>
       <p className={styles.text}>
         Growing in faith together through worship, outreach and fellowship.
         Through celebration and mourning, giving and receiving, agreement and
         disagreement. Through questioning and doubt, revelation and
         undertanding.
       </p>
       <p className={styles.text}>
         And through the generosity of people sharing God's gifts with Epiphany.
         Epiphany depends on the sharing of your money in order to continue, in
         order for us to continue growing in faith together.
       </p>
 
      
         <p className={styles.text}>
         It requires at least $180,000 per year to operate our church. 
       </p>
         <p className={styles.text}>
         This information is very important for the vestry to plan and budget for 2022, and to be good stewards of the finacial gifts the church receives.
       </p>
    <Footer />
    </div>
  )
}

export default GIFT

// import React from "react"
// import styles from "./gift.module.css"

// const GIFT = () => {
//   return (
//     <div className={styles.container} id="gift">
//       <h2 className={styles.title}>Growing In Faith Together</h2>

//       <p className={styles.text}>
//         Since 1844, people have been growing in faith together at Epiphany.
//       </p>
//       <p className={styles.text}>
//         Growing in faith together through worship, outreach and fellowship.
//         Through celebration and mourning, giving and receiving, agreement and
//         disagreement. Through questioning and doubt, revelation and
//         undertanding.
//       </p>
//       <p className={styles.text}>
//         And through the generosity of people sharing God's gifts with Epiphany.
//         Epiphany depends on the sharing of your money in order to continue, in
//         order for us to continue growing in faith together.
//       </p>
//       <p className={styles.text}>
//         Epiphany requires at least $180,000 per year to operate.
//       </p>
//       <p className={styles.text}>
//         Epiphany is asking for an estimate of your financial giving for 2022.
//         This information is very important for the vestry to plan and budget for 2022, to be good stewards of the fincial gifts the church receives.
//       </p>
//       <p className={styles.text}>
//         Checks can be made out to Church of the Epiphany and mailed to 538 Henry
//         St, Eden NC 27288
//       </p>
//       <p className={styles.text}>
//         Or you can use the link below to use your credit card to make a
//         contribution directly to Epiphany.
//       </p>

//       <a href="https://tithe.ly/give?c=3897734">
//         <button className={styles.button}>GIFT</button>
//       </a>
//     </div>
//   )
// }

// export default GIFT
