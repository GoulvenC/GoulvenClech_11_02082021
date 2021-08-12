import React, { useEffect } from "react"
const backend:string = "./data.json"

/**
 * Display all the HousingCards in a section
 */
export default function HousingSection():JSX.Element {
    /**
     * This component render a "Loading" pure template. Then call the hook "useEffect" to
     * fetch the back end. If the back end respond properly -> display all the housing cards
     * if not -> display an error.
     * With this approach, all our side effect are contained in "useEffect" hooks.
     */
    useEffect(() => {
        const housingSection = document.querySelector(".housing-section") as HTMLElement
        async function fetchData() {
            try {
              let response = await fetch(backend);
              if (response.ok) {
                const data:Array<Housing> = await response.json()
                const housings:string = createHousingsCards(data).join("")
                housingSection.innerHTML = housings
              } else {
                housingSection.innerHTML = 
                    `Désolé, nos serveurs font une sieste impromptue 
                    (${response.status} : ${response.statusText}) 😥
                    merci de réessayer !`
              }
            } catch (err) {
                housingSection.innerHTML = 
                    `Désolé, une vilaine erreur inconnue (${err}) fait des 
                    siennes 😥 merci de réessayer !`
            }
            
        }
        fetchData()
    })

    return (
        <section className="housing-section my-4 p-8 rounded-3xl bg-gray-100
          grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            Loading... 
        </section>
    )
}

/**
 * Create a list of JSX elements representing each housing
 * @param {Array<Housing>} housings 
 * @returns {Array<JSX.Element>}
 */
 function createHousingsCards(housings:Array<Housing>):Array<String> {
    return housings.map((housing) =>
        `<article class="rounded-xl p-4 bg-red-300 h-64" key={housing.id}>
            <h1>
                ${housing.title}
            </h1>
        </article>`
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
    host: { name: string, picture: string, }, rating: string, 
    location: string, 
    equipments: string[], 
    tags: string[],
}
