import locations from "./data/locations"

function App() {

  return (
    <>
      <h1>Locations</h1>
      <ul>
        {locations.map((location, index) => (
          <div>
          <li key={index}>{location.country}</li>
          <ul>
            {location.cities.map((city, index) => (
              <p key={index}>{city}</p>
            ))}
          </ul>
          </div>
        ))}
      </ul>
    </>
  )
}

export default App
