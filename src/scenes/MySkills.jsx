import LineGradient from '../components/LineGradient';
import useMediaQuery from '../hooks/useMediaQuery';
import { motion } from 'framer-motion';
//import SkillsImage from '../assets/skills-image.jpg';

const MySkills = () => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

    return (
        <section id="skills" className="pt-10 pb-24">
            {/* HEADER AND IMAGE SECTION */}
            <div className="md:flex md:justify-between md:gap-16 mt-32">
                <motion.div 
                className="md:w-1/3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 }
                }}
                >
                    <p className="font-playfair font-semibold text-4xl mb-5">
                        MY <span className="text-red">SKILLS</span>
                    </p>
                    <LineGradient width="w-1/3" />
                    <p className="mt-10 mb-7">
                        "A <span className="text-blue">Jack</span> of all trades, and master of none, is oftentimes better than a master of one."
                    </p>
                </motion.div>
                <div className="mt-16 md:mt-0">
                    {isAboveMediumScreens ? (
                        <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                        before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
                        >
                            <img alt="skills" className="z-10" src="assets/skills-image.png" />
                        </div>
                    ) : (
                        <img alt="skills" className="z-10" src="assets/skills-image.png" />
                    )}
                </div>
            </div>

                {/* SKILLS */}
                <div className="md:flex md:justify-between mt-16 gap-32">
                    
                    {/* TECHNOLOGY */}
                    <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">01</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">Technology</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-o z-[-1]" />
                        </div>
                        <p className="mt-5">
                            Highly tech savvy, I began working with computers as a kid before it was common - `80's baby`. Today I work with 
                            HTML5, CSS3, JavaScript, React, Tailwind, Node, Mongo, and more.
                        </p>
                    </motion.div>

                    {/* PEOPLE */}
                    <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">02</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">People</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-o z-[-1]" />
                        </div>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laudantium odit aliquam libero ipsam tempore accusamus deserunt neque, quisquam aperiam suscipit molestiae? Eaque magni tempora cum officiis tempore. Quasi, neque.
                        </p>
                    </motion.div>

                    {/* CREATIVITY */}
                    <motion.div
                        className="md:w-1/3 mt-10"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}
                    >
                        <div className="relative h-32">
                            <div className="z-10">
                                <p className="font-playfair font-semibold text-5xl">03</p>
                                <p className="font-playfair font-semibold text-3xl mt-3">Creativity</p>
                            </div>
                            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-o z-[-1]" />
                        </div>
                        <p className="mt-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit laudantium odit aliquam libero ipsam tempore accusamus deserunt neque, quisquam aperiam suscipit molestiae? Eaque magni tempora cum officiis tempore. Quasi, neque.
                        </p>
                    </motion.div>
            </div>
        </section>
    )
}

export default MySkills