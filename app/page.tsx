import { Navbar, Hero, TechStack, Projects, Experience, FooterCTA } from "./components";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <Hero
        description="Hi, I&apos;m Fernando Marco, a Fullstack Software Engineer focused on building scalable and reliable systems for real-world business needs. I have hands-on experience in developing enterprise applications, integrating payment systems, and designing microservices architectures using Next.js, NestJS, and Golang, with a strong emphasis on performance, maintainability, and production readiness."
      />
      <TechStack />
      <Projects />
      <Experience />
      <FooterCTA />
    </div>
  );
}
