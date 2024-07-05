"use client";
import React, { useEffect, useState } from "react";

import heart_eye from "../assets/img/png/love_emoji.png";
import Image from "next/image";
import { fetchBlogData } from "./Api";
import Link from "next/link";

const Blogs = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogData()
      .then((data) => {
        // Sort data by date in descending order
        const sortedData = data.data.sort(
          (a, b) => new Date(b.created_at) - new Date(a.created_at)
        );
        setData(sortedData);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  const recentBlog = data[0]; // The most recent blog
  const otherBlogs = data.slice(1, 4); // The next three blogs

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <>
      <section className="py-4 py-sm-5">
        <div className="container">
          <h2 className="font_poppins mb-4 mb-sm-5 fs_xl fw-semibold text-capitalize text-black text-center">
            Blogs To Fuel Your Wanderlust
            <Image
              width={30}
              className="mb-1 ms-2"
              src={heart_eye}
              alt="heart_eye"
            />
          </h2>
          <div className="row align-items-center">
            <div className="col-xl-7">
              <div key={recentBlog.id}>
                <div className="bg_gradient mt-3 mx-2 h_580">
                  <div className="box_blog h-100">
                    <img
                      className="w-100 img_size"
                      src={recentBlog.image}
                      alt="blog_img"
                    />
                    <p className="fs_xsm text-black mt-3 fw-medium font_poppins mb-0">
                      Published on {formatDate(recentBlog.created_at)}
                    </p>
                    <p className="mb-0 mt-2 fs_xl clr_blue font_poppins fw-semibold">
                      {recentBlog.name}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="ps-xl-5 mt-3 mt-md-4 mt-lg-5 mt-xl-0 col-xl-5">
              <div className="row justify-content-center d-none d-md-flex">
                {otherBlogs.map((blog) => (
                  <div key={blog.id} className="mt-4 col-md-6 col-xl-12">
                    <Link href={`/blogs/${encodeURIComponent(blog.slug)}`}>
                      <div className="bg_gradient">
                        <div className="row box_blog_small align-items-center w-100">
                          <div className="col-xl-5 ps-0">
                            <img
                              className="rounded-4 w-100"
                              height={130}
                              src={blog.image}
                              alt="blog_img"
                            />
                          </div>
                          <div className="col-xl-7">
                            <article className="mt-4 mt-xl-0">
                              <p className="mb-2 fs_sm clr_blue font_poppins fw-semibold">
                                {blog.name}
                              </p>
                              <p className="fs_xsm text-black mt-1 fw-medium font_poppins mb-0">
                                Published on {formatDate(blog.created_at)}
                              </p>
                            </article>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-100 d-flex justify-content-center">
            <a
              className="btn-hover mt-5 text-decoration-none font_poppins fw-semibold fs_sm d-inline-block"
              href="#"
            >
              View More Blogs
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
