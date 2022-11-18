import React from "react"
import * as styles from "./emailSignUp.module.css"

const EmailSignUp = () => {
  return (
    <div className={styles.container} id="emailSignUp">
      <div id="mc_embed_signup">
        <form
          action="https://epiphanyeden.us17.list-manage.com/subscribe/post?u=a3f429c9b2ab91d27de19f6cd&amp;id=e19ccad4ec&amp;f_id=001156e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe to Email List</h2>
            <div class="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label for="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input
                type="email"
                value=""
                name="EMAIL"
                className="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
            </div>
            <div className="mc-field-group">
              <label for="mce-FNAME">
                First Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="FNAME"
                className="required"
                id="mce-FNAME"
                required
              />
              <span id="mce-FNAME-HELPERTEXT" className="helper_text"></span>
            </div>
            <div className="mc-field-group">
              <label for="mce-LNAME">
                Last Name <span className="asterisk">*</span>
              </label>
              <input
                type="text"
                value=""
                name="LNAME"
                className="required"
                id="mce-LNAME"
                required
              />
              <span id="mce-LNAME-HELPERTEXT" className="helper_text"></span>
            </div>
            <div className="mc-field-group size1of2">
              <label for="mce-PHONE">Phone Number </label>
              <input
                type="text"
                name="PHONE"
                className=""
                value=""
                id="mce-PHONE"
              />
              <span id="mce-PHONE-HELPERTEXT" className="helper_text"></span>
            </div>
            <div hidden="true">
              <input type="hidden" name="tags" value="119680" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{display:"none"}}
              ></div>
              <div
                className="response"
                id="mce-success-response"
                style={{display:"none"}}
              ></div>
            </div>
            <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_a3f429c9b2ab91d27de19f6cd_e19ccad4ec"
                tabindex="-1"
                value=""
              />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button"
                />
                <p className="brandingLogo">
                  <a
                    href="http://eepurl.com/hO2AUX"
                    title="Mailchimp - email marketing made easy and fun"
                  >
                    <img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></img>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EmailSignUp
