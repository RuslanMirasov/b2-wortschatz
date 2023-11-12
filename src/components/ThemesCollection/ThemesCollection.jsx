import css from '../ThemesCollection/ThemesCollection.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { Link, useLocation } from 'react-router-dom';
import books from '../../api/books';

const ThemesCollection = () => {
  let wordsCount = 0;
  const location = useLocation();
  const bookId = location.pathname.split('/')[1];
  const currentBook = books.find(book => book.id === Number(bookId));
  const { id, level, name, thems } = currentBook;
  thems.forEach(them => {
    wordsCount += them.words.length;
  });
  return (
    <>
      <BreadCrumbs location={location} books={books} />
      <img src={require(`images/books/${id}.jpg`)} alt="book" />
      <h1>{name}</h1>
      <p>{level}</p>
      <p>Количество тем: {thems.length}</p>
      <p>Количество слов: {wordsCount}</p>
      <div className={css.ThemesCollection}>
        {thems.map(theme => {
          const { id, name, words } = theme;
          return (
            <Link key={id} to={`${location.pathname}/${id}`} className={css.ThemesCollectionItem}>
              <p>Номер:{id}</p>
              <p>Название:{name}</p>
              <p>К-во слов:{words.length}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default ThemesCollection;
