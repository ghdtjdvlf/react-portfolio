import { useState, useEffect, useRef } from "react";
import ScrollFloat from "./assets/components/Scroll Float/ScrollFloat";
import ScrollReveal from "./assets/components/Scroll Reveal/Scroll Reveal.jsx";
import Galaxy from "./assets/components/Galaxy/Galaxy.jsx";
import TargetCursor from "./assets/components/TargetCursor/TargetCursor.jsx";
import CountUp from "./assets/components/CountUp/CountUp.jsx";
import "./assets/components/TargetCursor/TargetCursor.css";

import { ReactLenis } from "lenis/react";
import "./style.css";

function App() {
  const [showCursor, setShowCursor] = useState(true);

  // const lenis = useLenis((lenis) => {
  //   console.log(lenis);
  // });

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       // 화면에 보이면 true, 아니면 false
  //       setShowCursor(entry.isIntersecting);
  //     },
  //     {
  //       threshold: 0.3, // sec01이   30% 이상 보일 때 활성화
  //     }
  //   );

  //   if (sec01Ref.current) {
  //     observer.observe(sec01Ref.current);
  //   }

  //   return () => {
  //     if (sec01Ref.current) observer.unobserve(sec01Ref.current);
  //   };
  // }, []);

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
            <span className="h1_span cursor-target">Web3와 AI의 융합</span>으로{" "}
            <br />
            비즈니스에 새로운 속도를 더합니다
          </h1>
          <p>
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
          </p>
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
          About
        </ScrollFloat>
      </section>

      {/* sec03 영역 */}
      <section className="sec03">
        <div className="container">
          <div className="title">
            <h2>혁신의 중심에서 디지털 미래를 설계합니다</h2>
          </div>
          <div className="reveal_box">
            <ScrollReveal
              className="reveal"
              baseOpacity={0}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
              Jervis Labs는 Web3 기술과 AI 디지털 전환을 전문으로 하는 빌더
              그룹입니다. 체인/프로토콜 선정부터 맞춤형 스마트 컨트랙트 개발,
              자산 토큰화(부동산·IP·증권), 커뮤니티 거버넌스(DAO), 그리고 데이터
              기반 AI 시스템까지 기업의 디지털 전환 여정을 end‑to‑end로 설계하고
              실행합니다.
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
