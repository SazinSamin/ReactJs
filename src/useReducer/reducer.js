export const reducer = ( state, action ) => {
  switch(action.type) {
    case 'ADD' : {
      const allBooks = [...state.tasks, action.payload];
      console.log(allBooks);
      return {
        ...state, 
        tasks : allBooks,
        isModalOpen : true,
        modalText : 'new task added'
      }
    }
    case 'DELETE' : {
      const filterTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state, 
        tasks : [...filterTasks],
        isModalOpen : true, 
        modalText : "Task has deleted"
      }
    }
  }
  return state;
}