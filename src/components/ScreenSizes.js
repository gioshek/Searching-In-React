import React from "react";

class ScreenSizes extends React.Component{
    componentWillMount() {
        this.updateDimensions();
    }
    
    componentDidMount() { // загрузить данные, необходимые для корректного отображения компонента
        window.addEventListener('resize', this.updateDimensions)
    }
    
    componentWillUnmount() { // навести порядок после удаления компонента (например - убрать прослушиватели событий)
        window.removeEventListener('resize', this.updateDimensions)
    }
    
    updateDimensions = () => {
        this.setState({
          width: window.innerWidth,
          height: window.innerHeight,
        });
    }
    
    render() {
        return <h1>Размеры окна браузера в пикселях: {this.state.width} x {this.state.height}</h1>
    }
    
}

export default ScreenSizes;