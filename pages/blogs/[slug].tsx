import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function Blog({ blogData }) {
  return (
    <>
      <div id="halvor">
        {/* <!-- Start Header --> */}
        <section
          className="header-detail-work luxy-el"
          data-horizontal="1"
          data-speed-y="10"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2 text-center">
                {/* <!-- head-title --> */}
                <div className="head-text">
                  <h2>{blogData.Title}</h2>
                  <div className="mt-10"></div>
                  <p>{blogData.publishDate}</p>
                  {/* <!-- <h4>By Soley</h4> --> */}
                </div>
              </div>
            </div>

            {/* <!-- main background--> */}
            <div
              className="blog-detail bg-blog-1"
              style={{
                background: `url(${blogData.coverImage.url}) center center no-repeat`,
                backgroundSize: "cover",
              }}
            ></div>
            <div id="headmove" className="lines">
              <div data-depth="0.2" className="img-line">
                <img src="/images/common/lines.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* <!-- End Header --> */}

        {/* <!-- Start Content --> */}
        <section className="between blog-details">
          <div className="mouse-down page"></div>
          <div className="container">
            <div className="col-md-10 offset-md-1">
              <ReactMarkdown>{blogData.Body}</ReactMarkdown>
            </div>
          </div>
        </section>
        {/* <!-- End Content --> */}
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.STRAPI_URL}/embright-blogs`);
  const blogList = await res.json();

  return {
    paths: blogList.map((item) => ({
      params: {
        slug: String(item.id),
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = await fetch(
    `${process.env.STRAPI_URL}/embright-blogs?id=${params.slug}`
  );
  const blogData = await data.json();

  return {
    props: {
      blogData: blogData[0],
    },
    revalidate: 60,
  };
}
