// import css from '../Game/Game.module.scss';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { Link, useLocation } from 'react-router-dom';
import books from '../../api/books';
import { randomNumber } from '../../api/functions';

const Game = () => {
  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const currentBook = books.find(book => book.id === Number(urlPath[1]));
  const currentThema = currentBook.thems.find(them => them.id === Number(urlPath[2]));
  const currentWord = currentThema.words.find(word => word.id === Number(urlPath[3]));
  const wordCount = currentThema.words.length;
  return (
    <>
      <BreadCrumbs location={location} books={books} />
      <h1>{currentWord.name}</h1>
      <Link to={`../${Number(urlPath[1])}/${Number(urlPath[2])}/${randomNumber(wordCount)}`} className="button">
        Weiter
      </Link>
    </>
  );
};

export default Game;
