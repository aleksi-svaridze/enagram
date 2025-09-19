import './MobileHeader.scss';
import LogoPng from '../../assets/images/Logo.png';
import { CheckSpellingBlue, ChevronDownIcon, MenuIcon } from '../../assets/svgs/svgs';

export const MobileHeader = () => {
    return(
        <>
            <header className='mobile-header'>
                <img src={LogoPng} />

                <div className='mobile-header__icon'>
                    <MenuIcon />
                </div>
            </header>

            <div className='active-service'>
                <div className='active-service__content'><CheckSpellingBlue /> <p>ტექსტის შედარება</p> <ChevronDownIcon /></div>
            </div>
        </>
    )
}