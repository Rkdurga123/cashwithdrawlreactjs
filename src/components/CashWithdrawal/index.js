// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem/'
import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000, balance: true}

  onChangeAmount = value => {
    const {amount} = this.state
    if (amount - value >= 0) {
      this.setState(prevState => ({
        amount: prevState.amount - value,
      }))
      this.setState({balance: true})
    } else {
      this.setState({balance: false})
    }
  }
  render() {
    const {amount, balance} = this.state
    const {denominationsList} = this.props
    const text = balance ? null : <span>*Insufficient Funds</span>
    const warningText =
      amount >= 50 && !balance ? <span>Choose another Denomination</span> : null
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="img-text-container">
            <p className="btn">S</p>
            <p className="title">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balanceName">Your Balance</p>
            <div className="balanceCard">
              <p className="balanceName">{amount}</p>
              <p className="balanceName">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="title">withdraw</p>
            <p className="balanceName">CHOOSE SUM (IN RUPEES)</p>
            <ul>
              {denominationsList.map(eachItem => (
                <DenominationItem
                  denominationDetails={eachItem}
                  key={eachItem.id}
                  onChangeAmount={this.onChangeAmount}
                />
              ))}
            </ul>
            {text}
            {warningText}
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
