import React from "react";
import style from "./Home.module.css";
import Feed from "./Feed/Feed";

function Home() {
  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
}

export default Home;
