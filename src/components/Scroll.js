import React from 'react'; 

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll; 


// In React, You have Props, State, Children, 

// css: overflow-y
// jsx: overflowY

// Example 1
// import React from 'react'; 

// const Scroll = (props) => {
//     console.log(props);
//     return props.children
// };

// export default Scroll; 