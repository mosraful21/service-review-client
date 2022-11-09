import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/signup.png'
import { AuthContext } from '../../context/AuthProvider';
import swal from 'sweetalert';

const SignUp = () => {
    const { createUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    
    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(() => {
                navigate('/courses');
                navigate(from, { replace: true });
                swal("Successfully login");
            })
            .catch((error) => {
                swal("Wrong Password!");
            })
    }

    const handleGitHubSignIn = () => {
        signInWithGitHub()
            .then(() => {
                navigate('/courses');
                navigate(from, { replace: true });
                swal("Successfully login");
            })
            .catch((error) => {
                swal("Wrong Password!");
            })
    }

    return (
        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm py-20 shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/login'>Login</Link> </p>
                    <br />
                    <div className='flex justify-evenly mb-3'>
                        <div>
                            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success">Google</button>
                        </div>
                        <div>
                            <button onClick={handleGitHubSignIn} className="btn btn-outline btn-success">GitHub</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;