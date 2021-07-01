import { faImages } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

export default function Blogs({ blogList }) {
  return (
    <>
      <div id="halvor">
        {/* Header section */}
        <section className="header-page">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-12 text-md-left text-center mt-30">
                <div className="head-text">
                  <h2>EXPLORE OUR RECENT NEWS</h2>
                  <div className="mt-10"></div>
                  <p>
                    We’ve pushed ourselves to deliver the most forward-thinking
                    digital experiences for our clients. We fundamentally
                    believe in supporting our people to create the future. More
                    than any process or tool.
                  </p>
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

        {/* Blog section */}
        <section className="main-blog between">
          <div className="container">
            <div className="row">
              {blogList.map((blog) => (
                <div className="col-md-4" key={blog.id}>
                  <div className="news-item">
                    <div className="bg-hover"></div>
                    <a className="load-halvor" href={`/blogs/${blog.id}`}>
                      <div className="news-text">
                        <p>{blog.publishDate}</p>
                        <h3>{blog.Title}</h3>
                        <img src="/images/common/arrrow.png" alt="" />
                      </div>
                      <div className="img-item">
                        <Image
                          src={blog.coverImage.url}
                          className="img-fluid"
                          alt=""
                          width={300}
                          height={200}
                          layout="responsive"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              ))}
              {/* item */}
            </div>
          </div>
        </section>
        {/* Blog section */}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await fetch(`${process.env.STRAPI_URL}/embright-blogs`);
  const blogList = await data.json();

  return {
    props: {
      blogList,
    },
    revalidate: 60,
  };
};
