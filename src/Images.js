export default function Images(props) {
  console.log(props.images);
  if (props.images) {
    return (
      <div className="row">
        {props.images.photos.map(function (image, index) {
          return (
            <div className="col-4">
              <a href={image.src.original} target="_blank" rel="noreferrer">
                <img
                  src={image.src.landscape}
                  alt={image.alt}
                  key={index}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
