import about from './image/about.png';
import backimg from './image/backimg.jpg';
import blackMan from './image/blackMan.png';
import box from './image/box.jpg';
import facebook from './image/facebook_icon.png';
import frontend from './image/frontend.png';
import frontimg from './image/frontimg.jpg';
import grad from './image/grad.jpg';
import imgresume from './image/imgresume.jpg';
import linkedin from './image/linkdin_icon.png';
import man_with_football from './image/man_with_football.png';
import randomquotes from './image/randomquotes.jpg';
import resume from './image/resume.png';
import twiter_icon from './image/twiter_icon.png';
import weather from './image/weather.jpg';
import Work from './image/Work.jpg';
import work from './image/work.png';


const Data =
{
    about: [
        {
            for: "school",
           
            Name: "Gaurav Gupta",
            fatherName: "Ashok Gupta",
            motherName: "Usha Gupta",
            s: [{
                bc:"rgb(115,212,36)",
                ClassName: "10th",
                marks: "77%",
                passingYear: "2017",
                image: "blackMan",

            },
            {
                bc:"rgb(115,112,36)",
                ClassName: "12th",
                marks: "70%",
                passingYear: "2019",
                image: "blackMan",

            },
            {
                bc:"rgb(115,22,36)",
                ClassName: "DCA",
                marks: "70%",
                passingYear: "2020"

            },
            {
                bc:"rgb(215,212,36)",
                ClassName: "B.tech",
                marks: "8-CGPA",
                passingYear: "2024"

            }
            ]
        }


    ],
    work: [
         [
            {
                path:"https://weather-app-by-gaurav.herokuapp.com/",
                color:"red",
                type:"node",
                title: "Weather app",
                for: "self",
                data: "17/07/2021",
                dis: "This app using APi with backend. In backend language use node JS.",
                image: weather
            }
        ],
        
         [
            {
                path:"/work/Addictive/index.html",
                color:"green",
                type:"frontend",
                for: " addectiveMedia",
                image: frontend,
                date: "10/07/2021",
                title: "frontend dev",
                dis: "It is a intern Assignment to. company gave me a PSD file and my work is convert it into a html page."

            },
            {
                path:"/work/quots app/quots.html",
                color:"yellow",
                type:"frontend",
                for: "self",
                image: randomquotes,
                data: "24/07/2021",
                title: "Random Quote",
                dis: "This is a Random qouts using Api. Generally API fatched in frondend by JS. ",
            }




        ],


         [
            {
                path:"https://weather-app-by-gaurav.herokuapp.com/",
                color:"gray",
                type:"backend",
                title: "Weather app",
                for: "self",
                data: "17/07/2021",
                dis: "This app using APi with backend. In backend language use node JS.",
                image: weather
                
            },
           

        ]
        





    ]


};

export default Data;