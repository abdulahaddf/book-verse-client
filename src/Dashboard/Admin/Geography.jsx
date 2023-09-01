import { ResponsiveGeoMap } from '@nivo/geo';
import '@nivo/core'; // Import Nivo's default theme CSS
import './Geography.css'; // Import your custom CSS

const userCountsByCountry = [
  { country: 'USA', userCount: 100 },
  { country: 'CAN', userCount: 50 },
  // ... other country data
];

const GeographyChart = () => {
  return (
    <div className="chart-container">
      <ResponsiveGeoMap
        features={userCountsByCountry}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        projectionScale={150}
        projectionTranslation={[0.5, 0.5]}
        colors="nivo"
        borderWidth={0.5}
        borderColor="#333"
        enableGraticule={true}
        graticuleLineColor="#666"
        tooltip={(feature) => (
          <strong>{feature.properties.country}: {feature.value}</strong>
        )}
      />
    </div>
  );
};

const Geography = () => {
  return (
    <div className="geography-container">
      <h3>Geography Chart</h3>
      <div className="geography-chart">
        <GeographyChart />
      </div>
    </div>
  );
};

export default Geography;
