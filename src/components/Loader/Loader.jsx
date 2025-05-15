import styles from './Loader.module.css';
import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#3f51b5"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};
