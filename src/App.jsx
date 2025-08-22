import { useRef } from "react";
import ScrollFloat from "./assets/components/Scroll Float/ScrollFloat";
import ScrollReveal from "./assets/components/Scroll Reveal/Scroll Reveal.jsx";
import Galaxy from "./assets/components/Galaxy/Galaxy.jsx";
import TextType from "./assets/components/TextType/TextType.jsx";
import ShinyText from "./assets/components/ShinyText/ShinyText.jsx";
import ShapeBlur from "./assets/components/ShapeBlur/ShapeBlur.jsx";
import DecryptedText from "./assets/components/DecryptedText/DecryptedText.jsx";
import ProfileCard from "./assets/components/ProfileCard/ProfileCard.jsx";
import TiltedCard from "./assets/components/TiltedCard/TiltedCard.jsx";
import FallingText from "./assets/components/FallingText/FallingText.jsx";
import CountUp from "./assets/components/CountUp/CountUp.jsx";
import SpotlightCard from "./assets/components/SpotlightCard/SpotlightCard.jsx";
import DecayCard from "./assets/components/DecayCard/DecayCard.jsx";
import StarBorder from "./assets/components/StarBorder/StarBorder.jsx";
import ScrollVelocity from "./assets/components/ScrollVelocity/ScrollVelocity.jsx";
import GlareHover from "./assets/components/GlareHover/GlareHover.jsx";
import Squares from "./assets/components/Squares/Squares.jsx";
import Crosshair from "./assets/components/Crosshair/Crosshair.jsx";

import skills from "./assets/skills.jsx";
import projects from "./assets/projects.jsx";
import Header from "./assets/components/Header.jsx";
import Footer from "./assets/components/Footer/Footer.jsx";
import CardSwap, { Card } from "./assets/components/CardSwap/CardSwap.jsx";

import { ReactLenis } from "lenis/react";
import "./style.css";
import { i } from "motion/react-client";

