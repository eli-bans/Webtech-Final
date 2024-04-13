import React from 'react';
import { DarkMode, LightMode, Notifications } from '@mui/icons-material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import CreateModal from './CreateModal';

const NavBar = ({ toggleModal, darkMode, setDarkMode }) => {
  return (
    <div className='sticky top-0 bg-white'>
      <nav className="px-24 w-full">
        <div className='flex justify-between p-3'>
          <div>
            <h1 className="font-bold text-3xl bg-gradient-to-r from-purple-600 to-purple-800 inline-block text-transparent bg-clip-text px-4"> StudyAlly</h1>
          </div>  

          <ul className="flex items-center space-x-4">
            <AddCircleOutlineIcon onClick={toggleModal} style={{ cursor: 'pointer' }} />
            {darkMode === true ? (
              <DarkMode sx={{ fontSize: '25px' }} style={{ color: 'white' }} onClick={() => { setDarkMode(!darkMode); }} />
            ) : (
              <LightMode sx={{ fontSize: '25px' }} onClick={() => { setDarkMode(!darkMode); }} />
            )}
            <Notifications sx={{ fontSize: '25px', color: darkMode ? 'white' : 'black' }} />
            <li style={{ color: darkMode ? 'white' : 'black' }}>Contact</li>
          </ul>

        </div>
      </nav>
      <CreateModal />
    </div>
  );
};

export default NavBar;
