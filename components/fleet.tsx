"use client";

import Image from "next/image";
import { useState } from "react";

type Capacity = 49 | 34 | 26 | 17 | 14;
type Climate = "AC" | "Non-AC" | null;

type FleetVehicle = {
  id: string;
  capacityLabel: string;
  name: string;
  climate: Climate;
  image: string;
};

const capacities: readonly Capacity[] = [49, 34, 26, 17, 14];

const fleetData: Record<Capacity, readonly FleetVehicle[]> = {
  49: [
    {
      id: "offender-49-ac",
      capacityLabel: "49 Seat",
      name: "Offender",
      climate: "AC",
      image: "/images/demo/fleet/offender.png",
    },
    {
      id: "seater-49-non-ac",
      capacityLabel: "49 Seat",
      name: "മൊഞ്ചത്തി",
      climate: "Non-AC",
      image: "/images/demo/fleet/49f.png",
    },
  ],
  34: [
    {
      id: "defender-34-ac",
      capacityLabel: "34 Seat",
      name: "Defender",
      climate: "AC",
      image: "/images/demo/fleet/34.png",
    },
  ],
  26: [
    {
      id: "boogey-man-26",
      capacityLabel: "26 Seat",
      name: "Boogey Man",
      climate: null,
      image: "/images/demo/fleet/26.png",
    },
  ],
  17: [
    {
      id: "traveller-17",
      capacityLabel: "17 Seat Traveller",
      name: "Traveller",
      climate: null,
      image: "/images/demo/fleet/17.png",
    },
  ],
  14: [
    {
      id: "traveller-14-ac",
      capacityLabel: "14 Seat Traveller",
      name: "Traveller",
      climate: "AC",
      image: "/images/demo/fleet/14.png",
    },
  ],
};

const fleetSize = capacities.reduce(
  (total, capacity) => total + fleetData[capacity].length,
  0,
);

export function Fleet() {
  const [selection, setSelection] = useState<{
    capacity: Capacity;
    vehicleIndex: number;
  }>({
    capacity: 49,
    vehicleIndex: 0,
  });

  const selectedCapacity = selection.capacity;
  const selectedVehicleIndex = selection.vehicleIndex;

  const capacityVehicles = fleetData[selectedCapacity];
  const selectedVehicle = capacityVehicles[selectedVehicleIndex];
  const selectedFleetItemNumber =
    capacities
      .slice(0, capacities.indexOf(selectedCapacity))
      .reduce(
        (total, capacity) => total + fleetData[capacity].length,
        0,
      ) +
    selectedVehicleIndex +
    1;

  const selectCapacity = (capacity: Capacity) => {
    setSelection({ capacity, vehicleIndex: 0 });
  };

  const selectVehicle = (vehicleIndex: number) => {
    setSelection((currentSelection) => ({
      ...currentSelection,
      vehicleIndex,
    }));
  };

  const formattedFleetItemNumber = String(selectedFleetItemNumber).padStart(
    2,
    "0",
  );

  return (
    <section className="fleet" id="fleet" aria-labelledby="fleet-title">
      <div className="fleet__inner shell">
        <div className="fleet__header">
          <div>
            <p className="fleet__eyebrow">Our fleet</p>
            <h2 id="fleet-title">Built for the journey.</h2>
          </div>

          <p className="fleet__intro">
            Choose the space that fits your journey.
          </p>
        </div>

        <div
          className="capacity-selector"
          role="group"
          aria-label="Select seating capacity"
        >
          {capacities.map((capacity) => (
            <button
              key={capacity}
              type="button"
              className="capacity-selector__button"
              aria-pressed={selectedCapacity === capacity}
              onClick={() => selectCapacity(capacity)}
            >
              <strong>{capacity}</strong>
              <span>Seats</span>
            </button>
          ))}
        </div>

        <div
          className="fleet-showcase"
          data-selected-capacity={selectedCapacity}
          data-selected-vehicle={selectedVehicle.id}
        >
          <div className="fleet-showcase__details" aria-live="polite">
            <p className="fleet-showcase__count">
              {formattedFleetItemNumber}
              <span>/</span>
              {String(fleetSize).padStart(2, "0")}
            </p>

            <div
              className="fleet-showcase__identity"
              key={selectedVehicle.id}
            >
              <p className="fleet-showcase__capacity">
                {selectedVehicle.capacityLabel}
              </p>
              <h3
                className={
                  selectedVehicle.id === "seater-49-non-ac"
                    ? "fleet-showcase__name--malayalam"
                    : undefined
                }
                lang={
                  selectedVehicle.id === "seater-49-non-ac"
                    ? "ml"
                    : undefined
                }
              >
                {selectedVehicle.name}
              </h3>

              {selectedVehicle.climate && (
                <p className="fleet-showcase__climate">
                  <span aria-hidden="true" />
                  {selectedVehicle.climate}
                </p>
              )}
            </div>

            {capacityVehicles.length > 1 && (
              <div
                className="fleet-variant-selector"
                role="group"
                aria-label="Choose a 49-seat vehicle"
              >
                <p>Choose vehicle</p>
                <div>
                  {capacityVehicles.map((vehicle, vehicleIndex) => (
                    <button
                      key={vehicle.id}
                      type="button"
                      aria-pressed={selectedVehicleIndex === vehicleIndex}
                      onClick={() => selectVehicle(vehicleIndex)}
                    >
                      {vehicle.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div
            className="fleet-showcase__visual"
            key={`visual-${selectedVehicle.id}`}
          >
            <Image
              src={selectedVehicle.image}
              alt=""
              fill
              sizes="(max-width: 600px) calc(100vw - 2rem), (max-width: 900px) calc(100vw - 3rem), (min-width: 1600px) 58rem, 64vw"
              loading="lazy"
            />
            <span className="fleet-showcase__capacity-mark" aria-hidden="true">
              {selectedCapacity}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
