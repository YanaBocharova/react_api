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
      </div>
    </section>
  );
};

export default BottomBar;