import css from '../Game/Game.module.scss';
import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { Link, useLocation } from 'react-router-dom';
import books from '../../api/books';
import { randomNumber, newKey, markImportantWords } from '../../api/functions';

const Game = () => {
  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const currentBook = books.find(book => book.id === Number(urlPath[1]));
  const currentThema = currentBook.thems.find(them => them.id === Number(urlPath[2]));
  const currentWord = currentThema.words.find(word => word.id === Number(urlPath[3]));
  const wordCount = currentThema.words.length;
  const { id, examples, name, translates, progress } = currentWord;

  return (
    <Section>
      <BreadCrumbs location={location} books={books} />
      <h1 className={css.WordTitle}>{name}</h1>
      <div className={css.Dialog}>
        {examples.map((example, index) => {
          const avatarNumber = index + 1;
          return (
            <div key={newKey()} className={css.DialogItem}>
              <div className={css.Avatar}>
                <img src={require(`images/dialog/1.jpg`)} alt="partner" />
              </div>
              <p>{markImportantWords(example, name.split(' '))}</p>
            </div>
          );
        })}
      </div>
      <div className={css.GameButtons}>
        <Link to={`../${currentBook.id}/${currentThema.id}/${randomNumber(wordCount, id)}`} className="button">
          Weiter
        </Link>
      </div>
    </Section>
  );
};

export default Game;