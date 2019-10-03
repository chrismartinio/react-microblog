import { ADD, REMOVE, NEW_COMMENT, REMOVE_COMMENT, EDIT, GET_POSTS, GET_POST } from './actionTypes';

const INITIAL_STATE = {
  blogs: [],
  blog: {}
  // blogs: [
  //   {
  //     title: 'blog1',
  //     description: 'a blog',
  //     body: 'hello im a blog',
  //     id: 'id1',
  //     comments: [
  //       {
  //         comment: 'hi this is a comment',
  //         id: 1
  //       },
  //       {
  //         comment: 'so is this',
  //         id: 2
  //       }
  //     ]
  //   }
  // ]
};

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case GET_POST:
      return {
        ...state,
        blog: action.payload
      }
    
    case GET_POSTS:
      return {
        ...state,
        blogs: action.payload
      }
    
    case ADD:
      return {
        ...state,
        blogs: [...state.blogs, { ...action.payload }]
      };

    case REMOVE:
      return {
        ...state,
        blogs: state.blogs.filter(blog => blog.id !== action.id)
      };

    case EDIT:
      return {
        ...state,
        blogs: state.blogs.map(blog => {
          if (blog.id === action.id) {
            if (action.payload.title) {
              blog.title = action.payload.title;
            }
            if (action.payload.description) {
              blog.description = action.payload.description;
            }
            if (action.payload.body) {
              blog.body = action.payload.body;
            }
            return blog;
          } else return blog;
        })
      };

    case NEW_COMMENT:
      return {
        ...state,
        blogs: state.blogs.map(blog => {
          if (blog.id === action.blogId) {
            return {
              ...blog,
              comments: [
                ...blog.comments,
                { comment: action.newComment, id: action.id }
              ]
            };
          } else {
            return blog;
          }
        })
      };

    case REMOVE_COMMENT:
      return {
        ...state,
        blogs: state.blogs.map(blog => {
          if (blog.id === action.blogId) {
            return {
              ...blog,
              comments: blog.comments.filter(
                comment => comment.id !== action.commentId
              )
            };
          } else {
            return blog;
          }
        })
      };

    default:
      return state;
  }
}

export default rootReducer;
