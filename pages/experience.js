import Navbar from "@component/components/Navbar";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";

import Exstyles from "../styles/Experience.module.css";
import Footer from "@component/components/Footer";

function Experience() {
  return (
    <div className={Exstyles.ex}>
      <Navbar />
      <VerticalTimeline className={Exstyles.tl} lineColor="grey">
        <VerticalTimelineElement
          className={Exstyles.element}
          date="2021-2022"
          iconStyle={{ background: "#13182e", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className={Exstyles.element1}>Keyin College, St. John's, NL</h3>
          <p>Diploma Software Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={Exstyles.element}
          date="2000-2004"
          iconStyle={{ background: "#13182e", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <h3 className={Exstyles.element}>
            Memorial University, St. John's, NL
          </h3>
          <p>Bachelor of Arts in English</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={Exstyles.element}
          date="2021-2021"
          iconStyle={{ background: "#ed2603", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className={Exstyles.element}>Learning Labs, St. John's, NL</h3>
          <p className={Exstyles.element}>Internship in Software Development</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className={Exstyles.element}
          date="2013-2021"
          iconStyle={{ background: "#ed2603", color: "#fff" }}
          icon={<MdWork />}
        >
          <h3 className={Exstyles.element}>Author/Ghostwriter, Remote</h3>
          <p className={Exstyles.element}>
            <bold>Amazon International Best Selling Author</bold>
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Experience;
