import React, { useState, useEffect, useMemo } from "react";

/**
 * StepFive Component - Fifth step of the auto-registration form
 * This step handles manual time tracking registration method selection
 * 
 * @param {Object} props - Component props
 * @param {Object} props.formData - Current form data state
 * @param {Function} props.setFormData - Function to update form data
 * @param {Function} props.isFormValid - Function to check if current step is valid
 * @param {Object} props.content - Localized content for this step
 */
const StepFive = ({ formData, setFormData, isFormValid, content }) => {
  // State for managing selected registration method
  const [selectedRegistrationMethod, setSelectedRegistrationMethod] = useState(() => (
    formData.timeTrackingMethod === "gps" ? (formData.gpsMode || "") : (formData.registrationMethod || "")
  ));
  
  // Available registration methods depend on time tracking method from previous step
  const isGpsFlow = formData.timeTrackingMethod === "gps";

  const registrationMethods = useMemo(() => (
    isGpsFlow
      ? [
          {
            id: "gps_manual",
            name: "Start / stop",
            icon: "add_location",
            description:
              "Pracownicy klikają start i stop przy rozpoczęciu i zakończeniu pracy i wówczas lokalizacja jest pobierana. System sprawdza, czy pracownik rozpoczął oraz zakończył pracę w wyznaczonym obszarze.",
            recommended: false
          },
          {
            id: "gps_auto",
            name: "Auto start / stop",
            icon: "file_map",
            description:
              "Niedługo dodamy auto start / stop. Czas pracy będzie automatycznie liczył się, jeśli pracownik znajdzie się w wyznaczonym obszarze. Oznacza to, że pracownicy praktycznie w ogóle nie będą musieli używać telefonów - aplikacja działa w tle. Jeżeli ta funkcja jest dla Ciebie ważna, daj nam znać klikając <span>tutaj</span>.",
            recommended: false,
            soon: true
          }
        ]
      : [
          {
            id: "individual",
            name: "Każdy pracownik samodzielnie",
            icon: "check",
            description:
              "Każdy pracownik może samodzielnie dodać, edytować lub usunąć swój czas pracy. Można dodawać godziny w dowolnej porze: raz dziennie, raz na tydzień lub nawet raz na miesiąc. Przełożony widzi godziny pracy pracowników i może je zatwierdzić.",
            recommended: true
          },
          {
            id: "supervisor",
            name: "Brygadzista za kilka osób na raz",
            icon: "checklist",
            description:
              "Brygadzista posiada pracowników, za których rejestruje czas pracy. W takim scenariuszu, jeżeli 1 brygadzista posiada 10 pracowników pod sobą, oznacza to, że tylko on pobierze aplikację i będzie rejestrował czas pracy w dowolnej porze: raz dziennie, raz na tydzień lub nawet raz na miesiąc. Przełożony widzi godziny pracy i może je zatwierdzić.",
            recommended: false
          }
        ]
  ), [isGpsFlow]);

  // Keep local selection in sync if user navigates back/forward and had a previous choice
  useEffect(() => {
    const existing = isGpsFlow ? formData.gpsMode : formData.registrationMethod;
    if (existing && existing !== selectedRegistrationMethod) {
      const existsInList = registrationMethods.some(m => m.id === existing);
      if (existsInList) {
        setSelectedRegistrationMethod(existing);
      }
    }
  }, [isGpsFlow, formData.gpsMode, formData.registrationMethod, registrationMethods, selectedRegistrationMethod]);

  /**
   * Handles registration method selection
   * @param {string} methodId - ID of selected method
   */
  const handleRegistrationMethodSelect = (methodId) => {
    setSelectedRegistrationMethod(methodId);
    if (isGpsFlow) {
      setFormData(prev => ({
        ...prev,
        gpsMode: methodId
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        registrationMethod: methodId
      }));
    }
  };

  // Ensure a valid default selection and adjust when the method list changes
  useEffect(() => {
    const validIds = new Set(registrationMethods.map(m => m.id));
    const existing = isGpsFlow ? formData.gpsMode : formData.registrationMethod;
    const hasValidSelection = existing && validIds.has(existing);
    if (!hasValidSelection) {
      const recommendedMethod = registrationMethods.find(method => method.recommended);
      if (recommendedMethod) {
        setSelectedRegistrationMethod(recommendedMethod.id);
        setFormData(prev => ({
          ...prev,
          ...(isGpsFlow ? { gpsMode: recommendedMethod.id } : { registrationMethod: recommendedMethod.id })
        }));
      } else if (registrationMethods.length > 0) {
        // Fallback to the first option if no recommended flag exists
        setSelectedRegistrationMethod(registrationMethods[0].id);
        setFormData(prev => ({
          ...prev,
          ...(isGpsFlow ? { gpsMode: registrationMethods[0].id } : { registrationMethod: registrationMethods[0].id })
        }));
      }
    }
  }, [isGpsFlow, registrationMethods, formData.gpsMode, formData.registrationMethod, setFormData]);

  return (
    <div style={styles.container}>
      {/* Main container with centered layout */}
      <div style={styles.selectorContainer}>
        
                 {/* Registration method tiles */}
         <div style={styles.tilesContainer}>
           {registrationMethods.map((method) => (
             <div key={method.id} style={styles.tileWrapper}>
               {/* Main tile */}
               <div
                 style={{
                   ...styles.methodTile,
                    border: method.id === 'gps_auto' ? "2px solid #BDBDBD" : (selectedRegistrationMethod === method.id ? "2px solid #407EF9" : "2px solid #9ABCF4"),
                   ...(selectedRegistrationMethod === method.id && styles.selectedTile)
                 }}
                 onClick={() => handleRegistrationMethodSelect(method.id)}
               >
                 {/* Icon container */}
                 <div style={styles.iconContainer}>
                   <span className="material-symbols-outlined" style={{
                     ...styles.tileIcon,
                      color: method.id === 'gps_auto' ? "#BDBDBD" : (selectedRegistrationMethod === method.id ? "#407EF9" : "#9ABCF4")
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
                 {method.soon && (
                   <div style={styles.soonBadge}>
                     Wkrótce
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
           {selectedRegistrationMethod ? content?.description?.selected || "Opis wybranej metody:" : (isGpsFlow ? "Wybierz sposób działania GPS" : "Wybierz metodę rejestracji czasu pracy")}
         </div>
         <div style={styles.descriptionBox}>
           {!selectedRegistrationMethod ? (
             <div dangerouslySetInnerHTML={{
               __html: content?.description?.default || "Wybierz metodę rejestracji czasu pracy, która najlepiej pasuje do Twojej organizacji i sposobu zarządzania zespołem."
             }} />
            ) : selectedRegistrationMethod === "individual" ? (
             <div dangerouslySetInnerHTML={{
               __html: registrationMethods.find(m => m.id === "individual")?.description || "Każdy pracownik może samodzielnie dodać, edytować lub usunąć swój czas pracy. Można dodawać godziny w dowolnej porze: raz dziennie, raz na tydzień lub nawet raz na miesiąc. Przełożony widzi godziny pracy pracowników i może je zatwierdzić."
             }} />
            ) : selectedRegistrationMethod === "supervisor" ? (
             <div dangerouslySetInnerHTML={{
               __html: registrationMethods.find(m => m.id === "supervisor")?.description || "Brygadzista posiada pracowników, za których rejestruje czas pracy. W takim scenariuszu, jeżeli 1 brygadzista posiada 10 pracowników pod sobą, oznacza to, że tylko on pobierze aplikację i będzie rejestrował czas pracy w dowolnej porze: raz dziennie, raz na tydzień lub nawet raz na miesiąc. Przełożony widzi godziny pracy i może je zatwierdzić."
             }} />
            ) : selectedRegistrationMethod === "gps_manual" ? (
              <div dangerouslySetInnerHTML={{
                __html: registrationMethods.find(m => m.id === "gps_manual")?.description || "Pracownicy klikają start i stop przy rozpoczęciu i zakończeniu pracy i wówczas lokalizacja jest pobierana. System sprawdza, czy pracownik rozpoczął oraz zakończył pracę w wyznaczonym obszarze."
              }} />
            ) : selectedRegistrationMethod === "gps_auto" ? (
              <div dangerouslySetInnerHTML={{
                __html: registrationMethods.find(m => m.id === "gps_auto")?.description || "Niedługo dodamy auto start / stop..."
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
  soonBadge: {
    position: "absolute",
    top: "10px",
    right: "10px",
    backgroundColor: "#BDBDBD",
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

export default StepFive;
