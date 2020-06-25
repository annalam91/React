import React from 'react';
import '../styles/MemeGenerator.css';

class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())       
        .then(response => {
            const {memes} = response.data
          this.setState({
              allMemeImgs:memes})
        });
      }    

      handleChange(event){
        const {name, value} = event.target
          this.setState({
              [name]: value
          })
      }

      handleSubmit(event) {
        event.preventDefault();
        const randomNumber = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemeImg = this.state.allMemeImgs[randomNumber].url
        this.setState({randomImage: randomMemeImg})

      }

    render(){
        return(
            <div>
                <form className="meme-form">
                    <input 
                    type="text" 
                    value={this.state.topText}
                    placeholder="Top Text"
                    onChange={this.handleChange}
                    name="topText"
                    />
                    <br />
                    <input 
                    type="text" 
                    value={this.state.bottomText}
                    placeholder="Bottom Text"
                    onChange={this.handleChange}
                    name="bottomText"
                    />
                    <button onClick={this.handleSubmit}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator