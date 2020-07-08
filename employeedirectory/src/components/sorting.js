import React from 'react';

const Sorting = (props) => {
  return (
    <div>
    <Wrapper>
            <button className="button" onClick={()=>this.sort('ascending')}>Sort by Accencding </button>
            <button className="button" onClick={()=>this.sort('descending')}>Sort by Descending </button>
            </Wrapper> 
                    </div>
    )
  };
  
  export default Sorting;