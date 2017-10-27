export default function messages(state = {}, action) {
  switch (action.type) {
    case 'GET_PUBLIC_PROJECT_SUCCESSFUL':
      return Object.assign({}, {
        projectList: action.projectList,
        error: null,
        loading: false
      });
    case 'CLEAR_PUBLIC_PROJECT':
      return {projectList: [], error: null, loading: true};
    case 'GET_PUBLIC_PROJECT_ERROR':
      return {projectList: [], error: null, loading: true};
    default:
      return state;
  }
}