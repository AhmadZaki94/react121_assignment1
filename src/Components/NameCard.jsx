import { useState } from 'react'
import styles from './nameCard.module.css'
import { PhoneCard } from './PhoneCard';

export const NameCard = ({fname, lname, email, image, phone}) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.nameCard} onClick={() => {
      setShow(!show);
    }}>
      
      <div className={styles.img_div}>
        <img src={image} alt="img" className={styles.img_style} />
      </div>
      <div className={styles.content_div} >
          <h3>{fname} {" "} {lname}</h3>
          <p>{email}</p>
          {show ? <PhoneCard mob={phone} /> : null}
      </div>
    </div>
  )
} 