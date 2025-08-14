import React, { useState, useEffect } from "react";
import ProgressBar from '../ProgressBar';
import StepOne from '../AutoRegisterFormComponents/StepOne';
import StepTwo from '../AutoRegisterFormComponents/StepTwo';
import StepThree from '../AutoRegisterFormComponents/StepThree';
import StepFour from '../AutoRegisterFormComponents/StepFour';
import StepFive from '../AutoRegisterFormComponents/StepFive';
import StepSix from '../AutoRegisterFormComponents/StepSix';

const getStyles = (isExpanded) => ({
  rightPanel: {
    backgroundColor: "#fff",
    padding: isExpanded ? "60px 10px" : "60px 40px",
    display: "flex",
    width: isExpanded ? "calc(100% - 350px)" : "50%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "0 40px 40px 0",
    zIndex: 1,
  },
  headerSection: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
    width: "100%"
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    width: "100%",
    justifyContent: "center",
    position: "relative"
  },
  backButton: {
    position: "absolute",
    left: "0",
    border: "1px solid #CCDCFC",
    color: "#A6ADBD",
    fontSize: "24px",
    cursor: "pointer",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "51px",
    height: "30px",
    transition: "background-color 0.2s ease",
    boxShadow: "none",
    outline: "none",
    marginLeft: isExpanded ? "50px" : "0"
  },
  icon: {
    fontSize: "20px",
    color: "#A6ADBD"
  },
  rightTitle: {
    fontSize: "28px",
    marginBottom: "5px",
  },
  customBlueLine: {
    height: '2px',
    width: '145px',
    backgroundColor: '#407EF9'
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    width: '80%'
  },
  bottomSection: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
    marginTop: "auto"
  },
  button: {
    height: "40px",
    fontSize: "16px",
    backgroundColor: "#407EF9",
    color: "#fff",
    border: "none",
    borderRadius: "40px",
    cursor: "pointer",
    width: "100%"
  },
});

const RightPanel = ({ 
  step, 
  formData, 
  setFormData, 
  isFormValid, 
  handleSubmit, 
  currentStep,
  onBack,
  isExpanded = false,
  content,
  fullContent
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const styles = getStyles(isExpanded);

  // Debug logging
  useEffect(() => {
    console.log('RightPanel received content:', content);
    console.log('RightPanel received fullContent:', fullContent);
    console.log('Current step:', step);
  }, [content, fullContent, step]);

  // Reset hover state when step changes
  useEffect(() => {
    setIsHovered(false);
  }, [step]);
  
  const getStepContent = () => {
    if (!content || !fullContent) {
      return {
        title: "Załóż konto",
        component: <StepOne formData={formData} setFormData={setFormData} isFormValid={isFormValid} content={null} />
      };
    }
    
    const stepKey = `step${step}`;
    const stepContent = content[stepKey];
    
    switch (step) {
      case 1:
        return {
          title: stepContent?.title || "Załóż konto",
          component: <StepOne formData={formData} setFormData={setFormData} isFormValid={isFormValid} content={fullContent?.stepOne} />
        };
      case 2:
        return {
          title: stepContent?.title || "Załóż konto",
          component: <StepTwo formData={formData} setFormData={setFormData} isFormValid={isFormValid} content={fullContent?.stepTwo} />
        };
      case 3:
        return {
          title: stepContent?.title || "Co najtrafniej określa Twoją firmę?",
          component: <StepThree formData={formData} setFormData={setFormData} isFormValid={isFormValid} content={fullContent?.stepThree} />
        };
      case 4:
        return {
          title: stepContent?.title || "Jak chcesz rejestrować czas pracy?",
          component: <StepFour formData={formData} setFormData={setFormData} isFormValid={isFormValid} content={fullContent?.stepFour} />
        };
      case 5:
         return {
           title: formData.timeTrackingMethod === 'gps' ? "Jak ma działać GPS?" : (stepContent?.title || "Kto ma rejestrować czas pracy?"),
           component: <StepFive formData={formData} setFormData={setFormData} isFormValid={isFormValid} content={fullContent?.stepFive} />
         };
      case 6:
         return {
           title: "Czy chcesz korzystać z grafiku?",
           component: <StepSix formData={formData} setFormData={setFormData} isFormValid={isFormValid} content={fullContent?.stepSix} />
         };
      default:
        return {
          title: stepContent?.title || "Załóż konto",
          component: <StepOne formData={formData} setFormData={setFormData} isFormValid={isFormValid} content={fullContent?.stepOne} />
        };
    }
  };

  const stepContent = getStepContent();

  return (
    <div style={styles.rightPanel}>
      <div style={styles.headerSection}>
        <div style={styles.titleContainer}>
          {step > 1 && (
            <button 
              onClick={onBack} 
              style={{
                ...styles.backButton,
                backgroundColor: isHovered ? "#f2f5fc" : "#fff"
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              aria-label={fullContent?.rightPanel?.backButton?.ariaLabel || "Wróć do poprzedniego kroku"}
            >
              <span className="material-symbols-outlined" style={styles.icon}>arrow_back</span>
            </button>
          )}
          <h2 style={styles.rightTitle}>{stepContent.title}</h2>
        </div>
        <div style={styles.customBlueLine}></div>
      </div>
              <div style={styles.formContainer}>
          {stepContent.component}
        <div style={styles.bottomSection}>
          <button 
            type="submit" 
            style={{
              ...styles.button,
              backgroundColor: (!isFormValid() || (formData.timeTrackingMethod === 'gps' && formData.gpsMode === 'gps_auto')) ? "#9ABCF4" : "#407EF9",
              cursor: (!isFormValid() || (formData.timeTrackingMethod === 'gps' && formData.gpsMode === 'gps_auto')) ? "not-allowed" : "pointer"
            }} 
            disabled={(formData.timeTrackingMethod !== 'gps' ? currentStep >= 5 : currentStep >= 6) || !isFormValid() || (formData.timeTrackingMethod === 'gps' && formData.gpsMode === 'gps_auto')} 
            onClick={handleSubmit}
          >
            {(formData.timeTrackingMethod !== 'gps' ? (currentStep >= 5) : (currentStep >= 6)) ? (fullContent?.rightPanel?.buttons?.createAccount || "Utwórz konto") : (fullContent?.rightPanel?.buttons?.next || "Przejdź dalej")}
          </button>
                     <ProgressBar 
             totalSteps={5} 
             currentStep={currentStep}
             showExtraDot={formData.timeTrackingMethod === "gps"}
           />
        </div>
      </div>
    </div>
  );
};

export default RightPanel; 