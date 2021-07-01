import { useState } from "react";
import Image from "next/image";
import FsLightbox from "fslightbox-react";

export default function Gallery({ imageList }) {
  // lightbox toggler
  const [toggler, setToggler] = useState(false);
  return (
    <>
      <div id="halvor">
        {/* Header section */}
        <section className="header-page">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 text-md-left text-center mt-30">
                <div className="head-text">
                  <h2>GALLERY</h2>
                  <div className="mt-10"></div>
                </div>
              </div>
            </div>
            <div id="headmove" className="lines-page">
              <div data-depth="0.2" className="img-line">
                <img src="/images/common/lines.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Header section */}

        {/* Gallery section */}
        <section className="main-work between">
          <div className="container">
            <div className="row">
              {/* item */}
              {imageList.map((image) => (
                <div className="col-md-4" key={image.id}>
                  <div className="work-item">
                    <a
                      className="load-halvor"
                      onClick={() => setToggler(!toggler)}
                    >
                      <div className="work-text"></div>
                      <div className="border-work"></div>
                      <div className="img-item">
                        <Image
                          src={image.coverImage.url}
                          className="img-fluid"
                          width={300}
                          height={200}
                          layout="responsive"
                          alt=""
                        />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              <FsLightbox
                toggler={toggler}
                sources={imageList.map((image) => image.coverImage.url)}
              />
            </div>
          </div>
        </section>
        {/* Gallery section */}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(`${process.env.STRAPI_URL}/embright-blogs`);
  const imageList = await data.json();

  return {
    props: {
      imageList,
    },
    revalidate: 60,
  };
};
