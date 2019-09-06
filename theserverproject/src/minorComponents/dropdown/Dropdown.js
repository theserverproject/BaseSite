import React from 'react';
import './Dropdown.css';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            dropdownVisible: false,
            defaultDropdownTitleClass: 'dropdown-title',
        };

        // Create a referece to the titel so that we
        // can later get it's width for the dropdown.
        // Can't have a static width because size of
        // the page changes with browser.
        this.titleRef = React.createRef();
    }

    toggleDropdown = (ifOpen=false) => {

        // If the dropdown is closed and onlyIfOpen is
        // true, then return and do nothing.
        if (ifOpen === true && !this.state.dropdownVisible) {
            return null;
        }

        let newState = {
            dropdownVisible: !this.state.dropdownVisible,
        };

        if (newState.dropdownVisible) {
            newState.defaultDropdownTitleClass = 'clicked-dropdown'
        }
        else {
            newState.defaultDropdownTitleClass = 'dropdown-title'
        }

       this.setState(newState);
    }

    render() {

        let dropdownClass = (this.props.dropdownClassOverride ?
                this.props.dropdownClassOverride + ' dropdown'
            :
                'dropdown'
        );

        let dropdownButtonClass = (this.props.dropdownTitleClassOverride ?
                this.props.dropdownTitleClassOverride + ' astext ' + this.state.defaultDropdownTitleClass
            :
                'astext ' + this.state.defaultDropdownTitleClass
        );

        let dropdownContentClass = this.props.dropdownContentClassOverride ? this.props.dropdownContentClassOverride + ' dropdown-content' : 'dropdown-content';

        return (
            // toggleDropdown(true) here allows the dropdown to close when the users mouse
            // leaves the button area.
            <div className={ dropdownClass } onMouseLeave={ () => { this.toggleDropdown(true) } }>
                <button ref={ this.titleRef } className={ dropdownButtonClass } onClick={ this.toggleDropdown }>
                    { this.props.children }
                </button>
                {
                    // If the dropdown is visible, then we should set its width equal
                    // to that of the Title, and display it.
                    // OnMouseLeave here makes the dropdown close when a user's mouse leaves the dropdown.
                    this.state.dropdownVisible &&
                    <div className={ dropdownContentClass } style={ { width: this.titleRef.current.offsetWidth } } onMouseLeave={ this.toggleDropdown }>
                        { this.props.dropdownItems }
                    </div>
                }
           </div>
        );
    }
}

export default Dropdown;
