import React from "react";
import "./AfricanCountriesTable.css";
import africanCountries from "./African";

const AfricanCountriesTable: React.FC = () => {
  const handleOpenGoogleSheet = () => {
    const googleSheetUrl =
      "https://docs.google.com/spreadsheets/d/1wkwmbgteCoqno75RY2dJ0XIFZbm2JeNR/edit?gid=1064489048#gid=1064489048";
    window.open(googleSheetUrl, "_blank");
  };

  return (
    <div className="table-container">
     

      {/* <h1>Our African Mother Tongue Enhancer</h1> */}
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Country</th>
              <th>Capital</th> {/* New Column for Capital */}
              <th>Flag</th>
              <th>Population (2024)</th>
              <th>Sub-Region</th>
              <th>Number of Languages (±)</th>
              <th>African Currency</th>
              <th>Currency Symbol</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {africanCountries.map((country) => (
              <tr key={country.name}>
                <td>{country.name}</td>
                <td>{country?.capital}</td> {/* Displaying Capital */}
                <td>{country.flag}</td>
                <td>{country.population}</td>
                <td>{country.subRegion}</td>
                <td>{country.languagesCount}</td>
                <td>{country.currency}</td>
                <td>{country.currencySymbol}</td>
                <td>
                  <button
                    style={{
                      backgroundColor: `var(--accent-color)`,
                      borderRadius: 24,
                      border: "none",
                      padding: "16px 24px",
                      cursor: "pointer",
                    }}
                    onClick={handleOpenGoogleSheet}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AfricanCountriesTable;
