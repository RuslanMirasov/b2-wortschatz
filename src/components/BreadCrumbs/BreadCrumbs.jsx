import css from '../BreadCrumbs/BreadCrumbs.module.scss';
import { Link } from 'react-router-dom';
import { newKey } from '../../api/functions';

const BreadCrumbs = ({ location, books }) => {
  const { pathname } = location;
  const pathList = pathname.split('/');
  const urlList = [{ text: 'Bücher', url: '../' }];
  if (pathList[1]) {
    urlList.push({ text: books[Number(pathList[1]) - 1].name, url: `../${pathList[1]}` });
  }
  if (pathList[2]) {
    urlList.push({ text: books[Number(pathList[1]) - 1].thems[Number(pathList[2]) - 1].name, url: `../${pathList[1]}/${pathList[2]}` });
  }
  if (pathList[3]) {
    urlList.push({
      text: books[Number(pathList[1]) - 1].thems[Number(pathList[2]) - 1].words[Number(pathList[3]) - 1].id,
      url: `../${pathList[1]}/${pathList[2]}/${pathList[3]}`,
    });
  }
  return (
    <ul className={css.BreadCrumbs}>
      {pathList.map((url, index) => {
        return (
          <li key={newKey()}>
            <Link to={urlList[index].url}>{urlList[index].text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BreadCrumbs;
