import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function About() {
  return (
    <>
      <SEO
        title="Ronni Grandberry Resume - Full Stack Developer"
        description="View my professional resume and experience as a professional Photographer and Jr. Software Developer"
        url="/about"
      />
      <Section>
        <Container>
          <h1 className="heading-page">About Me</h1>
          <p className="mt-2 body-default">
            {" "}
            I’m Ronni, a curious and driven individual who thrives on learning,
            creating, and connecting with others. Whether I’m exploring new
            ideas, tackling challenges, or sharing knowledge, I bring a
            thoughtful and enthusiastic approach to everything I do. My
            interests span across [photography, technology, design, community
            work, traveling or entrepreneurship], and I’m motivated by the
            opportunity to grow while making a positive impact. I value
            authenticity, creativity, and collaboration, and I’m always excited
            to discover new ways to contribute and inspire those around me.
          </p>
        </Container>
      </Section>
    </>
  );
}
