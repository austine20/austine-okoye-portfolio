import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Resume from "../assets/augustine-okoye-resume.pdf";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-3xl sm:text-right font-bold">
            <p>
              Hi. I'm Augustine Okoye, nice to meet you. Please take a look
              around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
            <div className="mt-5">
              <a
                href={Resume}
                download="Augustine-Okoye-Resume"
                target="_blank"
                rel="noreferrer"
              >
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center bg-pink-600 border-pink-600 hover:bg-[#0a192f] hover:border-white">
                  Download Resume
                  <span>
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
