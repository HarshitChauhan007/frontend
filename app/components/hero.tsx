"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from("#first", {
      duration: 1.3,
      scale: 2,
      opacity: 0,
      ease: "power4.out",
    })
      .to("#second", {
        duration: 0.8,
        x: 900,
        opacity: 1,
      })
      .to("#third", {
        y: -300,
        duration: 1.2,
        delay: 0.5,
        ease: "power4.out",
        opacity: 1,
      });

    gsap.from("#firstblock", {
      scrollTrigger: {
        trigger: "#firstblock",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      x: -500,
      opacity: 0,
    });

    gsap.from("#secondblock", {
      scrollTrigger: {
        trigger: "#secondblock",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      x: -500,
      opacity: 0,
      delay: 0.2,
    });

    gsap.from("#thirdblock", {
      scrollTrigger: {
        trigger: "#thirdblock",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
      x: -500,
      opacity: 0,
      delay: 0.4,
    });
  }, []);

  return (
    <div className="min-h-screen bg-[url('/bg-image-welcome.jpg')] bg-cover bg-center bg-repeat bg-fixed">
      <div className="flex justify-center items-center flex-col p-50">
        <h1 id="first" className="text-8xl font-bold">
          Welcome to Eventra!
        </h1>
      </div>
      <h2 className="text-6xl text-gray-600 w-4xl opacity-0" id="second">
        Turning moments into memories — manage, plan, and celebrate with ease!
      </h2>
      <div
        className="ml-[30px] h-[450px] w-[450px] flex justify-center opacity-0 text-center bg-gradient-to-r"
        id="third"
      >
        <h2 className="text-4xl font-medium">
          <p>Eventra</p> Your Ultimate Event Companion. Seamlessly plan, manage,
          and elevate every occasion.
        </h2>
      </div>

      <div className="flex justify-center space-x-40 mt-32 mb-32">
        <div
          id="firstblock"
          className="w-[300px] h-[450px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-2xl text-center"
        >
          {" "}
          <h2 className="text-3xl font-bold mb-4 flex  text-center">
            Smart Planning
          </h2>
          <p className="text-2xl font-bold">
            Streamline your event planning process with intuitive tools and
            real-time updates.
          </p>
        </div>

        <div
          id="secondblock"
          className="w-[300px] h-[450px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4 text-center">
            Seamless Management
          </h2>
          <p className="text-2xl font-bold">
            Keep track of guests, tasks, and timelines with ease — everything in
            one place.
          </p>
        </div>

        <div
          id="thirdblock"
          className="w-[300px] h-[450px] bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Memorable Moments</h2>
          <p className="text-2xl font-bold">
            Capture, share, and relive your events through beautifully
            integrated features.
          </p>
        </div>
      </div>

      <div className="text-center text-white p-6">
        <h1>© 2025 Eventra. All rights reserved.</h1>
      </div>
    </div>
  );
}
