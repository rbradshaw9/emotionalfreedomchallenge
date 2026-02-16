import type { Metadata } from 'next'
import Script from 'next/script'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Partner Registration - The Emotional Freedom Challenge',
  description: 'Complete your partner registration and start sharing transformation.',
}

export default function PartnerRegister() {
  return (
    <div className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <h1>Partner Registration</h1>
          <p className={styles.subtitle}>
            Complete the form below to finalize your partner account. We'll review your submission and reach out within 1-2 business days.
          </p>
        </div>

        <section className={styles.formSection}>
          <div className={styles.formWrapper}>
            <form accept-charset="UTF-8" action="https://bl843.infusionsoft.com/app/form/process/4c9b8b75fc0b1e19505d18dac0e1a6ab" className="infusion-form" id="inf_form_4c9b8b75fc0b1e19505d18dac0e1a6ab" method="POST">
              <input name="inf_form_xid" type="hidden" value="4c9b8b75fc0b1e19505d18dac0e1a6ab" />
              <input name="inf_form_name" type="hidden" value="Emotional Freedom Challenge&#xa;Referral Sign-up submitted" />
              <input name="infusionsoft_version" type="hidden" value="1.70.0.902929" />
              
              <div>
                <div>
                  <div className="title">
                    <div className="title">
                      <div>
                        <span>Part 1 - Contact Information</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_FirstName">First Name *</label>
                <input id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_LastName">Last Name *</label>
                <input id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_Email">Email *</label>
                <input id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_Phone1">Phone</label>
                <input id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone" type="text" />
              </div>
              
              <div>
                <div>
                  <div> </div>
                  <div> </div>
                </div>
              </div>
              
              <div>
                <div>
                  <div className="title">
                    <div className="title">
                      <div>
                        <span>Part 2 - Where To Send Commissions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text">
                  <div className="text">
                    <div>*We make commission payments via PayPal. If you do not have a PayPal account, please visit https://paypal.com and create an account.</div>
                  </div>
                </div>
              </div>
              
              <div>
                <div>&nbsp;</div>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_custom_PayPalEmail">PayPal Email *</label>
                <input id="inf_custom_PayPalEmail" name="inf_custom_PayPalEmail" placeholder="PayPal Email *" type="text" />
              </div>
              
              <div>
                <div>
                  <div> </div>
                  <div> </div>
                </div>
              </div>
              
              <div>
                <div>
                  <div className="title">
                    <div className="title">
                      <div>
                        <span>Part 3 - Referral Partner Registration</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_SSN">SSN/TIN</label>
                <input id="inf_field_SSN" name="inf_field_SSN" placeholder="SSN/TIN" type="text" />
              </div>
              
              <div>
                <div className="text">
                  <div className="text">
                    <div>
                      <i>
                        <span>We required your SSN/TIN for proper tax documentation. If you live outside the US, you can leave this blank.</span>
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_other_Username">Username *</label>
                <input id="inf_other_Username" name="inf_other_Username" placeholder="Username *" type="text" />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_other_Password">Password *</label>
                <input id="inf_other_Password" name="inf_other_Password" placeholder="Password *" type="password" />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_other_RetypePassword">Confirm Password *</label>
                <input id="inf_other_RetypePassword" name="inf_other_RetypePassword" placeholder="Confirm Password *" type="password" />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_other_NotifyOnLead">Notify on Lead</label>
                <div className="infusion-radio">
                  <div className="options-container">
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnLead_1" name="inf_other_NotifyOnLead" type="radio" value="1" />
                      <label htmlFor="inf_other_NotifyOnLead_1">Yes</label>
                    </span>
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnLead_0" name="inf_other_NotifyOnLead" type="radio" value="0" />
                      <label htmlFor="inf_other_NotifyOnLead_0">No</label>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_other_NotifyOnSale">Notify on Sale</label>
                <div className="infusion-radio">
                  <div className="options-container">
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnSale_1" name="inf_other_NotifyOnSale" type="radio" value="1" />
                      <label htmlFor="inf_other_NotifyOnSale_1">Yes</label>
                    </span>
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnSale_0" name="inf_other_NotifyOnSale" type="radio" value="0" />
                      <label htmlFor="inf_other_NotifyOnSale_0">No</label>
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <div>&nbsp;</div>
              </div>
              
              <div className="infusion-submit">
                <button className="infusion-recaptcha" id="recaptcha_4c9b8b75fc0b1e19505d18dac0e1a6ab" type="submit">Sign Me Up!</button>
              </div>
              
              <input type="text" name="inf-sbt" style={{ display: 'none' }} />
            </form>
            
            <Script 
              src="https://bl843.infusionsoft.app/app/webTracking/getTrackingCode" 
              strategy="afterInteractive"
            />
            <Script 
              src="https://bl843.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.902929-hf-202602131028" 
              strategy="afterInteractive"
            />
            <Script 
              src="https://bl843.infusionsoft.com/resources/external/recaptcha/production/enterpriseRecaptcha.js?b=1.70.0.902929-hf-202602131028" 
              strategy="afterInteractive"
            />
            <Script 
              src="https://bl843.infusionsoft.com/app/timezone/timezoneInputJs?xid=4c9b8b75fc0b1e19505d18dac0e1a6ab" 
              strategy="afterInteractive"
            />
            <Script 
              src="https://bl843.infusionsoft.com/js/jquery/jquery-3.3.1.js" 
              strategy="afterInteractive"
            />
            <Script 
              src="https://bl843.infusionsoft.app/app/webform/overwriteRefererJs" 
              strategy="afterInteractive"
            />
          </div>

          <div className={styles.privacy}>
            <p>
              Your information is secure and will only be used to evaluate and manage your partner account. We respect your privacy and never share your details with third parties.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
