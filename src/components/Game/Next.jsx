import css from '../Game/Game.module.scss';
import { Link } from 'react-router-dom';

const Next = ({ path }) => {
  return (
    <div className={css.GameButtons}>
      <Link to={path} className="button">
        Weiter
      </Link>
    </div>
  );
};

export default Next;
