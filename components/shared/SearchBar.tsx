export default function SearchBar() {
  return (
    <form className="d-none d-sm-inline-block mw-100 ms-md-3 me-auto my-2 my-md-0 navbar-search">
      <div className="input-group">
        <input
          className="bg-light form-control border-0 small"
          type="text"
          placeholder="Pesquisar..."
        />
        <button className="btn btn-primary py-0" type="button">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </form>
  );
}
