import { Badge } from '@/components/ui/badge';
import portfolioImage from './assets/Isaac Tiew Xun Yong Profile Photo.jpg'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import resume from './assets/IsaacTiewXunYong_Resume.pdf';
import MyPdf from './components/ui/pdf';
import BEDpic1 from './assets/BED/BED_Website_Home.png';
import BEDpic2 from './assets/BED/BED_Website_Login.png';
import BEDpic3 from './assets/BED/BED_Website_UserEvents.png'
import BEDpic4 from './assets/BED/BED_Website_EventManagementAdmin.png'

import FSDPpic1 from './assets/FSDP/homepage.png';
import FSDPpic2 from './assets/FSDP/management.png';
import FSDPpic3 from './assets/FSDP/template.png'
import logo from './assets/logo.jpg'

import vehicleSGHomepage from './assets/vehicleSG/vehicleSGHomepage.png'
import carparkAvail from './assets/vehicleSG/carparkAvailability.png'
import trafficCam from './assets/vehicleSG/trafficCameras.png'
import streetConditions from './assets/vehicleSG/trafficMap.png'

import NgeeAnnCity from './assets/NgeeAnnCity.png'

import movieDB from './assets/MovieDB.png'

import { useState,useRef } from 'react';
import MyModal  from './components/ui/modal';


interface projPhotos{
  title: string,
  description: string,
  image: string [] | string,
  tag: string [],
  gitHubUrl: string,
  isMulti: boolean,
}


