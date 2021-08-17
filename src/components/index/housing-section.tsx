import React, { useEffect, useState } from "react"
import HousingCard from "./housing-card"
// We don't have the backend yet, so I used a mocked JSON
const backend:string = "./data.json"

/**
 * A section wrapping all the housing cards
 */
export default function HousingSection():JSX.Element {
    const emptyData:Array<Housing> = []
    const [housingData, setHousingData] = useState({fetching: true, data: emptyData})
    const [error, setError] = useState({status: false, message: ""})
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
                setError({status: true, message: `Erreur ${response.status} : ${response.statusText}`})
              }
            } catch (err) {
                setError({status: true, message: `Erreur inconnue : ${err}`})
            }
        })()
    }, [setHousingData])
    /**
     * First, display a "loading" message. Then, if the error state change, display an error. 
     * If the housingData state change, insert à <HousingCard> for every housing
     */
    return (
        <section className="housing-section my-4 p-8 rounded-3xl bg-gray-100">
            { error.status ? <p>{error.message}</p> : "" }
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
                { housingData.fetching === true && error.status === false ? <p>Chargement...</p> : 
                    housingData.data.map(housing => (
                        <HousingCard key={housing.id} {...housing} />)) }
            </div>
        </section>
    )
}

/**
 * Check if the housings objects are valid
 * @interface Housing
 */
export interface Housing {
    id: string,
    title: string,
    cover: string, 
    pictures: string[], 
    description: string, 
    host: { name: string, picture: string, }, 
    rating: string, 
    location: string, 
    equipments: string[], 
    tags: string[],
}
