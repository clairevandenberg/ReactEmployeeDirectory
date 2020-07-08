import React from 'react';

const Sorting = (props) => {
  return (
    <div>
            <button className="button" onClick={()=>this.sort('ascending')}>Sort by Accencding </button>
            <button className="button" onClick={()=>this.sort('descending')}>Sort by Descending </button>
    </div>
    )
  };
  
  export default Sorting;