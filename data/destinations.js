// Static/dummy destination data, per assignment instructions (no DB needed here).
// Images sourced via LoremFlickr (real photos matched by keyword) for reliable loading.
export const destinations = [

  {
    id: 11,
    name: "Karnataka",
    country: "India",
    category: "india",
    coords: "15.3350° N, 76.4600° E",
    image: "https://www.holidaymonk.com/wp-content/uploads/2020/10/Vastuchitra_Stone-Chariot-Hampi.jpg",
    description:
       "Karnataka blends it all — Hampi's boulder-strewn temple ruins, Coorg's misty coffee estates, Gokarna's quiet beaches, and Bengaluru's buzzing tech skyline, all within one state.",
    price: 15500,
  },
  {
    id: 1,
    name: "Kerala",
    country: "India",
    category: "india",
    coords: "09.9312° N, 76.2673° E",
    image: "https://loremflickr.com/900/700/alleppey,backwaters",
    description:
      "Drift through the backwaters on a houseboat at dawn, past paddy fields and coconut groves that barely register the outside world.",
    price: 28500,
  },
  {
    id: 2,
    name: "Himachal Pradesh",
    country: "India",
    category: "india",
    coords: "31.1048° N, 77.1734° E",
    image: "https://loremflickr.com/900/700/himachal,mountains,india",
    description:
      "Pine-lined valleys, cold rivers, and villages that still run on mountain time — Himachal at its own unhurried pace.",
    price: 24000,
  },
  {
    id: 3,
    name: "Ladakh",
    country: "India",
    category: "india",
    coords: "34.1526° N, 77.5771° E",
    image: "https://loremflickr.com/900/700/ladakh,himalaya,landscape",
    description:
      "High-altitude desert, cobalt lakes, and monasteries older than most nations — Ladakh rewards those willing to climb for it.",
    price: 32000,
  },
  {
    id: 4,
    name: "Andaman",
    country: "India",
    category: "india",
    coords: "11.7401° N, 92.6586° E",
    image: "https://loremflickr.com/900/700/andaman,beach,island",
    description:
      "Reefs you can snorkel straight off the sand, and beaches that stay empty even in peak season.",
    price: 34500,
  },
  {
    id: 5,
    name: "Goa",
    country: "India",
    category: "india",
    coords: "15.2993° N, 74.1240° E",
    image: "https://loremflickr.com/900/700/goa,beach,india",
    description:
      "Portuguese lanes, slow beach shacks, and sunsets that turn the whole coastline the colour of rust.",
    price: 18500,
  },
  {
    id: 6,
    name: "Kenya",
    country: "Kenya",
    category: "international",
    coords: "01.2921° S, 36.8219° E",
    image: "https://loremflickr.com/900/700/kenya,safari,masaimara",
    description:
      "Dawn game drives across the Masai Mara, tracking the Big Five with guides who grew up reading this land.",
    price: 165000,
  },
  {
    id: 7,
    name: "Vietnam",
    country: "Vietnam",
    category: "international",
    coords: "20.9101° N, 107.1839° E",
    image: "https://loremflickr.com/900/700/halongbay,vietnam",
    description:
      "Limestone karsts rising straight out of Ha Long Bay, cruised at the pace of a slow boat and a good cup of ca phe.",
    price: 98000,
  },
  {
    id: 8,
    name: "Tanzania",
    country: "Tanzania",
    category: "international",
    coords: "02.3333° S, 34.8333° E",
    image: "https://loremflickr.com/900/700/serengeti,tanzania,safari",
    description:
      "The Serengeti's great migration, witnessed from a camp close enough to hear the herds move at night.",
    price: 172000,
  },
  {
    id: 9,
    name: "Iceland",
    country: "Iceland",
    category: "international",
    coords: "64.1466° N, 21.9426° W",
    image: "https://loremflickr.com/900/700/iceland,waterfall",
    description:
      "Glacial waterfalls, black-sand coastlines, and — if the sky cooperates — the aurora directly overhead.",
    price: 210000,
  },
  {
    id: 10,
    name: "Sri Lanka",
    country: "Sri Lanka",
    category: "international",
    coords: "06.9497° N, 80.7891° E",
    image: "https://loremflickr.com/900/700/srilanka,teaplantation",
    description:
      "Mist rolling over hillside tea estates, with a toy train ride through them that outclasses the destination.",
    price: 72000,
  },
];
export const indiaDestinations = destinations.filter((d) => d.category === "india");
export const internationalDestinations = destinations.filter(
  (d) => d.category === "international"
);
