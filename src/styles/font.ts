import { Plus_Jakarta_Sans, Aladin } from 'next/font/google';

export const fontJakarta = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-jakarta'
});

export const fontAladin = Aladin({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-aladin',
    weight: '400'
})