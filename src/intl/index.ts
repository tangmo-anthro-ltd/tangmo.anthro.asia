import owo from '@zuzak/owo';
import en from './en.json';
import th from './th.json';

export const languages = ['th', 'en', 'owo'] as const;
export type Locale = (typeof languages)[number];
export const defaultLocale: Locale = 'th';

const owoOverrides: Record<string, string> = {
    Telegram: 'Furrygram',
};

const owoify = (text: string): string => {
    const parts = text.split(/([{}])/g);
    let inBraces = false;
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === '{') inBraces = true;
        else if (parts[i] === '}') inBraces = false;
        else if (!inBraces) parts[i] = owo.translate(parts[i]);
    }
    return parts.join('');
};

const owoifyDeep = (obj: unknown): unknown => {
    if (typeof obj === 'string') {
        return obj in owoOverrides ? owoOverrides[obj] : owoify(obj);
    }
    if (typeof obj === 'object' && obj !== null) {
        const result: Record<string, unknown> = {};
        for (const [key, val] of Object.entries(obj)) {
            result[key] = owoifyDeep(val);
        }
        return result;
    }
    return obj;
};

const messages: Record<Locale, Record<string, unknown>> = {
    th,
    en,
    owo: owoifyDeep(en) as Record<string, unknown>,
};

const flattenMessages = (obj: Record<string, unknown>, prefix = ''): Record<string, string> => {
    const result: Record<string, string> = {};
    for (const key of Object.keys(obj)) {
        const val = obj[key];
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (typeof val === 'string') {
            result[fullKey] = val;
        } else if (typeof val === 'object' && val !== null) {
            Object.assign(result, flattenMessages(val as Record<string, unknown>, fullKey));
        }
    }
    return result;
};

const flatMessages: Record<Locale, Record<string, string>> = {
    th: flattenMessages(messages.th as Record<string, unknown>),
    en: flattenMessages(messages.en as Record<string, unknown>),
    owo: flattenMessages(messages.owo as Record<string, unknown>),
};

export const getMessages = (locale: Locale): Record<string, string> =>
    flatMessages[locale];

export const t = (locale: Locale, key: string): string =>
    flatMessages[locale]?.[key] ?? flatMessages[defaultLocale]?.[key] ?? key;

export const getLocalePrefix = (locale: Locale): string =>
    locale === defaultLocale ? '' : `/${locale}`;

export const localePath = (locale: Locale, path: string): string => {
    const prefix = getLocalePrefix(locale);
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return prefix + cleanPath;
};

export const getLocaleStaticPaths = () =>
    languages.map(locale => ({
        params: { locale: locale === defaultLocale ? undefined : locale },
        props: { locale },
    }));

export const localeFromParams = (params: { locale?: string }): Locale =>
    (params.locale as Locale) || defaultLocale;

export const switchLocalePath = (currentPath: string, currentLocale: Locale, targetLocale: Locale): string => {
    let stripped = currentPath;
    if (currentLocale !== defaultLocale) {
        const prefix = `/${currentLocale}`;
        if (stripped === prefix || stripped.startsWith(prefix + '/')) {
            stripped = stripped.slice(prefix.length) || '/';
        }
    }
    if (targetLocale === defaultLocale) {
        return stripped;
    }
    if (stripped === '/') {
        return `/${targetLocale}`;
    }
    return `/${targetLocale}${stripped}`;
};
