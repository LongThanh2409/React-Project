import { Link } from "react-router-dom";
import config from "../../../../routes/config";
import { useForm } from "react-hook-form";
import { ISignin } from "../../../../interface/Auth/auth";

const Signin = () => {
  const { register, handleSubmit } = useForm<ISignin>({});
  const onSubmit = async (data: ISignin) => {};
  return (
    <div className="w-full xl:w-3/4 m-auto pt-10">
      <section className="gradient-form h-full bg-gray-50 dark:bg-neutral-700">
        <div className="container h-full p-10">
          <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div className="w-full">
              <div className="block rounded-lg bg-white shadow-xl dark:bg-neutral-800">
                <div className="g-0 xl:flex ">
                  <div className="px-4 md:px-0 w-full xl:w-1/2">
                    <div className="md:mx-6 md:p-12">
                      <div className="text-center">
                        <Link to={config.home}>
                          <img
                            className="mx-auto w-48"
                            src="https://assets.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg"
                            alt="logo"
                          />
                        </Link>
                      </div>

                      <form>
                        <p className="my-4 text-2xl font-semibold">Login</p>

                        <div className="relative mb-4 border-b-[1px] border-gray-500">
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your email
                          </label>
                          <input
                            type="email"
                            {...register("email")}
                            id="email"
                            className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 focus:outline-none"
                            placeholder="name@company.com"
                          />
                        </div>

                        <div
                          className="relative mb-4 border-b-[1px] border-gray-500"
                          data-te-input-wrapper-init
                        >
                          <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Your password
                          </label>
                          <input
                            type="password"
                            {...register("password")}
                            id="email"
                            className="bg-gray-50  text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 focus:outline-none"
                            placeholder="*********"
                          />
                        </div>

                        <div className="mb-12 pb-1 pt-1 text-center">
                          <button
                            className="mb-3 inline-block w-full px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, #2cbcb2, #16cbcb, #16cbcb, #2cbcb2) ",
                            }}
                          >
                            Login
                          </button>

                          <a href="#!">Forgot password?</a>
                        </div>

                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">Don't have an account?</p>
                          <Link to={config.signup}>
                            <button
                              type="button"
                              className="py-2 px-3 border-2 border-teal-500 bg-transparent rounded-md text-teal-500"
                              data-te-ripple-init
                              data-te-ripple-color="light"
                            >
                              Register
                            </button>
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div
                    className=" hidden xl:block  items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #2cbcb2, #25a9a9, #25a9a9, #2cbcb2)",
                    }}
                  >
                    <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 className="mb-6 text-xl font-semibold">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
