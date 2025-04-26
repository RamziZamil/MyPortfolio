import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            {" "}
            <a href="https://github.com/RamziZamil/MasterPiece.git">
              <div className="image-wrapper">
                <img
                  src="/images/freedomroadlaptops.png"
                  alt="Ryde App Interface"
                />
              </div>
              <div className="text-content">
                <h2>Freedom Road</h2>
                <p className="text-white-50 md:text-xl">
                  A website built with React JS, Node Js, Express JS, MongoDB &
                  TailwindCSS.
                </p>
              </div>{" "}
            </a>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <a href="https://github.com/RamziZamil/Al-Joud.git">
              <div className="project" ref={libraryRef}>
                <div className="image-wrapper bg-[#FFEFDB]">
                  <img
                    src="/images/aljoud-landscape.png"
                    alt="Library Management Platform"
                  />
                </div>
                <h2>Al-Joud</h2>
                <p className="text-white-50 md:text-xl">
                  A website built with React JS, Node Js, Express JS, PostgreSQL
                  & TailwindCSS.
                </p>
              </div>
            </a>
            <div className="project" ref={ycDirectoryRef}>
              <a href="https://github.com/RamziZamil/Orbitra.git">
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img src="/images/orbitra.png" alt="YC Directory App" />
                </div>
                <h2>Orbitra</h2>
                <p className="text-white-50 md:text-xl">
                  A website built with React JS, Node Js, Express JS, MongoDB &
                  TailwindCSS.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
