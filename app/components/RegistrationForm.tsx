import Script from 'next/script';
import styles from '../page.module.css';

export default function RegistrationForm() {
  return (
    <>
      <form
        acceptCharset="UTF-8"
        action="https://bl843.infusionsoft.com/app/form/process/9f8fabd0cb80c3d4232d104b7905ff0f"
        className={`infusion-form ${styles.form}`}
        id="inf_form_9f8fabd0cb80c3d4232d104b7905ff0f"
        method="POST"
      >
        <input name="inf_form_xid" type="hidden" value="9f8fabd0cb80c3d4232d104b7905ff0f" />
        <input name="inf_form_name" type="hidden" value="Registered for EFC" />
        <input name="infusionsoft_version" type="hidden" value="1.70.0.902929" />

        <div className="infusion-field">
          <label htmlFor="inf_field_FirstName">First Name *</label>
          <input
            id="inf_field_FirstName"
            name="inf_field_FirstName"
            placeholder="First Name *"
            type="text"
          />
        </div>

        <div className="infusion-field">
          <label htmlFor="inf_field_Email">Email *</label>
          <input
            id="inf_field_Email"
            name="inf_field_Email"
            placeholder="Email *"
            type="text"
          />
        </div>

        <div><div>&nbsp;</div></div>

        <div className="infusion-submit">
          <button type="submit" className="button button-primary button-lg">
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
