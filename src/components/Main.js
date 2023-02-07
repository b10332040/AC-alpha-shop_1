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
    <main>
      {content}
    </main>
  );
}

export default Main;