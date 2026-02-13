import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import Button from "../components/ui/Button.jsx";
import TechStack from "../sections/TechStack.jsx";
import Projects from "../sections/Projects.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FinalCTA from "../sections/FinalCTA.jsx";

export default function Home() {
  return (
    <div>
      <Section
        as="section"
        aria-labelledby="intro-heading"
        className="min-h-[80vh] grid place-items-center bg-gradient-to-b from-[#7575df] to-[#080869]"
      >
        <Container>
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
            {/* Text content - 2/3rds */}
            <div className="lg:col-span-2 text-center lg:text-left">
              <h1 id="intro-heading" className="heading-hero">
                Hi, my name is Ronni Grandberry. I create things for the web
              </h1>
              <h2 className="mt-4 max-w-prose lg:mx-0 mx-auto body-large">
                Welcome to Ronni Grand Photography & Creative Solutions At Ronni
                Grand Photography, I capture more than just images—I tell
                stories. My lens focuses on lifestyle and branding photography
                that empowers individuals and businesses to showcase their
                authentic selves with confidence and style. Every shot is
                crafted to highlight representation, beauty, and the unique
                essence of each client. But creativity doesn’t stop at the
                camera. As I expand into web development, I now offer clients a
                seamless digital presence to match their visual identity. From
                stunning photographs to interactive, user-friendly websites, I
                provide a complete creative solution that elevates your brand
                both visually and online. Whether you’re an entrepreneur, a
                growing business, or someone ready to step into your spotlight,
                I’m here to help you shine—through powerful imagery and
                innovative web experiences.
              </h2>
              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap lg:justify-start justify-center gap-4">
                <Button
                  as="a"
                  href="/portfolio"
                  aria-label="Check our my work"
                  variant="primary"
                >
                  Check out my work
                </Button>
                <Button
                  as="a"
                  href="///C:/Users/ronne/Downloads/ronni_grandberry_resume.pdf"
                  aria-label="Downlowd my resume"
                  variant="secondary"
                >
                  Download my resume
                </Button>
              </div>
            </div>
            {/* Circular Image - 1/3rd */}
            <div className="lg:col-span-1 flex justify-center lg:justify-end">
              <div className="w-64 h-64 lg:w-80 lg:h-80 card-avatar">
                <img
                  "image placeholder"
                  alt="Ronni Grandberry"
                  className="w-full h-full object-cover"
                ></img>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <TechStack />
      <Projects limit={6} />
      <Testimonials limit={6} />
      <FinalCTA />
    </div>
  );
}
