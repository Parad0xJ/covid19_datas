import React from 'react'

export const PaysData = props => {

    return (
        <div className="card border-danger  mb-3 mt-3 mx-auto" style={{ maxWidth: '40rem' }}>
            <div className="card-header countryName">{props.country}</div>
            <div className="card-body text-dark">
                <p className="card-text">{`Personnes inféctées : `}<span className='paysDatas'><strong>{props.cas}</strong></span></p>
                <p className="card-text">{`Aujourd'hui  : `}<span className='paysDatas'><strong> + {props.todayCases} cas</strong></span></p>
                <p className="card-text">{`Décés : `}<span className='paysDatas'><strong>{props.deaths}</strong></span> ||
                  <span className='ml-1'>{`Décés du jour : `}</span><span className='paysDatas'><strong>{props.todayDeaths}</strong></span> ||
                    <span className='ml-1'>{`Malade dans un état critique: `}</span><span className='paysDatas'><strong>{props.criticalCase}</strong></span></p>
                <p className="card-text">{`Personnes guéries : `}<span className='paysDatas'><strong>{props.gueris}</strong></span></p>
            </div>
        </div>
    )
}