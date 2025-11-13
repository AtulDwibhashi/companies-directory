export default function CompanyTable({ companies }) {
  if (!companies.length) {
    return <p>No companies found.</p>;
  }

  return (
    <div className="table-wrapper">
      <table className="companies-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>Location</th>
            <th>Size</th>
            <th>Founded</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company) => (
            <tr key={company.id}>
              <td>{company.name}</td>
              <td>{company.industry}</td>
              <td>{company.location}</td>
              <td>{company.size}</td>
              <td>{company.founded}</td>
              <td>
                <a href={company.website} target="_blank" rel="noreferrer">
                  Visit
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
