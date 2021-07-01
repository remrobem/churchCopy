import React from "react"
import styles from "./announcements.module.css"
import VBSImage from "../../content/assets/VBS_image.png"

const Announcements = () => {
  return (
    <div className={styles.container} id="vbs">
      <div className={styles.announcement}>
        <div className={`${styles.image}`}>
          <img src={VBSImage} alt="Compassion VBS logo"></img>
        </div>
        <div className={styles.text}>
          <h1>Vacation Bible School</h1>

          <h2>Compassion Camp - The Sequel</h2>
          <h2>Changing The World With Loving Kindness</h2>
          <p>Brought to you by:</p>
          <p>
            Church of the Epiphany, Leaksville UMC, Spray UMC, Christ Episcopal,
            Holy Trinity Lutheran, First Presbyterian (Martinsville) and Forest
            Hills Presbyterian
          </p>

          <h3>Who is Invited to participate?</h3>
          <p>Preschoolers - rising 6th graders.</p>
          <h3>What are the dates?</h3>
          <p>July 26 - 30</p>
          <p>
            While each day’s session will be sent out via email each morning,
            you will be able to complete each session at your leisure.
          </p>
          <h3>Is there a fee?</h3>
          <p>
            This event is FREE, so invite your grandchildren, nieces, nephews,
            cousins, friends, and neighbors.
          </p>
          <p>
            They do not have to attend any of the sponsoring churches to
            participate!
          </p>

          <h3>What Materials & Supplies do I need ?</h3>
          <p>
            The supplies you will need are items you will likely have readily
            available in your household.
          </p>
          <p>
            A list of supplies will be available soon on First Presbyterian's
            website{" "}
            <a href="http://www.firstpresbyterianmartinsville.org/news.cfm?ID=716">
              {" "}
              here
            </a>
          </p>
          <p>
            Help with supplies will be available for anyone who requests it.
          </p>
          <h3>How do I get more information and register ?</h3>
          <p>
            You can find more information & register your child(ren)
            <a href="https://docs.google.com/forms/d/1rmRqqv3pXb6Xda_nxfNygAXpiEQNsh7i2GkiVWSbuNQ/viewform?edit_requested=true">
              {" "}
              here
            </a>
          </p>
        </div>
      </div>

      <div className={styles.announcement}>
        <h1>Sunday School - on Tuesdays!!</h1>
        <div className={styles.text}>
          <p>
            Starting June 15, adult Sunday School will be Tuesdays at 7 pm. We
            will meet for about 1 hour.
          </p>
          <p>
            We hope this change might make Sunday School available to more
            people.
          </p>
          <p>
            The format will remain the same: watch the National Cathedral sermon
            from the prior Sunday and discuss it.
          </p>
          <p>
            It is very informal. It is not uncommon for the discussions to
            wander a bit, which is ok.
          </p>
          <p>We hope you will join us.</p>
          <p>
            It will remain a Zoom meeting with the{" "}
            <a href="https://us02web.zoom.us/j/86264215594">existing link.</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
