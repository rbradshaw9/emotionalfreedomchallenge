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
      <section className={styles.hero}>
        <div className="container container-content">
          <h1>Partner Registration</h1>
          <p className={styles.subtitle}>
            Thanks for taking the next step. This page is for invited partners to complete registration for the Emotional Freedom Challenge.
          </p>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className="container container-content">
          <h2>What This Registration Includes</h2>
          <p>
            To ensure accurate referral tracking and timely commission payments, we ask for detailed partner information. This is standard for any professional referral program.
          </p>
          <p>
            You'll provide contact details, PayPal payment information, and account credentials for secure access to your partner dashboard.
          </p>
          <p>
            We know this requires more detail than a typical signup. All information is encrypted, stored securely, and used solely for partnership administration and tax compliance.
          </p>
          <p className={styles.reassurance}>
            Your privacy matters to us. We never share partner information with third parties.
          </p>
        </div>
      </section>

      <section className={styles.nextStepsSection}>
        <div className="container container-content">
          <h2>What Happens Next</h2>
          <p>
            Once you complete this registration:
          </p>
          <ul>
            <li><strong>Immediate confirmation</strong> — You'll be registered as an official referral partner</li>
            <li><strong>Within 1 business day</strong> — We'll send your unique referral link</li>
            <li><strong>Partner resources</strong> — You'll receive ready-to-share email and social copy</li>
            <li><strong>No pressure</strong> — Share when and how it feels right for your audience</li>
          </ul>
          <p>
            Questions? Our team is here to support you every step of the way.
          </p>
        </div>
      </section>

      <section className={styles.formSection}>
        <div className="container container-content">
          <div className={styles.formWrapper}>
            {/* Keap Referral Partner Form Embed Goes Here */}
            <form 
              accept-charset="UTF-8" 
              action="https://bl843.infusionsoft.com/app/form/process/4c9b8b75fc0b1e19505d18dac0e1a6ab" 
              className="infusion-form" 
              id="inf_form_4c9b8b75fc0b1e19505d18dac0e1a6ab" 
              method="POST"
            >
              <input name="inf_form_xid" type="hidden" value="4c9b8b75fc0b1e19505d18dac0e1a6ab" />
              <input name="inf_form_name" type="hidden" value="Emotional Freedom Challenge&#xa;Referral Sign-up submitted" />
              <input name="infusionsoft_version" type="hidden" value="1.70.0.902929" />
              
              <div className="section-title">
                <span>Part 1 - Contact Information</span>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_FirstName">First Name *</label>
                <input id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" required />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_LastName">Last Name *</label>
                <input id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" required />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_Email">Email *</label>
                <input id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="email" required />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_Phone1">Phone</label>
                <input id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone" type="text" />
              </div>
              
              <div className="section-title">
                <span>Part 2 - Where To Send Commissions</span>
              </div>
              
              <div className="info-note">
                <div>*We make commission payments via PayPal. If you do not have a PayPal account, please visit https://paypal.com and create an account.</div>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_custom_PayPalEmail">PayPal Email *</label>
                <input id="inf_custom_PayPalEmail" name="inf_custom_PayPalEmail" placeholder="PayPal Email *" type="email" required />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_other_Username">Username *</label>
                <input id="inf_other_Username" name="inf_other_Username" placeholder="Username *" type="text" required />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_other_Password">Password *</label>
                <input id="inf_other_Password" name="inf_other_Password" placeholder="Password *" type="password" required />
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_other_RetypePassword">Confirm Password *</label>
                <input id="inf_other_RetypePassword" name="inf_other_RetypePassword" placeholder="Confirm Password *" type="password" required />
              </div>
              
              <div className="infusion-field" style={{ display: 'none' }}>
                <label htmlFor="inf_other_NotifyOnLead">Notify on Lead</label>
                <div className="infusion-radio">
                  <div className="options-container">
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnLead_1" name="inf_other_NotifyOnLead" type="radio" value="1" />
                      <label htmlFor="inf_other_NotifyOnLead_1">Yes</label>
                    </span>
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnLead_0" name="inf_other_NotifyOnLead" type="radio" value="0" defaultChecked />
                      <label htmlFor="inf_other_NotifyOnLead_0">No</label>
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="infusion-field" style={{ display: 'none' }}>
                <label htmlFor="inf_other_NotifyOnSale">Notify on Sale</label>
                <div className="infusion-radio">
                  <div className="options-container">
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnSale_1" name="inf_other_NotifyOnSale" type="radio" value="1" />
                      <label htmlFor="inf_other_NotifyOnSale_1">Yes</label>
                    </span>
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnSale_0" name="inf_other_NotifyOnSale" type="radio" value="0" defaultChecked />
                      <label htmlFor="inf_other_NotifyOnSale_0">No</label>
                    </span>
                  </div>
                </div>
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
            
            {/* Client-side validation script using HTML5 validation */}
            <Script id="partner-form-validation" strategy="afterInteractive">
              {`
                (function() {
                  function validateForm(e) {
                    var form = document.getElementById('inf_form_4c9b8b75fc0b1e19505d18dac0e1a6ab');
                    if (!form) return true;
                    
                    // Check if form is valid
                    if (!form.checkValidity()) {
                      if (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                      }
                      form.reportValidity();
                      return false;
                    }
                    return true;
                  }
                  
                  function attachValidation() {
                    var form = document.getElementById('inf_form_4c9b8b75fc0b1e19505d18dac0e1a6ab');
                    if (!form) {
                      setTimeout(attachValidation, 100);
                      return;
                    }
                    
                    if (form.dataset.validationAttached) return;
                    form.dataset.validationAttached = 'true';
                    
                    // Override the form's submit method
                    var originalSubmit = HTMLFormElement.prototype.submit;
                    form.submit = function() {
                      if (validateForm(null)) {
                        originalSubmit.call(this);
                      }
                    };
                    
                    // Attach multiple event listeners to catch all submission attempts
                    form.addEventListener('submit', validateForm, true); // Capture phase
                    form.addEventListener('submit', validateForm, false); // Bubble phase
                    
                    // Additional click handler on submit button
                    var submitBtn = document.getElementById('recaptcha_4c9b8b75fc0b1e19505d18dac0e1a6ab');
                    if (submitBtn) {
                      submitBtn.addEventListener('click', function(e) {
                        if (!form.checkValidity()) {
                          e.preventDefault();
                          e.stopPropagation();
                          e.stopImmediatePropagation();
                          form.reportValidity();
                          return false;
                        }
                      }, true);
                    }
                  }
                  
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', attachValidation);
                  } else {
                    attachValidation();
                  }
                  
                  // Also try to attach after a delay to ensure it runs after Infusionsoft scripts
                  setTimeout(attachValidation, 1000);
                })();
              `}
            </Script>
          </div>

          <div className={styles.privacy}>
            <p>
              We respect your privacy. Partner information is used only for referral tracking, commission payouts, and challenge-related communication.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
