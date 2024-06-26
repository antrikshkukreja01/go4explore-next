import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Packages from "@/components/Packages";
import HottestDestination from "@/components/HottestDestination";
import GroupTrips from "@/components/GroupTrips";
import Bali from "@/components/Bali";
import HaveDoubt from "@/components/HaveDoubt";
import Collaborated from "@/components/Collabrated";
import StressFreePlanes from "@/components/StressFreePlanes";
import Reviews from "@/components/Reviews";
import Blogs from "@/components/Blogs";
import TravelWithUs from "@/components/TravelWithUs";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <body className=" position-relative">
        <div className=" position-fixed w-100 z-3">
          <NavBar />
        </div>
      </body>{" "}
      <Header />
      <Packages />
      <HottestDestination />
      <GroupTrips />
      <Bali />
      <HaveDoubt />
      <Collaborated />
      <StressFreePlanes />
      <Reviews />
      <Blogs />
      <TravelWithUs />
      <Footer />
    </>
  );
};

export default page;

// "use client";
// import { useEffect, useState } from "react";
// import { fetchHomeData } from "./Api";

// export default function Home() {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchHomeData()
//       .then((data) => setData(data))
//       .catch((error) => setError(error));
//   }, []);

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   if (!data) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>Travel Packages</h1>
//       <ul>
//         {data.data.packages.map((pkg) => (
//           <li key={pkg.id}>
//             <h2>{pkg.slug}</h2>

//             <h2>{pkg.title}</h2>
//             <p>Duration: {pkg.duration}</p>
//             <p>Price: ₹{pkg.price}</p>
//             {pkg.discount && <p>Discount: ₹{pkg.discount}</p>}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
