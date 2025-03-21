import React from 'react'
import { RiPsychotherapyFill } from "react-icons/ri";
import { TbRibbonHealth } from "react-icons/tb";
import { GiHealthNormal } from "react-icons/gi";

const Activities = () => {
  return (
    <ul className='activities-list'>
       <article>
            <section>
              <TbRibbonHealth size={70}/>
              <h3>Cuidado pessoal</h3>
            </section>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non provident nostrum assumenda ipsa a voluptate dolore sequi id quidem quos. Voluptates illum nesciunt facilis amet delectus repellendus dicta possimus cupiditate.
            </p>
        </article>
        <article>
            <section>
              <GiHealthNormal size={70}/>
              <h3>Saúde Mental</h3>
            </section>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non provident nostrum assumenda ipsa a voluptate dolore sequi id quidem quos. Voluptates illum nesciunt facilis amet delectus repellendus dicta possimus cupiditate.
            </p>
        </article>
        <article>
            <section>
              <RiPsychotherapyFill size={70}/>
              <h3>Atendimento Humanizado</h3>
            </section>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non provident nostrum assumenda ipsa a voluptate dolore sequi id quidem quos. Voluptates illum nesciunt facilis amet delectus repellendus dicta possimus cupiditate.
            </p>
        </article>
    </ul>
  )
}

export default Activities