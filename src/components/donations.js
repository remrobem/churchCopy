import React from "react"
import styles from "./donations.module.css"

const Donations = () => {
  return (
    <div className={styles.container}>
      <a name="epiphany_donate"></a>
      <h2>Please Donate</h2>
      <blockquote>
        <p>
          “Do not store up for yourselves treasures on earth, where moth and
          rust consume and where thieves break in and steal; but store up for
          yourselves treasures in heaven, where neither moth nor rust consumes
          and where thieves do not break in and steal. For where your treasure
          is, there your heart will be also.”
        </p>

        <footer>Matthew 6: 19-21</footer>
      </blockquote>
      <p>
        Please remember to continue fulfilling your pledges or make
        contributions to Epiphany.
      </p>
      <p>
        Checks can be made out to Church of the Epiphany and mailed to 538 Henry
        St, Eden NC 27288
      </p>
      <p>
        Or you can use the link below to use your credit card to make a
        contribution directly to Epiphany.
      </p>
      <div>
        <a href="https://checkout.square.site/pay/fb10e2bb3b5e485491b377295f5a0ab9">
          <button className={styles.button}>Donate</button>
        </a>
      </div>
    </div>
  )
}

export default Donations
