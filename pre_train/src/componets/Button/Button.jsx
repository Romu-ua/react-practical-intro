import styles from './Button.module.css';

function Button(props) {
  const { type, disabled, handleClick, children } = props;

  return (
    <button
      className={styles.button}
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

export default Button;
