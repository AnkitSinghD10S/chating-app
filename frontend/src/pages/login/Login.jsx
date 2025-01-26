import "../../index.css";
const Login = () => {
    return (
        <div className="felx flex-col items-center justify-center min-w-96 mx-auto">
            <div className="h-full p-6 w-full rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border-1 border-green-800">
                <h1 className="text-3xl font-semibold text-center text-green">
                    Login
                    <span className="p-3 text-green-800">Chat App</span>
                </h1>
                <form action="">
                    <div className="mt-1.5">
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Username
                            </span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-10 placeholder:text-green-500"
                        />
                    </div>
                    <div>
                        <label className="lable p-2">
                            <span className="text-base lable-text">
                                Password
                            </span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10 placeholder:text-green-500"
                        />
                    </div>
                    <a
                        to="/signup"
                        className="text-sm  hover:underline hover:text-green-600 mt-2 inline-block"
                    >
                        {"Don't"} have an account?
                    </a>

                    <div>
                        <button
                            className="btn btn-block btn-sm mt-2"

                        > Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
