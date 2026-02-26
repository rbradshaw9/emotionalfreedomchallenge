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
          <div className="v2-form-card" style={{ maxWidth: '100%' }}>
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
              <p id="err-first-name" style={{ color: '#c0392b', fontSize: '13px', margin: '-8px 0 14px', fontWeight: 500, display: 'none' }}></p>

              <div className="v2-form-group">
                <input id="inf_field_LastName" name="inf_field_LastName" placeholder=" " type="text" />
                <label htmlFor="inf_field_LastName">Last Name *</label>
              </div>
              <p id="err-last-name" style={{ color: '#c0392b', fontSize: '13px', margin: '-8px 0 14px', fontWeight: 500, display: 'none' }}></p>

              <div className="v2-form-group">
                <input id="inf_field_Email" name="inf_field_Email" placeholder=" " type="text" />
                <label htmlFor="inf_field_Email">Email Address *</label>
              </div>
              <p id="err-email" style={{ color: '#c0392b', fontSize: '13px', margin: '-8px 0 14px', fontWeight: 500, display: 'none' }}></p>

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
              <p id="err-paypal" style={{ color: '#c0392b', fontSize: '13px', margin: '-8px 0 14px', fontWeight: 500, display: 'none' }}></p>

              <div style={{ marginBottom: '20px', padding: '12px 16px', background: 'var(--v2-bg-muted)', borderRadius: '8px', fontSize: '14px', lineHeight: '1.5' }}>
                <strong>Creating your partner login:</strong> These credentials give you access to your personal partner dashboard where you can view referrals and track commissions.
              </div>

              <div className="v2-form-group">
                <input id="inf_other_Username" name="inf_other_Username" placeholder=" " type="text" />
                <label htmlFor="inf_other_Username">Username *</label>
              </div>
              <p id="err-username" style={{ color: '#c0392b', fontSize: '13px', margin: '-8px 0 14px', fontWeight: 500, display: 'none' }}></p>

              <div className="v2-form-group">
                <input id="inf_other_Password" name="inf_other_Password" placeholder=" " type="password" />
                <label htmlFor="inf_other_Password">Password *</label>
              </div>
              <p className="v2-field-hint" style={{ marginTop: '-12px', marginBottom: '20px' }}>
                Must be at least 8 characters and include an uppercase letter, a lowercase letter, and a number.
              </p>
              <p id="err-password" style={{ color: '#c0392b', fontSize: '13px', margin: '-8px 0 14px', fontWeight: 500, display: 'none' }}></p>

              <div className="v2-form-group">
                <input id="inf_other_RetypePassword" name="inf_other_RetypePassword" placeholder=" " type="password" />
                <label htmlFor="inf_other_RetypePassword">Confirm Password *</label>
              </div>
              <p id="err-confirm" style={{ color: '#c0392b', fontSize: '13px', margin: '-8px 0 14px', fontWeight: 500, display: 'none' }}></p>

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

                var ERROR_IDS = ['err-first-name','err-last-name','err-email','err-paypal','err-username','err-password','err-confirm'];
                var FIELD_MAP = {
                  'err-first-name': 'inf_field_FirstName',
                  'err-last-name':  'inf_field_LastName',
                  'err-email':      'inf_field_Email',
                  'err-paypal':     'inf_custom_PayPalEmail',
                  'err-username':   'inf_other_Username',
                  'err-password':   'inf_other_Password',
                  'err-confirm':    'inf_other_RetypePassword'
                };

                function showErr(id, msg) {
                  var el = document.getElementById(id);
                  if (el) { el.textContent = '\\u26a0 ' + msg; el.style.display = 'block'; }
                }
                function clearErr(id) {
                  var el = document.getElementById(id);
                  if (el) { el.textContent = ''; el.style.display = 'none'; }
                }
                function clearAll() { ERROR_IDS.forEach(clearErr); }

                function validatePw(pw) {
                  if (pw.length < 8) return 'Password must be at least 8 characters.';
                  if (!/[A-Z]/.test(pw)) return 'Must include at least one uppercase letter.';
                  if (!/[a-z]/.test(pw)) return 'Must include at least one lowercase letter.';
                  if (!/[0-9]/.test(pw)) return 'Must include at least one number.';
                  return null;
                }

                // Real-time: check match while typing confirm password
                var confirmEl = document.getElementById('inf_other_RetypePassword');
                var passwordEl = document.getElementById('inf_other_Password');
                confirmEl.addEventListener('input', function() {
                  if (!this.value) { clearErr('err-confirm'); return; }
                  if (passwordEl.value !== this.value) showErr('err-confirm', 'Passwords do not match.');
                  else clearErr('err-confirm');
                });
                // Real-time: re-check strength and match while typing password
                passwordEl.addEventListener('input', function() {
                  var pw = this.value;
                  if (!pw) { clearErr('err-password'); clearErr('err-confirm'); return; }
                  var err = validatePw(pw);
                  if (err) showErr('err-password', err); else clearErr('err-password');
                  if (confirmEl.value) {
                    if (pw !== confirmEl.value) showErr('err-confirm', 'Passwords do not match.');
                    else clearErr('err-confirm');
                  }
                });

                visibleBtn.addEventListener('click', function() {
                  clearAll();
                  var hasError = false;

                  function reqField(fieldId, errId, label) {
                    var el = document.getElementById(fieldId);
                    if (!el || !el.value.trim()) { showErr(errId, label + ' is required.'); hasError = true; }
                  }

                  reqField('inf_field_FirstName', 'err-first-name', 'First Name');
                  reqField('inf_field_LastName',  'err-last-name',  'Last Name');

                  var emailVal = document.getElementById('inf_field_Email').value.trim();
                  if (!emailVal) { showErr('err-email', 'Email Address is required.'); hasError = true; }
                  else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(emailVal)) { showErr('err-email', 'Please enter a valid email address.'); hasError = true; }

                  var paypalVal = document.getElementById('inf_custom_PayPalEmail').value.trim();
                  if (!paypalVal) { showErr('err-paypal', 'PayPal Email is required.'); hasError = true; }
                  else if (!/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(paypalVal)) { showErr('err-paypal', 'Please enter a valid PayPal email address.'); hasError = true; }

                  reqField('inf_other_Username', 'err-username', 'Username');

                  var pw = document.getElementById('inf_other_Password').value;
                  if (!pw) { showErr('err-password', 'Password is required.'); hasError = true; }
                  else { var pwErr = validatePw(pw); if (pwErr) { showErr('err-password', pwErr); hasError = true; } }

                  var cpw = document.getElementById('inf_other_RetypePassword').value;
                  if (!cpw) { showErr('err-confirm', 'Please confirm your password.'); hasError = true; }
                  else if (pw && pw !== cpw) { showErr('err-confirm', 'Passwords do not match.'); hasError = true; }

                  if (hasError) {
                    // Scroll to the topmost visible error and focus its field
                    for (var i = 0; i < ERROR_IDS.length; i++) {
                      var errEl = document.getElementById(ERROR_IDS[i]);
                      if (errEl && errEl.style.display !== 'none' && errEl.textContent) {
                        errEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        var fieldEl = document.getElementById(FIELD_MAP[ERROR_IDS[i]]);
                        if (fieldEl) fieldEl.focus();
                        break;
                      }
                    }
                    return;
                  }

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
