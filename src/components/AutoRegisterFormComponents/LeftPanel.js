import React from "react";
import logoIcon from '../../images/logo_icon.png';
import factIcon from '../../images/FormImages/fact_icon.png';
import settingFileIcon from '../../images/FormImages/setting_file_icon.png';
import rcpIcon from '../../images/FormImages/RCP_icon.png';

const getStyles = (isCompact) => ({
  leftPanel: {
    background: "linear-gradient(to right, #a3c1fc, #6a8bcc)",
    color: "#fff",
    padding: "40px",
    width: isCompact ? "350px" : "50%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: "40px",
    zIndex: 2,
  },
  leftTitle: {
    fontSize: "28px",
    marginBottom: "10px",
  },
  icon: {
    width: "87px",
    height: "87px",
    borderRadius: '20px'
  },
  leftText: {
    fontSize: "16px",
    lineHeight: "1.5",
    textAlign: 'center'
  },
});

const LeftPanel = ({ step, isCompact = false, content }) => {
  const styles = getStyles(isCompact);
  
  const getStepContent = () => {
    if (!content) return null;
    
    const stepKey = `step${step}`;
    let stepContent = content[stepKey];
    // Fallback: use step five content for step six if not provided
    if (!stepContent && step === 6) {
      stepContent = content['step5'];
    }
    
    if (!stepContent) return null;
    
    // default icon (step 1)
    let iconSrc = logoIcon;
    let iconAlt = "eGodziny";
    
    // change icon based on step
    if (step === 2) {
      iconSrc = factIcon;
      iconAlt = "Fakt";
    }
    if (step === 3) {
      iconSrc = settingFileIcon;
      iconAlt = "Ustawienia";
    }
    if (step === 4 || step === 5 || step === 6) {
      iconSrc = rcpIcon;
      iconAlt = "RCP";
    }
    
    return (
      <div style={styles.leftPanel}>
        <h2 style={styles.leftTitle}>{stepContent.title}</h2>
        <img 
          src={iconSrc} 
          alt={iconAlt} 
          style={styles.icon}
        />
        <p 
          style={styles.leftText}
          dangerouslySetInnerHTML={{ __html: stepContent.text }}
        />
      </div>
    );
  };

  return getStepContent();
};

export default LeftPanel; 