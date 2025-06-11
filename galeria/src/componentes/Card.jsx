import './Card.css';

export default function Card({name, image, onClick}){

    return(
        <div className='card' onClick={onClick}>

            <figure>
                <img className='img' src={image} alt= {name}/>
                <figcaption className='figcaption'>{name}</figcaption>
            </figure>

        </div>
    )
}
