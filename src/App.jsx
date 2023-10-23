import { motion, useAnimate } from "framer-motion";
import GridBG from "./components/GridBG";
import { useEffect } from "react";

export default function App() {

  const [scope, animate] = useAnimate()


  useEffect(() => {
    const enterAnimation = async () => {
      await animate("#hero-image", { height: "100%" }, {duration: 1.5, ease: [0.16, 1, 0.3, 1]});
      await animate("#text", { opacity: "100%" }, {duration: 0.3, ease: 'linear'});
    }
    enterAnimation()
  })

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
  };

  return (
    <div ref={scope} className="relative">
      <GridBG />
      <section className="h-screen flex flex-col p-14 bg-transparent">
        <div id="hero-image" className="h-1 relative overflow-hidden rounded-[18px]">
          <object
            className="absolute"
            data="/src/assets/images/Top Left.svg"
            type=""
          ></object>
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
            <object
              className=""
              data="/src/assets/images/middle.svg"
              type=""
            ></object>
          </div>
          <object
            className="absolute bottom-0 right-0"
            data="/src/assets/images/Bottom right.svg"
            type=""
          ></object>
          <video loop muted preload="auto" autoPlay>

            <source src="./src/assets/videos/Artist Animation AI.mp4" />
          </video>
          
        </div>
        <div id="text"  className="flex mt-10 gap-x-20 items-center px-2 opacity-0">
          <h1 className="text-7xl font-semibold tracking-tight leading-none text-neutral-800 max-w-xl">
            We declutter and streamline your workflow
            <span className="bg-gradient-to-tr from-indigo-600 to-indigo-700 bg-clip-text text-transparent m-0 p-0">
              .
            </span>
          </h1>
          <div className="flex flex-col gap-y-8">
            <p className=" text-xl text-neutral-600">
             Digital workflow has never been easier. We&apos;re the backbone of productivity, offering intuitive and highly efficient solutions so you can achieve your goals with an ease. 
            </p>
            <div className="flex items-center gap-x-6">
              <a className="flex items-center text-white group" href="">
                <motion.span layout transition={spring} className="group-hover:order-last block p-4  rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
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
                <span className="block p-4  rounded-lg bg-gradient-to-tr from-indigo-600 to-indigo-700">
                  Start Now
                </span>
              </a>
              <a className="underline" href="">Learn more</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
