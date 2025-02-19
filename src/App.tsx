import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
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
  
  

  const projects = [
    {
      title: 'Backend Community Club Website',
      description: 'A community club website that allow adminstrators divided into roles such as event manage, admin and facilities manager. To organise events and provide frequent updates on current facilities status. Allowing for seameless engagement with residents by allowing the sign up for events ',
      images: [],
      link:"",
      tech: ['Express JS', 'Js', 'Node Js']
    },
    {
      title: 'Ad distribution system ',
      description: 'Developed a real-time ad distribution system that utilises a serverless architecture, to enable real-time ad distribution and updates. Responsible for development of Role based authentication system for managing access to functionalities and features within the app',
      images: [],
      link:"",
      tech: ['React', 'Javascript', 'Socket.io', 'DynamoDB']
    },
    // {
    //   title: 'Ice cream app console application',
    //   images: '',
    //   link: "",
    //   description: 'Developed an object oriented C# console application on the use case of an ice cream store. Allowing users to customise ice cream by selecting different type of toppings and cones. Allows the store to keep track of their yearly revenue as well',
    //   tech: ['C#']
    // },
    {
      title: 'F&B mobile application for Ngee Ann Polytechnic BYOB (Bring your own buisnesses) buisnesses. Allow users to support and order from entreprenuial F&B buisnesses arround campus ',
      images: [],
      link: "",
      tech: ["Andriod Studio","Java"]
    }
  ];

  return (
    <div className="min-h-screen p-8" style={{ backgroundColor: 'hsl(var(--background))', color: 'hsl(var(--foreground))' }}>
      {/* About Section */}
      <div className = " flex flex-row justify-center items-center p-2 m-20">
        <h1>Aspiring Software Engineer Isaac Tiew</h1>
      </div>
      <section className="mb-12">
        <div className="flex flex-col lg:flex-row items-center justify-around drop-shadow-lg max-w-full h-50 px-2 py-8">
          {/* Left section: Profile */}
          <div className="flex-1 flex justify-center border-r lg:mr-8 mb-8 lg:mb">
            <img src="../public/Isaac Tiew Xun Yong Profile Photo.jpg" className="w-30 h-30 object-cover rounded-2xl drop-shadow-lg"></img>
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


    {/* Tech Stack Section */}
    <section className="mb-12">
      <div className= "flex flex-row justify-center items-center">
        <h1 className="text-3xl font-bold mb-4" style={{ color: 'hsl(var(--primary))' }}>Technologies Known</h1>
      </div>
      <div className="flex flex-row justify-around overflow-hidden px-2 m-20 space-x-4">
        {/* Add your tech stack items here */}
        <div className="flex flex-wrap justify-center items-center">
          {technologiesKnown.map((tech) => (
            <Card
              className="drop-shadow-lg px-1 flex flex-col sm:w-1/2 md:w-3/4 max-w-screen-md lg:flex-col items-center w-3/4 xl:w-1/5 h-[300px] justify-center m-5"
              style={{
                backgroundColor: 'hsl(var(--card))',
                color: 'hsl(var(--card-foreground))',
              }}
            >
              <CardHeader className="text-center">{tech.title}</CardHeader>
              <CardContent className="flex justify-center items-center w-full h-full">
                <img src={tech.image} className="w-25 h-25 object-contain" />
              </CardContent>
            </Card>
          ))}
        </div>


      </div>

  </section>
  
      {/* Projects Section */}
      <section className="mb-12">
      <div className= "flex flex-row justify-center items-center">
        <h2 className="text-2xl font-bold mb-6" style={{ color: 'hsl(var(--primary))' }}>Featured Projects</h2>
      </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card className = "drop-shadow-lg px-1" key={project.title} style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs" style={{ color: 'hsl(var(--muted-foreground))' }}>
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
  
      {/* Contact Section */}
      <section>
        <Card className = "shadow-lg" style={{ backgroundColor: 'hsl(var(--card))', color: 'hsl(var(--card-foreground))' }}>
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription style={{ color: 'hsl(var(--muted-foreground))' }}>Let's connect and build something amazing together</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <Button variant="outline" className="flex items-center gap-2" style={{ borderColor: 'hsl(var(--border))' }}>
                <Github className="h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="flex items-center gap-2" style={{ borderColor: 'hsl(var(--border))' }}>
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Button>
              <Button variant="outline" className="flex items-center gap-2" style={{ borderColor: 'hsl(var(--border))' }}>
                <Mail className="h-4 w-4" />
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