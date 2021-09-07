import React, { useEffect, useState } from "react"
import HousingCard from "./housing-card"
import Error from "../error"
import Loader from "../../components/loader"
import { Housing } from "../../types"
// We don't have the backend yet, so I used a mocked JSON
const backend:string = "./data.json"


/**
 * A section wrapping all the housing cards
 */
export default function HousingSection():JSX.Element {
    const emptyData:Array<Housing> = []
    const [housingData, setHousingData] = useState({fetching: true, data: emptyData})
    const [error, setError] = useState({status: false, number: "", message: ""})
    /**
     * After the component is rendered, fetch the back end, then change State with all 
     * the data or with an error
     */
    useEffect(() => {
        (async () => {
            try {
              let response = await fetch(backend)
              if (response.ok) {
                setHousingData({fetching: false, data: await response.json()})
              } else {
                setError({status: true, number: response.status.toString(), message: response.statusText})
              }
            } catch (err) {
                setError({status: true, number: "inconnu", message: err.toString()})
            }
        })()
    }, [])
    /**
     * First, display a "loading" message. Then, if the error state change, display an error. 
     * If the housingData state change, insert à <HousingCard> for every housing
     */
    return (
        <section className="housing-section my-4 md:p-8 rounded-3xl md:bg-gray-100">
            { error.status ? <Error number={error.number} message={error.message} />  : "" }
            { // while fetching and no error
                housingData.fetching === true && error.status === false ? <Loader /> : "" }
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                {  // when fetching is done and no error
                    housingData.fetching === false && error.status === false ?
                    housingData.data.map(housing => (
                        <HousingCard key={housing.id} {...housing} />)) : "" }
            </div>
        </section>
    )
}
