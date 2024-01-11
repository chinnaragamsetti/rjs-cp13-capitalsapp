import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {
    changedOption: countryAndCapitalsList[0].id,
  }

  onChangecapital = event => {
    this.setState({changedOption: event.target.value})
  }

  getCountry = () => {
    const {changedOption} = this.state
    const filteredList = countryAndCapitalsList.find(
      each => each.id === changedOption,
    )
    return filteredList.country
  }

  render() {
    // const {changedOption} = this.state
    const changedCountry = this.getCountry()

    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdowncontainer">
            <select className="dropdown">
              {countryAndCapitalsList.map(each => (
                <option
                  key={each.id}
                  onChange={this.onChangecapital}
                  value={each.id}
                >
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="dropdownpara"> is capital of which country?</p>
          </div>
          <p className="country">{changedCountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
