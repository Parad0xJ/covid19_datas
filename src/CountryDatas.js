import React, { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import img from '../src/search.png'
import { PaysData } from './PaysData'
import { FranceData } from './FranceData'

export const CountryDatas = props => {

    const [allDatas, setAllDatas] = useState([])
    const [isError, setIsError] = useState(false)
    const [query, setQuery] = useState('')
    const [show, setShow] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsError(false)
            try {
                const result = await axios('https://coronavirus-19-api.herokuapp.com/countries')
                setAllDatas(result.data)
            } catch (error) {
                setIsError(true)
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(query)
        setShow(true)
        // setQuery('')
    }


    return (

        < Fragment >
            {allDatas.filter(elt => elt.country === 'France').map((elt, i) => <FranceData key={i} cases={elt.cases} todayCases={elt.todayCases} deaths={elt.deaths} todayDeaths={elt.todayDeaths} criticalCases={elt.critical} recovered={elt.recovered} />)}

            <form onSubmit={handleSubmit}>
                <div className="form-row justify-content-center">
                    <div className="col-6">
                        <label className="sr-only">Search</label>
                        <div className="input-group mb-2">
                            <div className="input-group-prepend">
                                <div className="input-group-text"><img src={img} alt='image_loupe' style={{ width: 25, height: 23 }} /></div>
                            </div>
                            <input type="text" value={query} onChange={e => setQuery(e.target.value.substr(0, 1).charAt(0).toUpperCase() + e.target.value.substr(1, e.target.value.length).toLowerCase())} className="form-control" placeholder="Chercher un pays / Search country" required />
                        </div>
                        <span className='lead info'>Pour les non-Anglophones vous devez rechercher un pays en Anglais (sauf la France), pour vous aider cliquez sur le lien qui suit et descendez jusqu'à la section : Current Codes <a className='text-warning' href="https://en.wikipedia.org/wiki/ISO_3166-1">LIEN</a><br /> Quelques exemples : China, Australia, Gabon, Switzerland ...</span>
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-secondary btn-block mb-2">CHERCHER</button>
                    </div>
                </div>
            </form>

            {show === false ? null : allDatas.filter(elt => elt.country !== '').filter(elt => elt.country === query).map((elt, i) => <PaysData key={i} country={elt.country} cas={elt.cases} todayCases={elt.todayCases} deaths={elt.deaths} todayDeaths={elt.todayDeaths} gueris={elt.recovered} criticalCase={elt.critical} />)}

            {isError && <div>Quelque chose a bloquée l'appel de l'API voir la console pour plus de détails</div>}
        </Fragment >
    )
}



