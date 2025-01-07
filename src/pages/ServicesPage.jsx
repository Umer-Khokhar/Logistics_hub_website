import React from "react";
import { ReuseHero, Service } from "../components/index.js";
import { images } from "../constants/index.js";
const ServicesPage = () => {
  const categories = {
    dryVans: {
      title: "Dry Vans",
      description:
        "Suitable for transporting dry, temperature-sensitive, and general goods.",
        image: images.DryVan,
      items: [
        "General Freight",
        "Temperature-Sensitive Dry Freight",
        "Partial Truckload (PTL)",
        "Full Truckload (FTL)",
        "E-Commerce Freight",
        "Automotive Parts and Machinery",
        "Paper Products and Packaging",
      ],
    },
    reefers: {
      title: "Reefers",
      description:
        "Ideal for transporting perishable and temperature-sensitive goods.",
        image: images.Refeers,
      items: [
        "Fresh Produce",
        "Frozen Food",
        "Dairy Products",
        "Pharmaceutical Products",
        "Meat and Poultry",
        "Flowers and Plants",
        "Temperature-Sensitive Chemicals",
        "Beverages",
      ],
    },
    flatbed: {
      title: "Flatbed",
      description:
        "Designed for oversized and heavy-duty cargo, including construction materials.",
        image: images.Flatbed,
      items: [
        "Construction Materials",
        "Machinery and Equipment",
        "Vehicles",
        "Oversized Freight",
        "Steel and Metal Products",
        "Agricultural Equipment",
        "Military Equipment",
        "Prefabricated Structures",
      ],
    },
    hotshot: {
      title: "Hotshot",
      description: "Used for urgent or specialized small freight loads.",
      image: images.Hotshot,
      items: [
        "Oilfield Equipment",
        "Light Machinery",
        "Automotive Transport",
        "Emergency Freight",
        "Small Steel Loads",
        "Event and Trade Show Equipment",
        "Household or Commercial Goods",
        "Utility and Energy Equipment",
      ],
    },
    boxTrucks: {
      title: "Box Trucks",
      description:
        "Versatile for medium-sized loads, including retail deliveries and appliances.",
        image: images.BoxTruck,
      items: [
        "Furniture and Appliances",
        "Retail Deliveries",
        "Food and Beverages",
        "E-Commerce Shipments",
        "Office Supplies and Equipment",
        "Moving and Storage",
        "Medical Supplies",
        "Books and Printed Materials",
      ],
    },
  };

  const desc = 'Maximise your trucking efficiency with our reliable dispatch services. From load matching to 24/7 support, we ensure your operations run smoothly, keeping your trucks on the road and your business moving forward.'

  return (
    <div>
      <div className="mb-1">
      <ReuseHero title={"Efficient Truck Dispatch Services for Every Journey"} description={desc}/>
      </div>
      <Service
        category={categories.flatbed}
        bgColor={"bg-white"}
        textColor={"text-black"}
        direction={'lg:flex-row'}
      />
      
      <Service
        category={categories.boxTrucks}
        bgColor={"bg-navBlack"}
        textColor={"text-white"}
        direction={'lg:flex-row-reverse'}
      />
      
      <Service
        category={categories.reefers}
        bgColor={"bg-white"}
        textColor={"text-black"}
        direction={'lg:flex-row'}
      />
      <Service
        category={categories.hotshot}
        bgColor={"bg-navBlack"}
        textColor={"text-white"}
        direction={'lg:flex-row-reverse'}
      />
      <Service
        category={categories.dryVans}
        bgColor={"bg-white"}
        textColor={"text-black"}
        direction={'lg:flex-row'}
      />
    </div>
  );
};

export default ServicesPage;
