import {Cursor, useTypewriter, Typewriter} from "react-simple-typewriter";
import {FaDotCircle} from 'react-icons/fa'
import Image from "next/image";
import Link from "next/link";
import BackgroundCircle from "./BackgroundCircle";



const Introduction = () => {  
  return (
    <div className="h-screen flex xs:mt-40 first-letter: flex-col justify-center items-center overflow-hidden text-center space-y-8">
      <div className="fixed z-50 top-20 left-3 text-lg capitalize flex flex-col text-gray-500">
          <Link href="#top" className="flex gap-5 items-center">
            <FaDotCircle className="bull-dot" />
            <button className={`introButtons  hidden sm:block`}>top</button>
          </Link>
          <Link href="#about" className="flex gap-5  items-center">
          <FaDotCircle className="bull-dot" />
            <button className={`introButtons hidden sm:block`}>about</button>
          </Link>
          <Link href="#experience" className="flex gap-5 items-center">
          <FaDotCircle className="bull-dot" />
            <button className={`introButtons hidden sm:block`}>experience</button>
          </Link>
          <Link href="#skills" className="flex gap-5  items-center">
          <FaDotCircle className="bull-dot" />
            <button className={`introButtons hidden sm:block`}>skills</button>
          </Link>
          <Link href="#projects" className="flex gap-5 items-center">
          <FaDotCircle className="bull-dot" />
            <button className="introButtons hidden sm:block">projects</button>
          </Link>
          <Link href="#contacts" className="flex gap-5 items-center">
          <FaDotCircle className="bull-dot" />
            <button className="introButtons hidden sm:block">Contacts</button>
          </Link>
      </div>
      <BackgroundCircle />
      <div>
      <Image  src='/professionalpicture.jpg'
      height={170}
      width={170}
      alt="Professional picture"
      className=" relative rounded-full h-45 w-45 mx-auto -mt-28 object-cover"
      />
        </div>
      <div className="z-40">
        <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software engineer
        </h2>
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold scroll-px-10  text-gray-400">
          <Typewriter
              words={[
                  "Hi, there! I'm <Joffrey/>;",
                  "Happy to see you here!"
              ]}
              loop={true}
              cursor
              cursorStyle='|'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h1>
          <div className="">
          <h2 className=" text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Software engineer
        </h2>
          </div>
      </div>
    </div>
  )
}

export default Introduction