import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Hero() {
  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const paraSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 50,
      duration: 1.8,
      ease: "expo.out",
      stagger: 0.03,
      opacity:0.2
    });

    gsap.from(paraSplit.lines, {
      opacity: 0,
      yPercent: 100,
      duration: 2,
      ease: "expo.out",
      stagger: 0.005,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);
  }, []);

  return (
    <section id="hero" className="noisy">
      <h1 className="title">MOJITO</h1>
      <img src="/images/hero-left-leaf.png" alt="" className="left-leaf sample2" />
      <img src="/images/hero-right-leaf.png" alt="" className="right-leaf" />
      <div className="body">
        <div className="content">
          <div className="space-y-5 hidden md:block sample1">
            <p>Cool. Crisp. Classic.</p>
            <p className="subtitle"> 
              Sip the Spirit <br />
              of Summer
            </p>
          </div>

          <div className="view-cocktails">
            <p className="subtitle">
              Every cocktail on our menu is a blend of premium ingredients,
              creative flair, and timeless recipes designed to delight your
              senses.
            </p>
            <a href="#cocktails">View Cocktails</a>
          </div>
        </div>
      </div>
    </section>
  );
}
