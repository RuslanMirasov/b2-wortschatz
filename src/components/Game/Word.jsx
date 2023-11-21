import css from '../Game/Game.module.scss';
import { newKey, avatar } from '../../api/functions';

const Word = ({ name, examples }) => {
  const avatars = avatar();
  return (
    <>
      <h1 className={css.WordTitle}>{name}</h1>
      <div className={css.Dialog}>
        {examples.map((example, index) => {
          return (
            <div key={newKey()} className={css.DialogItem}>
              <div className={css.Avatar}>
                <img src={require(`images/dialog/${avatars[index]}.jpg`)} alt="partner" />
              </div>
              <p>{example}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Word;
