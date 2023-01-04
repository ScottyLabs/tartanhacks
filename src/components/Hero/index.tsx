import clsx from 'clsx';
import Jumbotron from '../../svg/Jumbotron';
import TiledBackground from '../../svg/TiledBackground';
import { RegisterButton } from '../Header';
import styles from './index.module.scss';

export default function Hero() {
  return (
    <div className="h-screen">
      {/* TODO: Use grid? */}
      <div className="flex h-screen flex-col justify-center">
        <TiledBackground />
        <div className="text-beige md:mt-28 m-auto">
          <Jumbotron
            className={clsx(styles.jumbotron, 'w-[80vw] lg:w-[40vw] ')}
          />
          <RegisterButton className="sm:hidden mt-10 shadow-2xl" />
        </div>
      </div>
    </div>
  );
}
