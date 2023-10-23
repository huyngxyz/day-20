import { motion, useAnimate } from "framer-motion";
import GridBG from "./components/GridBG";
import video from "./assets/videos/vid.mp4";
import { useEffect } from "react";

export default function App() {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const enterAnimation = async () => {
      await animate(
        "#hero-image",
        { height: "100%" },
        { duration: 1.5, ease: [0.16, 1, 0.3, 1] }
      );
      await animate(
        "#text",
        { opacity: "100%" },
        { duration: 0.3, ease: "linear" }
      );
    };
    enterAnimation();
  });

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div ref={scope} className="relative">
      <GridBG />
      <section className="h-screen flex flex-col p-14 bg-transparent">
        <div
          id="hero-image"
          className="h-1 relative overflow-hidden rounded-[18px]"
        >
          <svg
            className="absolute"
            width="181"
            height="222"
            viewBox="0 0 181 222"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M131 17.9833C131.009 8.04984 139.064 2.34191e-05 149 2.40733e-05L181 2.80874e-05V3.29188e-06L131 0V6.78741e-05H0V203.336L4.01251e-06 221.319C0.00904117 211.399 8.04229 203.358 17.959 203.336L18 203.336L50 203.336L113 203.336C122.941 203.336 131 195.277 131 185.336V17.9833Z"
              fill="white"
            />
          </svg>

          <div className="absolute top-1/2 right-0 -translate-y-1/2">
            <p
              className="absolute flex gap-x-1 items-center top-1/2 -translate-y-1/2
          left-1/2 -translate-x-1/2"
            >
              <svg
                className=""
                width="20"
                height="20"
                viewBox="0 0 34 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className=" fill-indigo-700"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M30.1023 25.0871C28.5733 23.3892 28.3249 20.7378 29.3396 18.7146C30.1988 17.0014 30.6805 15.0798 30.6805 13.05C30.6805 5.84269 24.6082 0 17.1175 0C9.62686 0 3.55448 5.84269 3.55448 13.05C3.55448 15.034 4.01461 16.9145 4.83779 18.5983C5.83163 20.6311 5.55614 23.2801 4.01005 24.9635C2.09214 27.0518 0.709708 29.606 0.0695814 32.4272C-0.371172 34.3696 1.34594 36 3.41232 36H30.5876C32.654 36 34.3712 34.3697 33.9304 32.4272C33.3028 29.6615 31.9618 27.1521 30.1023 25.0871Z"
                  fill="none"
                />
              </svg>
              <span className="uppercase font-semibold text-lg">Supaso </span>
            </p>
            <svg
              width="211"
              height="107"
              viewBox="0 0 211 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M211 0C211 9.94113 202.941 18 193 18L211 18V0ZM211 18V89L211 107C211 97.0642 202.95 89.0086 193.016 89L193 89H18C8.05888 89 -4.3454e-07 80.9411 0 71L2.3167e-06 36C2.3167e-06 26.0589 8.05888 18 18 18L211 18Z"
                fill="white"
              />
            </svg>
          </div>
          <svg
            className="absolute bottom-0 right-0"
            width="271"
            height="89"
            viewBox="0 0 271 89"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M271 0.00836182C270.995 9.94564 262.938 18 253 18L36 18C26.0589 18 18 26.0589 18 36L18 71L18 71.0127C17.9931 80.948 9.93687 89 0 89L18 89L271 89V18V0.00836182Z"
              fill="white"
            />
          </svg>

          <video loop muted preload="auto" autoPlay>
            <source src={video} type="video/mp4" />
          </video>
        </div>
        <div
          id="text"
          className="flex mt-10 gap-x-20 items-center px-2 opacity-0"
        >
          <h1 className="text-7xl font-semibold tracking-tight leading-none text-neutral-800 max-w-xl xl:text-8xl xl:max-w-4xl">
            We declutter and streamline your workflow
            <span className="bg-gradient-to-tr from-indigo-600 to-indigo-700 bg-clip-text text-transparent m-0 p-0">
              .
            </span>
          </h1>
          <div className="flex flex-col gap-y-8">
            <p className=" text-xl xl:text-4xl xl:max-w-4xl text-neutral-600">
              Digital workflow has never been easier. We&apos;re the backbone of
              productivity, offering intuitive and highly efficient solutions so
              you can achieve your goals with an ease.
            </p>
            <div className="flex items-center gap-x-6">
              <a
                className="flex items-center text-white group relative"
                href=""
              >
                <motion.span
                  transition={spring}
                  className="group-hover:invisible group-hover:scale-0 block p-4 transition-all rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </motion.span>
                <span className="relative block p-4 group-hover:-translate-x-14  rounded-lg bg-gradient-to-tr transition-all from-indigo-600 text-xl to-indigo-700">
                  Start Now
                </span>
                <motion.span
                  transition={spring}
                  className="group-hover:scale-100 scale-0 -translate-x-14 transition-all absolute p-4 rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-700 -right-14 top-0 bottom-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                </motion.span>
              </a>
              <a className="underline text-xl" href="">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
