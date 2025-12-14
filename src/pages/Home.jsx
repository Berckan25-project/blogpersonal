import ProjectCard from '../components/ProjectCard'

export default function Home() {
  return (
    <main className="container">
      <h2>Mis Proyectos</h2>

      <div className="grid">
        <ProjectCard
          title="PROYECTO SISTEMA AUTOMATIZADO DE GESTIÓN DE CITAS MÉDICAS"
          description="El proyecto consiste en implementar un sistema automatizado de gestión de citas médicas que integra 
          un formulario web (Google Forms) con un flujo de validación y programación mediante n8n. 
          El sistema agenda citas en Google Sheets, envía confirmaciones por correo electrónico y 
          genera recordatorios automáticos 24 horas antes de la cita. Su alcance incluye la reducción de tiempos de espera, 
          la disminución de errores administrativos y la mejora de la experiencia del paciente."
          tech="N8N, BPMN, MIRO, TRELLO"
          image="/images/estructura del proyecto.jpeg"
          video="/videos/videoT2.mp4"
        />

        <ProjectCard
          title="Proyecto 2"
          description="API REST"
          tech="Node.js, Express"
        />
      </div>
    </main>
  )
}
