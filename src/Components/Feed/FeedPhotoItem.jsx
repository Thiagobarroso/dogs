import React from "react";
import styles from "./FeedPhotosItem.module.css";

function FeedPhotoItem({ photo, setModalPhoto }) {
  const handleClick = () => {
    setModalPhoto(photo);
  };

  return (
    <li className={styles.photo} onClick={handleClick}>
      <img src={photo.src} alt={photo.title} className={styles.image} />
      <span className={styles.acessos}>{photo.acessos}</span>
    </li>
  );
}

export default FeedPhotoItem;
