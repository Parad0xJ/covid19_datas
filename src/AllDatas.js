import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'

export const AllDatas = props => {
    const [dataCovid, setDataCovid] = useState([])
    const [isError, setIsError] = useState(false)

    const styles = { maxWidth: '20rem', minWidth: '9rem' }
    
    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            try {
                const result = await axios('https://coronavirus-19-api.herokuapp.com/all')
                setDataCovid(result.data)
            } catch (error) {
                setIsError(true)
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <Fragment>
            <h1 className='my-3'>Covid-19 la situation Mondiale</h1>
            <div id='bigBloc1' className='container mt-5 pt-2 d-flex justify-content-center' >
                <div id='bloc_1' className='border border-warning rounded mr-4 p-2' style={styles}><strong><span className='number'>{`${dataCovid.cases}`}</span></strong> <br /> {`Personnes inféctées`}</div>
                <div id='bloc_2' className='border border-warning rounded mr-4 p-2' style={styles} ><strong><span className='number'>{`${dataCovid.deaths}`}</span></strong> <br /> {`Personnes décédées`}</div>
                <div id='bloc_3' className='border border-warning rounded p-2' style={styles}><strong><span className='number'>{`${dataCovid.recovered}`}</span></strong> <br /><span> {`Personnes guéries`}</span></div>
            </div>
            {isError && <div>Quelque chose a bloquée l'appel de l'API voir la console pour plus de détails</div>}
            <hr className='border-warning mt-4' />
        </Fragment>
    )
}