import React from 'react'

export const FranceData = props => {

    return (
        <div className='franceData'>
            <h3 className='mt-4'>La situation en France</h3>
            <div id="bigBloc2">
                <div className="littleBloc2 border border-warning rounded mx-auto py-2 mt-5" style={{ maxWidth: '40rem', minWidth: '20rem' }} >
                    {`Personnes inféctées : `}<span className='franceDatas'><strong>{props.cases}</strong></span><br />
                    {`Aujourd'hui : `}<span className='franceDatas'><strong>+ {`${props.todayCases} cas`}</strong></span><br />
                    {`Décés : `}<span className='franceDatas2'><strong>{`${props.deaths}`}</strong></span> || {`Décés du jour : `}<span className='franceDatas2'><strong>{`${props.todayDeaths}`}</strong></span> || {`En état critique : `}<span className='franceDatas2'><strong>{`${props.criticalCases}`}</strong></span><br />
                    {'Parsonnes Guéries : '}<span className='franceDatas'><strong>{props.recovered}</strong></span>
                </div>
            </div>
            <hr className='border-warning mt-4' />
        </div>
    )
}