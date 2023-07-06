import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-react-intl';
import { useEffect } from 'react';
import { useColorSchemeContext } from '../contexts/ColorSchemeContext';

export function Header({ title, description, extraMeta = [] }: IHeaderProps) {
    const { colorScheme, setColorScheme } = useColorSchemeContext();
    const { locale, formatMessage } = useIntl();
    const name = formatMessage({ id: 'meta.name' });

    let builtTitle = name;
    if (title) {
        builtTitle = title + ' - ' + name;
    }
    let desc = description || formatMessage({ id: 'meta.defaultDesc' });

    const meta = [
        { name: 'description', content: desc },
        { name: 'og:type', content: 'website' },
        { name: 'twitter:title', content: builtTitle },
        { name: 'twitter:description', content: desc },
        { name: 'twitter:site', content: '@TangmoEat' },
        { name: 'twitter:creator', content: '@TangmoEat' },
        ...extraMeta,
    ];

    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: light)').matches) {
            setColorScheme('light');
        }
    }, []);

    return (
        <Helmet
            title={builtTitle}
            meta={meta}
            link={[
                {
                    // Bootstrap
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
                    integrity: 'sha256-fx038NkLY4U1TCrBDiu5FWPEa9eiZu01EiLryshJbCo=',
                    crossOrigin: 'anonymous',
                },
            ]}
        >
            <html lang={locale} data-bs-theme={colorScheme} />
        </Helmet>
    );
}
// <script src="https://kit.fontawesome.com/d58dae4cfc.js" crossOrigin="anonymous" />

export interface IHeaderProps {
    title?: string;
    description?: string;
    extraMeta?: IMeta[];
}
interface IMeta {
    name: string;
    content: string;
}
