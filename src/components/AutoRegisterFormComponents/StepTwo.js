import React, { useState } from "react";

const StepTwo = ({ formData, setFormData, isFormValid, content }) => {
  const { companyName, companyAddress, nip, position, acceptedTerms } = formData;
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (e) => {
    setFormData(prev => ({
      ...prev,
      acceptedTerms: e.target.checked
    }));
  };

  const handleClick = (site) => (e) => {
    e.preventDefault();
    // TODO: Add navigation to the Terms of Service site
    window.open('/' + site, '_blank');
  };

  const handleNipChange = (e) => {
    const value = e.target.value;
    const digits = value.replace(/[^0-9]/g, '');
    
    // Check if the input doesn't exceed 10 digits
    if (digits.length <= 10) {
      // Allow digits, hyphens and spaces
      const filteredValue = value.replace(/[^0-9\-\s]/g, '');
      handleInputChange('nip', filteredValue);
    }
  };

  return (
    <form style={styles.form}>
      <div style={styles.inputContainer}>
        <div style={styles.label}>
          {content?.fields?.companyName?.label || "Nazwa firmy"}
          {content?.fields?.companyName?.required && <span style={styles.asterisk}>*</span>}
        </div>
        <input
          type="text"
          placeholder={content?.fields?.companyName?.placeholder || "Wpisz nazwę firmy"}
          id="company-name-input"
          value={companyName || ""}
          onChange={(e) => handleInputChange('companyName', e.target.value)}
          required={content?.fields?.companyName?.required}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.label}>
          {content?.fields?.companyAddress?.label || "Adres firmy"}
          {content?.fields?.companyAddress?.required && <span style={styles.asterisk}>*</span>}
        </div>
        <input
          type="text"
          placeholder={content?.fields?.companyAddress?.placeholder || "Wpisz adres firmy"}
          id="company-address-input"
          value={companyAddress || ""}
          onChange={(e) => handleInputChange('companyAddress', e.target.value)}
          required={content?.fields?.companyAddress?.required}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.label}>
          {content?.fields?.nip?.label || "NIP"}
          {content?.fields?.nip?.required && <span style={styles.asterisk}>*</span>}
        </div>
        <input
          type="text"
          placeholder={content?.fields?.nip?.placeholder || "Wpisz NIP"}
          id="nip-input"
          value={nip || ""}
          onChange={handleNipChange}
          required={content?.fields?.nip?.required}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.label}>
          {content?.fields?.position?.label || "Twoje stanowisko w firmie"}
          {content?.fields?.position?.required && <span style={styles.asterisk}>*</span>}
        </div>
        <input
          type="text"
          placeholder={content?.fields?.position?.placeholder || "Przedstaw się nam :)"}
          id="position-input"
          value={position || ""}
          onChange={(e) => handleInputChange('position', e.target.value)}
          required={content?.fields?.position?.required}
          style={styles.input}
        />
      </div>
      <div style={styles.checkboxContainer}>
        <label style={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={acceptedTerms || false}
            onChange={handleCheckboxChange}
            style={styles.checkbox}
          />
          <span style={styles.checkboxText}>
            {content?.terms?.text || "Akceptuję"}{" "}
            <a 
              href="/regulamin" 
              onClick={handleClick('regulamin')}
              style={hoveredLink === 'regulamin' ? styles.linkHover : styles.link}
              onMouseEnter={() => setHoveredLink('regulamin')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {content?.terms?.regulations || "Regulamin"}
            </a>{" "}{content?.terms?.and || "oraz"}{" "}
            <a 
              href="/polityka-prywatnosci" 
              onClick={handleClick('polityka-prywatnosci')}
              style={hoveredLink === 'polityka' ? styles.linkHover : styles.link}
              onMouseEnter={() => setHoveredLink('polityka')}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {content?.terms?.privacyPolicy || "Politykę prywatności"}
            </a>
            {content?.terms?.end || "."}
          </span>
        </label>
      </div>
    </form>
  );
};

const styles = {
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    marginTop: "20px",
    width: '100%'
  },
  inputContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
  },
  label: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#333"
  },
  input: {
    width: '100%',
    padding: "12px",
    fontSize: "16px",
    border: "1px solid #CCDCFC",
    color: '#A6ADBD',
    borderRadius: "20px",
    height: "40px",
  },
  asterisk: {
    color: 'red',
    marginLeft: '3px'
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginTop: '-5px'
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    cursor: 'pointer',
    fontSize: '14px',
    color: '#333',
    lineHeight: '1.4'
  },
  checkbox: {
    margin: '0',
    cursor: 'pointer'
  },
  checkboxText: {
    flex: '1'
  },
  link: {
    color: '#407EF9',
    fontSize: '14px',
    textDecoration: 'underline',
    fontWeight: '500',
    transition: 'color 0.2s ease'
  },
  linkHover: {
    color: '#2A58B5',
    fontSize: '14px',
    textDecoration: 'underline',
    fontWeight: '500',
    transition: 'color 0.2s ease'
  }
};

export default StepTwo;
