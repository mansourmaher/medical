import Header from "@/app/_LandingPageCompoenets/Header";
import React from "react";
import ImageSection from "./_compoenets/ImageSection";
import InformationSection from "./_compoenets/InformationSection";
import KeyFeatures from "./_compoenets/KeyFeatures";
import Certififcations_and_Recemended from "./_compoenets/Certififcations_and_Recemended";
import Purchase from "./_compoenets/Purchase";

function page({ params }: { params: { productId: string } }) {
  const { productId } = params;
  const product = {
    detials: {
      name: "Advanced Vital Signs Monitor Pro X3",
      description:
        "The Vital Signs Monitor Pro X3 is a state-of-the-art medical device designed for healthcare professionals. This advanced monitoring system provides accurate, real-time measurements of vital signs including blood pressure, oxygen saturation, temperature, and ECG. With its intuitive interface and wireless connectivity, the Pro X3 streamlines patient monitoring while ensuring the highest standards of accuracy and reliability.",

      price: 2499.99,
      discountPrice: 2199.99,
      discount: 12,
      rating: 4.8,
      reviewCount: 124,
      brand: "MediTech Solutions",
      category: "Patient Monitoring",
    },

    certifications: [
      "FDA Approved",
      "CE Marked",
      "ISO 13485 Certified",
      "HIPAA Compliant",
    ],
    images: [
      "/placeholder.svg?height=600&width=600&text=Monitor+Front",
      "/placeholder.svg?height=600&width=600&text=Monitor+Side",
      "/placeholder.svg?height=600&width=600&text=Monitor+Back",
      "/placeholder.svg?height=600&width=600&text=Monitor+Screen",
      "/placeholder.svg?height=600&width=600&text=Monitor+In+Use",
    ],

    faqs: [
      {
        question: "What is the battery life of the Vital Signs Monitor Pro X3?",
        answer:
          "The Vital Signs Monitor Pro X3 features a high-capacity lithium-ion battery that provides up to 8 hours of continuous operation on a full charge. The device also includes a power-saving mode that can extend battery life during transport or emergency situations.",
      },
      {
        question:
          "Is the monitor compatible with electronic medical record systems?",
        answer:
          "Yes, the Pro X3 is designed with interoperability in mind. It supports HL7 and FHIR standards for healthcare data exchange and can integrate with most major EMR/EHR systems. The device includes both wired and wireless connectivity options for flexible integration into existing hospital information systems.",
      },
      {
        question: "What patient populations can this monitor be used with?",
        answer:
          "The Vital Signs Monitor Pro X3 includes specialized modes for adult, pediatric, and neonatal patients. Each mode automatically adjusts measurement parameters, alarm limits, and display configurations to suit the specific patient population. Appropriate sensors and accessories for each patient type are available separately.",
      },
      {
        question: "How often does the device need to be calibrated?",
        answer:
          "MediTech recommends calibration every 12 months to ensure optimal performance and accuracy. The device includes a calibration reminder system that will notify users when calibration is due. Calibration services are available through authorized MediTech service centers.",
      },
    ],
    reviews: [
      {
        id: 1,
        user: "Dr. Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40&text=SJ",
        rating: 5,
        date: "2023-10-15",
        title: "Exceptional accuracy and reliability",
        comment:
          "We've been using the Pro X3 in our ICU for three months now, and the accuracy is remarkable. The wireless connectivity has streamlined our workflow significantly, and the battery life is impressive. Highly recommended for any critical care setting.",
        helpful: 28,
        verified: true,
      },
      {
        id: 2,
        user: "Michael Chen, RN",
        avatar: "/placeholder.svg?height=40&width=40&text=MC",
        rating: 4,
        date: "2023-09-22",
        title: "Great features, slight learning curve",
        comment:
          "The Pro X3 has significantly improved our patient monitoring capabilities. The touchscreen is responsive and the customizable display is very useful. There is a bit of a learning curve with all the features, but the training materials are comprehensive. The only improvement I'd suggest is making the alarm sounds more distinguishable from each other.",
        helpful: 15,
        verified: true,
      },
      {
        id: 3,
        user: "Dr. Robert Williams",
        avatar: "/placeholder.svg?height=40&width=40&text=RW",
        rating: 5,
        date: "2023-08-30",
        title: "Best monitor we've used",
        comment:
          "After comparing several high-end monitors, we chose the Pro X3 for our emergency department. The accuracy, speed, and reliability have exceeded our expectations. The early warning system has already helped us identify several cases of patient deterioration before they became critical.",
        helpful: 32,
        verified: true,
      },
    ],
    relatedProducts: [
      {
        id: 101,
        name: "Patient Monitor Mounting Arm",
        price: 249.99,
        rating: 4.5,
        image: "/placeholder.svg?height=200&width=200&text=Mounting+Arm",
      },
      {
        id: 102,
        name: "Replacement SpO2 Sensor",
        price: 129.99,
        rating: 4.7,
        image: "/placeholder.svg?height=200&width=200&text=SpO2+Sensor",
      },
      {
        id: 103,
        name: "Extended Battery Pack",
        price: 189.99,
        rating: 4.6,
        image: "/placeholder.svg?height=200&width=200&text=Battery+Pack",
      },
      {
        id: 104,
        name: "Protective Carrying Case",
        price: 79.99,
        rating: 4.4,
        image: "/placeholder.svg?height=200&width=200&text=Carrying+Case",
      },
    ],

    usageScenarios: [
      "Hospital Inpatient Units",
      "Intensive Care Units",
      "Emergency Departments",
      "Surgical Recovery",
      "Transport Between Facilities",
      "Outpatient Clinics",
    ],
    features: [
      "Multi-parameter monitoring (BP, SpO2, Temp, ECG)",
      '10.1" high-resolution touchscreen display',
      "Wireless connectivity (Wi-Fi, Bluetooth)",
      "8-hour battery life",
      "EMR/EHR integration capability",
      "Customizable early warning system",
      "Adult, pediatric, and neonatal modes",
      "Antimicrobial casing",
      "Portable design with carrying handle",
      "HIPAA-compliant data security",
    ],
  };
  return (
    <div className="mx-auto    max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:grid-cols-3">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <ImageSection images={product.images} />
          </div>
          <div className=" col-span-1 md:col-span-2 lg:col-span-2 gap-4">
            <InformationSection details={product.detials} />
            <Purchase />

            <KeyFeatures features={product.features} />
            <Certififcations_and_Recemended
              certifications={product.certifications}
              usageScenarios={product.usageScenarios}
            />
          </div>
        </div>
      </div>

      {/* <InformationSection/>
      <DescreptionSection/>
      <SimilaryProdcuts/> */}
    </div>
  );
}

export default page;
