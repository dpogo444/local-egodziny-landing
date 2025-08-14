import React, { useState, useEffect, useMemo } from "react";

/**
 * StepSix Component - Sixth step for GPS flow
 * Asks whether to use scheduling
 */
const StepSix = ({ formData, setFormData, isFormValid, content }) => {
  const [selected, setSelected] = useState(formData.scheduleUsage || "");

  const methods = useMemo(() => ([
    {
      id: "yes",
      name: "Tak",
      icon: "thumb_up",
      description:
        "Każdy pracownik będzie posiadał swój grafik w telefonie. Dodatkowo, pracownicy otrzymują powiadomienia o zbliżającej się pracy i mają możliwość zgłoszenia nieobecności. ",
      recommended: true
    },
    {
      id: "no",
      name: "Nie",
      icon: "thumb_down",
      description:
        "W porządku. Twoi pracownicy będą jedynie rejestrować czas pracy za pomocą aplikacji.  Witamy na pokładzie eGodziny!",
      recommended: false
    }
  ]), []);

  const handleSelect = (id) => {
    setSelected(id);
    setFormData(prev => ({
      ...prev,
      scheduleUsage: id
    }));
  };

  useEffect(() => {
    if (!selected) {
      const recommended = methods.find(m => m.recommended);
      if (recommended) {
        setSelected(recommended.id);
        setFormData(prev => ({
          ...prev,
          scheduleUsage: recommended.id
        }));
      }
    }
  }, [selected, setFormData, methods]);

  return (
    <div style={styles.container}>
      <div style={styles.selectorContainer}>
        <div style={styles.tilesContainer}>
          {methods.map((method) => (
            <div key={method.id} style={styles.tileWrapper}>
              <div
                style={{
                  ...styles.methodTile,
                  border: selected === method.id ? "2px solid #407EF9" : "2px solid #9ABCF4",
                  ...(selected === method.id && styles.selectedTile)
                }}
                onClick={() => handleSelect(method.id)}
              >
                <div style={styles.iconContainer}>
                  <span className="material-symbols-outlined" style={{
                    ...styles.tileIcon,
                    color: selected === method.id ? "#407EF9" : "#9ABCF4"
                  }}>
                    {method.icon}
                  </span>
                </div>
                {method.recommended && (
                  <div style={styles.recommendedBadge}>Zalecane</div>
                )}
              </div>
              <div style={styles.tileLabel}>{method.name}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={styles.descriptionContainer}>
        <div style={styles.descriptionTitle}>{selected ? "Opis wybranej opcji:" : "Wybierz jedną z opcji"}</div>
        <div style={styles.descriptionBox}>
          {!selected ? (
            <div dangerouslySetInnerHTML={{
              __html: "Wybierz, czy chcesz aby pracownicy korzystali z grafiku."
            }} />
          ) : (
            <div dangerouslySetInnerHTML={{
              __html: methods.find(m => m.id === selected)?.description || ""
            }} />
          )}
        </div>
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

export default StepSix;


