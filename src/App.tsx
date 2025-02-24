import { Badge } from '@/components/ui/badge';
import portfolioImage from './assets/Isaac Tiew Xun Yong Profile Photo.jpg'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './components/ui/carousel';
import { Github, Linkedin, Mail } from 'lucide-react';
import Autoplay from 'embla-carousel-autoplay';
import AutoScroll from 'embla-carousel-auto-scroll';
import resume from './assets/IsaacTiewXunYong_Resume.pdf';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

interface projPhotos{
  title: string,
  description: string,
  image: string [] | string,
  tag: string [],
  gitHubUrl: string,
  isMulti: boolean,
}


const Portfolio = () => {
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
    }
  ];

  const languagesKnown : {langName: string, image: string}[] = [
    {langName: "C++", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    {langName: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"},
    {langName: "Javascript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg"},
    {langName: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg"},
    {langName: "Csharp", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"},
    
  ]
  
  const projects : projPhotos[] = [
    {
      title: 'Backend Community Club Website',
      description: 'A community club website that allow adminstrators divided into roles such as event manage, admin and facilities manager. To organise events and provide frequent updates on current facilities status. Allowing for seameless engagement with residents by allowing the sign up for events ',
      image: ['src/assets/BED/BED_Website_Home.png','src/assets/BED/BED_Website_Login.png','src/assets/BED/BED_Website_UserEvents.png','src/assets/BED/BED_Website_EventManagementAdmin.png'],
      tag: ['Express JS', 'Js', 'Node Js'],
      gitHubUrl:"https://github.com/Isa-AcTiEw/BED2024Apr_P03_T07",
      isMulti: true,
    },
    {
      title: 'Ad distribution system ',
      description: 'Developed a real-time ad distribution system that utilises a serverless architecture, to enable real-time ad distribution and updates. Responsible for development of Role based authentication system for managing access to functionalities and features within the app',
      image: ['src/assets/FSDP/homepage.png','src/assets/FSDP/management.png','src/assets/FSDP/template.png'],
      tag: ['React', 'Javascript', 'Socket.io', 'DynamoDB'],
      gitHubUrl:"https://github.com/danielbakrr/fsdp",
      isMulti: true,
    },
    {
      title: 'MAD Application built with Java in Android Studio',
      description : 'F&B mobile application for Ngee Ann Polytechnic BYOB (Bring your own buisnesses) buisnesses. Allow users to support and order from entreprenuial F&B buisnesses arround campus ',
      image: "",
      tag: ["Andriod Studio","Java"],
      gitHubUrl: "",
      isMulti: false,
    }
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'hsl(var(--background))' }}>
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
        <Carousel 
            plugins = {[
              AutoScroll({ playOnInit: true })
            ]}
            opts={{
              loop: true,
            }}
            className="w-full max-w-sm mx-auto">
            <CarouselContent className="-ml-1">
              {languagesKnown.map((lang,index)=> {
                return(
                  <CarouselItem key = {index} className = " w-full sm:basis-full lg:basis-2/4 md:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <img src = {lang.image}></img>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
        </Carousel>

      </section>

      {/* Tech Stack Section */}
      <section className="mb-12">
        <div className= "flex flex-row justify-center items-center">
          <h1 className="text-3xl font-bold mb-4" style={{ color: 'hsl(var(--primary))' }}>Technologies Known</h1>
        </div>
        <div className="flex flex-row justify-around overflow-hidden px-2 m-20 space-x-4">
          {/* Add your tech stack items here */}
          <div className="flex flex-wrap justify-center items-center">
            <Carousel 
              plugins = {[
                AutoScroll({ playOnInit: true })
              ]}
              opts={{
                loop: true,
              }}
              className="w-full max-w-sm mx-auto">
              <CarouselContent className = "-ml-1">
                {technologiesKnown.map((tech,index) => (
                    <CarouselItem
                    key={index}
                    className="flex flex-row lg:basis-1/2 md:basis-1/4 sm:basis-1/4 w-full h-fit pl-10"
                  >
                    <Card
                      className="w-full md:w-[200px] sm:w-[200px] lg:h-[300px] md:h-[300px] sm:h-[300px]"
                      style={{
                        backgroundColor: 'hsl(var(--card))',
                        color: 'hsl(var(--card-foreground))',
                      }}
                    >
                      <CardHeader className="text-center">{tech.title}</CardHeader>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <img src={tech.image} className="w-25 h-25 object-contain" />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                
                ))}
              </CarouselContent>
            </Carousel>
          </div>


        </div>

    </section>
  
      {/* Projects Section */}
      <section className="mb-12">
      <div className= "flex flex-row justify-center items-center">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'hsl(var(--primary))' }}>Featured Projects</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 w-full">
          {projects.map((project) => (
            <Card className = "drop-shadow-lg px-1 justify-center sm: w-200px h-200px" key={project.title} style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                {project.isMulti ? (
                  <Carousel
                    plugins = {[
                      Autoplay({
                        delay: 3000
                      })
                    ]}
                    className="relative w-full">
                    <CarouselContent>
                        {Array.isArray(project.image) && project.image.length > 0 ? (
                          project.image.map((imgSrc, index) => {
                            console.log('Rendering image:', imgSrc);  // Logs the current image source
                            return (
                              <CarouselItem key={index}>
                                <div className="p-1">
                                  <Card>
                                  <CardContent className="flex items-center justify-center p-0">
                                    <div className="w-full aspect-[16/9]">
                                      <img
                                        src={imgSrc}
                                        alt={`Image ${index}`}
                                        className="w-full h-full object-cover rounded-sm"
                                      />
                                    </div>
                                  </CardContent>

                                  </Card>
                                </div>
                              </CarouselItem>
                            );
                          })
                        ) : (
                        <p>No images available</p>
                      )}
                    </CarouselContent>
                    <CarouselPrevious className = "left-2"/>
                    <CarouselNext className = "right-2"/>

                </Carousel>
                ) : null}
                <div className="flex flex-wrap gap-2">
                  {project.tag.map((tags) => (
                    <Badge key={tags} variant="outline" className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {tags}
                    </Badge>
                  ))}
                </div>
                <div className = "flex flex-col justify-center rounded-sm bg-black mt-20 w-full">
                <button 
                    className="flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg" 
                    onClick={() => window.open(project.gitHubUrl, '_blank')}>
                    <Github className="h-6 w-6" /> {/* Icon */}
                    <span>Github Repo</span> {/* Text */}
                  </button>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Resume section */}
      <section className="mb-12">
        <div className= "flex flex-row justify-center items-center">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'hsl(var(--primary))' }}>My Resume</h2>
        </div>
        <Worker workerUrl='/worker.js'>
          <div className="mx-auto w-full lg:w-[900px] lg:h-[750px] md:w-[80%] md:h-[600px] sm:w-[90%] sm:h-[400px]">
              <Viewer fileUrl={resume} />
          </div>
        </Worker>

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
            <Button variant="outline" className="flex items-center gap-2" style={{ borderColor: 'hsl(var(--border))' }}>
              <Github className="h-6 w-6" />
              GitHub
            </Button>
            <Button variant="outline" className="flex items-center gap-2" style={{ borderColor: 'hsl(var(--border))' }}>
              <Linkedin className="h-6 w-6" />
              LinkedIn
            </Button>
            <Button variant="outline" className="flex items-center gap-2" style={{ borderColor: 'hsl(var(--border))' }}>
              <Mail className="h-6 w-6" />
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