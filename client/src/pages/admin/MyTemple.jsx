function MyTemple() {

  return (
    <div className="container mt-4">

      <h2>My Temples</h2>

      <div className="card p-4 shadow">

        <h5>Add New Temple</h5>
        <input
          className="form-control mb-2"
          placeholder="Temple Name"
        />
        <input
          className="form-control mb-2"
          placeholder="Location"
        />
        <textarea
          className="form-control mb-2"
          placeholder="Description"
        />
        <button className="btn btn-success">
          Add Temple
        </button>
      </div>
    </div>
  );
}
export default MyTemple;