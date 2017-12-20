const TodoListAction = (dispatch) => {
  // redux-thunk可以让action创建函数，先不返回action对象，而是返回一个函数,参数为(dispatch,getState),在函数体内封装业务逻辑

  const Add = { type: 'Add' };  // action是只含key为type的对象
  function Remove(i) {
    return {
      type: 'Remove',
      index: i,
    };
  }

  return {
    handleAdd: () => dispatch(Add),
    handleRemove: i => dispatch(Remove(i)),
  };
};

const LikeAction = (dispatch) => {
    // 定义action
  const change = { type: 'change' };
  return {
    handleClick: () => dispatch(change),
  };
};

export { TodoListAction, LikeAction };