function App() {
  const sec02Ref = useRef(null);
  const sec06Ref = useRef(null); // 🔥 sec06 영역 참조 추가
  const handleClick = () => {
    window.location.href = "/about"; // 내부 페이지
    // window.location.href = "https://github.com/ghdtjdvlf"; // 외부 링크
  };

  return (
    <>
      <ReactLenis root />
      <Header />

      {/* sec01 영역 */}
      <section className="sec01">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0.8}
          hueShift={140}
        />

        <div className="title">
          <h1 className="sec01_h1">
            홍성필 <br />
            <ShinyText
              text="Web publisher "
              disabled={false}
              speed={3}
              className="custom-class h1_span cursor-target"
            />
            <br />
            <p className="h1_p">포트폴리오</p>
          </h1>
          <p>
            <TextType
              text={[
                "퍼블리싱을 넘어, 기획·디자인과도 소통할 줄 아는 다재다능함",
                "퍼블리싱부터 디자인 해석, 기획까지 연결하는 퍼블리셔.",
                "HTML·CSS·JavaScript는 기본, 디자인·SEO까지 넘나드는 다재다능함",
                "다양한 도구와 언어를 상황에 맞게 활용하는 멀티 퍼블리셔",
              ]}
              typingSpeed={60}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </p>
        </div>
      </section>

      {/* sec02 영역 */}
      <section
        className="sec02"
        ref={sec02Ref}
        style={{ position: "relative" }}
      >
        <ScrollFloat
          animationDuration={1}
          ease="back.inOut(2)"
          scrollStart="center bottom+=50%"
          scrollEnd="bottom bottom-=40%"
          stagger={0.03}
        >
          센스 있게, 효율적으로.
        </ScrollFloat>

        <div
          style={{ position: "relative", height: "800px", overflow: "hidden" }}
        >
          <ShapeBlur
            variation={0}
            pixelRatioProp={
              typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1
            }
            shapeSize={1}
            roundness={0.5}
            borderSize={0.05}
            circleSize={0.25}
            circleEdge={1}
          />
        </div>
      </section>

      {/* sec03 영역 */}
      <section className="sec03">
        <div className="container">
          <div className="title">
            <h2> 웹 퍼블리셔 홍성필입니다.</h2>
          </div>
          <div className="sec03-wrap">
            <TiltedCard
              imageSrc="http://ghdvlftjd.dothome.co.kr/wp-content/themes/supernormal2/img/profile.png"
              altText="Kendrick Lamar - GNX Album Cover"
              captionText="Kendrick Lamar - GNX"
              containerHeight="auto"
              containerWidth="400px"
              imageHeight="600px"
              imageWidth="400px"
              rotateAmplitude={12}
              scaleOnHover={1.05}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text">
                  Web publisher - HongSeongPil
                </p>
              }
            />

            <div className="reveal_box">
              <ScrollReveal
                className="reveal"
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
              >
                Figma 디자인 가이드를 빠르게 분석하고 퍼블리싱에 반영할 수
                있습니다. SCSS, Bootstrap, GSAP, Swiper 등을 활용한 효율적인
                구현 경험이 있습니다. ‘보기에 좋고, 쓰기에도 좋은’ UI를 만드는
                데 집중합니다.
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* sec04 영역 */}
      <section className="sec04">
        <div className="s-container">
          <div className="skills-grid">
            {skills.map((s, i) => (
              <SpotlightCard
                key={i}
                className="custom-spotlight-card"
                spotlightColor="rgba(0, 229, 255, 0.2)"
              >
                <div className="skill-card">
                  <div className="skill-header">
                    <img src={s.icon} alt={s.title} className="skill-icon" />
                    <h3 className="skill-title">{s.title}</h3>
                    {s.badge && <span className="skill-badge">{s.badge}</span>}
                  </div>
                  <p className="skill-desc">{s.desc}</p>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
        <div className="fallingText_container">
          <FallingText
            text={`Photoshop Figma Midjourney Gsap HTML5 CSS3 React SCSS Tailwind Vue StyledComponents JavaScript jQuery Bootstrap5 Wordpress 그누보드 Notion Git`}
            highlightWords={["React", "Figma", "Vue", "Gsap", "Bootstrap5"]}
            highlightClass="highlighted"
            trigger="hover"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.36}
            fontSize="2.5rem"
            mouseConstraintStiffness={0.9}
          />
        </div>
      </section>

      {/* sec05 영역 */}
      <section className="sec05">
        <div className="container">
          <div className="project-grid">
            {projects.map((p, i) => (
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.3}
                glareAngle={-30}
                glareSize={300}
                transitionDuration={800}
                playOnce={false}
                key={i}
              >
                <div className="img">
                  <img src={p.img} alt="" />
                </div>
                <div className="tag-wrap">
                  {p.tag.map((t, idx) => (
                    <div className="tag" key={idx}>
                      {t}
                    </div>
                  ))}
                </div>
                <div className="text-wrap">
                  <div className="text-title">
                    <h2>{p.title}</h2>
                    <p className="title_tag">{p.titletag}</p>
                  </div>
                </div>
              </GlareHover>
            ))}
          </div>
        </div>
      </section>

      {/* sec06 영역 */}
      <section
        className="sec06"
        ref={sec06Ref}
        style={{ position: "relative", height: "500px", overflow: "hidden" }}
      >
        <Squares
          speed={0.5}
          squareSize={40}
          direction="" // up, down, left, right, diagonal
          borderColor="#212121"
          hoverFillColor="#222"
        />
        <div className="container">
          <div className="aim_container">
            <h2 onClick={handleClick} style={{ cursor: "pointer" }}></h2>
          </div>
        </div>

        {/* 🔥 Crosshair 적용 */}
        <Crosshair containerRef={sec06Ref} color="#ffffff" />
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
