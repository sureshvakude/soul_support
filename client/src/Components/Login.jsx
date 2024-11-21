export default function Login() {
  return (
    <div
      className="flex min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://img.freepik.com/free-vector/geometric-gradient-futuristic-background_23-2149116406.jpg')" }}
    >
      <div className="flex w-full items-center justify-center bg-black bg-opacity-50 px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:gap-12 w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Left Side: Text Section */}
          <div className="flex flex-1 flex-col justify-center bg-indigo-700 p-8 text-white">
            <h1 className="text-4xl font-bold leading-tight">
              Welcome to SoulSupport!
            </h1>
            <p className="mt-4 text-lg">
            A one stop platform to tackle all your mental problems !!
            </p>
          </div>

          {/* Right Side: Login Form */}
          <div className="flex flex-1 flex-col justify-center px-8 py-12 lg:px-16">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <img
                alt="Soul Support"
                src="https://images.vexels.com/media/users/3/235447/isolated/preview/bf1d3d610540bbc29a5af67c30ad69bc-brain-stroke-icon-top-view.png"
                className="mx-auto h-10 w-auto"
              />
              <h2 className="mt-2 text-center text-2xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
            </div>

            <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
              <form action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Sign in
                  </button>
                </div>
              </form>

              <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{' '}
                <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
