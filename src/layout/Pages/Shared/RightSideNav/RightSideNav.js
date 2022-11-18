import React, { useContext } from 'react';
import { FaGoogle,FaFacebook } from 'react-icons/fa';
import { Button, ButtonGroup } from 'react-bootstrap';
import CarouselCourse from '../Carousel/CarouselCourse';
import { AuthContext } from '../../../../Context/AuthProvider/AuthProvider';
import { FacebookAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const { providerLogin } = useContext(AuthContext);
    
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }
    const facebookProvider = new FacebookAuthProvider()
    const handleFacebookSignIn = () => {
        providerLogin(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle></FaGoogle> Google</Button>
                    <Button onClick={handleFacebookSignIn} variant='outline-primary'> <FaFacebook></FaFacebook> Facebook</Button>
                </ButtonGroup>
            </div>
            <div>
                <CarouselCourse></CarouselCourse>
            </div>
       </div>
    );
};

export default RightSideNav;