import history from '../utils/history';
import { deriveHeaderFromPath } from '../utils/routes';

const setDocumentTitle = location => {
  document.title = deriveHeaderFromPath(location.pathname);
};

setDocumentTitle(history.location);
history.listen(location => setDocumentTitle(location));
