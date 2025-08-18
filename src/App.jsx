import { useState, useEffect, useRef } from "react";
import ScrollFloat from "./assets/components/Scroll Float/ScrollFloat";
import ScrollReveal from "./assets/components/Scroll Reveal/Scroll Reveal.jsx";
import Galaxy from "./assets/components/Galaxy/Galaxy.jsx";
import TargetCursor from "./assets/components/TargetCursor/TargetCursor.jsx";
import TextType from "./assets/components/TextType/TextType.jsx";
import ShinyText from "./assets/components/ShinyText/ShinyText.jsx";
import ShapeBlur from "./assets/components/ShapeBlur/ShapeBlur.jsx";
import DecryptedText from "./assets/components/DecryptedText/DecryptedText.jsx";
import ProfileCard from "./assets/components/ProfileCard/ProfileCard.jsx";
import TiltedCard from "./assets/components/TiltedCard/TiltedCard.jsx";
import FallingText from "./assets/components/FallingText/FallingText.jsx";
import CountUp from "./assets/components/CountUp/CountUp.jsx";
import "./assets/components/TargetCursor/TargetCursor.css";
import SpotlightCard from "./assets/components/SpotlightCard/SpotlightCard.jsx";
import skills from "./assets/data.jsx";

import { ReactLenis } from "lenis/react";
import "./style.css";

function App() {
  const [showCursor, setShowCursor] = useState(true);

  return (
    <>
      <ReactLenis root />

      {/* TargetCursor는 전역에 두고, showCursor로 보이기/숨기기 */}
      {/* <div className={`${showCursor ? "show" : "hidden"}`}>
        <TargetCursor spinDuration={2} hideDefaultCursor={false} />
      </div> */}

      {showCursor ? (
        <TargetCursor spinDuration={2} hideDefaultCursor={false} />
      ) : (
        <></>
      )}

      {/* sec01 영역 */}
      <section
        className="sec01"
        // ref={sec01Ref}
        onMouseEnter={() => setShowCursor(true)}
        onMouseLeave={() => setShowCursor(false)}
      >
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
          {/* <p>
            <CountUp
              from={0}
              to={365}
              separator=","
              direction="up"
              duration={1.6}
              className="count-up-text"
            />
            일 자동화되는 Web3·AI 엔진으로{" "}
            <CountUp
              from={0}
              to={10}
              separator=","
              direction="up"
              duration={1.6}
              className="count-up-text"
            />
            년 후에도 살아남을 비즈니스를 만드세요
          </p> */}
        </div>
      </section>

      {/* sec02 영역 */}
      <section className="sec02">
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
            pixelRatioProp={window.devicePixelRatio || 1}
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
              containerHeight="400px"
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

      {/* sec04 영억 */}
      <section className="sec04">
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
        <div className="container">
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
      </section>
    </>
  );
}

export default App;
