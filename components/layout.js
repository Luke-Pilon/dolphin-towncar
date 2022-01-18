import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <meta charset='UTF-8' />
                <meta
                    name='viewport'
                    content='initial-scale=1.0, width=device-width'
                />
                <link rel='icon' href='/logo.png' />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
