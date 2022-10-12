import * as React from 'react';
import { Footer } from './footer';
import { Header, IHeaderProps } from './header';
import { NavSection } from './navsection';
import { ReactNode } from 'react';

export default ({ children, ...rest }: IProps) => (
    <>
        <Header {...rest} />
        <NavSection />
        <main id="main">{children}</main>
        <Footer />
    </>
);

interface IProps extends IHeaderProps {
    children: ReactNode;
}
