import en from './en.json';
import owo from './owo.json';
import th from './th.json';

export const languages = ['th', 'en', 'owo'] as const;
export type Locale = (typeof languages)[number];
export const defaultLocale: Locale = 'th';

const messages: Record<Locale, Record<string, unknown>> = {
    th,
    en,
    owo,
};

function flattenMessages(obj: Record<string, unknown>, prefix = ''): Record<string, string> {
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
}

const flatMessages: Record<Locale, Record<string, string>> = {
    th: flattenMessages(messages.th as Record<string, unknown>),
    en: flattenMessages(messages.en as Record<string, unknown>),
    owo: flattenMessages(messages.owo as Record<string, unknown>),
};

export function getMessages(locale: Locale): Record<string, string> {
    return flatMessages[locale];
}

export function t(locale: Locale, key: string): string {
    return flatMessages[locale]?.[key] ?? flatMessages[defaultLocale]?.[key] ?? key;
}

export function getLocalePrefix(locale: Locale): string {
    return locale === defaultLocale ? '' : `/${locale}`;
}

export function localePath(locale: Locale, path: string): string {
    const prefix = getLocalePrefix(locale);
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    return prefix + cleanPath;
}

export function switchLocalePath(currentPath: string, currentLocale: Locale, targetLocale: Locale): string {
    // Strip current locale prefix from the front of the path
    let stripped = currentPath;
    if (currentLocale !== defaultLocale) {
        const prefix = `/${currentLocale}`;
        if (stripped === prefix || stripped.startsWith(prefix + '/')) {
            stripped = stripped.slice(prefix.length) || '/';
        }
    }
    // Build target path
    if (targetLocale === defaultLocale) {
        return stripped;
    }
    // Avoid double slash: if stripped is "/" just return "/locale"
    if (stripped === '/') {
        return `/${targetLocale}`;
    }
    return `/${targetLocale}${stripped}`;
}
