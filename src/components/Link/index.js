const Link = ({url, span}) => {
  return (
    <a href={url} target="_blank" rel="noreferrer">
      <span>{span}</span>
    </a>
  );
}

export default Link;
