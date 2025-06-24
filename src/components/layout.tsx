import { ReactNode } from 'react';
import { ColorSchemeProvider } from '../contexts/ColorSchemeContext';
import { Footer } from './footer';
import { Header, IHeaderProps } from './header';
import { NavSection } from './navsection';

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
