import React from 'react'

export default function Wall(props){
  return(
    <div>
      <div onClick={props.handleCreateSurvey}>Create Survey</div>
      <div onClick={props.handleTakeSurvey}>Take Survey</div>
    </div>
  )
}