import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownVisible: false,
        };
    }

    showDropdown = () => {
        this.setState({
            dropdownVisible: true,
        });
    }

    hideDropdown = () => {
        this.setState({
            dropdownVisible: false,
        });
    }

    render() {

        let dropdownItems = [
            <a key={ 'www.google.com' } href="www.google.com">Google</a>,
            <a key={ 'www.amazon.ca' } href="www.amazon.ca">Amaxon</a>,
            <a key={ 'www.twitter.com' } href="www.twitter.com">Twitter</a>
        ];

        let dropdownClass = this.props.dropdownClassOverride ? this.props.dropdownClassOverride + ' dropdown' : 'dropdown';
        let dropdownButtonClass = this.props.dropdownTitleClassOverride ? this.props.dropdownTitleClassOverride + ' astext dropdown-title' : 'astext dropdown-title';

        //let dropdownClass = props.dropdownClassOverride ? props.dropdownClassOverride + ' dropdown-content' : 'dropdown-content';
        let dropdownItemsClass = 'dropdown-content';

        return (
            <div className={ dropdownClass }>
                <button className={ dropdownButtonClass } onClick={ this.showDropdown }>
                    { this.props.children }
                </button>
                {
                    this.state.dropdownVisible &&
                    <div className={ dropdownItemsClass }>
                        { dropdownItems }
                    </div>
                }
           </div>
        );
    }
}

export default Dropdown;
