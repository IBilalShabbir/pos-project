import React from "react";

export default function index() {
  return (
    <>
      <HomeStatCard
        color="white"
        heading="12300"
        subheading="Total Sales(rs)"
      />
      <HomeStatCard
        color="white"
        heading="12300"
        subheading="Total Sales(rs)"
      />
      <HomeStatCard
        color="white"
        heading="12300"
        subheading="Total Sales(rs)"
      />
      Home
    </>
  );
}

function HomeStatCard({ color, heading, subheading }) {
  return (
    <div className="home__header__card" style={{ backgroundColor: color }}>
      <div className="home__header__card__heading">{heading}</div>
      <div className="home__header__card__subheading">{subheading}</div>
    </div>
  );
}
