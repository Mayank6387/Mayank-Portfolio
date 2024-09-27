import {motion} from "framer-motion";
import { PROJECTS } from "../constants";
import Card from "./Cards";

const containerVariants={
  hidden:{opacity:0,y:-20},
  visible:{
    opacity:1,
    y:0,
    transition:{
      duration:0.5,
      staggerChildren:0.4,
    },
  },
}

const itemVariants={
  hidden:{ opacity:0,y:0.8},
  visible:{opacity:1,scale:1,transition:{duration:0.5}}
}


export default function Projects() {
  
  return (
    
    <div id="projects">
        <motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once:true}}
        className="mt-20 text-center text-4xl font-semibold">Projects</motion.h2>
        <motion.div 
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{once:true}}
        className="flex flex-wrap justify-center py-8">{PROJECTS.map((projects,index)=>(
            <motion.div
            variants={itemVariants}
             key={index}>
                <Card image={projects.image}
                title={projects.title}
                subtitle={projects.subtitle}
                link={projects.links}/>
            </motion.div>
        ))}</motion.div>
    </div>
  )
}
