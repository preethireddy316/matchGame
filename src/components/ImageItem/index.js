const ImageItem = props => {
  const {imageDetails, onThumbnailClick} = props
  const {id, thumbnailUrl} = imageDetails
  const imageClick = () => {
    onThumbnailClick(id)
  }
  return (
    <li>
      <button type="button" onClick={imageClick}>
        <img src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default ImageItem
