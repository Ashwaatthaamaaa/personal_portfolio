"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, ExternalLink, Code, Monitor } from "lucide-react";
import { CldImage } from 'next-cloudinary';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                Hi, I'm <span className="text-primary"> Sarthak Kumar</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-[700px] mx-auto">
                Computer Science Grad specializing in modern web development,
                distributed systems, and machine learning
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/Ashwaatthaamaaa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sarthak-kumar-b976aa153/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="mailto:sarthakk145@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <Avatar className="w-40 h-40 border-4 border-primary">
              <CldImage
      src="bxei6jf3ce3ahzzmbf1w" // Use this sample image or upload your own via the Media Explorer
      width="500" // Transform the image: auto-crop to square aspect_ratio
      height="500"
      crop={{
        type: 'auto',
        source: true
      }}
      alt="My Image"
    />
                <AvatarFallback>YN</AvatarFallback>
              </Avatar>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Computer Scientist & Problem Solver</h3>
              <p className="text-muted-foreground">
                I'm passionate about building elegant, performant software solutions to complex problems.
                With expertise in full-stack development and computer science fundamentals,
                I create applications that are both technically sound and user-focused.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge>TypeScript</Badge>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Node.js</Badge>
                <Badge>Python</Badge>
                <Badge>Cloud Computing</Badge>
                <Badge>Algorithms</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            My Projects
          </h2>
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              {/* <TabsList>
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="web">Web</TabsTrigger>
                <TabsTrigger value="ai">AI/ML</TabsTrigger>
                <TabsTrigger value="other">Other</TabsTrigger>
              </TabsList> */}
            </div>
            <TabsContent value="all" className="space-y-4">
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
                {/* Project Card 1 */}
                <Card>
                  <CardHeader className="p-0">
                    <div className="h-48 w-full bg-muted relative overflow-hidden">
                      <img 
                        src="/api/placeholder/400/320"
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle>Energy Swap</CardTitle>
                    <CardDescription className="mt-2">
                    EnergySwap enables individuals with excess renewable energy (e.g., from solar panels) to sell it directly to others, bypassing traditional utilities. It simplifies energy trading, reduces costs, and promotes sustainability using the Sepolia Ethereum testnet for secure, transparent transactions.</CardDescription>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <Badge variant="outline">Solidity</Badge>
                      <Badge variant="outline">React.js</Badge>
                      <Badge variant="outline">HardHat</Badge>
                      <Badge variant="outline">Ethers.js</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href="https://github.com/Ashwaatthaamaaa/energy-marketplace-frontend" target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="https://energyswap.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <Monitor className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project Card 2
                <Card>
                  <CardHeader className="p-0">
                    <div className="h-48 w-full bg-muted relative overflow-hidden">
                      <img 
                        src="/api/placeholder/400/320"
                        alt="Project 2"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle>Project Name</CardTitle>
                    <CardDescription className="mt-2">
                      A brief description of this project and the problems it solves. This should be concise but informative.
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <Badge variant="outline">Python</Badge>
                      <Badge variant="outline">TensorFlow</Badge>
                      <Badge variant="outline">ML</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View
                      </a>
                    </Button>
                  </CardFooter>
                </Card>

                {/* Project Card 3 */}
                {/* <Card>
                  <CardHeader className="p-0">
                    <div className="h-48 w-full bg-muted relative overflow-hidden">
                      <img 
                        src="/api/placeholder/400/320"
                        alt="Project 3"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <CardTitle>Project Name</CardTitle>
                    <CardDescription className="mt-2">
                      A brief description of this project and the problems it solves. This should be concise but informative.
                    </CardDescription>
                    <div className="flex flex-wrap gap-1 mt-3">
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">Express</Badge>
                      <Badge variant="outline">MongoDB</Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Code className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="#" target="_blank" rel="noopener noreferrer">
                        <Monitor className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card> */}
              </div>
            </TabsContent>
            <TabsContent value="web" className="space-y-4">
              {/* Web projects would go here */}
              <p className="text-center text-muted-foreground">Web development projects shown here</p>
            </TabsContent>
            <TabsContent value="ai" className="space-y-4">
              {/* AI/ML projects would go here */}
              <p className="text-center text-muted-foreground">AI and Machine Learning projects shown here</p>
            </TabsContent>
            <TabsContent value="other" className="space-y-4">
              {/* Other projects would go here */}
              <p className="text-center text-muted-foreground">Other interesting projects shown here</p>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Resume/Experience Section */}
      <section id="resume" className="py-16 bg-muted/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Experience Column */}
            

            {/* Education Column */}
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="bg-primary w-4 h-4 rounded-full inline-block mr-3"></span>
                Education
              </h3>

              <div className="space-y-8">
                <div className="relative pl-8 border-l border-muted-foreground/20">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[6.5px] top-1.5"></div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold">B.Tech in Computer Science</h4>
                      <Badge variant="outline">2022 - 2026</Badge>
                    </div>
                    <h5 className="text-primary">SRM University</h5>
                    <p className="text-sm text-muted-foreground">Focused on advanced algorithms, machine learning, and distributed systems.</p>
                  </div>
                </div>


              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild variant="outline">
              <a href="https://drive.google.com/file/d/1-7_ONtGyqj0FdMHq6Xy1v1l90sDY_nVi/view?usp=sharing">Download Full Resume</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Get In Touch
          </h2>
          <div className="max-w-md mx-auto">
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">Or reach out directly:</p>
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="mailto:sarthakk145@gmail.com"
                  className="flex flex-col items-center space-y-2 hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-muted rounded-full">
                    <Mail size={20} />
                  </div>
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="https://github.com/Ashwaatthaamaaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-muted rounded-full">
                    <Github size={20} />
                  </div>
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/sarthak-kumar-b976aa153/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center space-y-2 hover:text-primary transition-colors"
                >
                  <div className="p-3 bg-muted rounded-full">
                    <Linkedin size={20} />
                  </div>
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Sarthak Kumar. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}