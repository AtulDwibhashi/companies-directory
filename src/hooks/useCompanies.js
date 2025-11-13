// src/hooks/useCompanies.js
import { useEffect, useMemo, useState } from "react";

export function useCompanies() {
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters & sorting
  const [search, setSearch] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [industryFilter, setIndustryFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name-asc");

  // Pagination
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    async function fetchCompanies() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch("/companies.json");
        if (!response.ok) {
          throw new Error("Failed to fetch companies");
        }

        const data = await response.json();
        setCompanies(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchCompanies();
  }, []);

  // Filter + sort
  const filteredCompanies = useMemo(() => {
    let result = [...companies];

    if (search.trim()) {
      const term = search.toLowerCase();
      result = result.filter((c) =>
        c.name.toLowerCase().includes(term)
      );
    }

    if (locationFilter !== "All") {
      result = result.filter((c) => c.location === locationFilter);
    }

    if (industryFilter !== "All") {
      result = result.filter((c) => c.industry === industryFilter);
    }

    // Sorting
    result.sort((a, b) => {
      if (sortBy === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    return result;
  }, [companies, search, locationFilter, industryFilter, sortBy]);

  // Pagination
  const totalItems = filteredCompanies.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));

  // Reset page when filters or page size change
  useEffect(() => {
    setPage(1);
  }, [search, locationFilter, industryFilter, pageSize]);

  const paginatedCompanies = useMemo(() => {
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    return filteredCompanies.slice(start, end);
  }, [filteredCompanies, page, pageSize]);

  // Options for dropdowns
  const locations = useMemo(() => {
    const set = new Set(companies.map((c) => c.location));
    return ["All", ...Array.from(set)];
  }, [companies]);

  const industries = useMemo(() => {
    const set = new Set(companies.map((c) => c.industry));
    return ["All", ...Array.from(set)];
  }, [companies]);

  return {
    // Data (paginated)
    companies: paginatedCompanies,
    loading,
    error,

    // Meta
    totalItems,
    totalPages,
    page,
    pageSize,
    locations,
    industries,

    // Filters & controls
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
  };
}
