import React from 'react'

const ServiceCard = () => {
    return (
        <article>
            <h3>Serviços</h3>
            <section>IMG</section>
            <p>Descrição do serviço</p>
        </article>
    )
}

const Activities = () => {
  return (
    <ul>
        <ServiceCard/>
        <ServiceCard/>
        <ServiceCard/>
    </ul>
  )
}

export default Activities