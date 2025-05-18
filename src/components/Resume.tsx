"use client";

import { Timeline } from "@/components/ui/timeline";
import { Modal } from "@/components/ui/modal";
import Image from "next/image";
import { useState, useMemo } from "react";

const ImageWithModal = ({
  src,
  alt,
  onImageClick,
  priority = false,
  ...props
}: {
  src: string;
  alt: string;
  onImageClick: (src: string) => void;
  priority?: boolean;
  [key: string]: unknown;
}) => (
  <Image
    src={src}
    alt={alt}
    {...props}
    priority={priority}
    loading={priority ? "eager" : "lazy"}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    quality={85}
    placeholder="blur"
    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSUuJSEkLic1MC4mKC0wPDE+Oz5KPT49QU5RS1dWW11bR0ZkZmVobWVbW1v/2wBDARUXFx4aHh4lISUuW0hbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1tbW1v/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
    onClick={() => onImageClick(src)}
    className={`${props.className} cursor-pointer transition-transform hover:scale-[1.02]`}
  />
);

function Resume() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const data = useMemo(
    () => [
      {
        title: "2024",
        subtitle:
          "Glasgow Caledonian University | Masters of Science, Finance Accounting and Regulations",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Earned a Master of Science in Finance, Accounting, and Regulations
              from Glasgow Caledonian University in Glasgow, UK — gaining a
              strong foundation in financial analysis, regulatory frameworks,
              and strategic accounting practices to support data-driven
              decision-making in business and finance.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <ImageWithModal
                src="/glasgow-caledonian-1.jpeg"
                alt="Glasgow Caledonian University"
                width={500}
                height={500}
                priority={true}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              />
              <ImageWithModal
                src="/glasgow-caledonian-2.jpeg"
                alt="Glasgow Caledonian University"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              />
            </div>
          </div>
        ),
      },
      {
        title: "2022",
        subtitle:
          "Continued Entertainment Limited | Senior Royalty and Data analyst",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Worked as a Data Analyst at Transsnet Limited, where I made sense
              of complex datasets around market trends, consumption, and
              investments. By analyzing the numbers and spotting patterns, I
              helped improve revenue efficiency by 15%. I also created
              easy-to-understand reports with clear visuals, which boosted how
              well stakeholders grasped our insights by 25%. I regularly
              communicated findings with rightsholders, building trust and
              transparency — reflected in a 95% satisfaction rate. On top of
              that, I made sure our royalty calculations were accurate and
              aligned with contracts, helping the company maintain its
              reputation for quality and reliability.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <ImageWithModal
                src="/continued-4.jpeg"
                alt="Continued Entertainment"
                width={500}
                height={500}
                priority={true}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              />

              <ImageWithModal
                src="/continued-5.jpeg"
                alt="Continued Entertainment"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              />
            </div>
          </div>
        ),
      },
      {
        title: "2017",
        subtitle: "Transsnet Music Limited (Boomplay) | Financial Data Analyst",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Worked with financial data from various sources to uncover trends
              in revenue, costs, and overall performance—helping guide smarter
              business decisions and planning. I built and maintained financial
              models and forecasting tools that gave clear projections for
              revenue, expenses, and cash flow, making budgeting and resource
              planning more accurate. By running variance analyses, I pinpointed
              differences between actual results and forecasts, breaking down
              the reasons behind performance shifts. I also created and
              presented clear, insight-driven financial reports and dashboards
              for senior management, making complex numbers easy to understand
              and act on.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <ImageWithModal
                src="/continued-2.jpeg"
                alt="Continued Entertainment"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              />
              {/* <ImageWithModal
                src="/continued-3.jpeg"
                alt="Continued Entertainment"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              /> */}
              <ImageWithModal
                src="/continued-1.jpeg"
                alt="Continued Entertainment"
                width={500}
                height={500}
                priority={true}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              />
              <ImageWithModal
                src="/boomplay-1.jpeg"
                alt="Transsnet Music Limited"
                width={500}
                height={500}
                priority={true}
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              />
              <ImageWithModal
                src="/boomplay-2.jpeg"
                alt="Transsnet Music Limited"
                width={500}
                height={500}
                loading="lazy"
                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                onImageClick={handleImageClick}
              />
            </div>
          </div>
        ),
      },
      {
        title: "2014",
        subtitle:
          "Bachelor of Science in Economics | Obafemi Awolowo University, Nigeria",
        content: (
          <div>
            <p className="text-neutral-200 text-xs md:text-sm font-normal mb-8">
              Gained a strong foundation in economic theory, data analysis, and
              financial systems. Developed analytical thinking and
              problem-solving skills through coursework in microeconomics,
              econometrics, and development economics.
            </p>
            <div className="grid grid-cols-2 gap-4"></div>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div id="resume" className="w-full">
      <Timeline data={data} />
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Enlarged view"
            width={1000}
            height={1000}
            className="rounded-lg max-h-[85vh] w-auto object-contain"
          />
        )}
      </Modal>
    </div>
  );
}

export default Resume;
