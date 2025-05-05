import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';

const Registration = () => {
    const [passwordEye, setPasswordEye] = useState(true);
    const [confirmPasswordEye, setConfirmPasswordEye] = useState(true);


    const { handleRegistration, 
        passwordError,
        confirmPasswordError,
        nameError,
        emailError,
        setPasswordError,
        setConfirmPasswordError,
        setNameError,
        setEmailError
    } = useContext(AuthContext)
    const handleSubmitRegistration = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const name = e.target.name.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const profileImage = e.target.photoUrl.value;
        
        setPasswordError("");
        setConfirmPasswordError("");
        setNameError("");
        setEmailError("");
        

        if(name === ""){
            setNameError("Name requred !!");
            return;
        }
        if(email === ""){
            setEmailError("Email Requared !!");
            return;
        }
        if(password.length < 8){
            setPasswordError("Password must be equal or greater than 8 !!")
            return;
        }
        if(!/[a-z]/.test(password)){
            setPasswordError("password must contain at least one lower case letter !!")
            return
        }
        if(!/[A-Z]/.test(password)){
            setPasswordError("password must contain at least one upper case letter !!")
            return
        }
        if(!/\d/.test(password)){
            setPasswordError("password must contain at least one number !!")
            return
        }
        if(!/[!"#$%&'()*+,\-./:;<=>?@\[\\\]^_`{|}~]/.test(password)){
            setPasswordError("password must contain one special character !!")
            return
        }
        if(password !== confirmPassword){
            setConfirmPasswordError("password and confirm password must be same !!")
            return
        }

        
        handleRegistration(email, password, name, profileImage)
        
    }
    return (
        <div className='bg-[#EFEFEF] pt-2 @min-[350px]:px-3 @min-[400px]:px-4 @min-[500px]:px-5 @min-[640px]:px-12 @min-[768px]:px-6 @min-[1000px]:px-12 @min-[1550px]:px-[120px] pb-[50px] md:pb-[65px] xl:pb-[100px]  @min-[1750px]:px-[160px]'>
            <div className="w-full rounded-3xl @min-[496px]:pt-[18px] @min-[630px]:pt-[50px]  @min-[496px]:pb-8 @min-[800px]:pb-[70px] bg-linear-to-b from-[#EFEFEF] to-[#FFFFFF] border-3 border-[#FFFFFF]">
                <div className="flex flex-col max-w-md p-6 bg-white mx-auto text-black shadow-2xl rounded-2xl sm:p-10 dark:bg-gray-50 dark:text-gray-800">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Registration</h1>
                        <p className="text-sm dark:text-gray-600">Please Registration to your account</p>
                    </div>
                    <form noValidate="" onSubmit={handleSubmitRegistration} action="" className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" className="w-full px-3 py-2 border rounded-[99px] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                <p className='text-sm text-red-500 mt-1.5'>{nameError}</p>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border  dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 rounded-[99px]" />
                                <p className='text-sm text-red-500 mt-1.5'>{emailError}</p>
                            </div>
                            <div>
                                <label htmlFor="photoUrl" className="block mb-2 text-sm">Photo URL</label>
                                <input type="photoUrl" name="photoUrl" id="photoUrl" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border  dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 rounded-[99px]" />
                                {/* <p className='text-sm text-red-500 mt-1.5'>{}</p> */}
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="password" className="text-sm">Password</label>
                                </div>
                                <div className="relative">
                                    <input type={passwordEye ? "password" : "text"} name="password" id="password" placeholder="Enter password" className="w-full px-3 py-2 border rounded-[99px] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                    <span onClick={()=>setPasswordEye(!passwordEye)} className="absolute text-2xl mt-2 -ml-10">
                                        {
                                            passwordEye ? <FaEye /> : <FaEyeSlash/>
                                        }
                                    </span>
                                </div>
                                <p className='text-sm text-red-500 mt-1.5'>{passwordError}</p>
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label htmlFor="confirmPassword" className="text-sm">Confirm Password</label>
                                </div>
                                <div className="relative">
                                    <input type={confirmPasswordEye ? "password" : "text"} name="confirmPassword" id="confirmPassword" placeholder="Enter confirm password" className="w-full px-3 py-2 border rounded-[99px] dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800" />
                                    <span onClick={()=>setConfirmPasswordEye(!confirmPasswordEye)} className="absolute text-2xl mt-2 -ml-10">
                                        {
                                            confirmPasswordEye ? <FaEye /> : <FaEyeSlash/>
                                        }
                                    </span>
                                </div>
                                <p className='text-sm text-red-500 mt-1.5'>{confirmPasswordError}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <button type='submit' class="px-5 py-[9px] w-full relative border-2 border-[#176AE5] rounded-[99px] group overflow-hidden font-medium inline-block cursor-pointer">
                                    <span class="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-[#305486] group-hover:h-full opacity-90"></span>
                                    <span class="relative group-hover:text-white">Registration</span>
                                </button>
                            </div>
                            <p className="px-6 text-sm text-center dark:text-gray-600">Already have an account ? 
                                <Link rel="noopener noreferrer" to={'/login'} href="#" className="hover:underline dark:text-violet-600 text-blue-700"> Login</Link>.
                            </p>
                        </div>
                    </form>
                </div> 
            </div>          
        </div>
    );
};

export default Registration;