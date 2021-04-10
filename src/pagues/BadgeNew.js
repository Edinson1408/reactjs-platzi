import React from 'react';
import Navbar from '../components/Navbar';

import './Style/BadgesNew.css';

import  header from '../images/badge-header.svg'

import Badges from '../components/Badges';

import Badgesform from '../components/Badgesform'

class BadgeNew extends React.Component{
    state={
        form:{
            firstName:'',
            lastName:'' ,
            jobTitle:'' ,
            email:'',
            twitter:''

        }
    };

    handleChange=e=>{
        // const nextForm=this.state.from;
        // nextForm[e.target.name]=e.target.value;

        this.setState({
            form:{
                ... this.state.form,
                    [e.target.name]:e.target.value,
            },
        })
    }

    render(){
        return(
            <div>
                <Navbar />

                <div className="BadgeNew__hero">
                    <img className='img-fluid' src={header} alt="Logo" />
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <Badges 
                             firstName={this.state.form.firstName}
                             lastName={this.state.form.lastName}
                             jobTitle={this.state.form.jobTitle}
                             email={this.state.form.email}
                             avatarUrl='https://pbs.twimg.com/profile_images/422819974260879360/Ru-95Ik9_400x400.jpeg'
                             twitter={this.state.form.twitter}
                            />
                        </div>
                        <div className='col-6'>
                            <Badgesform onChange={this.handleChange} fromValues={this.state.form} />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default BadgeNew;