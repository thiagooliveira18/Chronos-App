import styles from './styles.module.css';

type InputProps = {
    id: string;
    title?: string;
} & React.ComponentProps<'input'>;

export function Input({ id, title, type, ...rest }: InputProps) {
    return (
        <>
            {title &&
                <label htmlFor={id}>{title}</label>
            }
            <input className={styles.input} id={id} type={type} {...rest} />
        </>
    );
}