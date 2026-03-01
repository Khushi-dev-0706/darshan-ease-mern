import { useEffect, useState } from "react";
import API from "../services/api";
import TempleCard from "../components/TempleCard";

function TempleList() {

  const [temples, setTemples] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    const fetchTemples = async () => {
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
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-danger">
        <h3>{error}</h3>
      </div>
    );
  }

  return (
    <div>

      {/* Page Header */}
      <div className="bg-light p-5 text-center">
        <h1>Explore Sacred Temples 🙏</h1>
        <p className="text-muted">
          Book darshan slots at India's most sacred temples
        </p>
      </div>

      {/* Temple Grid */}
      <div className="container mt-5">

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

      </div>

    </div>
  );
}

export default TempleList;