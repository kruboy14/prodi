import React from 'react';
import { useState } from 'react';
import MenuItem from '../MenuItem';
import styles from './SideBar.module.scss';

import PostAddIcon from '@material-ui/icons/PostAdd';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import BuildIcon from '@material-ui/icons/Build';
import DescriptionIcon from '@material-ui/icons/Description';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';

interface IList {
  title: string;
  path: string | null;
  icon: React.ReactNode;
  iconClosed: React.ReactNode;
  iconOpened: React.ReactNode;
  subNav?: any;
}
const menuList: IList[] = [
  {
    title: 'Пости',
    path: '/admin/posts',
    icon: <DescriptionIcon />,
    iconClosed: <ArrowDropUpIcon />,
    iconOpened: <ArrowDropDownIcon />,
    subNav: [
      {
        title: 'Керування',
        path: '/admin/posts/control',
        icon: <BuildIcon />,
      },
      {
        title: 'Створити',
        path: '/admin/posts/add',
        icon: <PostAddIcon />,
      },
    ],
  },
  {
    title: 'Пости',
    path: '/admin/posts',
    icon: <DescriptionIcon />,
    iconClosed: <ArrowDropUpIcon />,
    iconOpened: <ArrowDropDownIcon />,
  },
  {
    title: 'Пости',
    path: '/admin/posts',
    icon: <DescriptionIcon />,
    iconClosed: <ArrowDropUpIcon />,
    iconOpened: <ArrowDropDownIcon />,
  },
];
const SideBar = () => {
  const [list, setList] = useState<IList[]>(menuList);
  return (
    <div className={styles.container}>
      <Link to="/admin">
        <div className={styles.title}>
          <span>Prodi Dashboard </span>
          <DashboardIcon />
        </div>
      </Link>
      <nav>
        <ul className={styles.menu}>
          {list.map((item, index) => {
            return <MenuItem item={item} className={styles.item} key={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
