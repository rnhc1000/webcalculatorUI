import Footer from '../../components/Footer';
import HeaderUser from '../../components/HeaderUser';
import GridData from '../../components/Operations';
import  { StrictMode } from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Records() {
   return (
      <>

         <HeaderUser />
         <Fade>
            <StrictMode>

               <GridData />

            </StrictMode>
         </Fade>
         <Footer />

      </>

   )
}