import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageOutlinedIcon from '@material-ui/icons/LanguageOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@material-ui/icons/PlayCircleFilledWhiteOutlined';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';

// incliding images
import FriendsApp from '../assets/images/FriendsApp.png';
import Outdoors from '../assets/images/Outdoors.png';
import TourSite from '../assets/images/Toursite.png';
import HomeDealer from '../assets/images/HomeDealer.png';
import ToDo from '../assets/images/ToDo.png';
import Game from '../assets/images/Game.png';
import Birthday from '../assets/images/Birthday.png';
import Burger from '../assets/images/Burger.png';
import resume from '../assets/images/resume.png';

export default {
    name: 'Devjit Choudhury',
    title: 'Web Developer & Open Source Enthuiast',

    birthday: '30th May 2000',
    email: 'devjitc1@gmail.com',
    address: 'Hno. 319 Sitaramdera, Jamshedpur',
    phone: '9065887737',

    socials: {
        Facebook: {
            link: 'https://www.facebook.com/devjit.choudhury.3',
            text: 'Facebook',
            icon: <FacebookIcon />,
        },
        LinkedIn: {
            link: 'https://www.linkedin.com/in/devjit-choudhury-717915151/',
            text: 'LinkedIn',
            icon: <LinkedInIcon />,
        },
        Github: {
            link: 'https://github.com/devartstar',
            text: 'devartstar',
            icon: <GitHubIcon />,
        },
        Instagram: {
            link: 'https://www.instagram.com/atr_si_luv/',
            text: '@atr_si_luv',
            icon: <InstagramIcon />,
        },
    },

    about: 'I am Devjit Choudhury, currently a sophomore studying Maths and Computing in IIT Kharagpur. The best way to descrime me would be Creative and one who likes to bring perfection in all of his works. I am a Front End Developer working mainly with React with an experience of 2 years. I have been a President Awardee and have won several awards from famous persons like Ratan Tata and Prathibha Patil. \n\nI am well capable of building a codebase from scratch and working with a Team since i have worked for a startup iC2C. I give atmost importance to Perfection and Deadlines .',

    experiences: [
        {
            title: 'Front End React Developer - iC2C',
            date: 'November 2020 - Feburary 2021',
            description: 'I was assigned the lead role in the Front End Team where we had to design and create a website/app in React from the scratch.'
        },
        {
            title: 'React Developer - NumoUno',
            date: 'June 2020 - October 2020',
            description: 'I was assigned the role to improve the codebase of the website build using React framework and include some more features like Responsiveness to it.'
        },
        {
            title: 'Open Source Contributions - KWoC',
            date: 'January 2020 - Present',
            description: 'I have contributed to various Open Projects and even completed the Kharagpur Winter of Code contributing in Project Graph Visualization'
        }
    ],

    educations: [
        {
            title: 'I.I.T. Kharagpur',
            date: 'July 2019 - Present',
            description: 'I cracked JEE twice with a Rank of 5126 and 1123 to study Mathematics and Computing in I.I.T Kgp with a CGPA of 9.52/10'
        },
        {
            title: 'D.A.V. Public School',
            date: 'June 2016 - June 2018',
            description: 'I completed my Higher Secondary education from Jamshedpur securing a percentage of 92% in 12th CBSE Exam.'
        },
        {
            title: 'Loyola School',
            date: 'June 2005 - May 2016',
            description: 'I completed my junior and middle school education from Jamshedpur securing a percentage of 95% in 10th ICSE Exam.'
        }
    ],

    services: [
        {
            title: 'Web Dev',
            description: 'I have been bad ass web devlepors for 14 years',
            icon: <LanguageOutlinedIcon />
        },
        {
            title: 'Building Identity',
            description: 'We will build your brand that is catchy and tracy',
            icon: <AssignmentIndOutlinedIcon />
        },
        {
            title: 'Web Dev',
            description: 'Will Make your protrayal lifeful and amazing Illustrator',
            icon: <PlayCircleFilledWhiteOutlinedIcon />
        },
    ],

    skills: [
        {
            title: 'FRONT END',
            description: [
                'React JS',
                'Javascript',
                'TypeScript',
                'Bootstrap',
                'Material UI',
            ],
        },
        {
            title: 'BACK-END',
            description: [
                'NodeJS',
                'Ruby On Rails'
            ],
        },
        {
            title: 'DATABASE',
            description: [
                'Firebase',
                'MongoDB',
                'Postgres'
            ],
        },
        {
            title: 'OTHERS',
            description: [
                'Git',
                'Github',
                'C++',
                'ComputerVision',
            ],
        }
    ],

    projects: [
        {
            tag: 'React',
            image: resume,
            title: 'Portfolio site',
            caption: 'A simple Porfolio site.',
            desciption: 'Totally dynamic and will further modify to make it a portfolio generator',
            links: [
                { link: 'https://react-portfolio-devjit.herokuapp.com/resume', icon: <LanguageIcon /> },
                { link: 'https://github.com/devartstar/react-portfolio', icon: <GitHubIcon /> },

            ]
        },
        {
            tag: 'React',
            image: Burger,
            title: 'Burger App',
            caption: 'Fullfil your cravings for burgers',
            desciption: 'A fully functioning buger ordering site with Firebase in backend.',
            links: [
                { link: 'https://tranquil-dawn-51895.herokuapp.com/', icon: <LanguageIcon /> },
                { link: 'https://github.com/devartstar/Burger', icon: <GitHubIcon /> },

            ]
        },
        {
            tag: 'Ruby on Rails',
            image: FriendsApp,
            title: 'Friends App',
            caption: 'Built the Sign In and Sign Up feature using Ruby on Rails',
            desciption: 'Manage your account, also reset password if forgotten, to list your special friends.',
            links: [
                { link: 'https://list-ur-friends.herokuapp.com/', icon: <LanguageIcon /> },
                { link: 'https://www.google.com', icon: <GitHubIcon /> },
            ]
        },
        {
            tag: 'CSS',
            image: Outdoors,
            title: 'Natours',
            caption: 'A simple Nature Exploration site',
            desciption: 'Tried many new CSS Styling features to make the page look beautiful',
            links: [
                { link: 'https://devartstar.github.io/My_Travelling_Website/', icon: <LanguageIcon /> },
                { link: 'https://github.com/devartstar/My_Travelling_Website', icon: <GitHubIcon /> },

            ]
        },
        {
            tag: 'CSS',
            image: TourSite,
            title: 'Tour Site',
            caption: 'A Simple Booking hotel/Flights sites',
            description: 'Now booking your hotels and flights get easier. build the frontend design of it.',
            links: [
                { link: 'https://devartstar.github.io/Tour_Site/', icon: <LanguageIcon /> },
                { link: 'https://github.com/devartstar/Tour_Site', icon: <GitHubIcon /> },

            ]
        },
        {
            tag: 'CSS',
            image: HomeDealer,
            title: 'Nexter Home Dealership Site',
            caption: 'Home Dealership',
            description: 'Build a front end design for Home Dealership client.',
            links: [
                { link: 'https://devartstar.github.io/Nexter-HomeDealership/', icon: <LanguageIcon /> },
                { link: 'https://github.com/devartstar/Nexter-HomeDealership', icon: <GitHubIcon /> },

            ]
        },
        {
            tag: 'JavaScript',
            image: ToDo,
            title: 'Notes App',
            caption: 'Remembering Tasks becomes easier',
            description: 'Kepp you note and delete them once completed.',
            links: [
                { link: 'https://devartstar.github.io/To-do-LIst/', icon: <LanguageIcon /> },
                { link: 'https://github.com/devartstar/To-do-LIst', icon: <GitHubIcon /> },

            ]
        },
        {
            tag: 'JavaScript',
            image: Game,
            title: 'Games App',
            caption: '3 Simple Games',
            description: 'Enjoy your childhood experience with these 3 simple games build uding vanila JS',
            links: [
                { link: 'https://devartstar.github.io/Game/', icon: <LanguageIcon /> },
                { link: 'https://github.com/devartstar/Game', icon: <GitHubIcon /> },

            ]
        },
        {
            tag: 'JavaScript',
            image: Birthday,
            title: 'Friends Birthday App',
            caption: 'A Birthday app for my friends(Only Mobile View)',
            description: 'Mkae your friends bithday special by gifting him something special and heart touching works.',
            links: [
                { link: 'https://devartstar.github.io/FriendsBirthday/', icon: <LanguageIcon /> },
                { link: 'https://github.com/devartstar/FriendsBirthday', icon: <GitHubIcon /> },

            ]
        }
    ]
};