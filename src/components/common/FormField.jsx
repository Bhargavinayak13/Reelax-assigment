import styles from './FormField.module.css';

export default function FormField({ label, optional, children }) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>
        {label}
        {optional && <span className={styles.optional}> (Optional)</span>}
      </label>
      {children}
    </div>
  );
}
