function Img({ratio='4x3', name='', src='', className=''}) {
  return (
    <div className={`ratio ratio-${ratio} ${className}`}>
      <img src={src} title={name} alt={name} />
    </div>
  );
}

export default Img;