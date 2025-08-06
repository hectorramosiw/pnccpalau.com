import { useCallback, useEffect, useState } from 'react';

export type Appearance = 'light' | 'dark' | 'system';

// This function is no longer needed since we are forcing light mode.
// const prefersDark = () => {
//     if (typeof window === 'undefined') {
//         return false;
//     }
//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
// };

const setCookie = (name: string, value: string, days = 365) => {
    if (typeof document === 'undefined') {
        return;
    }

    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
};

// MODIFIED: This function is now simplified to always set the light theme.
const applyTheme = (appearance: Appearance) => {
    // We are no longer checking for dark mode.
    // We will ensure the 'dark' class is always removed.
    document.documentElement.classList.remove('dark');
    // And if your theme relies on a 'light' class, we can add it here.
    // If not, this line is optional.
    // document.documentElement.classList.add('light');
};

const mediaQuery = () => {
    if (typeof window === 'undefined') {
        return null;
    }

    return window.matchMedia('(prefers-color-scheme: dark)');
};

// MODIFIED: This function is now simplified to always set the light theme.
const handleSystemThemeChange = () => {
    // Since we are forcing light mode, we no longer need to check
    // for system changes. This function can be simplified.
    applyTheme('light');
};

// MODIFIED: This function is now hardcoded to always initialize the light theme.
export function initializeTheme() {
    // We are no longer getting a saved preference; we force light mode.
    applyTheme('light');

    // We no longer need to listen for system theme changes.
    // If you want to keep the listener, it won't do anything now.
    // mediaQuery()?.addEventListener('change', handleSystemThemeChange);
}

// MODIFIED: This hook is modified to only allow 'light' appearance.
export function useAppearance() {
    const [appearance, setAppearance] = useState<Appearance>('light');

    const updateAppearance = useCallback((mode: Appearance) => {
        // We ignore the requested mode and always set to 'light'.
        setAppearance('light');

        // Store in localStorage for client-side persistence...
        localStorage.setItem('appearance', 'light');

        // Store in cookie for SSR...
        setCookie('appearance', 'light');

        // Apply the light theme.
        applyTheme('light');
    }, []);

    useEffect(() => {
        // We hardcode the initial theme to 'light'.
        updateAppearance('light');
        
        // We no longer need to remove the event listener on unmount.
        // If you choose to keep the event listener, you would still need this.
        // return () => mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
    }, [updateAppearance]);

    return { appearance, updateAppearance } as const;
}


// import { useCallback, useEffect, useState } from 'react';

// export type Appearance = 'light' | 'dark' | 'system';

// const prefersDark = () => {
//     if (typeof window === 'undefined') {
//         return false;
//     }

//     return window.matchMedia('(prefers-color-scheme: dark)').matches;
// };

// const setCookie = (name: string, value: string, days = 365) => {
//     if (typeof document === 'undefined') {
//         return;
//     }

//     const maxAge = days * 24 * 60 * 60;
//     document.cookie = `${name}=${value};path=/;max-age=${maxAge};SameSite=Lax`;
// };

// const applyTheme = (appearance: Appearance) => {
//     const isDark = appearance === 'dark' || (appearance === 'system' && prefersDark());

//     document.documentElement.classList.toggle('dark', isDark);
// };

// const mediaQuery = () => {
//     if (typeof window === 'undefined') {
//         return null;
//     }

//     return window.matchMedia('(prefers-color-scheme: dark)');
// };

// const handleSystemThemeChange = () => {
//     const currentAppearance = localStorage.getItem('appearance') as Appearance;
//     applyTheme(currentAppearance || 'system');
// };

// export function initializeTheme() {
//     const savedAppearance = (localStorage.getItem('appearance') as Appearance) || 'system';

//     applyTheme(savedAppearance);

//     // Add the event listener for system theme changes...
//     mediaQuery()?.addEventListener('change', handleSystemThemeChange);
// }

// export function useAppearance() {
//     const [appearance, setAppearance] = useState<Appearance>('system');

//     const updateAppearance = useCallback((mode: Appearance) => {
//         setAppearance(mode);

//         // Store in localStorage for client-side persistence...
//         localStorage.setItem('appearance', mode);

//         // Store in cookie for SSR...
//         setCookie('appearance', mode);

//         applyTheme(mode);
//     }, []);

//     useEffect(() => {
//         const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
//         updateAppearance(savedAppearance || 'system');

//         return () => mediaQuery()?.removeEventListener('change', handleSystemThemeChange);
//     }, [updateAppearance]);

//     return { appearance, updateAppearance } as const;
// }
