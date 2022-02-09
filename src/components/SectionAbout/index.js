import { Image } from "@chakra-ui/image";
import { AspectRatio, Box } from "@chakra-ui/layout";
import React from "react";
import {
    ParagraphLink,
    SectionDescription,
    SectionParagraph,
    SectionTitle,
} from "../TextElements";
import imgAbout from "./../../data/img/imgAbout.jpg";
// import { CVLink } from "./../../data/contactDetails";
import TechStack from "./TechStack";
import useAnimateOnView from "../../hooks/useAnimateOnView";
import { slideFade } from "../../animations";
import { motion } from "framer-motion";

const SectionAbout = () => {
    const [imageRef, imageAnimation] = useAnimateOnView();
    // const [linkRef, linkAnimation] = useAnimateOnView();

    return (
        <Box
            as="section"
            className="section"
            id="about"
            maxW={{ xs: "full", lg: "650", xl: "670" }}
        >
            <SectionTitle text="About Me" />
            <SectionDescription text="I'm a highly motivated software developer eager to learn more and grow professionally." />
            {/* <SectionParagraph
                text={
                    <>
                        I'm currently a student at the{" "}
                        <ParagraphLink
                            text="Asia Pacific University of Technology and Innovation"
                            to="https://new.apu.edu.my/about-apu"
                        />{" "}
                        pursuing a <span>Software Engineering Diploma</span> in
                        my second year.
                    </>
                }
            /> */}
            <AspectRatio
                as={motion.div}
                ref={imageRef}
                variants={slideFade}
                initial="hidden"
                animate={imageAnimation}
                ratio={16 / 9}
                mb="40px"
            >
                <Image
                    src={imgAbout}
                    rounded="2xl"
                    alt="Stepan Pavlov"
                    w="670px"
                    h="377px"
                />
            </AspectRatio>
            <SectionParagraph
                text={
                    <>
                        I prefer to keep learning, continue challenging myself
                        and do exciting things that matter. Fueled by
                        enthusiasm, I enjoy and am more than willing to bridge
                        the gap between back-end and front-end development —
                        combining my technical knowledge with my keen eye for
                        design to create a <span>beautiful product</span>. My
                        passion drives me in the pursuit of many interests and
                        areas of study. I'd like to{" "}
                        <span>
                            develop expertise in several software engineering
                            fields
                        </span>
                        , with a considerable interest in mobile and web
                        development.
                    </>
                }
            />
            <SectionParagraph
                text={
                    <>
                        I have experience developing and designing software with{" "}
                        <span>back-end and front-end technologies</span>, from
                        simple landing pages to advanced web applications. I
                        strive to create software that not only functions{" "}
                        <span>efficiently</span> but also provides{" "}
                        <span>intuitive, pixel-perfect</span> user experiences.
                    </>
                }
            />
            <SectionParagraph
                text={
                    <>
                        And while I do spend most of my time learning and
                        building new things, sometimes I can be seen roaming
                        around over the snowy hills of{" "}
                        <ParagraphLink
                            text="Russia"
                            to="https://www.instagram.com/p/Bwb6rdsgBKm"
                        />{" "}
                        or city jungles of{" "}
                        <ParagraphLink
                            text="Kuala Lumpur"
                            to="https://www.instagram.com/p/B2yhieIA0-5"
                        />{" "}
                        when I'm not in front of a computer screen.
                    </>
                }
            />
            <SectionDescription text="Some of the technologies I've worked with" />
            <TechStack />
            {/* <Box
                as={motion.div}
                ref={linkRef}
                variants={slideFade}
                initial='hidden'
                animate={linkAnimation}
                mt='60px'
                fontSize='18px'>
                <ParagraphLink text='View & Download My CV' to={CVLink} />
            </Box> */}
        </Box>
    );
};

export default SectionAbout;
