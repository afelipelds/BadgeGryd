import React from 'react';

import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
import { Link } from 'react-router-dom';
import api from '../api'
import PageLoading from '../components/PageLoading'
class BadgeNew extends React.Component {
  state = {
    loading: false,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    },
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })

    try {
      await api.badges.create(this.state.form)
      this.setState({
        loading: false
      })
      this.props.history.push('/badges')
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      })
    }

  }

  render() {
    if(this.state.loading) {
      return <PageLoading />
    }

    return (
      <>
        <div className="BadgeNew__hero">
          {/* <img className="img-fluid" src={header} alt="Logo" /> */}
          <h2 className="font-weight-light">Badge</h2>
          <h2 className="font-weight-bold">Gryd</h2>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || 'Name'}
                lastName={this.state.form.lastName || ''}
                twitter={this.state.form.twitter || 'Twitter'}
                jobTitle={this.state.form.jobTitle || 'Job'}
                email={this.state.form.email || 'Email'}
                avatarUrl="https://www.gravatar.com/avatar/21594ed15d68ace3965642162f8d2e84?d=identicon"
              />
              <Link to="/badges" ><button type="button" class="btn btn-warning">Go back to Badges</button></Link>
            </div>

            <div className="col-6">
              <BadgeForm
                onSubmit={this.handleSubmit}
                onChange={this.handleChange}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;
