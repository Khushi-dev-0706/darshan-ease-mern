<<<<<<< HEAD
=======
// import TempleCard from "../components/TempleCard";

// function TempleList() {

// const temples = [
// {
// id: 1,
// name: "Tirupati Balaji",
// location: "Andhra Pradesh",
// image: "https://images.unsplash.com/photo-1583241800698-7a3a1d4e3b43"
// },
// {
// id: 2,
// name: "Kashi Vishwanath",
// location: "Varanasi",
// image: "https://images.unsplash.com/photo-1627894483216-2138af692e32"
// },
// {
// id: 3,
// name: "Vaishno Devi",
// location: "Jammu & Kashmir",
// image: "https://images.unsplash.com/photo-1605640840605-14ac1855827b"
// },
// {
// id: 4,
// name: "Somnath Temple",
// location: "Gujarat",
// image: "https://images.unsplash.com/photo-1599661046289-e31897846e41"
// },
// {
// id: 5,
// name: "Golden Temple",
// location: "Amritsar",
// image: "https://images.unsplash.com/photo-1595815771614-ade501d1f9eb"
// },
// {
// id: 6,
// name: "Jagannath Temple",
// location: "Puri",
// image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91c"
// }
// ];

// return (
// <div>

// {/* Page Header */}
// <div className="bg-light p-5 text-center">

// <h1>Explore Sacred Temples</h1>

// <p className="text-muted">
// Book your darshan slots at India's most sacred temples
// </p>

// </div>

// {/* Temple Grid */}
// <div className="container mt-5">

// <div className="row">

// {temples.map((temple) => (
// <TempleCard key={temple.id} temple={temple} />
// ))}

// </div>

// </div>

// </div>
// );
// }

// export default TempleList;

>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a
import { useEffect, useState } from "react";
import API from "../services/api";
import TempleCard from "../components/TempleCard";

function TempleList() {

  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchTemples = async () => {
<<<<<<< HEAD
      try {

        const response = await API.get("/temples");
        setTemples(response.data);

      } catch (err) {

        console.error(err);
        setError("Failed to load temples from server");

      } finally {

        setLoading(false);

      }
    };

    fetchTemples();

  }, []);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <h3>Loading temples...</h3>
=======

      try {

        // calling backend API
        const res = await API.get("/temples");

        setTemples(res.data);

      } catch (err) {

        console.log(err);
        setError("Failed to load temples");

      } finally {

        setLoading(false);

      }

    };

    fetchTemples();

  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="text-center mt-5">
        <h4>Loading Temples...</h4>
>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a
      </div>
    );
  }

<<<<<<< HEAD
  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h3>{error}</h3>
=======
  // Error State
  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h4>{error}</h4>
>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a
      </div>
    );
  }

  return (
<<<<<<< HEAD
=======

>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a
    <div>

      {/* Page Header */}
      <div className="bg-light p-5 text-center">
<<<<<<< HEAD
        <h1>Explore Sacred Temples 🙏</h1>
        <p className="text-muted">
          Book darshan slots at India's most sacred temples
        </p>
=======

        <h1>Explore Sacred Temples 🙏</h1>

        <p className="text-muted">
          Book your darshan slots at India's most sacred temples
        </p>

>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a
      </div>

      {/* Temple Grid */}
      <div className="container mt-5">

<<<<<<< HEAD
        {temples.length === 0 ? (
          <h4 className="text-center">No temples available</h4>
        ) : (

          <div className="row">

            {temples.map((temple) => (

              <div className="col-md-4 mb-4" key={temple._id}>
                <TempleCard temple={temple} />
              </div>

            ))}

          </div>

        )}
=======
        <div className="row">

          {temples.length > 0 ? (

            temples.map((temple) => (

              <TempleCard
                key={temple._id}
                temple={temple}
              />

            ))

          ) : (

            <h5 className="text-center">
              No temples available
            </h5>

          )}

        </div>
>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a

      </div>

    </div>
<<<<<<< HEAD
=======

>>>>>>> b3a808864aabf17cf643417286eb3ee34c5ca59a
  );
}

export default TempleList;