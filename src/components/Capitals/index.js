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
    changedoption: countryAndCapitalsList[0].capitalDisplayText,
  }

  onchangecapital = event => {
    this.setState({changedoption: event.target.value})
  }

  getCountry = () => {
    const {changedoption} = this.state
    const filteredlist = countryAndCapitalsList.find(
      each => each.capitalDisplayText === changedoption,
    )
    console.log(filteredlist.country)
  }

  render() {
    // const {changedoption} = this.state

    const changedcountry = this.getCountry()
    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdowncontainer">
            <select className="dropdown">
              {countryAndCapitalsList.map(each => (
                <option
                  key={each.id}
                  value={each.capitalDisplayText}
                  onChange={this.onchangecapital}
                >
                  {each.capitalDisplayText}
                </option>
              ))}
            </select>
            <p className="dropdownpara"> is capital of which country?</p>
          </div>
          <p className="country">{changedcountry}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
