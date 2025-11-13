export default function CompanyFilters({
  search,
  onSearchChange,
  locations,
  locationFilter,
  onLocationChange,
  industries,
  industryFilter,
  onIndustryChange,
  sortBy,
  onSortChange,
  pageSize,
  onPageSizeChange,
}) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by company name..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />

      <select
        value={locationFilter}
        onChange={(e) => onLocationChange(e.target.value)}
      >
        {locations.map((loc) => (
          <option key={loc} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      <select
        value={industryFilter}
        onChange={(e) => onIndustryChange(e.target.value)}
      >
        {industries.map((ind) => (
          <option key={ind} value={ind}>
            {ind}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="name-asc">Name (A → Z)</option>
        <option value="name-desc">Name (Z → A)</option>
      </select>

      <select
        value={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
      >
        <option value={5}>5 / page</option>
        <option value={10}>10 / page</option>
        <option value={20}>20 / page</option>
      </select>
    </div>
  );
}
