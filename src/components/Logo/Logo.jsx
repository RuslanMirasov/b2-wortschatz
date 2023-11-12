import { NavLink } from 'react-router-dom';
import css from './Logo.module.scss';
import logo from '../../images/logo.svg';

const Logo = () => {
  return (
    <NavLink to="/" className={css.Logo}>
      <img src={logo} alt="logo" />
      <div className={css.LogoText}>
        <p>Deutscher</p>
        <span>Wortschatz</span>
      </div>
    </NavLink>
  );
};

export default Logo;
