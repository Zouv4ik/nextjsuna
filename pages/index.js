import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
     <Image
      src="../public/image1.png"
      width={50}
      height={50}
      alt="Test"
     />
    </div>
  )
}