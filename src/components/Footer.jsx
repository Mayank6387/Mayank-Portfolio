import { SOCIAL_MEDIA_LINKS } from "../constants"
import {motion} from "framer-motion"
function Footer() {
  return (
    <div className="mb-8 mt-20">
            <div className="flex items-center justify-center gap-8">
                {SOCIAL_MEDIA_LINKS.map((link,index)=>(
                    <motion.a
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{duration:0.2,delay:0.8*index}}
                    key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                        {link.icon}
                    </motion.a>
                ))}
            </div>
            <motion.p 
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:1.2,delay:1.6}}
             className="mt-8 text-center text-lg text-yellow-500 tracking-wide">
                console.log(" Mayank Gupta ")
            </motion.p>
            <motion.p 
             initial={{opacity:0}}
             whileInView={{opacity:1}}
             transition={{duration:1.2,delay:2}}
             className="mt-2 text-center text-sm font-semibold tracking-wide">
                Thank You ❤️
            </motion.p>
    </div>
  )
}

export default Footer