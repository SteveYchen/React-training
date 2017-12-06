import React, { Component } from 'react';
//const Component = React.Component;
class SearchBar extends Component {

    constructor(props){
        super(props);

        this.state = {term: ''};

    }

    render() { /*similar to render: function() */
        return (
            <div>
                <input 
                    value={this.state.term}
                    onChange = {event => this.setState({ term: event.target.value} )} 
                />
                
             </div>
            );
        };

    // onInputChange(event){

    //     console.log(event.target.value);
    // };

}


// const SearchBar = () => {

//     return <input />;

// };

export default SearchBar;