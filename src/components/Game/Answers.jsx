import css from '../Game/Game.module.scss';
import { newKey, mixArray } from '../../api/functions';

const Answers = ({ translates, answerClick }) => {
  const mixedTranslates = mixArray(translates);
  return (
    <div className={css.Answers}>
      <h2>Wählen Sie eine Übersetzung:</h2>
      {mixedTranslates.map(translate => {
        const { name, status } = translate;
        return (
          <button key={newKey()} className={css.AnswerBtn} data-answer={status} onClick={answerClick}>
            {name}
          </button>
        );
      })}
    </div>
  );
};

export default Answers;
