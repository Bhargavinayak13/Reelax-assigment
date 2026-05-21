import styles from './SelectField.module.css';

export default function SelectField({ value, onChange, placeholder, options, disabled }) {
  return (
    <select
      className={`${styles.select} ${disabled ? styles.disabled : ''}`}
      value={value}
      onChange={onChange}
      disabled={disabled}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}
