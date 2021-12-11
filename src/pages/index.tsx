import type { NextPage } from "next";
import {
  Banners,
  WhoWeAre,
  Services,
  Trainings,
  Consultancy,
  Customers,
  Contact,
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
      <Contact />
    </>
  );
};

export default Home;
