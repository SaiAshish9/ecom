import React from "react";
import { FaStore } from "react-icons/fa";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import LoyaltyIcon from "@material-ui/icons/Loyalty";
import { GiWireframeGlobe } from "react-icons/gi";
import PinDropIcon from "@material-ui/icons/PinDrop";
import { BsCreditCard } from "react-icons/bs";

export default [
  {
    title: "Store Details",
    icon: <FaStore />,
    links: ["/dashboard/store", "/dashboard/store/details"],
  },
  {
    title: "Store Theme",
    icon: <LaptopMacIcon />,
    links: ["/dashboard/store/theme"],
  },
  {
    title: "Domain",
    icon: <GiWireframeGlobe />,
    links: ["/dashboard/store/domain", "/dashboard/store/domain/edit"],
  },
  {
    title: "Shipping",
    icon: <BsCreditCard />,
    links: ["/dashboard/store/shipping"],
  },
  {
    title: "Store Locations",
    icon: <PinDropIcon />,
    links: ["/dashboard/store/locations", "/dashboard/store/locations/edit"],
  },
  {
    title: "Payment",
    icon: <FaStore />,
    links: ["/dashboard/store/payment", "/dashboard/store/payment/edit"],
  },
  {
    title: "Add Products",
    icon: <LoyaltyIcon />,
    links: ["/dashboard/store/products"],
  },
];
