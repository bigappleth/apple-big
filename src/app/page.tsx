"use client"
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import VideoSection from "@/components/VideoSection";


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <VideoSection />
      <Container className="mt-32">
        <Benefits />
      </Container>
    </>
  );
};

export default HomePage;
