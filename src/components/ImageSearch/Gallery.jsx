export const Gallery = ({ images }) => {
  return (
    <>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <img src={image.previewURL} alt=""></img>
          </li>
        ))}
      </ul>
    </>
  );
};
