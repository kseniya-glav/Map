import { useContext, useEffect } from "react";
import { Context } from "../index";
import AddPublic from "../components/UI/addPublic/AddPublic";
import Footer from "../components/UI/footer/Footer";
import Navbar from "../components/UI/navbar/Navbar";
import { fetchCategory, fetchType } from "../http/orgAPI";

const PublicAdd = () => {
  const { organization } = useContext(Context);

  useEffect(() => {
    fetchCategory().then((data) => organization.setCategory(data));
    fetchType().then((data) => organization.setType(data));
  }, []);

  return (
    <div>
      <Navbar />
      <AddPublic />
      <Footer />
    </div>
  );
};

export default PublicAdd;
