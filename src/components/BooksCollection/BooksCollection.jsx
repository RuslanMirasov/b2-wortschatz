import css from '../BooksCollection/BooksCollection.module.scss';
import { Link } from 'react-router-dom';

const BooksCollection = ({ books }) => {
  return (
    <div className={css.BooksCollection}>
      {books.map(book => {
        const { id } = book;
        return (
          <Link key={id} to={`/${id}`} className={css.BooksCollectionItem}>
            <div className={css.BookImage}>
              <img src={require(`images/books/${id}.jpg`)} alt="book" />
            </div>
            <div className={css.HoverInfo}>
              <div className={css.IconBox}>
                <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="14" cy="14" r="13" stroke="#ffffff" strokeWidth="2" />
                  <path d="M28.5 28.5L23.5 24" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                  <path d="M9 14L14.5 14L19 14" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M14 9L14 14L14 19" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 14C3 7.92487 7.92487 3 14 3" stroke="#ffffff" />
                </svg>
                <span>Starten Sie</span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BooksCollection;
