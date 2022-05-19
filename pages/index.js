import Head from "../component//Head";
import Nav from "../component/HomePage/Nav";
import Slider from "../component/HomePage/Slider";
import Marquee from "../component/HomePage/Marquee";
import RecentWorks from "../component/HomePage/RecentWorks";
import AboutSection from "../component/HomePage/AboutSection";
import HorSlider from "../component/HomePage/HorSlider";
import Social from "../component/HomePage/Social";
// import SmoothScroll from "../component/HomePage/SmoothScroll";

export default function Home() {
  const primaryColor = "#000";
  const secondaryColor = "#fff";
  return (
    <>
      <Head />
      <div className="top bg-primary">
        <div className="center">
          <Nav color={secondaryColor} />
        </div>
      </div>
      <div className="outer-title">
        <div className="title">
          <div className="center">
            <p>
              Hello I am
              <strong> Samar Adhikari</strong> & I
              specialize in
            </p>
            <Slider />
          </div>
        </div>
      </div>
      <Marquee
        color={primaryColor}
        title="RECENT WORKS"
      />
      <section>
        <div className="center">
          <RecentWorks />
        </div>
      </section>
      <div
        style={{
          background: `${primaryColor}`,
          color: `${secondaryColor}`,
        }}
        className="intro"
      >
        <Marquee
          color={secondaryColor}
          title="ABOUT ME"
        />
        <div className="center">
          <AboutSection />
        </div>
      </div>
      <Marquee
        color={primaryColor}
        title="DON'T MISS OUT"
      />
      <HorSlider />
      <footer>
        <Marquee
          color={secondaryColor}
          title="SAY HI!!"
        />
        <div className="center">
          <Social />
        </div>
      </footer>
    </>
  );
}
