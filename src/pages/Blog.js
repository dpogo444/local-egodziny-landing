import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Footer from '../sections/Footer';
import Menu from '../sections/Menu';
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import BlogCard from '../components/BlogCard';

const allowedEmails = [
    'iwona.bendig@egodziny.pl',
    'krzysztof.warda@egodziny.pl',
    'dominik.pogorzelski@egodziny.pl'
  ];

function Blog() {
  const [posts, setPosts] = useState([]);
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  useEffect(() => {
    async function fetchPosts() {
      const querySnapshot = await getDocs(collection(db, 'blogs'));
      const postsData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
  
      const visiblePosts = postsData.filter(post =>
        post.public === true || (auth.currentUser && allowedEmails.includes(auth.currentUser.email))
      );
  
      setPosts(visiblePosts);
    }
  
    fetchPosts();
  }, [user, auth]);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setShowLogin(false);
    } catch (error) {
      alert('Błąd logowania: ' + error.message);
    }
  };

  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <>
      <Menu />

      <div class="blog-main-page" style={{ padding: '2rem' }}>
        {user ? (
          <div className='blog-banner'>
            <h1 className='blog-title'>Blog</h1>
            <p className='blog-description'>„Rynek Pracy Tymczasowej: Trendy, Prawo, Praktyka”</p>
            <p className='blog-description'>
                Blog poświęcony aktualnościom z branży pracy tymczasowej – od najnowszych zmian w przepisach, przez analizy rynkowe, po praktyczne wskazówki dla agencji i pracodawców. Znajdziesz tu ciekawostki, komentarze ekspertów oraz inspiracje do codziennej pracy w dynamicznym świecie HR.
            </p>
            <div className='blog-buttons'>
                <button className='login button-default btn' onClick={handleLogout}>Wyloguj</button>
                {user?.email && allowedEmails.includes(user.email) && (
                    <button className='button-default btn' onClick={() => navigate("/edit/new")}>
                        Dodaj nowy post
                    </button>
                )}
            </div>
          </div>
        ) : (
            <div className='blog-banner'>
                <h1 className='blog-title'>Blog</h1>
                <p className='blog-description'>„Rynek Pracy Tymczasowej: Trendy, Prawo, Praktyka”</p>
                <p className='blog-description'>
                    Blog poświęcony aktualnościom z branży pracy tymczasowej – od najnowszych zmian w przepisach, przez analizy rynkowe, po praktyczne wskazówki dla agencji i pracodawców. Znajdziesz tu ciekawostki, komentarze ekspertów oraz inspiracje do codziennej pracy w dynamicznym świecie HR.
                </p>
            </div>
        )}

        <div className='blog-cards'>
            {posts.map(post => (
                <BlogCard key={post.id} post={post} />
            ))}
        </div>

      </div>

      <Footer />
    </>
  );
}

export default Blog;