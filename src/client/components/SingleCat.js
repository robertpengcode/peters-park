import React from 'react'
import { connect } from 'react-redux'
import CatCard from './CatCard'

// why are we exporting so much stuff you might ask?
// and I would say good question
// long story short, I need access to this stuff to test it
// so we export it
// by calling it disconnected (from the redux store), it's clear that
// this is not the correct import you want generally
// you want the default export
// don't worry about it too much
export class DisconnectedSingleCat extends React.Component {
  render() {
    //console.log('here1',this.props);
    return (
      <div className='single-cat'>
        <h2>{this.props.name}</h2>
        <img src={this.props.imageUrl}></img>
        <ul className='toys'>{this.props.toyRatings.map((toy,id)=> (
          <li key={id}>{toy.name}</li>)
        )}</ul>
        <div className='friends'>
          <h3>Friends</h3>
          <ul>{this.props.friends.map((friend)=> {
           return (
            <CatCard key={friend.id}/>
            )}
        )}</ul>
        </div>
      </div >
    )
  }
}

export const mapStateToProps = (state) => {
  return {
    ...state.cat
  }
}
//const loadCat = this.props.loadCat;
export const mapDispatchToProps = (dispatch) => {
  return {
    goGetCat: () => dispatch()
  }
}

// don't touch this line
// but this is the component you probably want in most cases
// so if you're using DisconnectedSingleCat somewhere else in your program
// you're gonna have a bad time
export default connect(mapStateToProps, mapDispatchToProps)
(DisconnectedSingleCat)



