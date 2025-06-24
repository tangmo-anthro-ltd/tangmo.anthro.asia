// Standard link without client-side navigation, or CSS :target won't be triggered properly
import { useIntl } from 'gatsby-plugin-react-intl';
import { ReactNode } from 'react';

export const LinkToAnchor = ({ children, href }: { children: ReactNode; href: string }) => {
    const { locale, defaultLocale } = useIntl();
    const urlPrefix = locale === defaultLocale ? '' : `/${locale}`;
    return <a href={urlPrefix + href}>{children}</a>;
};
