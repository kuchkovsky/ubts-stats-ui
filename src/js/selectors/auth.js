export const getAuth = state => state.get('auth');

export const getAuthenticated = state => state.getIn(['auth', 'authenticated']);

export const getAdmin = state => state.getIn(['auth', 'admin']);
