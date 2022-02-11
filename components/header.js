import DesktopHeader from './desktop-header';
import MobileHeader from './mobile-header';

export default function Header() {
    return typeof window !== 'undefined' && window.innerWidth < 768 ? (
        <MobileHeader />
    ) : (
        <DesktopHeader />
    );
}
