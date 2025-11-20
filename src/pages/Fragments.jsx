import { fragments } from "../data/FragmentsData.jsx";
import Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";

export default function Fragments() {
  return (
    <>
      <SEO
        title="Ronni Grandberry Resume - Full Stack Developer"
        description="View my professional resume and experience as a professional Photographer and Jr. Software Developer"
        url="/about"
      />
      <Section>
        <Container className="flex flex-col space-y space-y-2">
          {fragments.content}
        </Container>
      </Section>
    </>
  );
}
