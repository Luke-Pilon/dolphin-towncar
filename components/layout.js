import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import BottomNav from './bottom-nav';

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <BottomNav />
            <Footer />
        </>
    );
}
