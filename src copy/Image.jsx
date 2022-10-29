const Image = (props) => {
    return ( <div className="image">
        <img
            src={props.image}
            style={{width: "100%", height:"200px"}}
        />
    </div> )
}

export default Image