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
    capitalid: countryAndCapitalsList[0].id,
  }

  onchangecapital = event => {
    this.setState({capitalid: event.target.value})
  }

  getCountry = capitalid => {
    //  const {capitalid} = this.state
    const filteredlsit = countryAndCapitalsList.filter(
      each => each.id === capitalid,
    )
    return filteredlsit[0].country
  }

  render() {
    const {capitalid} = this.state

    const changedcountry = this.getCountry(capitalid)
    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <h1 className="heading">Countries And Capitals</h1>
          <div className="dropdowncontainer">
            <select className="dropdown" onChange={this.onchangecapital}>
              {countryAndCapitalsList.map(each => (
                <option key={each.id} value={each.capitalDisplayText}>
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
