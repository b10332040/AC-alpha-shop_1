/**
 * Main 主要內容
 */
import Checkout from './Checkout.js';

function Main({about}) {
  let content = <Checkout />;

  switch (about) {
    case 'checkout':
      content = <Checkout />;
      break;

    default:
      content = <></>;
  }

  return (
    <div className="m-y-5">
      {content}
    </div>
  );
}

export default Main;