import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import Menu from '../sections/Menu';
import Footer from '../sections/Footer';
import { Editor } from '@tinymce/tinymce-react';
import googleFontImage from '../images/Google_Fonts_logo.png';

const allowedEmails = [
  'iwona.bendig@egodziny.pl',
  'krzysztof.warda@egodziny.pl',
  'dominik.pogorzelski@egodziny.pl'
];

export default function EditBlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    content: '',
    author: '',
    author_email: '',
    category: '',
    color: '#ffffff',
    reading_time: '',
    meta_description: '',
    public: true,
    icon: '',
  });
  const [loading, setLoading] = useState(true);

  const user = getAuth().currentUser;

  useEffect(() => {
    if (!user || !allowedEmails.includes(user.email)) {
      alert('Brak dostępu');
      navigate('/');
      return;
    }
    async function fetchPost() {
      if (id !== 'new') {
        const docRef = doc(db, 'blogs', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setForm(docSnap.data());
        }
      } else {
        setForm(prev => ({
          ...prev,
          author_email: user.email,
        }));
      }
      setLoading(false);
    }
    fetchPost();
  }, [id, user, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const now = new Date();
    const postId = id === 'new' ? form.title.toLowerCase().replaceAll(' ', '-').replaceAll('?', '') : id;
    await setDoc(doc(db, 'blogs', postId), {
      ...form,
      date: now,
    });
    navigate(`/blog/${postId}`);
  };

  if (loading) return <p></p>;

  return (
    <>
      <Menu />
      <main style={{ padding: '2rem' }}>
        <h1>{id === 'new' ? 'Nowy post' : 'Edytuj post'}</h1>
        <form className='blog-post-edit'  onSubmit={handleSubmit}>
          <input type="text" name="title" placeholder="Tytuł" value={form.title} onChange={handleChange} required />
          <br /><br />
          <input type="text" name="author" placeholder="Autor" value={form.author} onChange={handleChange} required />
          <br /><br />
          <input type="text" name="category" placeholder="Kategoria" value={form.category} onChange={handleChange} />
          <br /><br />
          <input type="text" name="color" placeholder="Kolor tła" value={form.color} onChange={handleChange} />
          <br /><br />
          <input type="text" name="reading_time" placeholder="Czas czytania" value={form.reading_time} onChange={handleChange} />
          <br /><br />
          <input type="text" name="meta_description" placeholder="Meta description" value={form.meta_description} onChange={handleChange} />
          <br /><br />
          <input type="text" name="icon" placeholder="Meta icon" value={form.icon} onChange={handleChange} />
          <br /><br />
          <div>
          <span >Wybierz ikonke: </span>
            <a href="https://fonts.google.com/icons" target="_blank" class="material-icons-link" rel="noopener noreferrer">
              <img src={googleFontImage} alt="Google font link" className='icon-link' />
            </a>
          </div>
          <Editor
            apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
            textareaName='Body'
            value={form.content}
            init={{
              height: 500,
              menubar: true,
              relative_urls: false,
              plugins: [
                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor',
                'searchreplace', 'visualblocks', 'code', 'fullscreen',
                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
              ],
              toolbar:
                'undo redo | blocks | bold italic underline forecolor backcolor | ' +
                'alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | ' +
                'link image | removeformat | help',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              paste_data_images: true,
            }}
            onEditorChange={(newText) => setForm({ ...form, content: newText })}
          />
          <br /><br />
          <label>
            <input type="checkbox" name="public" checked={form.public} onChange={handleChange} />
            &nbsp;Publiczny post (widoczny dla wszystkich)
          </label>
          <br /><br />
          <button className='button-default btn' type="submit">Zapisz</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