const Portfolio = () => {
  const languagesKnown : {langName: string, image: string}[] = [
    {langName: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    {langName: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
    {langName: "Javascript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"},
    {langName: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"},
    {langName: "Csharp", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"},
    
  ]
  
  const projects : projPhotos[] = [
    {
      title: 'Ad distribution system ',
      description: 'Real-time ad distribution system that utilises a serverless architecture, to enable real-time ad distribution and updates. Responsible for development of role-based authentication system for managing access to functionalities and features within the app',
      image: [FSDPpic1,FSDPpic2,FSDPpic3],
      tag: ['React', 'Javascript', 'Socket.io', 'DynamoDB', 'Express Js'],
      gitHubUrl:"https://github.com/Isa-AcTiEw/FullStackDev-Y2",
      isMulti: true,
    },
    {
      title: 'Backend Community Club Website',
      description: 'A community club website that allow adminstrators divided into roles such as event manager, admin and facilities manager. To organise events and provide frequent updates on current facilities status. Allowing for seamless engagement with residents by allowing the sign up for events ',
      image: [BEDpic1,BEDpic2,BEDpic3,BEDpic4],
      tag: ['Express JS', 'Js', 'Node Js', 'Bootstrap'],
      gitHubUrl:"https://github.com/Isa-AcTiEw/BED2024Apr_P03_T07",
      isMulti: true,
    },
    {
      title: 'MAD Application built with Java in Android Studio',
      description : 'F&B mobile application for Ngee Ann Polytechnic BYOB (Bring your own businesses) businesses. Allow users to support and order from entreprenuial F&B buisnesses arround campus ',
      image: logo,
      tag: ["Andriod Studio","Java"],
      gitHubUrl: "https://github.com/Isa-AcTiEw/P03Team3",
      isMulti: false,
    },
    {
      title: "VehicleSG",
      description: "Vehicle SG is an all in one platform for Singaporean motorists to be informed on traffic conditions, avalilable HDB Carpark lots and checkpoint conditions through the leveraging of LTA's Datamall APIs",
      image: [vehicleSGHomepage,carparkAvail,trafficCam,streetConditions],
      tag: ["Javascript", "Bootstrap"],
      gitHubUrl:"https://github.com/Isa-AcTiEw/VehicleSg_Website_S10257760_S10257808",
      isMulti: true    
    },
    {
      title: 'Ngee Ann City',
      description: "Ngee Ann City is a minature city tycoon inspired game, users are able to accumulate points through the construction of different building types and constructing adjacent buildings",
      image: NgeeAnnCity,
      tag: ["python"],
      gitHubUrl:"https://github.com/Isa-AcTiEw/SPM-console-game",
      isMulti:false
    },
    {
      title: 'Movie Database Management System',
      description: 'A community-based movie database management system that utilises Data Structures and Algorithms for fast and efficient queries for actor or movie related details by movie enthusiast.',
      image:movieDB,
      tag: ["C++"],
      gitHubUrl: "https://github.com/Isa-AcTiEw/DSA-Assignment-JoeyAndIsaac",
      isMulti: false
    }
  ];
  const technologiesKnown = [
    {
      title: "React",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
    {
      title: "MongoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain.svg",
    },
    {
      title: "DynamoDB",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dynamodb/dynamodb-original.svg", // AWS covers DynamoDB
    },
    {
      title: "AWS",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    },
    {
      title: "MSSQL",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
    },
    {
      title: "Bootstrap",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      title: "Jest",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg",
    },
    {
      title: "Node Js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
    },
    {
      title: "Android Studio",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg"
    },
    {
      title: "Figma",
      image:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
    },
    {
      title: "Express Js",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
    }
  ];
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean[]>(new Array(projects.length).fill(false));
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Create a ref for the button
  const [selectedProj,setSelectedProj] = useState<projPhotos | null>(null);

  
  const handleClick = (index: number) => {
    setIsClicked(prevState => {
        const newState = [...prevState];
        // Ensure the array is long enough to accommodate the focused element
        while (newState.length <= index) {
            newState.push(false); // Add false values to the array until it reaches the required index
        }
        newState[index] = true; // Mark the element at `index` as focused
        return newState;
    });
  };

  const openModal =(project: projPhotos ) =>{
    setIsModalOpen(true);
    // destructure and pass to modal
    setSelectedProj(project)
  }

  const handleBlur = (index: number, e:React.FocusEvent<HTMLDivElement | Element>) => {
    if (buttonRef.current && !buttonRef.current.contains(e.relatedTarget)) {
      const newClickedState = [...isClicked];
      newClickedState[index] = false; // Reset clicked state when focus is lost
      setIsClicked(newClickedState);
    }
  };


  

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'hsl(var(--background))' }}>
       {/* Call the modal directly based on isClicked state */}
       {selectedProj && isModalOpen && (
                    <MyModal
                      header={selectedProj.title}
                      images={selectedProj.image}
                      body={selectedProj.description}
                      onClose={() => setIsModalOpen(false)} // Close modal
                    />
                  )}
      {/* About Section */}
      <div className = " flex flex-row justify-center items-center p-2 m-20">
        <h1>Aspiring Software Engineer Isaac Tiew</h1>
      </div>
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-around drop-shadow-lg max-w-full h-50 px-2 py-8">
          {/* Left section: Profile */}
          <div className="flex-1 flex justify-center border-r lg:mr-8 mb-8 lg:mb">
            <img src= {portfolioImage} className="w-30 h-30 object-cover rounded-2xl drop-shadow-lg"></img>
          </div>
          {/* Right Section: About Me */}

          <div className="flex-1 drop-shadow-lg px-4 py-4 w-500 justify-center items-center">
            <Card>
              <CardHeader>About Me</CardHeader>
              <CardContent>Year 2 student currently pursuing a diploma in Information Technology at the school of ICT Ngee Ann Polytechnic, with a strong aptitude for programming and an advocate of enabling tech for social good</CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Programming languages known section */}
      <section className = "mb-12">
          <div className = "flex flex-row justify-content items-center">
            <h1 className="text-3xl font-bold mb-4 mx-auto" style={{ color: 'hsl(var(--primary))' }}>Programming languages known</h1>
          </div>
          <div className="relative w-full overflow-hidden">
            {/* Scrolling wrapper */}
            <div className="flex w-max animate-infinite-scrolling">
                  {/* Duplicate content to create seamless looping */}
                  {[...languagesKnown, ...languagesKnown].map((lang, index) => (
                      <div className="px-10" key={index}>
                          <Card className="w-[200px] h-[200px]">
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                  <img src={lang.image} alt="language-icon" />
                              </CardContent>
                          </Card>
                      </div>
                  ))}
            </div>
          </div>
      </section>

      {/* Tech Stack Section */}
      <section className="mb-12">
          <div className="flex flex-row justify-center items-center">
              <h1 className="text-3xl font-bold mb-4 mx-auto" style={{ color: 'hsl(var(--primary))' }}>
                  Technologies Known
              </h1>
          </div>

          <div className="relative w-full overflow-hidden">
            {/* Scrolling wrapper */}
            <div className="flex w-max animate-infinite-scrolling">
                  {/* Duplicate content to create seamless looping */}
                  {[...technologiesKnown, ...technologiesKnown].map((tech, index) => (
                      <div className="px-10" key={index}>
                          <Card className="w-[200px] h-[350px] flex flex-col justify-center text-center">
                              <CardHeader>{tech.title}</CardHeader>
                              <CardContent className="flex aspect-square items-center justify-center p-6">
                                  <img src={tech.image} alt="language-icon" />
                              </CardContent>
                          </Card>
                      </div>
                  ))}
            </div>
          </div>
          
      </section>


      {/*Projects section*/}
      <section className="mb-12">
        <div className= "flex flex-row justify-center items-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'hsl(var(--primary))' }}>Featured Projects</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 w-full">
            {projects.map((project,index) => (
              <Card className = "drop-shadow-lg px-1 justify-center sm: w-200px h-200px relative" key={project.title} style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }} tabIndex={0} onClick={()=> handleClick(index)}
              onBlur={(e) => handleBlur(index, e)}>
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className = "flex flex-col justify-center">
                  {project.isMulti && project.image ? (
                      <div className='mb-5'>
                        <img
                          className="aspect-video rounded-sm"
                          src={project.image[0]}
                          alt="Project image"
                        />
                      </div>
                  ): <div className='mb-5'>
                        <img
                          className="aspect-video w-[800px] rounded-sm"
                          src={typeof project.image === "string" ? project.image : ""}
                          alt="Project image"
                        />
                     </div>
                }
                  <div className="flex flex-wrap gap-2">
                    {project.tag.map((tags) => (
                      <Badge key={tags} variant="outline" className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                        {tags}
                      </Badge>
                    ))}
                  </div>
                  <div className = "flex flex-col justify-center rounded-lg bg-primary mt-5 w-full">
                    <button 
                        className="flex items-center justify-center gap-2 px-4 py-2 text-white" 
                        onClick={() => window.open(project.gitHubUrl, '_blank')}>
                        <Github className="h-6 w-6" /> {/* Icon */}
                        <span>Github Repo</span> {/* Text */}
                    </button>

                  </div>
                </CardContent>
                {isClicked[index] ? (
                    <div className = 'absolute inset-0 z-50 flex justify-center items-center bg-slate-950 bg-opacity-70 rounded-lg'>
                      <Button ref = {buttonRef} className='rounded-sm bg-white w-fit h-fit' onClick ={()=> openModal(projects[index])}>More details</Button>
                    </div>

                  ): null}
              </Card>
              
            ))}
        </div>
      </section>

        {/* Resume section */}
        <section className="mb-12">
        <div className= "flex flex-row justify-center items-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'hsl(var(--primary))' }}>My Resume</h2>
        </div>
        <MyPdf fileUrl={resume}></MyPdf>
      </section>
      {/* Contact Section */}
      <section>
        <Card className = "shadow-lg sm md:flex flex-col w-200px h-fit" style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription style={{ color: 'hsl(var(--muted-foreground))' }}>Let's connect and build something amazing together</CardDescription>
          </CardHeader>
          <CardContent>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-2">
            <Button variant="outline" className="flex items-center gap-2" style={{ borderColor: 'hsl(var(--border))' }} onClick = {()=> window.open('https://github.com/Isa-AcTiEw','_blank')}>
              <Github className="h-6 w-6"/>
              GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2" onClick={() => window.open('https://www.linkedin.com/in/isaactiew/','_blank')}  style={{ borderColor: 'hsl(var(--border))' }}>
              <Linkedin className="h-6 w-6" />
              LinkedIn
            </Button>
            <Button variant="outline" className="flex items-center gap-2 "  onClick={()=> window.open('mailto:isaactiew3636@gmail.com','_blank')}  style={{ borderColor: 'hsl(var(--border))' }}>
              <Mail className="h-6 w-6"/>
              Email
            </Button>
        </div>

          </CardContent>
        </Card>
      </section>
    </div>
  );
  
};

export default Portfolio;