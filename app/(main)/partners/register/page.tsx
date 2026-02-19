import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Partner Registration - The Emotional Freedom Challenge',
  description: 'Complete your partner registration for The Emotional Freedom Challenge. Secure partner dashboard access with referral tracking and commission management.',
};

export default function PartnerRegister() {
  return (
    <>
      <section className="v2-hero">
        <div className="v2-container--md">
          <p className="v2-kicker">Partner Program</p>
          <h1 className="v2-h1">Partner Registration</h1>
          <p className="v2-subhead" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Thanks for taking the next step. This page is for invited partners to complete registration for the Emotional Freedom Challenge.
          </p>
        </div>
      </section>

      <section className="v2-section v2-section-muted">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '24px' }}>What This Registration Includes</h2>
          <p className="v2-body">
            To ensure accurate referral tracking and timely commission payments, we ask for detailed partner information. This is standard for any professional referral program.
          </p>
          <p className="v2-body">
            You&apos;ll provide contact details, PayPal payment information, and account credentials for secure access to your partner dashboard.
          </p>
          <p className="v2-body">
            We know this requires more detail than a typical signup. All information is encrypted, stored securely, and used solely for partnership administration and tax compliance.
          </p>
          <p className="v2-body" style={{ fontWeight: 600 }}>
            Your privacy matters to us. We never share partner information with third parties.
          </p>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container--md">
          <h2 className="v2-h2" style={{ marginBottom: '16px' }}>What Happens Next</h2>
          <p className="v2-body">Once you complete this registration:</p>
          <ul className="v2-checklist" style={{ marginBottom: '32px' }}>
            <li><strong>Immediate confirmation</strong> — You&apos;ll be registered as an official referral partner</li>
            <li><strong>Within 1 business day</strong> — We&apos;ll send your unique referral link</li>
            <li><strong>Partner resources</strong> — You&apos;ll receive ready-to-share email and social copy</li>
            <li><strong>No pressure</strong> — Share when and how it feels right for your audience</li>
          </ul>
          <p className="v2-body">Questions? Our team is here to support you every step of the way.</p>
        </div>
      </section>

      <section className="v2-section v2-section-muted">
        <div className="v2-container--sm">
          <div style={{ background: '#fff', borderRadius: '18px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
            <form
              acceptCharset="UTF-8"
              action="https://bl843.infusionsoft.com/app/form/process/4c9b8b75fc0b1e19505d18dac0e1a6ab"
              className="infusion-form"
              id="inf_form_4c9b8b75fc0b1e19505d18dac0e1a6ab_v2"
              method="POST"
            >
              <input name="inf_form_xid" type="hidden" value="4c9b8b75fc0b1e19505d18dac0e1a6ab" />
              <input name="inf_form_name" type="hidden" value="Emotional Freedom Challenge&#xa;Referral Sign-up submitted" />
              <input name="infusionsoft_version" type="hidden" value="1.70.0.902929" />

              <div className="section-title">
                <span>Part 1 - Contact Information</span>
              </div>

              <div className="v2-form-group">
                <input id="inf_field_FirstName_pr" name="inf_field_FirstName" placeholder=" " type="text" required autoComplete="given-name" />
                <label htmlFor="inf_field_FirstName_pr">First Name *</label>
              </div>

              <div className="v2-form-group">
                <input id="inf_field_LastName_pr" name="inf_field_LastName" placeholder=" " type="text" required autoComplete="family-name" />
                <label htmlFor="inf_field_LastName_pr">Last Name *</label>
              </div>

              <div className="v2-form-group">
                <input id="inf_field_Email_pr" name="inf_field_Email" placeholder=" " type="email" required autoComplete="email" />
                <label htmlFor="inf_field_Email_pr">Email Address *</label>
              </div>

              <div className="v2-form-group">
                <input id="inf_field_Phone1_pr" name="inf_field_Phone1" placeholder=" " type="tel" autoComplete="tel" />
                <label htmlFor="inf_field_Phone1_pr">Phone</label>
              </div>

              <div className="section-title">
                <span>Part 2 - Where To Send Commissions</span>
              </div>

              <div className="v2-form-group">
                <input id="inf_custom_PayPalEmail_pr" name="inf_custom_PayPalEmail" placeholder=" " type="email" required autoComplete="email" />
                <label htmlFor="inf_custom_PayPalEmail_pr">PayPal Email *</label>
              </div>
              <p className="v2-field-hint" style={{ marginTop: '-12px', marginBottom: '20px' }}>
                We pay commissions via PayPal. No account?{' '}
                <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">Create one at paypal.com</a>.
              </p>

              <div className="v2-form-group">
                <input id="inf_other_Username_pr" name="inf_other_Username" placeholder=" " type="text" required autoComplete="username" />
                <label htmlFor="inf_other_Username_pr">Username *</label>
              </div>

              <div className="v2-form-group">
                <input
                  id="inf_other_Password_pr"
                  name="inf_other_Password"
                  placeholder=" "
                  type="password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                />
                <label htmlFor="inf_other_Password_pr">Password *</label>
              </div>
              <p className="v2-field-hint" style={{ marginTop: '-12px', marginBottom: '20px' }}>
                At least 8 characters — include uppercase, lowercase, and a number.
              </p>

              <div className="v2-form-group">
                <input
                  id="inf_other_RetypePassword_pr"
                  name="inf_other_RetypePassword"
                  placeholder=" "
                  type="password"
                  required
                  autoComplete="new-password"
                />
                <label htmlFor="inf_other_RetypePassword_pr">Confirm Password *</label>
              </div>

              <div className="infusion-field" style={{ display: 'none' }}>
                <div className="infusion-radio">
                  <div className="options-container">
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnLead_1_pr" name="inf_other_NotifyOnLead" type="radio" value="1" />
                      <label htmlFor="inf_other_NotifyOnLead_1_pr">Yes</label>
                    </span>
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnLead_0_pr" name="inf_other_NotifyOnLead" type="radio" value="0" defaultChecked />
                      <label htmlFor="inf_other_NotifyOnLead_0_pr">No</label>
                    </span>
                  </div>
                </div>
              </div>

              <div className="infusion-field" style={{ display: 'none' }}>
                <div className="infusion-radio">
                  <div className="options-container">
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnSale_1_pr" name="inf_other_NotifyOnSale" type="radio" value="1" />
                      <label htmlFor="inf_other_NotifyOnSale_1_pr">Yes</label>
                    </span>
                    <span className="infusion-option">
                      <input id="inf_other_NotifyOnSale_0_pr" name="inf_other_NotifyOnSale" type="radio" value="0" defaultChecked />
                      <label htmlFor="inf_other_NotifyOnSale_0_pr">No</label>
                    </span>
                  </div>
                </div>
              </div>

              <div className="infusion-submit" style={{ marginTop: '24px' }}>
                <button className="infusion-recaptcha v2-btn v2-btn-primary" id="recaptcha_partner_register_v2" type="submit">
                  Complete Registration
                </button>
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

          <p className="v2-body v2-text-center" style={{ marginTop: '24px', color: 'var(--v2-muted)', fontSize: '14px' }}>
            We respect your privacy. Partner information is used only for referral tracking, commission payouts, and challenge-related communication.
          </p>
        </div>
      </section>
    </>
  );
}
