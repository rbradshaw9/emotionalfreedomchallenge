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
          <p className="v2-subhead">
            Thanks for taking the next step. This page is for invited partners to complete registration for The Emotional Freedom Challenge.
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
          <ul className="v2-list v2-checklist" style={{ marginBottom: '32px' }}>
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
              id="inf_form_4c9b8b75fc0b1e19505d18dac0e1a6ab"
              method="POST"
            >
              <input name="inf_form_xid" type="hidden" value="4c9b8b75fc0b1e19505d18dac0e1a6ab" />
              <input name="inf_form_name" type="hidden" value="Emotional Freedom Challenge&#xa;Referral Sign-up submitted" />
              <input name="infusionsoft_version" type="hidden" value="1.70.0.905848" />

              <div className="section-title">
                <span>Part 1 - Contact Information</span>
              </div>

              <div className="v2-form-group">
                <input id="inf_field_FirstName" name="inf_field_FirstName" placeholder=" " type="text" />
                <label htmlFor="inf_field_FirstName">First Name *</label>
              </div>

              <div className="v2-form-group">
                <input id="inf_field_LastName" name="inf_field_LastName" placeholder=" " type="text" />
                <label htmlFor="inf_field_LastName">Last Name *</label>
              </div>

              <div className="v2-form-group">
                <input id="inf_field_Email" name="inf_field_Email" placeholder=" " type="text" />
                <label htmlFor="inf_field_Email">Email Address *</label>
              </div>

              <div className="v2-form-group">
                <input id="inf_field_Phone1" name="inf_field_Phone1" placeholder=" " type="text" />
                <label htmlFor="inf_field_Phone1">Phone</label>
              </div>

              <div className="section-title">
                <span>Part 2 - Where To Send Commissions</span>
              </div>

              <div className="v2-form-group">
                <input id="inf_custom_PayPalEmail" name="inf_custom_PayPalEmail" placeholder=" " type="text" />
                <label htmlFor="inf_custom_PayPalEmail">PayPal Email *</label>
              </div>
              <p className="v2-field-hint" style={{ marginTop: '-12px', marginBottom: '20px' }}>
                We pay commissions via PayPal. No account?{' '}
                <a href="https://paypal.com" target="_blank" rel="noopener noreferrer">Create one at paypal.com</a>.
              </p>

              <div style={{ marginBottom: '20px', padding: '12px 16px', background: 'var(--v2-bg-muted)', borderRadius: '8px', fontSize: '14px', lineHeight: '1.5' }}>
                <strong>Creating your partner login:</strong> These credentials give you access to your personal partner dashboard where you can view referrals and track commissions.
              </div>

              <div className="v2-form-group">
                <input id="inf_other_Username" name="inf_other_Username" placeholder=" " type="text" />
                <label htmlFor="inf_other_Username">Username *</label>
              </div>

              <div className="v2-form-group">
                <input id="inf_other_Password" name="inf_other_Password" placeholder=" " type="password" />
                <label htmlFor="inf_other_Password">Password *</label>
              </div>
              <p className="v2-field-hint" style={{ marginTop: '-12px', marginBottom: '20px' }}>
                Must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number.
              </p>

              <div className="v2-form-group">
                <input id="inf_other_RetypePassword" name="inf_other_RetypePassword" placeholder=" " type="password" />
                <label htmlFor="inf_other_RetypePassword">Confirm Password *</label>
              </div>

              <div className="infusion-field" style={{ display: 'none' }}>
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

              {/* Validation error display — populated by vanilla JS below */}
              <p id="pw-error" style={{ color: '#c0392b', fontSize: '14px', marginBottom: '16px', fontWeight: 500, display: 'none' }}></p>

              <div className="infusion-submit" style={{ marginTop: '24px' }}>
                {/* Real reCAPTCHA button — hidden, triggered programmatically after validation */}
                <button className="infusion-recaptcha" id="recaptcha_4c9b8b75fc0b1e19505d18dac0e1a6ab" type="submit" style={{ display: 'none' }}>
                  Sign Me Up!
                </button>
                {/* Visible button — validates then clicks the real button */}
                <button id="partner-submit-visible" type="button" className="v2-btn v2-btn-primary">
                  Sign Me Up!
                </button>
              </div>

              <input type="text" name="inf-sbt" style={{ display: 'none' }} />
            </form>

            <Script src="https://bl843.infusionsoft.app/app/webTracking/getTrackingCode" strategy="afterInteractive" />
            <Script src="https://bl843.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.905848-hf-202602232108" strategy="afterInteractive" />
            <Script src="https://bl843.infusionsoft.com/resources/external/recaptcha/production/enterpriseRecaptcha.js?b=1.70.0.905848-hf-202602232108" strategy="afterInteractive" />
            <Script src="https://bl843.infusionsoft.com/app/timezone/timezoneInputJs?xid=4c9b8b75fc0b1e19505d18dac0e1a6ab" strategy="afterInteractive" />
            <Script src="https://bl843.infusionsoft.com/js/jquery/jquery-3.3.1.js" strategy="afterInteractive" />
            <Script src="https://bl843.infusionsoft.app/app/webform/overwriteRefererJs" strategy="afterInteractive" />

            {/* Client-side validation — our button validates, then clicks the hidden reCAPTCHA button */}
            <Script id="partner-form-validation" strategy="afterInteractive">{`
              (function() {
                var visibleBtn = document.getElementById('partner-submit-visible');
                var realBtn = document.getElementById('recaptcha_4c9b8b75fc0b1e19505d18dac0e1a6ab');
                if (!visibleBtn || !realBtn) return;
                var errorEl = document.getElementById('pw-error');

                var required = [
                  { id: 'inf_field_FirstName', label: 'First Name' },
                  { id: 'inf_field_LastName', label: 'Last Name' },
                  { id: 'inf_field_Email', label: 'Email Address' },
                  { id: 'inf_custom_PayPalEmail', label: 'PayPal Email' },
                  { id: 'inf_other_Username', label: 'Username' },
                  { id: 'inf_other_Password', label: 'Password' },
                  { id: 'inf_other_RetypePassword', label: 'Confirm Password' }
                ];

                function showError(msg, scrollTo) {
                  errorEl.textContent = '\\u26a0 ' + msg;
                  errorEl.style.display = 'block';
                  if (scrollTo) {
                    scrollTo.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    scrollTo.focus();
                  }
                }

                visibleBtn.addEventListener('click', function() {
                  if (errorEl) errorEl.style.display = 'none';

                  for (var i = 0; i < required.length; i++) {
                    var el = document.getElementById(required[i].id);
                    if (!el || !el.value.trim()) {
                      showError(required[i].label + ' is required.', el);
                      return;
                    }
                  }

                  var email = document.getElementById('inf_field_Email').value.trim();
                  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
                    showError('Please enter a valid email address.', document.getElementById('inf_field_Email'));
                    return;
                  }

                  var paypal = document.getElementById('inf_custom_PayPalEmail').value.trim();
                  if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(paypal)) {
                    showError('Please enter a valid PayPal email address.', document.getElementById('inf_custom_PayPalEmail'));
                    return;
                  }

                  var pw = document.getElementById('inf_other_Password').value;
                  if (pw.length < 8) { showError('Password must be at least 8 characters.', document.getElementById('inf_other_Password')); return; }
                  if (!/[A-Z]/.test(pw)) { showError('Password must include at least one uppercase letter.', document.getElementById('inf_other_Password')); return; }
                  if (!/[a-z]/.test(pw)) { showError('Password must include at least one lowercase letter.', document.getElementById('inf_other_Password')); return; }
                  if (!/[0-9]/.test(pw)) { showError('Password must include at least one number.', document.getElementById('inf_other_Password')); return; }

                  var cpw = document.getElementById('inf_other_RetypePassword').value;
                  if (pw !== cpw) { showError('Passwords do not match. Please try again.', document.getElementById('inf_other_RetypePassword')); return; }

                  // All valid — trigger the hidden reCAPTCHA button
                  realBtn.click();
                });
              })();
            `}</Script>
          </div>

          <p className="v2-body v2-text-center" style={{ marginTop: '24px', color: 'var(--v2-muted)', fontSize: '14px' }}>
            We respect your privacy. Partner information is used only for referral tracking, commission payouts, and challenge-related communication.
          </p>
        </div>
      </section>
    </>
  );
}
