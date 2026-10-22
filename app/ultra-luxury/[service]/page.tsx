import { notFound } from "next/navigation";

import CuratedServiceDetail from "@/components/CuratedServiceDetail";
import ServiceHero from "@/components/ServiceHero";

import { curatedServices } from "../services";

export function generateStaticParams() {
  return curatedServices.map((service) => ({
    service: service.id,
  }));
}

export default async function CuratedServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;
  const activeService = curatedServices.find((item) => item.id === service);

  if (!activeService) {
    notFound();
  }

  return (
    <>
      <ServiceHero
        title={activeService.title}
        mobileImage={
          service === "hospitality-guest-management"
            ? "/Gemini_Generated_Image_fs1606fs1606fs16 1 (1).webp"
            : undefined
        }
        image={
          service === "destination-celebrations"
            ? "/Gemini_Generated_Image_m2pryim2pryim2pr%202%20%281%29.webp"
            : service === "bespoke-experiences"
            ? "/Gemini_Generated_Image_9j52tc9j52tc9j52 2.webp"
            : service === "travel-concierge"
            ? "/Gemini_Generated_Image_m2pryim2pryim2pr 2.webp"
            : service === "vip-concierge"
              ? "/Gemini_Generated_Image_eg7ubeeg7ubeeg7u 1.webp"
              : undefined
        }
      />

      <main>
        <CuratedServiceDetail
          activeService={activeService}
          headingOverride="SERVICE OFFERING"
          imageOverride={
            service === "destination-celebrations"
              ? "/image 22 (1).webp"
              : service === "bespoke-experiences"
              ? "/7.png.webp"
              : service === "travel-concierge"
              ? "/Gemini_Generated_Image_epxe35epxe35epxe 1 (4).webp"
              : service === "vip-concierge"
                ? "/Gemini_Generated_Image_epxe35epxe35epxe 1 (3).webp"
                : undefined
          }
          mobileImageOverride={
            service === "hospitality-guest-management"
              ? "/Frame 61.webp"
              : undefined
          }
          imageAltOverride={
            service === "destination-celebrations"
              ? "Group of travelers celebrating together on a coastal destination trip"
              : service === "bespoke-experiences"
              ? "Traveler overlooking a bright blue coastal bay"
              : service === "travel-concierge"
              ? "Traveler relaxing in a hotel lobby beside her suitcase"
              : service === "vip-concierge"
                ? "Flight attendant serving a meal in a premium aircraft cabin"
                : undefined
          }
        />
      </main>
    </>
  );
}
