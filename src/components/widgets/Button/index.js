export function ArrowButton({className, type='button', text, arrowDirection='right'}) {
  return (
    <button className={`btn ${className}`} type={type} title={text} aria-label={text}>
      {(arrowDirection === 'left') && <span className="btn__arrow is-left"></span>}
      {text}
      {(arrowDirection === 'right') && <span className="btn__arrow is-right"></span>}
    </button>
  );
}

export function Button({className, type='button', text}) {
  return (
    <button className={`btn ${className}`} type={type} title={text} aria-label={text}>
      {text}
    </button>
  );
}