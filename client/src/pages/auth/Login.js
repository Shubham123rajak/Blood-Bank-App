import React from 'react'
import Forms from '../../components/shared/Forms/Forms'
import { useSelector } from 'react-redux'
import Spinner from '../../components/shared/Spinner'




const Login = () => {
    const { loading, error } = useSelector((state) => state.auth);


    return (
        <>
            {error && <span>{alert(error)}</span>}
            {/*console.log(error)*/}

            {loading ? (<Spinner />) : (<div className='row g-0'>
                <div className='col-md-8 form-banner'>
                    <img src='./assets/images/banner1.jpg' alt="loginImage" />
                </div>
                <div className='col-md-4 form-container'>

                    <Forms formTitle={'Login Page'} submitBtn={"Login"} formType={'login'} />
                </div>
            </div>
            )}

        </>
    )
}

export default Login