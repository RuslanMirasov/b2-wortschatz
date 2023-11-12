import css from '../WordsCollection/WordsCollection.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { Link, useLocation } from 'react-router-dom';
import books from '../../api/books';
import { randomNumber } from '../../api/functions';

const WordsCollection = () => {
  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const currentBook = books.find(book => book.id === Number(urlPath[1]));
  const currentThema = currentBook.thems.find(them => them.id === Number(urlPath[2]));
  return (
    <>
      <BreadCrumbs location={location} books={books} />
      <div className={css.TitleBox}>
        <h1>
          {currentThema.name} <span>({currentThema.words.length} Wörtern)</span>
        </h1>
        <Link to={`${location.pathname}/${randomNumber(currentThema.words.length)}`} className="button">
          <p>Beginn des Unterrichts</p>
        </Link>
      </div>

      <ul className={css.WordsList}>
        {currentThema.words.map(thema => {
          const { id, name, progress } = thema;
          const procent = progress * 25;
          return (
            <Link key={id} className={css.WordsListItem} to={`${location.pathname}/${id}`}>
              <span className={css.Number}>{id}</span>
              <p className={css.Name}>{name}</p>
              <div className={css.Progress}>
                <div className={css.ProcentLine} style={{ width: `${procent}%` }}></div>
                <p>{procent}%</p>
              </div>
            </Link>
          );
        })}
      </ul>
      <Link to={`${location.pathname}/${randomNumber(currentThema.words.length)}`} className="button">
        <p>Beginn des Unterrichts</p>
      </Link>
    </>
  );
};

export default WordsCollection;
