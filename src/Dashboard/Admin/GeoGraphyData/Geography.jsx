import { ResponsiveChoropleth } from "@nivo/geo";
import "@nivo/core"; // Import Nivo's default theme CSS
// import './Geography.css'; // Import your custom CSS
import { geoData } from "./GeoGraphyData/"; // Import your GeoJSON data
// import { useEffect } from 'react';
// import { useState } from 'react';
// import {geoFeatures} from './GeoGraphyData'
import { mockGeographyData as data } from "./GeoUserData";

const GeographyChart = () => {
  // const [userData, setUserData] = useState([]);

  // useEffect(() => {
  //   fetch('https://book-verse-server-phi.vercel.app/users')
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUserData(data);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching user data:', error);
  //     });
  // }, []);
  return (
    <div>
      <ResponsiveChoropleth
        data={data}
        features={geoData.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        colors="nivo"
        domain={[0, 1000000]}
        unknownColor="#666666"
        label="properties.name"
        valueFormat=".2s"
        projectionTranslation={[0.5, 0.5]}
        projectionRotation={[0, 0, 0]}
        borderWidth={0.5}
        borderColor="#152538"
        legends={[
          {
            anchor: "bottom-left",
            direction: "column",
            justify: true,
            translateX: 20,
            translateY: -100,
            itemsSpacing: 0,
            itemWidth: 94,
            itemHeight: 18,
            itemDirection: "left-to-right",
            itemTextColor: "#444444",
            itemOpacity: 0.85,
            symbolSize: 18,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000000",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default GeographyChart;
