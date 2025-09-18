import './Sidebar.scss';
import { AlignCenterIcon, CheckIcon, CheckSpelling, ChevronRightIcon, ChevronsLeftIcon, DotsMenuIcon, Mic, PdfIcon } from '../../assets/svgs/svgs';
import Logoimage from '../../assets/images/logo.png';

const Sidebar = () => {
    return (
        <aside>
           <div className='toggle-menu'>
            <ChevronsLeftIcon fill='none' width='20' height='20' />
           </div>

           <img src={Logoimage} className='sidebar-logo' />

           <nav className='menu'>
                <ul className='menu-list'>
                    <li className='menu-list__item'>
                        <CheckIcon /> მართლმწერი
                    </li>

                    <li className='menu-list__item'>
                        <CheckSpelling /> ტექსტის შედარება
                    </li>

                    <li className='menu-list__item'>
                        <Mic /> ხმა <ChevronRightIcon /> ტექსტი
                    </li>

                     <li className='menu-list__item'>
                        <AlignCenterIcon /> ტექსტი <ChevronRightIcon /> ხმა
                    </li>

                     <li className='menu-list__item'>
                        <PdfIcon /> PDF კონვერტაცია
                    </li>
                </ul>
           </nav>

           <div className='sidebar-profile'>
                <div className='sidebar-profile__user'>
                    
                    <div style={{display: 'flex', alignItems: 'center', columnGap: '.5rem'}}>
                        <div className='sidebar-profile__user--image'>ს</div>
                        <p>სახელი გვარი</p>
                    </div>
    
                    <DotsMenuIcon />
                </div>
           </div>
        </aside>
    )
}

export default Sidebar;