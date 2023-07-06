// Standard link without client-side navigation, or CSS :target won't be triggered properly
import { ReactNode } from 'react';
import * as React from 'react';
import { useIntl } from 'gatsby-plugin-react-intl';

export const LinkToAnchor = ({ children, href }: { children: ReactNode; href: string }) => {
    const { locale, defaultLocale } = useIntl();
    const urlPrefix = locale === defaultLocale ? '' : `/${locale}`;
    return <a href={urlPrefix + href}>{children}</a>;
};
