import React, { Component } from 'react';
import LocalizedStrings from 'react-localization';
import './localization.css';
import customData from './localization.json';
let strings = new LocalizedStrings(customData);
class localization extends Component {
  constructor(props) {
    super(props);
    this.state = {
      language: 'en'
    }

    this.handleLanguageChange = this.handleLanguageChange.bind(this);
  }

  handleLanguageChange(e) {
    e.preventDefault();
    let lang = e.target.value;
    this.setState(prevState => ({
      language: lang
    }))
  }

  render() {
    strings.setLanguage(this.state.language);
    return (
      <div>
        <h3>Localization : </h3>
      <div>
        <label class="label">
        Change Language:
        </label>
         <select className="locanguageDropDown" onChange={this.handleLanguageChange}>
          <option value="en">En- English</option>
          <option value="it">It- Italian</option>
        </select>
        </div>
          <div className="bodySection_language">
           <p>
                {strings.welcome}
            </p>
            <p>
                {strings.Address}
            </p>
           </div>
      </div>
    )
  }
}

export default localization;