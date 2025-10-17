import dummy_profile from './dummy_profile.png'
import img1 from './img1.png'
import img2 from './img2.png'
import img3 from './img3.png'
import washing_machine from './washing_machine.jpg'
import geyser from './geyser.jpg'
import ac from './ac.jpg'
import refrigerator from './refrigerator.jpg'
import ro from './ro.jpg'

export const assets = {
    dummy_profile,
    img1,
    img2,
    img3,
    washing_machine,
    geyser,
    ac,
    refrigerator,
    ro
}

export const slides = [
    {
        id: 1,
        title: "Our Service is a Breath of Fresh Air",
        subtitle: "Free Service Quote",
        description:
            "Cooltek provides a wide variety of HVAC services to homes and businesses since 1996.",
        image: assets.img1,
    },
    {
        id: 2,
        title: "Your Comfort is Our Top Priority",
        subtitle: "Reliable HVAC Experts",
        description:
            "Our technicians are trained to provide you with the best heating and cooling solutions.",
        image: assets.img2,
    },
    {
        id: 3,
        title: "Keeping You Cool, All Year Round",
        subtitle: "Professional Maintenance",
        description:
            "We ensure your HVAC systems are efficient, safe, and built to last through every season.",
        image: assets.img3,
    },
];

export const services = [
  {
    title: "A.C. Repair Service",
    image: ac,
    description:
      "We offer fast and reliable air conditioner repair services for all major brands. Whether your AC is not cooling, leaking, or making noise — our expert technicians ensure quick and efficient repairs at your doorstep.",
    points: [
      "✓ Expert AC technicians with years of experience.",
      "✓ Gas refilling, compressor repair, and cooling issues fixed.",
      "✓ Same-day service with quality assurance.",
      "✓ Affordable pricing and genuine spare parts."
    ]
  },
  {
    title: "Refrigerator Repair",
    image: refrigerator,
    description:
      "Our refrigerator repair service in Patna covers all issues including cooling failure, gas leakage, and compressor malfunction. We handle single-door, double-door, and side-by-side refrigerators efficiently.",
    points: [
      "✓ Quick diagnosis and repair of cooling issues.",
      "✓ Door seal, thermostat, and compressor fixes.",
      "✓ Experienced professionals for all fridge types.",
      "✓ Affordable and reliable home service."
    ]
  },
  {
    title: "Washing Machine Repair",
    image: washing_machine,
    description:
      "We provide complete washing machine repair services for both top-load and front-load models. From motor repair to drainage issues — we’ve got it all covered.",
    points: [
      "✓ Experts for all major washing machine brands.",
      "✓ Drum, motor, and water drainage issue repairs.",
      "✓ Door lock and control panel troubleshooting.",
      "✓ Quick home service and quality spare parts."
    ]
  },
  {
    title: "Microwave Repair",
    image: "",
    description:
      "Facing problems with your microwave oven? Our experienced technicians provide reliable and quick microwave repair for all types — convection, grill, or solo.",
    points: [
      "✓ Heating and power supply issues fixed.",
      "✓ Magnetron and control panel repair.",
      "✓ All major microwave brands supported.",
      "✓ Safe and professional in-home service."
    ]
  },
  {
    title: "Water Purifier Repair",
    image: ro,
    description:
      "Ensure your family’s safety with our RO and water purifier repair service. We fix all types of purifiers including RO, UV, and UF systems using genuine filters and parts.",
    points: [
      "✓ Filter, pump, and leakage repair.",
      "✓ Complete RO service with cartridge replacement.",
      "✓ Skilled technicians for all purifier types.",
      "✓ On-time service with transparent pricing."
    ]
  },
  {
    title: "Geyser Repair",
    image: geyser,
    description:
      "We provide doorstep geyser repair services for instant, storage, and gas geysers. Our team fixes heating problems, thermostat faults, and wiring issues efficiently.",
    points: [
      "✓ Experts for electric and gas geysers.",
      "✓ Heating element and thermostat repair.",
      "✓ Installation and uninstallation support.",
      "✓ Quick and reliable home service."
    ]
  }
];



export const users = [
    {
        _id: 'user1',
        name: 'Richard James',
        image: dummy_profile,
        categories: "",
        about: 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies. Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.',
        fees: 500,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        },
        isProvider: false
    },
]
