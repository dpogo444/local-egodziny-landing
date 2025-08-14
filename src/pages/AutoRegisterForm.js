import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import LeftPanel from '../components/AutoRegisterFormComponents/LeftPanel';
import RightPanel from '../components/AutoRegisterFormComponents/RightPanel';

function AutoRegisterForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    companyAddress: "",
    nip: "",
    position: "",
    acceptedTerms: false,
    companyType: "",
    timeTrackingMethod: "",
    gpsMode: "",
    registrationMethod: "",
    scheduleUsage: ""
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [content, setContent] = useState(null);
  // const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/content.json')
      .then(response => response.json())
      .then(data => {
        setContent(data.autoRegisterForm);
      })
      .catch(error => console.error('Error loading content:', error));
  }, []);

  const handleNextStep = () => {
    const maxStep = formData.timeTrackingMethod === 'gps' ? 6 : 5;
    setCurrentStep((prev) => Math.min(prev + 1, maxStep));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const isFormValid = () => {
    // Różne walidacje dla różnych kroków
    switch (currentStep) {
      case 1:
        return formData.name && formData.name.trim() !== "" && formData.email && formData.email.trim() !== "" && formData.phone && formData.phone.trim() !== "";
      case 2:
        return formData.companyName && formData.companyName.trim() !== "" && formData.acceptedTerms;
      case 3:
        return formData.companyType && formData.companyType.trim() !== "";
      case 4:
        return formData.timeTrackingMethod && formData.timeTrackingMethod.trim() !== "";
      case 5:
        if (formData.timeTrackingMethod === 'gps') {
          return formData.gpsMode && formData.gpsMode.trim() !== '';
        }
        return formData.registrationMethod && formData.registrationMethod.trim() !== "";
      case 6:
        return formData.scheduleUsage && formData.scheduleUsage.trim() !== "";
      default:
        return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isFormValid()) {
      const finalStep = formData.timeTrackingMethod === 'gps' ? 6 : 5;
      if (currentStep === finalStep) {
        // Wykonaj finalną akcję (np. rejestracja)
        // navigate("/welcome");
      } else {
        handleNextStep();
      }
    }
  };

  if (!content) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <LeftPanel step={currentStep} isCompact={currentStep > 2} content={content.leftPanel} />
        <RightPanel 
          step={currentStep}
          formData={formData}
          setFormData={setFormData}
          isFormValid={isFormValid}
          handleSubmit={handleSubmit}
          currentStep={currentStep}
          onBack={handleBack}
          isExpanded={currentStep > 2}
          content={content.rightPanel}
          fullContent={content}
        />
      </div>
    </div>
  );
}

const styles = {
  page: {
    font: 'Cabin',
    backgroundColor: "#444444",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    position: "relative",
    width: "1050px",
    height: "711px",
    borderRadius: "40px",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
};

export default AutoRegisterForm;
