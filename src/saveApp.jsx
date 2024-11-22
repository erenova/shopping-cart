import Button from "@mui/material/Button";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://bymykel.github.io/CSGO-API/api/en/skins.json",
        );
        const data = await response.json();

        const categorizedData = {};

        data.forEach((item) => {
          const category = item.category.name;
          const weaponId = { id: item.weapon.id, name: item.weapon.name };

          if (!categorizedData[category]) {
            categorizedData[category] = {};
          }
          if (!categorizedData[category][weaponId.id]) {
            categorizedData[category][weaponId.id] = {
              name: weaponId.name,
              products: [],
            };
          }

          categorizedData[category][weaponId.id].products.push(item);
        });

        console.log(categorizedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  });

  return (
    <div>
      <Button variant="contained">Hello world</Button>
    </div>
  );
}
