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
   
      {image && (
        <img
          src={image}
          alt={title}
          className="card-image"
        />
      )}
     
      {video && (
        <video
          src={video}
          controls
          className="card-video"
        />
      )}

    </div>
  )
}
