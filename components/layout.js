import Header from './header';
import Footer from './footer';
import BottomNav from './bottom-nav';

//TODO move to footer component
//Use the <div> to allow scrolling to the bottom of the content with the sticky navbar on the bottom of the page
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
