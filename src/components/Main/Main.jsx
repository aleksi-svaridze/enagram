import { LeftRightSideDirectionArrowIcon, PlusIcon } from '../../assets/svgs/svgs';
import { Btn } from '../Btn/Btn';
import './Main.scss';
// import { useWindowSize } from 'usehooks-ts';

const Main = () => {
  // const {width} = useWindowSize()

    return (
        <main className='main'>
          <header className='main-header'>
            <form className='main-header__form'>
              
              <select>
                <option>ქართული</option>
              </select>

              <div>
                <input type='checkbox' />
                <label>ფორმატის შენარჩუნება</label>
              </div>

            </form>

            <Btn textContent={'ახლის გახსნა'} Icon={PlusIcon} paddingLeft={'1.2rem'} paddingRight={'1.6rem'} />
      
          </header>

          <div className='main-text-checker-wrapper'>
            <textarea className='main-text-checker-wrapper__textarea' placeholder='დაიწყე წერა...'></textarea>
            <div style={{flexShrink: '0', height: '3.2rem', width: '3.2rem'}}>
                <LeftRightSideDirectionArrowIcon fill={'none'} width={'32'} height={'32'} />
            </div>
            <textarea className='main-text-checker-wrapper__textarea' placeholder='დაიწყე წერა...'></textarea>
          </div>

          <div className='main-btn-wrapper'>
            <Btn textContent={'შედარება'} paddingRight='3.7rem' paddingLeft={'3.7rem'} />
          </div>
        </main>
    )
}

export default Main;