function Hello(props){
    const {name, jurusan} = props;
    return (
        <div>
            <h2>Hello {name}</h2>
            <h3>nama saya {name} dengan jurusan {jurusan}</h3>
        </div>
    );
}

export default Hello;