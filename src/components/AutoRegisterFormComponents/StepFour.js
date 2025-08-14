import React, { useState, useEffect, useRef } from "react";

/**
 * StepFour Component - Fourth step of the auto-registration form
 * Allows users to select their preferred time tracking method
 * 
 * @param {Object} props - Component props
 * @param {Object} props.formData - Current form data state
 * @param {Function} props.setFormData - Function to update form data
 * @param {Function} props.isFormValid - Function to check if current step is valid
 * @param {Object} props.content - Localized content for this step
 */
const StepFour = ({ formData, setFormData, isFormValid, content }) => {
  // State for managing selected time tracking method
  const [selectedTimeTracking, setSelectedTimeTracking] = useState(formData.timeTrackingMethod || "");
  
  // Available time tracking methods from content or fallback defaults
  const timeTrackingMethods = content?.timeTrackingMethods || [
    {
      id: "manual",
      name: "Deklarowanie czasu",
      icon: "add_circle",
      description: "Ręczne wprowadzanie godzin pracy przez pracowników. Idealne dla firm inżynierskich i produkcyjnych, gdzie praca odbywa się w różnych lokalizacjach i wymaga elastyczności.",
      recommended: false
    },
    {
      id: "gps",
      name: "GPS z lokalizacją",
      icon: "add_location_alt",
      description: "Automatyczne śledzenie czasu pracy z lokalizacją GPS. Doskonałe rozwiązanie dla agencji pracy, gdzie pracownicy pracują w terenie i wymagają dokładnego monitoringu.",
      recommended: false
    }
  ];

  /**
   * Determines which tile should be recommended based on company type
   * @returns {string|null} - ID of recommended method or null if none
   */
  const getRecommendedMethod = () => {
    const companyType = formData.companyType;
    
    if (companyType === 'engineering' || companyType === 'production') {
      return 'manual';
    } else if (companyType === 'agency') {
      return 'gps';
    }
    
    return null; // No recommendation for 'other' or undefined
  };

  /**
   * Handles time tracking method selection
   * @param {string} methodId - ID of selected method
   */
  const handleTimeTrackingSelect = (methodId) => {
    setSelectedTimeTracking(methodId);
    setFormData(prev => ({
      ...prev,
      timeTrackingMethod: methodId
    }));
  };

  // Get the recommended method
  const recommendedMethod = getRecommendedMethod();

  // Track last company type to decide when to auto-apply recommendation
  const lastCompanyTypeRef = useRef(formData.companyType);

  useEffect(() => {
    const currentCompanyType = formData.companyType;
    const existingSelection = formData.timeTrackingMethod || "";
    const companyTypeChanged = lastCompanyTypeRef.current !== currentCompanyType;

    if (!recommendedMethod) {
      return;
    }

    // If company type changed, follow the new recommendation
    if (companyTypeChanged) {
      setSelectedTimeTracking(recommendedMethod);
      setFormData(prev => ({
        ...prev,
        timeTrackingMethod: recommendedMethod
      }));
      lastCompanyTypeRef.current = currentCompanyType;
      return;
    }

    // If returning to this step without changing company type, only set if nothing chosen yet
    if (!existingSelection) {
      setSelectedTimeTracking(recommendedMethod);
      setFormData(prev => ({
        ...prev,
        timeTrackingMethod: recommendedMethod
      }));
    }
  }, [formData.companyType, formData.timeTrackingMethod, recommendedMethod, setFormData]);

  // Update recommendation status for each method
  const methodsWithRecommendation = timeTrackingMethods.map(method => ({
    ...method,
    recommended: method.id === recommendedMethod
  }));

  return (
    <div style={styles.container}>
      {/* Main container with centered layout */}
      <div style={styles.selectorContainer}>
        
        {/* Time tracking method tiles */}
        <div style={styles.tilesContainer}>
          {methodsWithRecommendation.map((method) => (
            <div key={method.id} style={styles.tileWrapper}>
              {/* Main tile */}
              <div
                style={{
                  ...styles.methodTile,
                  border: selectedTimeTracking === method.id ? "2px solid #407EF9" : "2px solid #9ABCF4",
                  ...(selectedTimeTracking === method.id && styles.selectedTile)
                }}
                onClick={() => handleTimeTrackingSelect(method.id)}
              >
                {/* Icon container */}
                <div style={styles.iconContainer}>
                  <span className="material-symbols-outlined" style={{
                    ...styles.tileIcon,
                    color: selectedTimeTracking === method.id ? "#407EF9" : "#9ABCF4"
                  }}>
                    {method.icon}
                  </span>
                </div>
                
                {/* Recommended badge */}
                {method.recommended && (
                  <div style={styles.recommendedBadge}>
                    Zalecane
                  </div>
                )}
              </div>
              
              {/* Tile title */}
              <div style={styles.tileLabel}>{method.name}</div>
            </div>
          ))}
        </div>
      </div>
      
             {/* Description section */}
       <div style={styles.descriptionContainer}>
         <div style={styles.descriptionTitle}>
           {selectedTimeTracking ? "Opis wybranej metody:" : "Wybierz metodę rejestracji czasu pracy"}
         </div>
         <div style={styles.descriptionBox}>
           {!selectedTimeTracking ? (
             <div dangerouslySetInnerHTML={{
               __html: "Wybierz dowolną opcję. Z naszych obserwacji, deklarowanie czasu pracy lepiej sprawdza się w firmach , gdzie nie ma potrzeby zliczania czasu pracy co do minuty, a pracownicy nie chcą być weryfikowani przez GPS. GPS z lokalizacją sprawdza się m.in w agencjach pracy tymczasowej, gdzie ważna jest każda minuta pracy, a zaufanie do pracowników jest ograniczone."
             }} />
           ) : selectedTimeTracking === "manual" ? (
             <div dangerouslySetInnerHTML={{
               __html: "Pracownicy mogą samodzielnie dodać swój czas pracy i połączyć go z konkretnym zleceniem (zadaniem lub projektem w Twojej firmie). Aplikacja <b>nie będzie</b> weryfikowała ich lokalizacji za pomocą GPS. Czas pracy mogą dodać pracownicy, brygadziści lub administracja (np. dział Kadr)."
             }} />
           ) : selectedTimeTracking === "gps" ? (
             <div dangerouslySetInnerHTML={{
               __html: "Aplikacja wykorzystuje GPS do mierzenia czasu pracy i weryfikacji obecności pracownika w wyznaczonym miejscu na mapie. Czas pracy może liczyć się automatycznie, jeśli pracownik znajduje się w strefie lub pracownicy klikają start / stop przy rozpoczęciu i zakończeniu pracy."
             }} />
           ) : null}
         </div>
       </div>
    </div>
  );
};

