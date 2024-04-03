import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const PageNotFount = () => {
  return (
    <section className="notFound">
    <div className="container">
      <img src="/notFound.svg" alt="notFound" />
      <h1>Page Doesn't Exist</h1>
      <p>We can't seem to find you the page you're looking for</p>
      <Link to={"/"}>
        Back to Home{" "}
        <span>
          <HiOutlineArrowNarrowRight />
        </span>
      </Link>
    </div>
  </section>
  );
};
