import React from "react";
import "../styles/BottomPage.css";

const BottomBar = () => {
  return (
    <section className="bottom-page">
      <div className="bp-inner">
        <p className="bp-eyebrow">For {`{developers}`}</p>
        <h1 className="bp-title">Enjoy building software</h1>

        <div className="bp-panel">
          <h2 className="bp-panel-title">A rich suite of tools that provide an exceptional developer experience</h2>

          <div className="bp-cards">
            <article className="bp-card">
              <div className="bp-card-icon" aria-hidden />
              <div className="bp-card-body">
                <h3>Visual Studio Insiders</h3>
                <p>IDE for .NET, C++, Windows Based Applications</p>
              </div>
            </article>

            <article className="bp-card">
              <div className="bp-card-icon pc" aria-hidden />
              <div className="bp-card-body">
                <h3>WebStorm</h3>
                <p>IDE for Javascript</p>
              </div>
            </article>

            <article className="bp-card">
              <div className="bp-card-icon dg" aria-hidden />
              <div className="bp-card-body">
                <h3>Rider</h3>
                <p>IDE for .NET and game dev</p>
              </div>
            </article>
          </div>
        </div>

        <div className="bp-separator" aria-hidden>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bpGradient" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="var(--sep-stop-1, #120a2a)" />
                <stop offset="100%" stopColor="var(--sep-stop-2, #3c2a7a)" />
              </linearGradient>
            </defs>
            <path d="M0,120 C360,200 1080,40 1440,120 L1440,200 L0,200 Z" fill="url(#bpGradient)" />
          </svg>
        </div>

      </div>
    </section>
  );
};

export default BottomBar;