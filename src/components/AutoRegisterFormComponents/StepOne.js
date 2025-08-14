import React from "react";

const StepOne = ({ formData, setFormData, isFormValid, content }) => {
  const { name = "", surname = "", email = "", phone = "" } = formData;

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <form style={styles.form}>
      <div style={styles.inputContainer}>
        <div style={styles.label}>
          {content?.fields?.name?.label || "Imię"}
          {content?.fields?.name?.required && <span style={styles.asterisk}>*</span>}
        </div>
        <input
          type="text"
          placeholder={content?.fields?.name?.placeholder || "Wpisz imię"}
          id="name-input"
          value={name}
          onChange={(e) => handleInputChange('name', e.target.value)}
          required={content?.fields?.name?.required}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.label}>
          {content?.fields?.surname?.label || "Nazwisko"}
          {content?.fields?.surname?.required && <span style={styles.asterisk}>*</span>}
        </div>
        <input
          type="text"
          placeholder={content?.fields?.surname?.placeholder || "Wpisz nazwisko"}
          id="surname-input"
          value={surname}
          onChange={(e) => handleInputChange('surname', e.target.value)}
          required={content?.fields?.surname?.required}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.label}>
          {content?.fields?.email?.label || "Służbowy adres email"}
          {content?.fields?.email?.required && <span style={styles.asterisk}>*</span>}
        </div>
        <input
          type="email"
          placeholder={content?.fields?.email?.placeholder || "Wpisz adres email"}
          id="email-input"
          value={email}
          onChange={(e) => handleInputChange('email', e.target.value)}
          required={content?.fields?.email?.required}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <div style={styles.label}>
          {content?.fields?.phone?.label || "Numer telefonu"}
          {content?.fields?.phone?.required && <span style={styles.asterisk}>*</span>}
        </div>
        <input
          type="text"
          placeholder={content?.fields?.phone?.placeholder || "Podaj numer telefonu"}
          id="phone-input"
          value={phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          required={content?.fields?.phone?.required}
          style={styles.input}
        />
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
};

export default StepOne; 