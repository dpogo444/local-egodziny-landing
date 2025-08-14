import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Footer from '../sections/Footer';
import Menu from '../sections/Menu';
import { Helmet } from 'react-helmet';

const allowedEmails = [
  'iwona.bendig@egodziny.pl',
  'krzysztof.warda@egodziny.pl',
  'dominik.pogorzelski@egodziny.pl'
];

function SingleBlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    async function fetchPost() {
      const docRef = doc(db, 'blogs', id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPost(docSnap.data());
      }
    }
    fetchPost();
  }, [id]);

  if (!post) return <p></p>;

  return (
    <>
      <Helmet>
        <title>{post.title}</title>
        {post.meta_description && (
          <meta name="description" content={post.meta_description} />
        )}
      </Helmet>
      <Menu />
      <div className='blog-page' style={{ padding: '2rem' }}>
        <div className='blog-top-section'
          style={{
            backgroundColor: post.color,
          }}
        >
          <h1>{post.title}</h1>
          <p style={{ fontStyle: 'italic' }}>
            {post.author} • {post.date?.toDate().toLocaleDateString()} • {post.reading_time} • {post.category}
          </p>
          {post.public === false && (
              <p style={{ color: 'red', fontWeight: 'bold' }}>
                  Post jest prywatny. Użytkownicy nie mogą go zobaczyć.
              </p>
          )}
          
          {user?.email && allowedEmails.includes(user.email) && (
            <button className='button-default btn' onClick={() => navigate(`/edit/${id}`)}>Edytuj post</button>
          )}
        </div>

        <div className='blog-content' dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <Footer />
    </>
  );
}

export default SingleBlogPost;
