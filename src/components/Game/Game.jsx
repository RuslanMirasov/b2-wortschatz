import React, { useState, useEffect } from 'react';
import Section from '../../components/Section/Section';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Word from '../../components/Game/Word';
import Answers from '../../components/Game/Answers';
import Form from '../../components/Game/Form';
import Next from '../../components/Game/Next';
import { useLocation } from 'react-router-dom';
import books from '../../api/books';
import { randomNumber } from '../../api/functions';

const Game = () => {
  const [isTranslated, setIsTranslated] = useState(false);
  const [looser, setlooser] = useState(false);
  const [winner, setWinner] = useState(false);

  const location = useLocation();
  const urlPath = location.pathname.split('/');
  const currentBook = books.find(book => book.id === Number(urlPath[1]));
  const currentThema = currentBook.thems.find(them => them.id === Number(urlPath[2]));
  const currentWord = currentThema.words.find(word => word.id === Number(urlPath[3]));
  const { id, examples, name, translates } = currentWord;

  const handleAnswerClick = event => {
    const currentButton = event.target;
    const isAnswerTrue = currentButton.dataset.answer;
    if (isAnswerTrue === 'true') {
      return setIsTranslated(true);
    }
    setlooser(true);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    if (event.target.word.value === name) {
      setWinner(true);
      return;
    }
    setlooser(true);
  };

  useEffect(() => {
    setIsTranslated(false);
    setlooser(false);
    setWinner(false);
  }, [name]);

  return (
    <Section>
      <BreadCrumbs location={location} books={books} />
      {looser && <h1>Looser!!!</h1>}
      {winner && <h1>Winner!!!</h1>}
      {!isTranslated && !looser && <Word name={name} examples={examples} />}
      {!isTranslated && !looser && !winner && <Answers translates={translates} answerClick={handleAnswerClick} />}
      {isTranslated && !looser && !winner && <Form wordName={name} onSubmit={handleFormSubmit} />}
      {(looser || winner) && <Next path={`../${currentBook.id}/${currentThema.id}/${randomNumber(currentThema.words.length, id)}`} />}
    </Section>
  );
};

export default Game;
