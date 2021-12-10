import type { NextPage } from "next";
import {
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
