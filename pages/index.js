import Image from 'next/image';
import image1 from '../public/image1.png';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
     <Image
      src={image1}
      width={50}
      height={50}
      alt="Test"
     />
    </div>
  )
}