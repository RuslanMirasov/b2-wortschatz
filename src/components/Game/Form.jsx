import css from '../Game/Game.module.scss';
import { newKey, getLetters } from '../../api/functions';

const Form = ({ wordName, onSubmit }) => {
  const letters = getLetters(wordName);

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

  return (
    <form className={css.Letters} onSubmit={onSubmit}>
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
  );
};

export default Form;
