import styles from './styles.module.css';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <a href='#'>Entendendo como funciona a técnica pomodoro</a>
            <a href='#'>
                Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com
                S2
            </a>
        </footer>
    );
}
