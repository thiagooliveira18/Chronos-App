import {
    HistoryIcon,
    HouseIcon,
    MoonIcon,
    SettingsIcon,
    SunIcon,
} from 'lucide-react';

import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type ThemeType = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<ThemeType>(() => {
        const storageTheme =
            (localStorage.getItem('theme') as ThemeType) || 'dark';
        return storageTheme;
    });

    const ThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />,
    };

    function handleTheme(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ) {
        event.preventDefault();
        setTheme(prevTheme => {
            return prevTheme === 'dark' ? 'light' : 'dark';
        });
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Ir para Home'
                title='Ir para Home'
            >
                <HouseIcon />
            </a>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Ver histórico'
                title='Ver histórico'
            >
                <HistoryIcon />
            </a>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Ir para Configurações'
                title='Ir para Configurações'
            >
                <SettingsIcon />
            </a>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Mudar tema'
                title='Mudar tema'
                onClick={handleTheme}
            >
                {ThemeIcon[theme]}
            </a>
        </nav>
    );
}
