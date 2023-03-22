import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";



const ProjectSingle = ({
  title,
  category,
  image,
  division1,
  division2,
  division3,
  division4,
  division5,
  division6,
  division7,
  division8,
  division9,
  division10,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <div aria-label="Single Project">
        <div className="rounded-xl shadow-lg hover:shadow-xl  mb-10 sm:mb-0 ">
          <div>
            <img
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-2 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
            <div className="text-lg text-ternary-dark dark:text-ternary-light">
              
              <button
                                
                className="border rounded-full mb-2   px-2  mr-2 hover:bg-sky-400 w-auto"
              >
                {division1}
              </button>
              
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division3}
              </button>
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division4}
              </button>
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division2}
              </button>
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division5}
              </button>
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division6}
              </button>
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division7}
              </button>
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division8}
              </button>
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division9}
              </button>
              <button className="border rounded-full hover:bg-sky-400 w-auto mb-2 px-2 mr-2">
                {division10}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectSingle;
