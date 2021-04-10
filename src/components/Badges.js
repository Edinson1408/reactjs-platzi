import React from 'react';

import './style/Badge.css';

import ConfLogo from '../images/badge-header.svg';



class Badges extends React.Component{
    render(){
        
        return (
                <div className='Bage'>
                    <div className='Badge__header'>
                        <img src={ConfLogo} alt='Logo' />
                    </div>
                    
                    <div className='Badge__section-name'>
                            <img 
                            className='Badge__avatar'
                            src={this.props.avatarUrl} alt='Avatar' />
                            <h1>{this.props.firstName} {this.props.lastName}</h1>
                    </div>

                    <div className='Badge__section-info'>
                        <h3>{this.props.jobTitle}</h3>
                        <div>@{this.props.twitter}</div>
                    </div>

                    <div className='Badge__footer'>
                        #EnSuRed
                    </div>
                </div>
        )
        
    }
}

export default Badges;