// Component styles using CSS-in-JS approach
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    padding: "40px 0"
  },
  selectorContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: "30px"
  },
  tilesContainer: {
    display: "flex",
    gap: "40px",
    justifyContent: "center",
    flexWrap: "wrap"
  },
  tileWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    position: "relative"
  },
  methodTile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "150px",
    height: "150px",
    border: "2px solid #9ABCF4",
    borderRadius: "20px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    backgroundColor: "#fff",
    padding: "20px",
    position: "relative"
  },
  selectedTile: {
    backgroundColor: "#f2f5fc",
    transform: "scale(1.05)"
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  tileIcon: {
    fontSize: "48px"
  },
  recommendedBadge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#28a745",
    color: "white",
    padding: "4px 8px",
    borderRadius: "12px",
    fontSize: "12px",
    fontWeight: "600",
    textTransform: "uppercase"
  },
  tileLabel: {
    fontSize: "16px",
    fontWeight: "500",
    color: "#333",
    textAlign: "center",
    lineHeight: "1.3"
  },
  descriptionContainer: {
    marginTop: "30px",
    width: "100%"
  },
  descriptionTitle: {
    fontSize: "18px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "10px",
    textAlign: "left"
  },
  descriptionBox: {
    border: "2px solid #9ABCF4",
    borderRadius: "15px",
    padding: "10px",
    backgroundColor: "#fff",
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.5",
    textAlign: "center",
    minHeight: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default StepFour;
