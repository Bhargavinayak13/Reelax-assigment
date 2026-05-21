import styles from './CouponOption.module.css';

export default function CouponOption({ code, description, isSelected, onSelect }) {
  return (
    <div
      className={`${styles.option} ${isSelected ? styles.active : ''}`}
      onClick={onSelect}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onSelect()}
    >
      <div className={styles.left}>
        <span className={styles.code}>{code}</span>
        <span className={styles.desc}>{description}</span>
      </div>
      <div className={`${styles.radio} ${isSelected ? styles.radioFilled : styles.radioEmpty}`}>
        {isSelected && <div className={styles.radioDot} />}
      </div>
    </div>
  );
}
