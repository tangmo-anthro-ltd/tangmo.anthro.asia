import owo from '@zuzak/owo';
import messagesRaw from './messages.json';

export const languages = ['th', 'en', 'uwu'] as const;
export type Locale = (typeof languages)[number];
export const defaultLocale: Locale = 'th';

type BaseLocale = 'th' | 'en';
type MessageLeaf = Record<BaseLocale, string>;
interface MessageBranch {
    [key: string]: MessageLeaf | MessageBranch;
}

const owoOverrides: Record<string, string> = {
    Telegram: 'Furrygram',
};

const uwuify = (text: string): string => {
    const parts = text.split(/([{}])/g);
    let inBraces = false;
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === '{') inBraces = true;
        else if (parts[i] === '}') inBraces = false;
        else if (!inBraces) parts[i] = owo.translate(parts[i]);
    }
    return parts.join('');
};

const isMessageLeaf = (value: unknown): value is MessageLeaf => {
    if (typeof value !== 'object' || value === null) {
        return false;
    }
    const candidate = value as Partial<MessageLeaf>;
    return typeof candidate.th === 'string' && typeof candidate.en === 'string';
};

const flattenMessagesForLocale = (
    obj: Record<string, MessageLeaf | MessageBranch>,
    locale: BaseLocale,
    prefix = ''
): Record<string, string> => {
    const result: Record<string, string> = {};
    for (const key of Object.keys(obj)) {
        const val = obj[key];
        const fullKey = prefix ? `${prefix}.${key}` : key;
        if (isMessageLeaf(val)) {
            result[fullKey] = val[locale];
        } else if (typeof val === 'object' && val !== null) {
            Object.assign(
                result,
                flattenMessagesForLocale(val as Record<string, MessageLeaf | MessageBranch>, locale, fullKey)
            );
        }
    }
    return result;
};

const typedMessages = messagesRaw as Record<string, MessageLeaf | MessageBranch>;
const thMessages = flattenMessagesForLocale(typedMessages, 'th');
const enMessages = flattenMessagesForLocale(typedMessages, 'en');
const uwuMessages = Object.fromEntries(
    Object.entries(enMessages).map(([key, value]) => [key, value in owoOverrides ? owoOverrides[value] : uwuify(value)])
) as Record<string, string>;

const flatMessages: Record<Locale, Record<string, string>> = {
    th: thMessages,
    en: enMessages,
    uwu: uwuMessages,
};

export const getMessages = (locale: Locale): Record<string, string> => flatMessages[locale];

export const t = (locale: Locale, key: string): string =>
    flatMessages[locale]?.[key] ?? flatMessages[defaultLocale]?.[key] ?? key;

export const getLocalePrefix = (locale: Locale): string => (locale === defaultLocale ? '' : `/${locale}`);

const normalizePathname = (pathname: string): string => {
    if (!pathname || pathname === '/') {
        return '/';
    }
    return `${pathname.replace(/\/+$/, '')}/`;
};

export const localePath = (locale: Locale, path: string): string => {
    const prefix = getLocalePrefix(locale);
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    const hashIndex = cleanPath.indexOf('#');
    const pathname = hashIndex >= 0 ? cleanPath.slice(0, hashIndex) : cleanPath;
    const hash = hashIndex >= 0 ? cleanPath.slice(hashIndex) : '';
    return `${prefix}${normalizePathname(pathname)}${hash}`;
};

export const getLocaleStaticPaths = () =>
    languages.map(locale => ({
        params: { locale: locale === defaultLocale ? undefined : locale },
        props: { locale },
    }));

export const localeFromParams = (params: { locale?: string }): Locale => (params.locale as Locale) || defaultLocale;

export const switchLocalePath = (currentPath: string, currentLocale: Locale, targetLocale: Locale): string => {
    let stripped = currentPath;
    if (currentLocale !== defaultLocale) {
        const prefix = `/${currentLocale}`;
        if (stripped === prefix || stripped.startsWith(prefix + '/')) {
            stripped = stripped.slice(prefix.length) || '/';
        }
    }
    const normalized = normalizePathname(stripped);
    if (targetLocale === defaultLocale) {
        return normalized;
    }
    return `/${targetLocale}${normalized}`;
};
