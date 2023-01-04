import Jumbotron from '../../svg/Jumbotron';
import TiledBackground from '../../svg/TiledBackground';
import styles from './index.module.scss';

export default function Hero() {
  return (
    <div className="h-screen">
      {/* TODO: Use grid? */}
      <div className="flex h-screen flex-col justify-center">
        <TiledBackground />
        <div className="text-beige mt-28 m-auto">
          <Jumbotron className={styles.jumbotron} />
        </div>
      </div>
    </div>
  );
}
