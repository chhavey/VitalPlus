import React, { useState } from "react";
import "./Accordion.css";
import { ReactComponent as OpenAccordion } from "../../assets/openAccordion.svg";
import { ReactComponent as CloseAccordion } from "../../assets/closeAccordion.svg";

const Accordion = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const accordionData = [
    {
      title: "Specifications",
      content: [
        {
          subtitle: "SaunaPod Specs",
          points: [
            "Made with polyester taffeta (safe and sustainable material).",
            "Size: Height 190cm Depth 82cm, Width 89cm",
            "Easy-access, removable window",
          ],
        },
        {
          subtitle: "Steam Chamber Specs",
          points: [
            "Upgraded power heating elements",
            "Advanced temperature control technology (7 heating levels)",
            "4.0L XL water capacity",
            "240V power",
          ],
        },
      ],
    },
    {
      title: "Inclusions",
      content: [
        {
          points: [
            "Patented heat-insulated ThermoShield frame cover",
            "Fiberglass sauna frame",
            "1 portable chair",
            "Sweat absorbing Floor Mat",
            "4.0L SmartSteam chamber (black)",
            "Remote control",
          ],
        },
      ],
    },
    {
      title: "FAQs",
      content: [
        {
          subtitle: "How does the SaunaPod work?",
          details:
            "The SaunaPod works by heating water to create steam, which increases the moisture and temperature of the air.",
        },
        {
          subtitle:
            "What are the operating costs for using the SaunaPod at home?",
          details:
            "A typical SaunaPod session, lasting approximately 30 minutes, incurs an estimated power cost of about 15 cents.",
        },
        {
          subtitle: "How hot does the SaunaPod get?",
          details:
            "The SaunaPod operates at a temperature of 45-50 degrees Celsius. The high humidity can make the temperature feel much closer to 90 degrees.",
        },
        {
          subtitle: "How do I clean it?",
          details:
            "The inside of the heat insulated cover is designed to help prevent mold and bacteria build up. A quick dry & machine washable absorbent sweat mat for the bottom of the sauna is included in every order. After use, we recommended leaving the door flap open to air and wiping down the water vapor on the inside walls.",
        },
        {
          subtitle: "Can I use it indoors & outdoors?",
          details:
            "The SaunaPod can be used both indoors and outdoors. Although weather-proof, we recommend packing up the SaunaPod and bringing it inside in extreme conditions.",
        },
        {
          subtitle: "Difference between steam sauna and dry sauna?",
          details: (
            <p>
              A steam sauna is high in humidity and has lower temperatures,
              while a dry sauna is low in humidity and higher temperature. The
              steam sauna has many added benefits including:
              <br />
              <br />
              - Skin Hydration: Steam saunas are excellent for hydrating the
              skin. The moisture can open up the pores, helping to cleanse the
              skin and potentially reducing acne.
              <br />
              <br />
              - Joint and Muscle Relaxation: The warm, moist heat can be
              beneficial for relieving tension in the muscles and joints.
              <br />
              <br />
              - Deep Sweat: The high humidity environment causes a deeper sweat
              which may help cleanse the skin, potentially improving its
              appearance.
              <br />
              <br />
              Full list of FAQ's{" "}
              <span className="underline font-medium">here</span>
            </p>
          ),
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <div className="container">
      {accordionData.map((item, index) => (
        <div className="py-6 border-b-2 border-[#e5e7eb]" key={index}>
          <div
            className="cursor-pointer flex justify-between md:text-2xl font-medium text-[18px] w-full"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span>
              {openAccordion === index ? <CloseAccordion /> : <OpenAccordion />}
            </span>
          </div>
          {openAccordion === index && (
            <div className="pb-4 pt-4 opacity-60 line-height-175">
              {item.content.map((contentItem, contentIndex) => (
                <div key={contentIndex}>
                  {contentItem.subtitle && (
                    <strong className="text-[#111827]">
                      {contentItem.subtitle}
                    </strong>
                  )}
                  {contentItem.points ? (
                    <ul className="bulletpoint list-disc pl-[1.625em] mt-[1.25em] mb-[1.25em]">
                      {contentItem.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="pl-[0.375em] mt-[0.5em] mb-[0.5em]"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mb-[1.25em]">{contentItem.details}</p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
