'use client';

import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';

export default function PartnerRegisterForm() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Override form.submit so that when Infusionsoft's reCAPTCHA script calls
  // form.submit() directly (bypassing the submit event), our validation still runs.
  useEffect(() => {
    if (!formRef.current) return;
    const form = formRef.current;
    const nativeSubmit = HTMLFormElement.prototype.submit.bind(form);

    form.submit = function () {
      setPasswordError('');
      if (password !== confirmPassword) {
        setPasswordError('Passwords do not match. Please try again.');
        return;
      }
      if (password.length < 8) {
        setPasswordError('Password must be at least 8 characters.');
        return;
      }
      setIsSubmitting(true);
      nativeSubmit();
    };
  }, [password, confirmPassword]);

  // Fallback for browsers that do fire the submit event
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    setPasswordError('');

    if (password !== confirmPassword) {
      e.preventDefault();
      setPasswordError('Passwords do not match. Please try again.');
      return;
    }

    if (password.length < 8) {
      e.preventDefault();
      setPasswordError('Password must be at least 8 characters.');
      return;
    }

    setIsSubmitting(true);
  };

  return (
    <div style={{ background: '#fff', borderRadius: '18px', padding: '40px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}>
      <form
        ref={formRef}
        acceptCharset="UTF-8"
        action="https://bl843.infusionsoft.com/app/form/process/4c9b8b75fc0b1e19505d18dac0e1a6ab"
        className="infusion-form"
        id="inf_form_4c9b8b75fc0b1e19505d18dac0e1a6ab"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input name="inf_form_xid" type="hidden" value="4c9b8b75fc0b1e19505d18dac0e1a6ab" />
        <input name="inf_form_name" type="hidden" value="Emotional Freedom Challenge&#xa;Referral Sign-up submitted" />
        <input name="infusionsoft_version" type="hidden" value="1.70.0.905848" />

        {/* Part 1 */}
        <div className="section-title">
          <span>Part 1 - Contact Information</span>
        </div>

        <div className="v2-form-group">
          <input id="inf_field_FirstName" name="inf_field_FirstName" placeholder=" " type="text" required autoComplete="given-name" />
          <label htmlFor="inf_field_FirstName">First Name *</label>
        </div>

        <div className="v2-form-group">
          <input id="inf_field_LastName" name="inf_field_LastName" placeholder=" " type="text" required autoComplete="family-name" />
          <label htmlFor="inf_field_LastName">Last Name *</label>
        </div>

        <div className="v2-form-group">
          <input id="inf_field_Email" name="inf_field_Email" placeholder=" " type="email" required autoComplete="email" />
          <label htmlFor="inf_field_Email">Email Address *</label>
        </div>

        <div className="v2-form-group">
          <input id="inf_field_Phone1" name="inf_field_Phone1" placeholder=" " type="tel" autoComplete="tel" />
          <label htmlFor="inf_field_Phone1">Phone</label>
        </div>

        {/* Part 2 */}
        <div className="section-title">
          <span>Part 2 - Where To Send Commissions</span>
        </div>

        <div className="v2-form-group">
          <input id="inf_custom_PayPalEmail" name="inf_custom_PayPalEmail" placeholder=" " type="email" required autoComplete="email" />
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
          <input id="inf_other_Username" name="inf_other_Username" placeholder=" " type="text" required autoComplete="username" />
          <label htmlFor="inf_other_Username">Username *</label>
        </div>

        <div className="v2-form-group">
          <input
            id="inf_other_Password"
            name="inf_other_Password"
            placeholder=" "
            type="password"
            required
            minLength={8}
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="inf_other_Password">Password *</label>
        </div>
        <p className="v2-field-hint" style={{ marginTop: '-12px', marginBottom: '20px' }}>
          At least 8 characters — include uppercase, lowercase, and a number.
        </p>

        <div className="v2-form-group">
          <input
            id="inf_other_RetypePassword"
            name="inf_other_RetypePassword"
            placeholder=" "
            type="password"
            required
            autoComplete="new-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="inf_other_RetypePassword">Confirm Password *</label>
        </div>

        {passwordError && (
          <p style={{ color: '#c0392b', fontSize: '14px', marginTop: '-12px', marginBottom: '16px', fontWeight: 500 }}>
            ⚠ {passwordError}
          </p>
        )}

        {/* Hidden radio fields — defaults set, not shown to user */}
        <div style={{ display: 'none' }}>
          <input id="inf_other_NotifyOnLead_1" name="inf_other_NotifyOnLead" type="radio" value="1" />
          <input id="inf_other_NotifyOnLead_0" name="inf_other_NotifyOnLead" type="radio" value="0" defaultChecked />
          <input id="inf_other_NotifyOnSale_1" name="inf_other_NotifyOnSale" type="radio" value="1" />
          <input id="inf_other_NotifyOnSale_0" name="inf_other_NotifyOnSale" type="radio" value="0" defaultChecked />
        </div>

        <div className="infusion-submit" style={{ marginTop: '24px' }}>
          <button
            className="infusion-recaptcha v2-btn v2-btn-primary"
            id="recaptcha_4c9b8b75fc0b1e19505d18dac0e1a6ab"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting…' : 'Sign Me Up!'}
          </button>
        </div>

        <input type="text" name="inf-sbt" style={{ display: 'none' }} />
      </form>

      <Script src="https://bl843.infusionsoft.app/app/webTracking/getTrackingCode" strategy="afterInteractive" />
      <Script src="https://bl843.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.905848-hf-202602232108" strategy="afterInteractive" />
      <Script src="https://bl843.infusionsoft.com/resources/external/recaptcha/production/enterpriseRecaptcha.js?b=1.70.0.905848-hf-202602232108" strategy="afterInteractive" />
      <Script src="https://bl843.infusionsoft.com/app/timezone/timezoneInputJs?xid=4c9b8b75fc0b1e19505d18dac0e1a6ab" strategy="afterInteractive" />
      <Script src="https://bl843.infusionsoft.app/app/webform/overwriteRefererJs" strategy="afterInteractive" />
    </div>
  );
}
