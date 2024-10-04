export const Collection = ({ images, name }) => {
  // Проверка на наличие изображений и что images - это массив
  const isImagesValid = Array.isArray(images);

  return (
    <div className="collection">
      {isImagesValid && images.length > 0 && (
        <img className="collection__big" src={images[0]} alt="Item" />
      )}
      <div className="collection__bottom">
        {isImagesValid && images.length > 1 && (
          <img className="collection__mini" src={images[1]} alt="Item" />
        )}
        {isImagesValid && images.length > 2 && (
          <img className="collection__mini" src={images[2]} alt="Item" />
        )}
        {isImagesValid && images.length > 3 && (
          <img className="collection__mini" src={images[3]} alt="Item" />
        )}
      </div>
      <h4>{name}</h4>
    </div>
  );
};
