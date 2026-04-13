"use client";

import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectPresentation from "@/components/projects/presentacion";
import ProjectContext from "@/components/projects/contexto";
import ProcessSection from "@/components/projects/proceso";
import FeaturesSection from "@/components/projects/funcionalidades";
import { projectDetails } from "@/data/project-details";

export default function DynamicProjectPage({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    const projectInfo = projectDetails[slug];

    if (!projectInfo) {
        return notFound();
    }

    try {
        const { presentationData, contextData, developmentProcess, features } = projectInfo;

        const processData = {
            title: "Proceso de Desarrollo",
            subtitle: "Conoce cómo se llevó a cabo este proyecto desde su concepción hasta su implementación final.",
        };

        return (
            <main>
                <Navbar />
                <ProjectPresentation presentationData={presentationData} />
                <ProjectContext contextData={contextData} />
                <ProcessSection
                    developmentProcess={developmentProcess}
                    title={processData.title}
                    subtitle={processData.subtitle}
                />
                <FeaturesSection features={features.map((feature: any) => ({
                    ...feature,
                    description: feature.longDescription // Map longDescription to description
                }))} />
                <Footer />
            </main>
        );
    } catch (error) {
        console.error('Error in DynamicProjectPage:', error);
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p>Something went wrong. Please try again later.</p>
            </div>
        );
    }
}