import react, { useEffect } from "react"

export const NoPage = () => {

    useEffect(() => {
        document.title = 'CY | Invalid Page'
    }, [])

    return (
        <div>
            INVALID PAGE.
        </div>
    )
}