// src/App.jsx
import "./index.css";
import { useCompanies } from "./hooks/useCompanies";
import CompanyTable from "../components/CompanyTable";
import CompanyFilters from "../components/CompanyFilters";
import Pagination from "../components/Pagination";

function App() {
  const {
    companies,
    loading,
    error,
    totalItems,
    totalPages,
    page,
    pageSize,
    locations,
    industries,
    search,
    setSearch,
    locationFilter,
    setLocationFilter,
    industryFilter,
    setIndustryFilter,
    sortBy,
    setSortBy,
    setPage,
    setPageSize,
  } = useCompanies();

  if (loading) {
    return (
      <div className="app">
        <p className="status">Loading companies...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <p className="status error">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="app">
      <header>
        <h1>Companies Directory</h1>
        <p>Browse, filter, sort, and paginate companies from a mock API.</p>
      </header>

      <CompanyFilters
        search={search}
        onSearchChange={setSearch}
        locations={locations}
        locationFilter={locationFilter}
        onLocationChange={setLocationFilter}
        industries={industries}
        industryFilter={industryFilter}
        onIndustryChange={setIndustryFilter}
        sortBy={sortBy}
        onSortChange={setSortBy}
        pageSize={pageSize}
        onPageSizeChange={setPageSize}
      />

      <p className="status">
        Showing {companies.length} of {totalItems} companies
      </p>

      <CompanyTable companies={companies} />

      <Pagination
        page={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
}

export default App;
