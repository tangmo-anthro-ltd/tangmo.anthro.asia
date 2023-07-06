import * as React from 'react';
import { Footer } from './footer';
import { Header, IHeaderProps } from './header';
import { NavSection } from './navsection';
import { ReactNode } from 'react';
import { ColorSchemeProvider } from '../contexts/ColorSchemeContext';

export default ({ children, ...rest }: IProps) => (
    <ColorSchemeProvider>
        <Header {...rest} />
        <NavSection />
        <main id="main">{children}</main>
        <Footer />
    </ColorSchemeProvider>
);

interface IProps extends IHeaderProps {
    children: ReactNode;
}
