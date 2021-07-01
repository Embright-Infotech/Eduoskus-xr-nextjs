import { useState } from "react";
import Image from "next/image";
import { socialIcons } from "../utils/social-icons";
import { featureList } from "../utils/feature-list";
import { testimonialList } from "../utils/testimonial-list";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home() {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [socialMouseEnter, setSocialMouseEnter] = useState(false);
  return (
    <>
      {/* Start Content */}
      <div id="halvor">
        {/* Start Header */}
        <section
          className="header-2 centered luxy-el"
          data-horizontal="1"
          data-speed-y="10"
        >
          {/* background */}
          <div className="img-home-2"></div>
          <div id="headmove" className="lines-home-2"></div>
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 text-md-left text-center mt-30">
                {/* head-title */}
                <div className="head-text">
                  <h2>
                    EDUOSKUS <span>XR</span>
                  </h2>
                  <div className="mt-10"></div>
                  <p>Gearing up for future through learning.</p>
                </div>
                <div
                  className="button_su mt-10"
                  onMouseEnter={() => setMouseEnter(true)}
                  onMouseLeave={() => setMouseEnter(false)}
                >
                  <span
                    className={`su_button_circle ${
                      mouseEnter ? "explode-circle" : "disploade-circle"
                    }`}
                  >
                    {" "}
                  </span>
                  <a
                    href="http://portal.eduoskus.com/"
                    className="button_su_inner"
                  >
                    <span className="button_text_container"> VISIT </span>
                  </a>
                </div>
              </div>

              <div className="col-md-1 offset-md-5 text-right">
                {/* social media header */}
                <div className="sosmed">
                  <ul>
                    {Object.keys(socialIcons).map((icon) => (
                      <li key={socialIcons[icon].id}>
                        <div
                          className="button_su_social"
                          onMouseEnter={() => setSocialMouseEnter(true)}
                          onMouseLeave={() => setSocialMouseEnter(false)}
                        >
                          <span
                            className={`su_button_circle_social ${
                              socialMouseEnter
                                ? "explode-circle_social"
                                : "desplode-circle_social"
                            }`}
                          ></span>
                          <a
                            href={socialIcons[icon].link}
                            className="button_su_inner_social"
                          >
                            <span className="button_text_container_social">
                              <FontAwesomeIcon
                                className="fab icons"
                                icon={socialIcons[icon].icon}
                              />
                            </span>
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div id="headmove" className="lines">
              <div data-depth="0.2" className="img-line">
                <img src="/images/common/lines.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* End Header */}

        {/* Start About */}
        <section className="about between">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="title-main">
                  <h2>
                    About Eduoskus<span> XR</span>
                  </h2>
                  <p>What is Eduoskus XR.</p>
                </div>
              </div>
            </div>

            <div className="row centered">
              <div className="col-md-7 mt-30">
                <div className="img-about">
                  <Image
                    className="img-fluid"
                    src="/images/home/home-about-cover.webp"
                    alt=""
                    width={"300px"}
                    height={"200px"}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-text mt-30">
                  <h2>
                    The one stop platform for all teaching and learning
                    solutions.
                  </h2>
                  <p>
                    Education world is experiencing a profound change, as per
                    new online education. Multimedia gadgets like mobile phones,
                    laptops & TV has become he new means for every student.
                    Major concern, &quot is learning happening effectively with the
                    usage of gadgets? &quot We EDUOSKUS XR are here to rectify this
                    concern for the betterment of learning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About */}

        {/* Details section */}
        <div className="container">
          <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
              <div className="blog-slider__item swiper-slide">
                <div className="blog-slider__img">
                  <Image
                    src="/images/home/home-details-img-2.webp"
                    alt=""
                    width={"300px"}
                    height={"auto"}
                    layout="responsive"
                  />
                </div>
                <div className="blog-slider__content">
                  <div className="blog-slider__title">
                    The future of learning is here
                  </div>
                  <div className="blog-slider__text">
                    Be amazed for a learning experience where you can connect
                    with teachers and students from K12 to colleges. EduoskusXR
                    is a one stop platform for attending classNamees, live
                    streaming, assignment submission, attendance management and
                    many more
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="blog-slider">
            <div className="blog-slider__wrp swiper-wrapper">
              <div className="blog-slider__item swiper-slide">
                <div className="blog-slider__img">
                  <Image
                    src="/images/home/home-details-img-1.webp"
                    alt=""
                    width={"300px"}
                    height={"auto"}
                    layout="responsive"
                  />
                </div>
                <div className="blog-slider__content">
                  <div className="blog-slider__title">
                    Best opportunity for you to learn better & faster
                  </div>
                  <div className="blog-slider__text">
                    Teachers can make online videos using AR Technology and
                    there is a proper management system for activity tracking
                    through scrum facility. EduoskusXR helps in community
                    building, it is like a mini Facebook for students and
                    teachers where they could connect and engage with others
                    tasks and activity.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Details Section */}
        {/* Benefit section */}
        <section className="about between">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="title-main">
                  <h2>
                    How Eduoskus<span> XR</span>
                  </h2>
                  <p>will benefit you?</p>
                </div>
              </div>
            </div>

            <div className="row centered">
              <div className="col-md-7 mt-30">
                <div className="img-about">
                  <Image
                    className="img-fluid"
                    src="/images/home/home-benefits-cover.webp"
                    alt=""
                    width={"300px"}
                    height={"200px"}
                    layout="responsive"
                  />
                </div>
              </div>
              <div className="col-md-5">
                <div className="about-text mt-30">
                  <p>
                    EduoskusXR helps teachers to manage virtual classNamees
                    efficiently and also assist them in tracking student
                    activity and performance. It helps to develop and deliver
                    engaging video contents using augmented reality (AR) for a
                    better interaction. It aids in overall classNameroom
                    management virtually. EduoskusXR helps students to develop
                    critical problem solving skills. It offers more diversified
                    learning opportunities for audio-visual learners,
                    kinesthetic learners and learners who learn more by reading
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Benefit section */}

        {/* Feature section */}
        <section className="header-page">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 text-md-left text-center mt-30">
                <div className="head-text">
                  <h2>
                    What Eduoskus<span> XR</span> offers you?
                  </h2>
                  <div className="mt-10"></div>
                  <p>
                    EduoskusXR platform is designed to plan, track and deliver
                    valuable education contents by teachers at one place. It is
                    also enables students to upload their task and give proper
                    feedback by timely self-assessment and other performance
                    measurement tools Adapting educational style from physical
                    classNameroom to a digital one may be difficult at first but
                    we can help you achieve it easily.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="service between">
          <div id="headmove-2" className="lines">
            <div data-depth="0.2" className="img-line">
              <img src="/images/common/lines.svg" alt="" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="title-main">
                  <h2>The other features</h2>
                  <p>include:</p>
                </div>
              </div>
            </div>

            <div className="row">
              {Object.keys(featureList).map((fitem) => (
                <div className="col-md-4" key={featureList[fitem].id}>
                  <div className="service-item">
                    <div className="service-text">
                      <h3>{featureList[fitem].text}</h3>
                    </div>
                    <div className="service-icon">
                      <img src={featureList[fitem].icon} alt="" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Feature section */}

        {/* video section */}
        <div className="video-container">
          <video autoPlay loop>
            <source src={"/video/vid.webm"} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        {/* video section */}

        {/* Testimonail section */}
        <section className="news between">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="title-main">
                  <h2>
                    EDUOSKUS <span> XR</span>
                  </h2>
                  <p>Reviews</p>
                </div>
              </div>
            </div>
            <div className="row">
              {Object.keys(testimonialList).map((quote) => (
                <div className="col-md-4" key={testimonialList[quote].id}>
                  <div className="service-text">
                    <p>{testimonialList[quote].quote}</p>
                    <h5>{testimonialList[quote].name}</h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial section */}
      </div>
      {/* End Content */}
    </>
  );
}
