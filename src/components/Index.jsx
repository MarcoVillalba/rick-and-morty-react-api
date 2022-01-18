import React from 'react'
import { Link } from "react-router-dom";

export const Index = () => {
    return (
        <div className="container">
            {/* <h3 classNameName="h-title">Rick Sánchez</h3>
            <p classNameName='p-text'>
                Es un viejo científico que acostumbra a hablar de manera vulgar y entre eructos, y la mayoría de las veces tiene un rastro de saliva en la boca. Es padre de Beth Sánchez y es el abuelo materno de Summer y Morty. Es un hombre que ha pasado gran parte de su vida viajando a través de diversas galaxias. Para él, la Tierra se llama Planeta Tierra del Universo C-137. Es irresponsable, asocial, chiflado, ambicioso y desconsiderado ante su propia familia, criticando en numerosas ocasiones a su yerno por ser un inútil. Suele llevar a Morty a sus aventuras para usarlo en sus viajes, llegando al punto de no distinguir el bien del mal. Sin embargo, la principal razón por la cual Rick dice necesitar a su nieto Morty en sus aventuras es debido al hecho de que sus ondas cerebrales consiguen hacer pasar desapercibidas a las de Rick, dando a entender que Morty es tan poco inteligente al punto de ser casi un escudo. Le teme a los piratas.
            </p>
            <h3 classNameName="h-title">Morty Smith</h3>
            <p classNameName='p-text'>
                Es un chico de 14 años, nieto de Rick, quien lo usa frecuentemente en sus aventuras. Posee una inteligencia pobre, es de estatura baja para su edad y está enamorado de una compañera de escuela llamada Jessica. Al avanzar la serie, toma más valor a la hora de enfrentar situaciones peligrosas. Con su bajo nivel de inteligencia sirve como contrapunto a la de su abuelo Rick, lo cual hace que sea el compañero de aventuras ideal.
            </p>
            <h3 classNameName="h-title">Jerry Smith</h3>
            <p classNameName='p-text'>
                Es el padre de Morty y de Summer. Es una persona bastante patética; Rick lo odia por haberle quitado a su hija, es un mal padre de familia, es inseguro de sí mismo y tiene problemas en su matrimonio con Beth. Es despedido de su trabajo en la agencia de publicidad donde trabajaba por su alto nivel de incompetencia y estupidez. Siempre entra en conflicto con Rick debido a que este siempre está de aventuras con Morty, y aunque trata de ganarse el respeto y atención de sus hijos, no lo logra.
            </p>
            <h3 classNameName="h-title">Summer Smith</h3>
            <p classNameName='p-text'>
                Es la hermana mayor de Morty, de 17 años, una típica adolescente que suele ser superficial y obsesionada con mejorar su imagen frente a sus amigos. Es en general parecida a su madre y generalmente se la muestra como una chica lista y con sentido del humor, pero también muestras rastros de su padre como la búsqueda de aprobación. Ocasionalmente muestra celos de Morty por ser el acompañante de Rick en sus viajes interdimensionales. Ella muestra que se preocupa por Rick y lo ve como su héroe, a pesar de los malos tratos de este y su desprecio por su forma de vida de adolescente.
            </p>
            <h3 classNameName="h-title">Beth Smith</h3>
            <p classNameName='p-text'>
                Es la hija de Rick y a la vez madre de Morty y Summer. Al igual que su padre, bebe mucho, pero a diferencia de él, es muy seria ante las situaciones y a la vez es muy despreocupada en ocasiones. Trabaja en un hospital equino como cirujana especializada en caballos, pero muchas veces se reprocha no haber sido médico. Usualmente tiene discusiones con su esposo, habiendo una incompatibilidad entre ambos.
            </p> */}

            <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 ">
                <div className="col">
                    <Link className="link" to='/personajes'>
                        <div className="card h-100 text-white bg-dark border-light">
                            <img src={require('../images/person.jpg')} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title h-title h-title">Personajes</h5>
                            </div>
                </div>
                </Link>
            </div>
            <div className="col">
            <Link className="link" to='/locaciones'>
                <div className="card h-100 text-white bg-dark border-light">
                    <img src={require('../images/portal.jpg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title h-title">Locaciones</h5>
                    </div>
                </div>
                </Link>
            </div>
            
            <div className="col">
            <Link className="link" to='/episodios'>
                <div className="card h-100 text-white bg-dark border-light">
                    <img src={require('../images/tv.jpg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title h-title">Episodios</h5>
                    </div>
                </div>
                </Link>
            </div>
           
        </div>
        </div >
    )
}
