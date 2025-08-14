import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';
import Swal from 'sweetalert2'


function Form({ isOpen, onClose, employeesRange }) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    mail: '',
    phone: '',
    position: '',
  });

  const Swal = require('sweetalert2')

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      employees: employeesRange,
    };

    try {
      const response = await fetch('http://app.egodziny.pl/api/pricing-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(`Backend zwrócił błąd: ${response.status}`);
      }

      await addDoc(collection(db, 'pricing-requests'), payload);

      Swal.fire(
        "Formularz został wysłany!",
        "Dziękujemy za wypełnienie formularza. Skontaktujemy się z Tobą najszybciej jak to możliwe (zazwyczaj zajmuje to nam nie więcej niż 5 minut).",
        "success"
      );
      onClose();

    } catch (error) {
      console.error('Błąd przy wysyłaniu requesta:', error);
      Swal.fire(
        "Coś poszło nie tak.",
        error.message || "Spróbuj ponownie później.",
        "error"
      );
    }
  };

  const labelStyle = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    border: '1px solid #ccc',
    backgroundColor: '#F6F6F6',
    borderRadius: '10px',
    marginTop: '4px',
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0,
      width: '100vw', height: '100vh',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
    }}>
      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: '32px',
        width: '100%',
        maxWidth: '800px',
        position: 'relative',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'none',
            border: 'none',
            fontSize: '20px',
            cursor: 'pointer',
          }}
        >
          ×
        </button>

        <h4 style={{ marginBottom: '16px', textAlign: 'center', color: 'black'}}>
          Wypełnij formularz, a my skontaktujemy się z Tobą!
        </h4>
        <div style={{
          width: '90%', height: '2px',
          backgroundColor: '#2d6ff4',
          margin: '0 auto 32px', borderRadius: '1px'
        }}></div>

        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
        >
          <label style={labelStyle}>
            Imię
            <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Wpisz swoje imię" style={inputStyle} required />
          </label>
          <label style={labelStyle}>
            Nazwa firmy
            <input name="companyName" value={formData.companyName} onChange={handleChange} type="text" placeholder="Wpisz nazwę firmy" style={inputStyle} required />
          </label>
          <label style={labelStyle}>
            Adres e-mail
            <input name="mail" value={formData.mail} onChange={handleChange} type="email" placeholder="Wpisz adres e-mail" style={inputStyle} required />
          </label>
          <label style={labelStyle}>
            Numer telefonu
            <input name="phone" value={formData.phone} onChange={handleChange} type="tel" placeholder="Wpisz numer telefonu" style={inputStyle} required />
          </label>
          <label style={labelStyle}>
            Stanowisko w firmie
            <input name="position" value={formData.position} onChange={handleChange} type="text" placeholder="Wpisz stanowisko w firmie" style={inputStyle} />
          </label>
          <button type="submit" style={{
            backgroundColor: '#2d6ff4',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            width: '300px',
            margin: '0 auto',
            borderRadius: '12px',
            padding: '12px',
            marginTop: '16px',
          }}>
            Wyślij
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '12px', fontSize: '1.1rem', color: '#333', marginBottom: '4px' }}>Lub zadzwoń pod numer:</p>
        <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#2d6ff4' }}>+48 515 800 125</p>

        <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '0.875rem', color: '#666' }}>
          © eGodziny 2025
        </p>
      </div>
    </div>
  );
}

export default Form;
