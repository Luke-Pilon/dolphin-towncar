import { useEffect } from 'react';
import DesktopHeader from './desktop-header';
import MobileHeader from './mobile-header';
import { useState } from 'react';

export default function Header() {
    const [isMobile, setIsMobile] = useState();
    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);
    return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
