haimport Section from "../components/ui/Section.jsx";
import Container from "../components/ui/Container.jsx";
import SEO from "../components/ui/SEO.jsx";


export default function Resume() {
  return (
    <>
      <SEO
        title="Ronni Grandberry Resume"
        description="View my professional resume and experience as a Sr. Photographer and Jr. Software Developer"
        url="/resume"
      />
      <Section>
        <Container>
          <h1 className="heading-page">My Resume</h1>
          <p className="mt-2 body-default">Placeholder content</p>
          <iframe
            src="file:///C:/Users/ronne/Downloads/ronni_grandberry_resume.pdf"
            width="100%"
            height="800px"
            title="Ronni Grandberry Resume"
            className="mt-4 border-gray-300 rounded-lg shadow-lg"
          >
            <p>
              Your browser does not support iframes.{" "}
              <a href="///C:/Users/ronne/Downloads/ronni_grandberry_resume.pdf">
                Click here to view the PDF directly.
              </a>
            </p>
          </iframe>
        </Container>
      </Section>
    </>
  );
}
