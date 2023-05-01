const About = ({ image, about }) => {
    return (<aside>
        <img src={image} alt='blog logo' default='https://via.placeholder.com/215'></img>
        <p>{about}</p>
    </aside>)
}

export default About