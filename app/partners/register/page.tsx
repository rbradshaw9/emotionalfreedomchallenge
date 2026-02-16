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
            To properly track referrals and issue commission payments, we need to collect some standard partner information.
          </p>
          <p>
            This includes contact details, payment information, and basic account credentials used by our referral system.
          </p>
          <p>
            We understand this is more detailed than a typical sign-up. This information is required for accurate tracking and compliance, and is handled securely.
          </p>
          <p className={styles.reassurance}>
            Non-U.S. partners may leave the SSN/TIN field blank.
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
            <li>You'll be officially registered as a referral partner</li>
            <li>We'll follow up with your unique referral link</li>
            <li>You'll receive ready-to-use email and social copy</li>
            <li>There is no obligation to promote</li>
          </ul>
          <p>
            If you have any questions, our team will be happy to help.
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
              
              <div className="section-title">
                <span>Part 2 - Where To Send Commissions</span>
              </div>
              
              <div className="info-note">
                <div>*We make commission payments via PayPal. If you do not have a PayPal account, please visit https://paypal.com and create an account.</div>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_custom_PayPalEmail">PayPal Email *</label>
                <input id="inf_custom_PayPalEmail" name="inf_custom_PayPalEmail" placeholder="PayPal Email *" type="text" />
              </div>
              
              <div className="section-title">
                <span>Part 3 - Referral Partner Registration</span>
              </div>
              
              <div className="infusion-field">
                <label htmlFor="inf_field_SSN">SSN/TIN</label>
                <input id="inf_field_SSN" name="inf_field_SSN" placeholder="SSN/TIN" type="text" />
              </div>
              
              <div className="info-note">
                <div>
                  <i>
                    <span>We required your SSN/TIN for proper tax documentation. If you live outside the US, you can leave this blank.</span>
                  </i>
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
              
              {/* Hidden fields - not displayed to users */}
              <div className="infusion-field" style={{ display: 'none' }}>
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
              
              <div className="infusion-field" style={{ display: 'none' }}>
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
              
              <div className="infusion-submit">
                <button className="infusion-recaptcha" id="recaptcha_4c9b8b75fc0b1e19505d18dac0e1a6ab" type="submit">Complete Partner Registration</button>
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
            
            {/* Client-side validation script - must run immediately before form submission */}
            <Script id="partner-form-validation" strategy="beforeInteractive">
              {`
                (function() {
                  function validatePartnerForm(e) {
                    const fields = [
                      { id: 'inf_field_FirstName', name: 'First Name', type: 'text' },
                      { id: 'inf_field_LastName', name: 'Last Name', type: 'text' },
                      { id: 'inf_field_Email', name: 'Email', type: 'email' },
                      { id: 'inf_custom_PayPalEmail', name: 'PayPal Email', type: 'email' },
                      { id: 'inf_other_Username', name: 'Username', type: 'text' },
                      { id: 'inf_other_Password', name: 'Password', type: 'password' },
                      { id: 'inf_other_RetypePassword', name: 'Confirm Password', type: 'password' }
                    ];
                    
                    function validateEmail(email) {
                      var re = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
                      return re.test(String(email).toLowerCase());
                    }
                    
                    function showError(field, message) {
                      var container = field.closest('.infusion-field');
                      if (!container) return;
                      
                      var existingError = container.querySelector('.field-error');
                      if (existingError) existingError.remove();
                      
                      field.classList.add('error');
                      
                      var errorDiv = document.createElement('div');
                      errorDiv.className = 'field-error';
                      errorDiv.textContent = message;
                      container.appendChild(errorDiv);
                    }
                    
                    function clearError(field) {
                      var container = field.closest('.infusion-field');
                      if (!container) return;
                      
                      field.classList.remove('error');
                      var errorDiv = container.querySelector('.field-error');
                      if (errorDiv) errorDiv.remove();
                    }
                    
                    var isValid = true;
                    var firstInvalidField = null;
                    
                    for (var i = 0; i < fields.length; i++) {
                      var fieldConfig = fields[i];
                      var field = document.getElementById(fieldConfig.id);
                      if (field) clearError(field);
                    }
                    
                    for (var i = 0; i < fields.length; i++) {
                      var fieldConfig = fields[i];
                      var field = document.getElementById(fieldConfig.id);
                      if (!field) continue;
                      
                      var value = field.value.trim();
                      
                      if (!value) {
                        showError(field, 'Please enter your ' + fieldConfig.name.toLowerCase() + '.');
                        isValid = false;
                        if (!firstInvalidField) firstInvalidField = field;
                      } else if (fieldConfig.type === 'email' && !validateEmail(value)) {
                        showError(field, 'Please enter a valid email address.');
                        isValid = false;
                        if (!firstInvalidField) firstInvalidField = field;
                      }
                    }
                    
                    var password = document.getElementById('inf_other_Password');
                    var confirmPassword = document.getElementById('inf_other_RetypePassword');
                    
                    if (password && confirmPassword && password.value && confirmPassword.value) {
                      if (password.value !== confirmPassword.value) {
                        showError(confirmPassword, 'Passwords do not match.');
                        isValid = false;
                        if (!firstInvalidField) firstInvalidField = confirmPassword;
                      }
                    }
                    
                    if (!isValid) {
                      if (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation();
                      }
                      
                      if (firstInvalidField) {
                        firstInvalidField.scrollIntoView({ 
                          behavior: 'smooth', 
                          block: 'center' 
                        });
                        
                        setTimeout(function() { firstInvalidField.focus(); }, 300);
                      }
                      
                      return false;
                    }
                    
                    return true;
                  }
                  
                  function attachValidation() {
                    var form = document.getElementById('inf_form_4c9b8b75fc0b1e19505d18dac0e1a6ab');
                    if (!form) {
                      setTimeout(attachValidation, 50);
                      return;
                    }
                    
                    if (form.dataset.validationAttached) return;
                    form.dataset.validationAttached = 'true';
                    
                    // Override form's submit method to intercept programmatic submissions
                    var originalSubmit = form.submit.bind(form);
                    form.submit = function() {
                      if (validatePartnerForm(null)) {
                        originalSubmit();
                      }
                    };
                    
                    // Attach event listener with highest priority (capture phase)
                    form.addEventListener('submit', validatePartnerForm, true);
                    
                    // Also attach in bubble phase as backup
                    form.addEventListener('submit', validatePartnerForm, false);
                    
                    // Attach to clear errors on input
                    var fieldIds = [
                      'inf_field_FirstName', 'inf_field_LastName', 'inf_field_Email',
                      'inf_custom_PayPalEmail', 'inf_other_Username', 
                      'inf_other_Password', 'inf_other_RetypePassword'
                    ];
                    
                    for (var i = 0; i < fieldIds.length; i++) {
                      var field = document.getElementById(fieldIds[i]);
                      if (field) {
                        field.addEventListener('input', function() {
                          var container = this.closest('.infusion-field');
                          if (container) {
                            this.classList.remove('error');
                            var errorDiv = container.querySelector('.field-error');
                            if (errorDiv) errorDiv.remove();
                          }
                        });
                      }
                    }
                  }
                  
                  if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', attachValidation);
                  } else {
                    attachValidation();
                  }
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
