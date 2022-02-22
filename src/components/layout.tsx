import * as React from 'react';
import { Footer } from './footer';
import { Header } from './header';
import { NavSection } from './navsection';
import { ReactNode } from 'react';

export default ({ children, title }: IProps) => (
    <>
        <Header title={title} />
        <NavSection />
        <main id="main">{children}</main>
        <Footer />
    </>
);

interface IProps {
    title?: string;
    children: ReactNode;
}
