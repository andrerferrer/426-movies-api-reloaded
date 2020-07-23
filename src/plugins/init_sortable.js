// IMPORT THE PLUGIN
import Sortable from 'sortablejs';

// IMPLEMENT THE FUNCTION
const initSortable = () => {
  const options = {
    ghostClass: "ghost",
    animation: 150,
    onEnd: (event) => {
      alert(`${event.oldIndex} moved to ${event.newIndex}`);
    }
  }
  const list = document.querySelector('#results');
  Sortable.create(list, options);
};

// EXPORT THE FUNCTION
export { initSortable };
