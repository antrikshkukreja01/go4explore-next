"use client";
import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

const Jobs = () => {
  return (
    <>
      <section className=" py-5">
        <div className="container">
          <Accordion id="Accordion" defaultExpandedKeys={[]}>
            <AccordionItem
              id="accordian"
              key="0"
              aria-label="Accordion 0"
              className=" w-100  fw-normal fs_xsm  "
              title={"Sales Executive - Domestic"}
            >
              <p className=" mb-0 fw-normal fs_xsm text-black font_poppins">
                Full Time | Noida Experience: 1-2 years Required Skills:
                Handling social media channels, regular postings and monitoring
                user’s engagement. Job Roles & Responsibilities: Research topics
                based on current trends in Tourism & Hospitality and creatively
                present/pitch your ideas to create brand awareness. Coordinate
                with the design department for illustrations. Handling social
                media channels, regular postings and monitoring user’s
                engagement. Plan social media strategies to increase traffic and
                engagement on different channels. Basic knowledge of Graphic
                Design, planning and creating creatives for social media as per
                requirement.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Jobs;
