'use client';

import { useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import styles from '../page.module.css';

export default function RegistrationForm() {
  const [errors, setErrors] = useState({ firstName: '', email: '' });
  const [touched, setTouched] = useState({ firstName: false, email: false });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Use a native capture-phase listener so our handler fires BEFORE Keap's
  // bubble-phase listener that is attached directly to the button element.
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleClick = (e: MouseEvent) => {
      const form = button.closest('form') as HTMLFormElement;
      const firstName = (form.elements.namedItem('inf_field_FirstName') as HTMLInputElement).value.trim();
      const email = (form.elements.namedItem('inf_field_Email') as HTMLInputElement).value.trim();
      const newErrors = { firstName: '', email: '' };
      if (!firstName) newErrors.firstName = 'First name is required';
      if (!email) {
        newErrors.email = 'Email is required';
      } else if (!validateEmail(email)) {
        newErrors.email = 'Please enter a valid email address';
      }
      if (newErrors.firstName || newErrors.email) {
        e.preventDefault();
        e.stopImmediatePropagation();
        setErrors(newErrors);
        setTouched({ firstName: true, email: true });
      }
    };

    // capture: true fires during the capture phase, before any bubble-phase
    // listeners (including the one Keap's script adds directly to the button)
    button.addEventListener('click', handleClick, { capture: true });
    return () => button.removeEventListener('click', handleClick, { capture: true });
  }, []);

  // Secondary fallback for programmatic form.requestSubmit() calls
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const firstName = (form.elements.namedItem('inf_field_FirstName') as HTMLInputElement).value.trim();
    const email = (form.elements.namedItem('inf_field_Email') as HTMLInputElement).value.trim();
    const newErrors = { firstName: '', email: '' };
    if (!firstName) newErrors.firstName = 'First name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (newErrors.firstName || newErrors.email) {
      e.preventDefault();
      e.stopPropagation();
      setErrors(newErrors);
      setTouched({ firstName: true, email: true });
    }
  };

  const handleBlur = (field: 'firstName' | 'email', value: string) => {
    setTouched({ ...touched, [field]: true });

    if (field === 'firstName') {
      setErrors({ ...errors, firstName: !value.trim() ? 'First name is required' : '' });
    } else if (field === 'email') {
      if (!value.trim()) {
        setErrors({ ...errors, email: 'Email is required' });
      } else if (!validateEmail(value)) {
        setErrors({ ...errors, email: 'Please enter a valid email address' });
      } else {
        setErrors({ ...errors, email: '' });
      }
    }
  };

  const handleChange = (field: 'firstName' | 'email', value: string) => {
    if (touched[field]) {
      if (field === 'firstName') {
        setErrors({ ...errors, firstName: !value.trim() ? 'First name is required' : '' });
      } else if (field === 'email') {
        if (!value.trim()) {
          setErrors({ ...errors, email: 'Email is required' });
        } else if (!validateEmail(value)) {
          setErrors({ ...errors, email: 'Please enter a valid email address' });
        } else {
          setErrors({ ...errors, email: '' });
        }
      }
    }
  };

  return (
    <>
      <form 
        acceptCharset="UTF-8" 
        action="https://bl843.infusionsoft.com/app/form/process/9f8fabd0cb80c3d4232d104b7905ff0f" 
        className={styles.form}
        id="inf_form_9f8fabd0cb80c3d4232d104b7905ff0f" 
        method="POST"
        onSubmit={handleSubmit}
        noValidate
      >
        <input name="inf_form_xid" type="hidden" value="9f8fabd0cb80c3d4232d104b7905ff0f" />
        <input name="inf_form_name" type="hidden" value="Registered for EFC" />
        <input name="infusionsoft_version" type="hidden" value="1.70.0.902929" />
        
        <div className={styles.formGroup}>
          <label htmlFor="inf_field_FirstName">
            First Name *
          </label>
          <input
            id="inf_field_FirstName"
            name="inf_field_FirstName"
            placeholder="Enter your first name"
            type="text"
            onBlur={(e) => handleBlur('firstName', e.target.value)}
            onChange={(e) => handleChange('firstName', e.target.value)}
            aria-invalid={touched.firstName && errors.firstName ? 'true' : 'false'}
            aria-describedby={errors.firstName ? 'firstName-error' : undefined}
          />
          {touched.firstName && errors.firstName && (
            <span id="firstName-error" className={styles.errorMessage} role="alert">
              {errors.firstName}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="inf_field_Email">
            Email *
          </label>
          <input
            id="inf_field_Email"
            name="inf_field_Email"
            placeholder="your@email.com"
            type="email"
            onBlur={(e) => handleBlur('email', e.target.value)}
            onChange={(e) => handleChange('email', e.target.value)}
            aria-invalid={touched.email && errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {touched.email && errors.email && (
            <span id="email-error" className={styles.errorMessage} role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <button 
          ref={buttonRef}
          type="submit" 
          className="button button-primary button-lg infusion-recaptcha" 
          id="recaptcha_9f8fabd0cb80c3d4232d104b7905ff0f"
        >
          Reserve Your Free Spot
        </button>

        <p className={styles.disclaimer}>
          Your privacy is respected. Your information will never be shared.
        </p>

        <input type="text" name="inf-sbt" style={{ display: 'none' }} />
      </form>

      <Script 
        src="https://bl843.infusionsoft.app/app/webTracking/getTrackingCode"
        strategy="lazyOnload"
      />
      <Script 
        src="https://bl843.infusionsoft.com/resources/external/recaptcha/production/recaptcha.js?b=1.70.0.902929-hf-202602131028"
        strategy="lazyOnload"
      />
      <Script 
        src="https://bl843.infusionsoft.com/resources/external/recaptcha/production/enterpriseRecaptcha.js?b=1.70.0.902929-hf-202602131028"
        strategy="lazyOnload"
      />
      <Script 
        src="https://bl843.infusionsoft.com/app/timezone/timezoneInputJs?xid=9f8fabd0cb80c3d4232d104b7905ff0f"
        strategy="lazyOnload"
      />
      <Script 
        src="https://bl843.infusionsoft.com/js/jquery/jquery-3.3.1.js"
        strategy="lazyOnload"
      />
      <Script 
        src="https://bl843.infusionsoft.app/app/webform/overwriteRefererJs"
        strategy="lazyOnload"
      />
    </>
  );
}
