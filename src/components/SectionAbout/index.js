import { Image } from '@chakra-ui/image';
import { Box } from '@chakra-ui/layout';
import React from 'react';
import { ParagraphLink, SectionDescription, SectionParagraph, SectionTitle } from '../TextElements';
import imgAbout from './../../data/img/imgAbout.jpg';
import TechStack from './TechStack';

const SectionAbout = () => {
    return (
        <Box as='section' className='section' id='about' maxW={{ xs: 'full', lg: '650', xl: '670' }}>
            <SectionTitle text='About Me' />
            <SectionDescription text="I'm a highly motivated software developer eager to learn more and grow professionally." />
            <SectionParagraph text=
            {
                <>I'm currently a student at <ParagraphLink text='Asia Pacific University of Technology and Innovation' to='https://new.apu.edu.my/about-apu' /> pursuing <span>Software Engineering Diploma</span> at my second year. I prefer to keep learning, continue challenging myself, and do interesting things that matter.</>
            } 
            />
            <Image src={imgAbout} rounded='2xl' mb='40px' />
            <SectionParagraph text=
            {
                <>Fueled by enthusiasm, I really enjoy and more than willing to bridge the gap beetween back-end and front-end developement - combining my technical knowledge with my keen eye for design to create a <span>beautiful product</span>. My passion drives me in the pursuit of many interests and areas of study. I'd like to <span>develop expertise in a number of software engineering fields</span>, with huge intersest towards mobile and web development.</>
            } 
            />
            < SectionParagraph text = 
            {
                <> I have experience developing and designing software with both <span > back - end and front - end technologies</span > from simple landing pages to progressive web applications.I strive to create software that not only functions <span > efficiently</span >, but also provides <span > intuitive</span >, <span>pixel-perfect</span> user experiences.</>
            } 
            />
            < SectionParagraph text = 
            {
                <> And while I do spend most of my time learing and building new things, sometimes I can be seen roaming around over the snowy hills of < ParagraphLink text = 'Russia' to = '' /> or city jungles of < ParagraphLink text = 'Kuala Lumpur' to = '' />, when I'm not if front of a computer screen.</>
            } 
            />
            <SectionDescription text="Some of the technologies I've worked with" />
            <TechStack />
        </Box >
    );
};

export default SectionAbout;