import "./FilterTabs.css";

function FilterTabs({ active, setActive }) {
  const tabs = ["All", "Buy", "Rent", "Lease"];

  return (
    <div className="filter-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={active === tab ? "active-tab" : ""}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default FilterTabs;