"use client";

import { projectDetails } from "@/data/project-details";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectPresentation from "@/components/projects/presentacion";
import ProjectContext from "@/components/projects/contexto";
import ProcessSection from "@/components/projects/proceso";
import FeaturesSection from "@/components/projects/funcionalidades";

export default function ConsolidadorProject() {
    try {
        const data = projectDetails["consolidador-rm"];
        
        if (!data) return <div className="text-white min-h-screen flex items-center justify-center">Proyecto no encontrado</div>;

        const processData = {
            title: "Proceso de Desarrollo",
            subtitle: "Conoce cómo se estructuró este sistema desde el análisis del cuello de botella hasta la optimización extrema.",
        };

        return (
            <main>
                <Navbar />
                <ProjectPresentation presentationData={data.presentationData} />
                <ProjectContext contextData={data.contextData} />
                <ProcessSection
                    developmentProcess={data.developmentProcess}
                    title={processData.title}
                    subtitle={processData.subtitle}
                />
                <FeaturesSection features={data.features.map((feature: any) => ({
                    ...feature,
                    description: feature.longDescription
                }))} />
                <Footer />
            </main>
        );
    } catch (error) {
        console.error('Error en ConsolidadorProject:', error);
        return (
            <div className="min-h-screen flex items-center justify-center text-white">
                <p>Ocurrió un error cargando el proyecto. Intenta nuevamente.</p>
            </div>
        );
    }
}
