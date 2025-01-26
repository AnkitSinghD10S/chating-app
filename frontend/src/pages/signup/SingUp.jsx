import React from "react";
import GenderBox from "./GenderBox";
const SignUp = () => {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full p-6 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-1 border-green-800">
                <h1 className="'text-3xl font-semibold text-center text-gray-100">
                    SignUp <span className="text-green-500"> Chat App</span>
                </h1>

                <form action="">
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Fullname
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter fullname"
                            className="input input-bordered w-full max-w-xs placeholder:text-green-500"
                        />
                    </div>
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="input input-bordered w-full max-w-xs placeholder:text-green-500"
                        />
                    </div>
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full max-w-xs placeholder:text-green-500"
                        />
                    </div>
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Confirm Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="input input-bordered w-full max-w-xs placeholder:text-green-500"
                        />
                    </div>

                    <GenderBox/>

                    <a
                        to="/login"
                        className="text-sm  hover:underline hover:text-green-600 mt-2 inline-block"
                    >Already have an account?
                    </a>

                    <div>
                        <button
                            className="btn btn-block btn-sm mt-2"

                        > Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
