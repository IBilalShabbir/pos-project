import React from "react";

export default function index() {
  return (
    <>
      <div className="home__state__container__wraper">
        <HomeStatCard
          color="white"
          heading="12300"
          subheading="Total Sales(rs)"
        />
        <HomeStatCard
          color="#EBF7FF"
          heading="12300"
          subheading="Total Profit"
        />
        <HomeStatCard
          color="#EBF7FF"
          heading="12300"
          subheading="Total Customers"
        />
        <HomeStatCard
          color="#FFD0D2"
          heading="12300"
          subheading="Out of Stock"
        />
      </div>
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
