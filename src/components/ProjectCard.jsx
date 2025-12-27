export default function ProjectCard({
  title,
  description,
  tech,
  image,
  video
}) {
  return (
    <div className="card">
     
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="tech">{tech}</span>
   
      {Array.isArray(image) ? (
        image.map((src, i) => (
          <img key={i} src={src} alt={`${title} imagen ${i + 1}`} className="card-image" />
        ))
      ) : (
        image && (
          <img src={image} alt={title} className="card-image" />
        )
      )}
     
      {Array.isArray(video) && video.map((src, i) => (
        <video key={i} 
        src={src} 
        controls 
        className="card-video" />
      ))}

    </div>
  )
}
