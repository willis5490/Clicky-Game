import React, { Component } from "react";
import './upperbody.css'
class Upperbody extends Component {
    //logic


    //render
    render() {
        return (
            <div className='uk-animation-scale-up'>
            <div className='uk-container marvelBackround'>
                    <div className='uk-position-center'>
                        <div className='uk-animation-scale-up'>
                        <h1 id='clickM' className='uppertext'>Marvel Memory Game</h1>
                        <h3 className='centerME uppertext'>Click on Marvel characters to earn points!</h3>
                        <h4 className='uppertext'>Just dont forget the characters you already clicked!</h4>
                        </div>
                    </div>
                
            </div>
            </div>
        )
    }
}

export default Upperbody;