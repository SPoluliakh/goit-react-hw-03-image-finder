export const ImageGalleryItem = ({ searchInfo, onClick }) => {
  return (
    <>
      {searchInfo.map(({ id, webformatURL, tags }) => {
        return (
          <li key={id}>
            <img src={webformatURL} alt={tags} onClick={onClick} />
          </li>
        );
      })}
    </>
  );
};
