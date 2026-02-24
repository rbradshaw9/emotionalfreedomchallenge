'use client';

import { useState } from 'react';
import Script from 'next/script';

export default function RegistrationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
  };

  return (
    <>
      <form
        acceptCharset="UTF-8"
        action="https://bl843.infusionsoft.com/app/form/process/9f8fabd0cb80c3d4232d104b7905ff0f"
        className="infusion-form"
        id="inf_form_9f8fabd0cb80c3d4232d104b7905ff0f"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input name="inf_form_xid" type="hidden" value="9f8fabd0cb80c3d4232d104b7905ff0f" />
        <input name="inf_form_name" type="hidden" value="Registered for EFC" />
        <input name="infusionsoft_version" type="hidden" value="1.70.0.905848" />

        <div className="v2-form-group">
          <input
            id="inf_field_FirstName_v2"
            name="inf_field_FirstName"
            placeholder=" "
            type="text"
            required
            autoComplete="given-name"
          />
          <label htmlFor="inf_field_FirstName_v2">First Name *</label>
        </div>

        <div className="v2-form-group">
          <input
            id="inf_field_Email_v2"
            name="inf_field_Email"
            placeholder=" "
            type="email"
            required
            autoComplete="email"
          />
          <label htmlFor="inf_field_Email_v2">Email Address *</label>
        </div>

        <div className="v2-form-group">
          <input
            id="inf_field_Phone1_v2"
            name="inf_field_Phone1"
            placeholder=" "
            type="tel"
            autoComplete="tel"
          />
          <label htmlFor="inf_field_Phone1_v2">Mobile Phone</label>
        </div>

        <div className="infusion-submit">
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Reserving your spot…' : 'YES! Reserve My Free Spot'}
          </button>
        </div>

        <p className="v2-disclaimer">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          No credit card. No spam. Unsubscribe anytime.
        </p>

        <input type="text" name="inf-sbt" style={{ display: 'none' }} />
      </form>

      <Script
        src="https://bl843.infusionsoft.app/app/webTracking/getTrackingCode"
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
