import Hero from "../../components/Hero/Hero";
import ProgramsPreview from "../../components/ProgramsPreview/ProgramsPreview";
import CampusPreview from "../../components/CampusPreview/CampusPreview";
import TestimonialsPreview from "../../components/TestimonialsPreview/TestimonialsPreview";
import AboutPreview from "../../components/AboutPreview/AboutPreview";
import ContactCTA from "../../components/ContactCTA/ContactCTA";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      {/* Programs Preview Section */}
      <section id="programs" className="section-preview">
        <ProgramsPreview />
      </section>

      {/* Campus Preview Section */}
      <section id="campus" className="section-preview">
        <CampusPreview />
      </section>

      {/* Testimonials Preview Section */}
      <section id="testimonials" className="section-preview">
        <TestimonialsPreview />
      </section>

      {/* About Preview Section */}
      <section id="about" className="section-preview">
        <AboutPreview />
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="section-preview">
        <ContactCTA />
      </section>
    </div>
  );
};

export default Home;
