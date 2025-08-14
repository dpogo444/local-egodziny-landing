import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Menu from '../sections/Menu';
import Footer from '../sections/Footer';

export default function BlogLoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/blog');
    } catch (error) {
      alert('Błąd logowania: ' + error.message);
    }
  };

  return (
    <>
      <Menu />
      <main style={{ padding: '2rem' }}>
        <h1>Zaloguj się na bloga</h1>
        <form onSubmit={handleLogin} style={{ maxWidth: 400 }}>
          <input
            className='login-input'
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <br />
          <input
            className='login-input'
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <br />
          <button className='login button-default btn' type="submit">Zaloguj</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
