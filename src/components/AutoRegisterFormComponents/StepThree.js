import React, { useState } from "react";

const StepThree = ({ formData, setFormData, isFormValid, content }) => {
  const [selectedCompanyType, setSelectedCompanyType] = useState(formData.companyType || "");
  const [scrollPosition, setScrollPosition] = useState(0);

  const companyTypes = content?.companyTypes || [
    {
      id: "engineering",
      name: "Firma inżynierska",
      icon: "handyman",
      description: "Reprezentujesz firmę wykonawczą, instalacyjną, serwisową lub budowlaną. Twoi pracownicy pracują w biurze lub w terenie. Działasz jako podwykonawca lub generalny wykonawca w projektach infrastrukturalnych.",
    },
    {
      id: "agency",
      name: "Agencja pracy",
      icon: "groups",
      description: "Jesteś agencją pracy tymczasowej lub firmą outsourcingową. Posiadasz setki lub tysiące pracowników, w tym pracowników z zagranicy.",
    },
    {
      id: "production",
      name: "Zakład produkcyjny",
      icon: "factory",
      description: "Reprezentujesz zakład produkcyjny lub fabrykę. Posiadasz pracowników, którzy przeważnie pracują w jednym miejscu.",
    },
    {
      id: "other",
      name: "Inne",
      icon: "more_horiz",
      description: "Reprezentujesz dowolną inną firmę i masz potrzebę zliczania godzin pracy. Dla Ciebie również mamy coś specjalnego!",
    }
  ];

  const handleCompanyTypeSelect = (companyType) => {
    setSelectedCompanyType(companyType);
    setFormData(prev => ({
      ...prev,
      companyType: companyType
    }));
  };

  const scrollLeft = () => {
    const container = document.getElementById('company-types-container');
    if (container) {
      container.scrollBy({ left: -300, behavior: 'smooth' });
      setScrollPosition(Math.max(0, scrollPosition - 300));
    }
  };

  const scrollRight = () => {
    const container = document.getElementById('company-types-container');
    if (container) {
      container.scrollBy({ left: 300, behavior: 'smooth' });
      setScrollPosition(scrollPosition + 300);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.selectorContainer}>
        <button 
          onClick={scrollLeft}
          style={styles.scrollButton}
          disabled={scrollPosition <= 0}
        >
        <span className="material-symbols-outlined" style={styles.scrollIcon}>chevron_left</span>
        </button>
        
        <div 
          id="company-types-container"
          style={styles.typesContainer}
        >
          {companyTypes.map((type) => (
            <div key={type.id} style={styles.tileWrapper}>
                <div
                 style={{
                   ...styles.typeTile,
                   border: selectedCompanyType === type.id ? "2px solid #407EF9" : "2px solid #9ABCF4",
                   ...(selectedCompanyType === type.id && styles.selectedTile)
                 }}
                 onClick={() => handleCompanyTypeSelect(type.id)}
               >
                  <div style={styles.iconContainer}>
                   <span className="material-symbols-outlined" style={{
                     ...styles.tileIcon,
                     color: selectedCompanyType === type.id ? "#407EF9" : "#9ABCF4"
                   }}>
                    {type.icon}
                  </span>
                 </div>
              </div>
              <div style={styles.tileLabel}>{type.name}</div>
            </div>
          ))}
        </div>
        
        <button 
          onClick={scrollRight}
          style={styles.scrollButton}
        >
          <span className="material-symbols-outlined" style={styles.scrollIcon}>chevron_right</span>
        </button>
       </div>
       
        <div style={styles.descriptionContainer}>
          <div style={styles.descriptionTitle}>
            {(content?.description?.selected || "Opis wybranej opcji:")}
          </div>
          {selectedCompanyType ? (
            <div style={styles.descriptionBox}>
              {companyTypes.find(type => type.id === selectedCompanyType)?.description}
            </div>
          ) : (
            <div style={styles.descriptionBox}>
              {content?.description?.default || "Wybierz jeden rodzaj firmy, który najtrafniej określa Twoją specyfikę."}
            </div>
          )}
        </div>
     </div>
   );
};

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
    alignItems: "center",
    width: "100%",
    gap: "20px"
  },
  scrollButton: {
    background: "transparent",
    border: "none",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    flexShrink: 0
  },
  scrollIcon: {
    fontSize: "32px",
    color: "#666"
  },
  typesContainer: {
    display: "flex",
    gap: "20px",
    overflowX: "auto",
    scrollBehavior: "smooth",
    padding: "10px 0",
    flex: 1,
    scrollbarWidth: "none",
    msOverflowStyle: "none"
  },
  typeTile: {
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
    flexShrink: 0,
    padding: "20px"
  },
  selectedTile: {
    backgroundColor: "#f2f5fc",
    transform: "scale(1.05)"
  },
  tileWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px"
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  tileIcon: {
    fontSize: "48px"
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
    minHeight: "100px",
    maxHeight: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};

export default StepThree;
