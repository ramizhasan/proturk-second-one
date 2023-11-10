import { memo } from 'react';
 
 function Header() {
    console.log('HEADER rendered');
    return(
        <header>
            HEADER COMPONENTI
        </header>
    )
}

export default memo(Header);