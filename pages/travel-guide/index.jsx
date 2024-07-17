import React from "react";
import NavBar from "@/components/NavBar";

const index = () => {
  return (
    <>
      <body className="position-relative">
        <div className="position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>
      <section>
        <div className="container"></div>
      </section>
    </>
  );
};

export default index;
