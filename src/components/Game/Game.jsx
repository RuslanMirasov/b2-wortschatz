import React, { useEffect } from 'react';
import css from '../Game/Game.module.scss';
import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import { Link, useLocation } from 'react-router-dom';
import books from '../../api/books';
import { randomNumber, newKey, markImportantWords, avatar, mixArray, getLetters } from '../../api/functions';

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
  const letters = getLetters(name);

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

  const letterClick = event => {
    event.preventDefault();
    const wordInput = event.target.closest('form').querySelector('input');
    const btn = event.target;
    btn.style.pointerEvents = 'none';
    btn.style.opacity = '0.2';
    const letter = btn.innerText;
    if (letter === '') {
      wordInput.value += ' ';
    } else {
      wordInput.value += letter;
    }
  };

  const handlerClear = event => {
    event.preventDefault();
    const form = event.target.closest('form');
    form.reset();
    const allLetterButtons = form.querySelectorAll('button');

    allLetterButtons.forEach(btn => {
      if (!btn.classList.contains('button')) {
        btn.style.opacity = '1';
        btn.style.pointerEvents = 'all';
      }
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
      <form className={css.Letters}>
        <input type="text" name="word" className={css.WordInput} />
        <ul className={css.Letters}>
          {letters.map(letter => {
            return (
              <button key={newKey()} className={css.Letter} onClick={letterClick}>
                {letter}
              </button>
            );
          })}
        </ul>
        <div className={css.GameButtons}>
          <button className="button">Проверить</button>
          <button className="button button--clear" onClick={handlerClear}>
            Сбросить
          </button>
        </div>
      </form>

      <div className={css.GameButtons}>
        <Link to={`../${currentBook.id}/${currentThema.id}/${randomNumber(wordCount, id)}`} className="button">
          Weiter
        </Link>
      </div>
    </Section>
  );
};

export default Game;
