import React, { useEffect, useState } from "react";
import "./Schedule.css";
import ScheduleHeading from "../../Assets/schedule.png";
import { motion } from "framer-motion";
import t1 from "../../Assets/timeline_1.png";
import t2 from "../../Assets/timeline_2.png";
import t3 from "../../Assets/timeline_3.png";
import t4 from "../../Assets/timeline_4.png";
const Schedule = () => {
  const [timelineHeight, setTimelineHeight] = useState(0);
  const [isvalid, setvalid] = useState(false);
  const calculateTimelineHeight = () => {
    const screenWidth = window.innerWidth;
    const motionalDivisionHeight =
      document.querySelector(".fullone")?.clientHeight || 0;
    console.log(screenWidth);
    if (screenWidth < 652) {
      setvalid(true);
      console.log(isvalid);
      if (screenWidth < 400) {
        setTimelineHeight(11 * motionalDivisionHeight);
      } else {
        setTimelineHeight(10.5 * motionalDivisionHeight);
      }
    } else {
      setTimelineHeight(0);
      setvalid(false);
    }
  };

  useEffect(() => {
    calculateTimelineHeight();
    window.addEventListener("resize", calculateTimelineHeight);

    return () => {
      window.removeEventListener("resize", calculateTimelineHeight);
    };
  }, []);

  return (
    <div className="whole_schedule_section">
      <div className="about_heading">
        {/* <img src={ScheduleHeading} alt="" /> */}
        <p className="x">Schedule</p>
      </div>

      <div
        className="whole_timeline"
        style={isvalid ? { height: `${timelineHeight}px` } : {}}
      >
        <div className="whole_line">
          <img src={t1} alt="" />
          <img src={t2} alt="" />
          <img src={t3} alt="" />
          <img src={t3} alt="" />
          <img src={t4} alt="" />
        </div>
        <div className="eventContainer">
          <div className="eventTimeLine">
            <ul>
              {/* 1st */}
              <li>
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={2}>
                      <div className="eventLeft">
                        <div className="dateIcon">
                          <h2>
                            20th
                            <br />
                            JAN
                          </h2>
                        </div>
                        <div className="contentDate">
                          <h1>Last Date To Register</h1>
                          <p>
                            All the *team leaders* are expected to register
                            their team before the mentioned deadline. After the
                            deadline, applications will be no longer processed.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>

              {/* 2nd */}
              <li>
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "-100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                  className="fullone"
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={1}>
                      <div className="eventRight">
                        <div className="dateIcon">
                          <h2>
                            27th
                            <br />
                            JAN
                          </h2>
                        </div>
                        <div className="contentDate">
                          <h1>Announcement of Shortlisted Candidates</h1>

                          <p>
                            List of selected teams eligible for participation in
                            the hackathon will be announced.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>

              {/* 3rd */}
              <li>
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={2}>
                      <div className="eventLeft">
                        <div className="dateIcon">
                          <h2>
                            30th
                            <br />
                            JAN
                          </h2>
                        </div>
                        <div className="contentDate">
                          <h1>Release of Problem Statements</h1>

                          <p>
                            Participants will select their preferred development
                            focus in the hackathon as problem statements will be
                            released for consideration.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>

              {/* 4th */}
              <li>
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "-100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={1}>
                      <div className="eventRight">
                        <div className="dateIcon">
                          <h2>
                            31st
                            <br />
                            JAN
                          </h2>
                        </div>
                        <div className="contentDate">
                          <h1>Opening Cermeony - TSEC HACKS'24</h1>

                          <p>
                            The hackathon's opening ceremony will commence at
                            <b className="boldme"> 9:30 am </b> by our honourable chief guests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>

              {/* 5th */}
              <li>
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={2}>
                      <div className="eventLeft">
                        <div className="dateIcon">
                          <h2>
                            31st
                            <br />
                            JAN
                          </h2>
                        </div>
                        <div className="contentDate">
                          <h1>Hackathon BEGINS!</h1>

                          <p>
                            Hackathon will begin at <b className="boldme">11:00 am</b> sharp. Launching a creative and collaborative event for participants to showcase their innovative solutions and skills.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>

              {/* 6th */}
              <li>
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "-100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={1}>
                      <div className="eventRight">
                        <div className="dateIcon">
                          <h2>
                            31st
                            <br />
                            JAN
                          </h2>
                        </div>
                        <div className="contentDate">
                          <h1>Mentoring Round - I</h1>

                          <p>
                            Guidance and support shall be provided to
                            participants during the mentoring round at<b className="boldme"> 06:30 pm </b>for
                            effective hackathon project development.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>

              {/* 7th */}
              <li>
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={2}>
                      <div className="eventLeft">
                        <div className="dateIcon">
                          <h2>
                            01st
                            <br />
                            FEB
                          </h2>
                        </div>
                        <div className="contentDate">
                          <h1>HACKATHON ENDS</h1>
                          <p>Hackathon concludes <b className="boldme"> 11:00 am</b>, showcasing innovative projects and celebrating participants' creativity, collaboration, and problem-solving prowess.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>

              {/* 8TH */}
              <li>
              <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "-100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={2}>
                      <div className="eventRight">
                      <div className="dateIcon">
                        <h2>01st<br/>FEB</h2>
                      </div>
                      <div className="contentDate">
                      <h1>Judging Round - I & II</h1>
                      <p><b className="boldme"> @11:30 am </b>Experts evaluate projects in judging rounds, assessing creativity, functionality, and innovation to determine winners.</p>
                      </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>

              {/* 9th */}
              <li>
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  exit={{
                    x: "100%",
                    opacity: 0,
                    transition: { duration: 0, delay: 0 },
                  }}
                  transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                >
                  <div className="motionaldivision">
                    <div className="eventTimeLineContent" key={2}>
                      <div className="eventLeft">
                        <div className="dateIcon">
                          <h2>
                            01st
                            <br />
                            FEB
                          </h2>
                        </div>
                        <div className="contentDate">
                          <h1>Final Results</h1>
                          <p><b className="boldme"> @03:00 pm </b>Winners announced, unveiling outstanding projects, and distributing prizes in recognition of participants' achievements.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
