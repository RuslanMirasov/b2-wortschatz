import React, { useEffect } from 'react';
import css from '../Game/Game.module.scss';
import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { Link, useLocation } from 'react-router-dom';
import books from '../../api/books';
import { randomNumber, newKey, markImportantWords, avatar, mixArray } from '../../api/functions';

const Game = () => {
  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const currentBook = books.find(book => book.id === Number(urlPath[1]));
  const currentThema = currentBook.thems.find(them => them.id === Number(urlPath[2]));
  const currentWord = currentThema.words.find(word => word.id === Number(urlPath[3]));
  const wordCount = currentThema.words.length;
  const avatars = avatar();
  const { id, examples, name, translates } = currentWord;
  const mixedTranslates = mixArray(translates);

  const handleAnswerClick = event => {
    const currentButton = event.target;
    const isAnswerTrue = currentButton.dataset.answer;
    currentButton.style.color = '#fff';
    if (isAnswerTrue === 'false') {
      currentButton.style.backgroundColor = 'red';
    } else {
      currentButton.style.backgroundColor = '#229631';
    }
    const allButtons = event.target.closest('div').querySelectorAll('button');
    allButtons.forEach(btn => {
      btn.style.pointerEvents = 'none';
    });
  };

  useEffect(() => {
    const exampleElements = document.querySelectorAll('.exampleEl');
    exampleElements.forEach(element => {
      const text = element.textContent;
      const newText = markImportantWords(text, name.split(' '));
      element.innerHTML = newText;
    });
  }, [name]);

  return (
    <Section>
      <BreadCrumbs location={location} books={books} />
      <h1 className={css.WordTitle}>{name}</h1>
      <div className={css.Dialog}>
        {examples.map((example, index) => {
          return (
            <div key={newKey()} className={css.DialogItem}>
              <div className={css.Avatar}>
                <img src={require(`images/dialog/${avatars[index]}.jpg`)} alt="partner" />
              </div>
              <p className="exampleEl">{example}</p>
            </div>
          );
        })}
      </div>

      <div className={css.Answers}>
        <h2>Wählen Sie eine Übersetzung:</h2>
        {mixedTranslates.map(translate => {
          const { name, status } = translate;
          return (
            <button key={newKey()} className={css.AnswerBtn} data-answer={status} onClick={handleAnswerClick}>
              {name}
            </button>
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
