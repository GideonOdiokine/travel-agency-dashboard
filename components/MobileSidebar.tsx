// @ts-nocheck
import { Link } from 'react-router'
import { SidebarComponent } from '@syncfusion/ej2-react-navigations'
import NavItems from './NavItems'

const MobileSidebar = () => {
    let sidebar: SidebarComponent;

    const toggleSidebar = () => {
        sidebar.toggle()
    }

    return (
        <div className='mobile-sidebar wrapper'>
            <header>
                <Link to='/'>
                    <img src="/assets/icons/logo.svg" alt="logo" className='size-[30px]' />
                    <h1>Vistoura</h1>
                </Link>
                <button className='cursor-pointer' onClick={toggleSidebar}>
                    <img src="/assets/icons/menu.svg" alt="menu" className='size-[30px]' />
                </button>
            </header>
            <SidebarComponent
                style={{ width: '270px' }}
                ref={(Sidebar: any) => sidebar = Sidebar}
                created={() => sidebar.hide()}
                closeOnDocumentClick={true}
                showBackdrop={true}
                type="over"
            >
                <NavItems handleClick={toggleSidebar} />
            </SidebarComponent>

        </div>
    )
}

export default MobileSidebar
