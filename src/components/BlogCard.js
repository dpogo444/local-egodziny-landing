import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

const allowedEmails = [
  'iwona.bendig@egodziny.pl',
  'krzysztof.warda@egodziny.pl',
  'dominik.pogorzelski@egodziny.pl'
];

export default function BlogCard({ post }) {
  const navigate = useNavigate();
  const user = getAuth().currentUser;

  const handleClick = () => {
    navigate(`/blog/${post.id}`);
  };

  function parseCategories(categories) {
    const categoriesArray = categories.split('|').map(category => category.trim());
    return categoriesArray.map(category => `#${category}`).join(' ');
  }

  const iconName = post.icon || 'article';

  return (
    <div
      className="blog-card"
      onClick={handleClick}
    >
      <div className="blog-card-color-container"
        style={{ backgroundColor: post.color, borderRadius: '20px', height: '200px', width: '250px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span className="blog-icon material-icons" style={{ fontSize: '100px' }}>
          {iconName}
        </span>
      </div>
      <div className='blog-card-content'>
        <h4 className="blog-card-title">{post.title}</h4>
        <p className="blog-card-meta">
          {post.author} &nbsp;&nbsp;&nbsp;&nbsp; {post.date?.toDate().toLocaleDateString()} &nbsp;&nbsp;&nbsp;&nbsp; {post.reading_time}
        </p>
        <p className="blog-card-categories">{parseCategories(post.category)}</p>
        <div className="blog-card-content-preview"></div>
        {user?.email && allowedEmails.includes(user.email) && (
          <button
            className="button-default btn"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/edit/${post.id}`);
            }}
            style={{ marginTop: '0.5rem' }}
          >
            Edytuj
          </button>
        )}
      </div>
    </div>
  );
}
