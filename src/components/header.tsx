import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useIntl } from 'gatsby-plugin-react-intl';

export function Header({ title, description, extraMeta = [] }: IHeaderProps) {
    const { locale, formatMessage } = useIntl();
    const name = formatMessage({ id: 'meta.name' });

    let builtTitle = name;
    if (title) {
        builtTitle = title + ' - ' + name;
    }

    const meta = [
        {
            name: 'description',
            content: description || formatMessage({ id: 'meta.defaultDesc' }),
        },
        {
            name: 'author',
            content: name,
        },
        ...extraMeta,
    ];

    return (
        <Helmet
            title={builtTitle}
            meta={meta}
            link={[
                {
                    // Bootstrap
                    rel: 'stylesheet',
                    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
                    integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3',
                    crossOrigin: 'anonymous',
                },
            ]}
        >
            <html lang={locale} />
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
