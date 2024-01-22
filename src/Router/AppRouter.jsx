import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRoutes } from './router';
import TopBar from '../components/bar/TopBar';
import FooterBar from '../components/footer/FooterBar';

const AppRouter = () => {

  
    return (
      
        <div className='wrapper'>
            <TopBar />           
            <Routes>{
                    publicRoutes.map(rout =>
                        <Route
                            exact={rout.exact}
                            path={rout.path}
                            element={rout.element}
                            key={rout.key}
                        />
                    )
              }</Routes>
            <FooterBar />
        </div>
 
               
    );
};

export default AppRouter;