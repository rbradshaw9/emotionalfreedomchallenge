'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import styles from '../page.module.css';

export default function RegistrationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [firstNameError, setFirstNameError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    // Keap's reCAPTCHA script calls form.submit() directly, which skips
    // browser constraint validation entirely. We patch the form's submit
    // method so our validation runs no matter how submission is triggered.
    const nativeSubmit = form.submit.bind(form);
    form.submit = function () {
      const firstName = (form.elements.namedItem('inf_field_FirstName') as HTMLInputElement).value.trim();
      const email = (form.elements.namedItem('inf_field_Email') as HTMLInputElement).value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      const fnErr = firstName ? '' : 'First name is required';
      const emErr = !email ? 'Email is required' : !emailRegex.test(email) ? 'Please enter a valid email address' : '';

      setFirstNameError(fnErr);
      setEmailError(emErr);

      if (fnErr || emErr) return; // abort — errors shown in UI
      nativeSubmit();
    };
  }, []);

  return (
    <>
      <form
        ref={formRef}
        acceptCharset="UTF-8"
        action="https://bl843.infusionsoft.com/app/form/process/9f8fabd0cb80c3d4232d104b7905ff0f"
        className={`infusion-form ${styles.form}`}
        id="inf_form_9f8fabd0cb80c3d4232d104b7905ff0f"
        method="POST"
      >
        <input name="inf_form_xid" type="hidden" value="9f8fabd0cb80c3d4232d104b7905ff0f" />
        <input name="inf_form_name" type="hidden" value="Registered for EFC" />
        <input name="infusionsoft_version" type="hidden" value="1.70.0.902929" />

        <div className={styles.formGroup}>
          <label htmlFor="inf_field_FirstName">First Name *</label>
          <input
            id="inf_field_FirstName"
            name="inf_field_FirstName"
            placeholder="Enter your first name"
            type="text"
            aria-invalid={firstNameError ? 'true' : 'false'}
            onChange={() => setFirstNameError('')}
          />
          {firstNameError && (
            <span className={styles.errorMessage} role="alert">{firstNameError}</span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="inf_field_Email">Email *</label>
          <input
            id="inf_field_Email"
            name="inf_field_Email"
            placeholder="your@email.com"
            type="text"
            aria-invalid={emailError ? 'true' : 'false'}
            onChange={() => setEmailError('')}
          />
          {emailError && (
            <span className={styles.errorMessage} role="alert">{emailError}</span>
          )}
        </div>

        <div className="infusion-submit">
          <button
            type="submit"
            className="button button-primary button-lg infusion-recaptcha"
            id="recaptcha_9f8fabd0cb80c3d4232d104b7905ff0f"
          >
            Reserve Your Free Spot
          </button>
        </div>

        <p className={styles.disclaimer}>
          Your privacy is respected. Your information will never be shared.
        </p>

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
        src="https://bl843.infusionsoft.com/app/timezone/timezoneInputJs?xid=9f8fabd0cb80c3d4232d104b7905ff0f"
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
    </>
  );
}
