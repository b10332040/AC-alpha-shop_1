/**
 * Main 主要內容
 */
import Checkout from './Checkout.js';

function Main({about}) {
  let content = <></>;

  switch (about) {
    case 'checkout':
      content = <Checkout />;
      break;

    default:
      content = <></>;
  }

  return (
    <div className="p-y-5">
      {content}
    </div>
  );
}

export default Main;