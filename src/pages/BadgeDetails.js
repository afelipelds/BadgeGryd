import React from 'react'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'

import heroLogo from '../images/badge-header.svg'  
import './styles/BadgeDetails.css'
import api from '../api'
import Badge from '../components/Badge'
import { Link } from 'react-router-dom'

class BadgeDetails extends React.Component {
    state = {
        loading: false,
        error: null,
        data: undefined || {},
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null
        })

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            )
            this.setState({
                loading: false,
                data: data
            })
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

        if (this.state.error) {
            return <PageError error={this.state.error} />
        }
        
        return(<>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={heroLogo} alt="imagen en Hero"/>
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{this.state.data.firstName}, {this.state.data.lastName}</h1>
                        </div>
                    </div>
                
                </div>
            </div>
            
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <Badge firstName={this.state.data.firstName} lastName={this.state.data.lastName} email={this.state.data.email} jobTitle={this.state.data.jobTitle} twitter={this.state.data.twitter} />
                    </div>
                    <div className="col-7">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <Link className="btn btn-primary" to={`/badges/${this.state.data.id}/edit`}>Edit</Link>
                            </div>
                            <div>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default BadgeDetails;