import {
  ADD,
  REMOVE,
  NEW_COMMENT,
  REMOVE_COMMENT,
  EDIT,
  GET_POSTS,
  GET_POST,
  NEW_POST,
  LOADING,
  LOADED,
  VOTE_UP,
  VOTE_DOWN
} from './actionTypes';

const INITIAL_STATE = {
  blogs: [],
  blog: {}
};

function rootReducer(state = INITIAL_STATE, action) {

  switch (action.type) {
    case NEW_POST:
      return {
        ...state,
        blogs: [...state.blogs, { ...action.payload }]
      };

    case GET_POST:
      return {
        ...state,
        blog: { ...action.payload }
      };

    case GET_POSTS:
      return {
        ...state,
        blogs: { ...action.payload }
      };

    case ADD:
      return {
        ...state,
        blogs: [...state.blogs, { ...action.payload }]
      };

    case REMOVE:
      return {
        ...state,
        blogs: state.blogs.filter(blog => {
          return blog.id !== +action.id;
        })
      };

    case EDIT:
      return {
        ...state,
        blog: { ...state.blog, ...action.payload }
      };

    case NEW_COMMENT:
      console.log('state', state);
      return {
        ...state,
        blog: {
          ...state.blog, comments: [...state.blog.comments, { text: action.newComment, id: action.id }]
        }
      }
    
    case LOADING:
      console.log('loading');
      return {
        ...state,
        blog: { ...state.blog, loading: true }
      };
    
    case LOADED:
      console.log('loaded');
      return {
        ...state,
        blog: { ...state.blog, loading: false }
      }

    case REMOVE_COMMENT:
      return {
        ...state,
        blog: {
          ...state.blog,
          comments: state.blog.comments.filter(
            comment => comment.id !== action.commentId
          )
        }
      }
    
    case VOTE_UP:
      return {
        ...state,
        blog: {
          ...state.blog, votes: state.blog.votes + 1
        }
      }
    
    case VOTE_DOWN:
      return {
        ...state,
        blog: {
          ...state.blog, votes: state.blog.votes - 1
        }
      }
    
    default:
      return state;
  }
}

export default rootReducer;
