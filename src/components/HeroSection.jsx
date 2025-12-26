import { ArrowDown } from "lucide-react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export const HeroSection = () => {
  const [text] = useTypewriter({
    words: ["Hi, I'm Prem Raj"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
    delaySpeed: 1500,
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            {/* Hi, I'm */}
            <span className="text-foreground">
              {text.slice(0, 8)}
            </span>

            {/* Prem */}
            <span className="text-primary">
              {text.slice(8, 12)}
            </span>

            {/* Raj */}
            <span className="text-gradient">
              {text.slice(12)}
            </span>

            <Cursor cursorStyle="|" />
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            I create impactful web experiences with modern technologies. As a
            full-stack developer, I craft both intuitive interfaces and reliable
            back-end systems.
          </p>

          <div className="pt-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">
          Scroll
        </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
