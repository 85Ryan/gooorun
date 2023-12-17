import { Link } from 'react-router-dom';
import React from 'react';
import useSiteMetadata from '@/hooks/useSiteMetadata';
import useActivities from '@/hooks/useActivities';
import styles from './style.module.scss';
import { INFO_MESSAGE } from '@/utils/const';
import { ReactComponent as LogoSvg } from '@assets/gooorun_logo.svg';
import { ReactComponent as StravaSvg } from '@assets/strava.svg';
import { ReactComponent as WatchSvg } from '@assets/watch.svg';

const Header = () => {
  const { siteUrl } = useSiteMetadata();
  const { years } = useActivities();
  return (
    <>
      <nav className={styles.headerNav}>
        <div className="dib v-mid">
          <Link to={siteUrl} className="link dim">
            <LogoSvg className={styles.logoSVG} />
          </Link>
        </div>
        <div className={styles.headerSlogan}>
          <p>{INFO_MESSAGE(years.length)}</p>
        </div>
        <div className={styles.appsWrapper}>
          <StravaSvg className={styles.stravaSVG} />
          <WatchSvg className={styles.watchSVG} />
        </div>
      </nav>
    </>
  );
};

export default Header;
