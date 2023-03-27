import React from "react";


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            searchString: ''
        }
    }

    handkeChange = ({target}) => {
        this.setState({searchString: target.value})
    }

    filterResults = () => {
        let {items} = this.props;
        const searchString = this.state.searchString.trim().toLocaleLowerCase(); //trim удаление пробелом с обоих концов


        //Пример filter
        // const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
        // const result = words.filter(word => word.length > 6);
        // console.log(result);
        // Expected output: Array ["exuberant", "destruction", "present"]

        if(searchString.length > 0) {
            items = items.filter((item) => {
                return item.name.toLowerCase().match(searchString);
            })
        }

        return items;
    }
     

    render() {
        let {items} = this.props;
        items = this.filterResults(items);
        return(<div>
            <input type="text" value={this.state.searchString} onChange={this.handkeChange} placeholder="Enter lib name" />
            <ul>
                {items.map(({name, url}) => {
                    return <li key={name}>{name} <a href={url}>{url}</a></li>
                })}
            </ul>
        </div>)
    }
}

export default Search;