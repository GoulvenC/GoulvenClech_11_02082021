import React from "react"
import imgUrl from "../../../assets/images/cover-about.png"

/**
 * Hero of the About Page, displaying an image just for decoration.
 */
export default function HeroAbout():JSX.Element {
    return (
        <section className="text-center hero-index bg-black h-52 rounded-3xl w-full overflow-hidden">
            <img className="opacity-70 object-cover h-full w-full"
              src={imgUrl}>
            </img>
        </section>
    )
}
