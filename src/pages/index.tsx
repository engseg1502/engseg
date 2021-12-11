import type { NextPage } from "next";
import {
  Banners,
  WhoWeAre,
  Services,
  Trainings,
  Consultancy,
  Customers,
} from "containers";

const Home: NextPage = () => {
  return (
    <>
      <Banners />
      <WhoWeAre />
      <Trainings />
      <Services />
      <Consultancy />
      <Customers />
    </>
  );
};

export default Home;
