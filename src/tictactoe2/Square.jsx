import React from 'react';
import PropTypes from 'prop-types';

function Square({value, onClick})  {

    return (
			<button className="square" onClick={ () =>  onClick() }>
					{value}
			</button>
    )
}
 
Square.propTypes = {
  value: PropTypes.array,
  onClick: PropTypes.func.isRequired
}

Square.defaultProps = {
  value: "-"
}
export default Square;