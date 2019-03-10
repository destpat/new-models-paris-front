import React from 'react'
import { connectHits } from 'react-instantsearch-dom';
import StackGrid from "react-stack-grid"
import sizeMe from 'react-sizeme'
import { HoverText, UserNameContainer, UserName, Photo, PhotoContainer } from '../users/grid/style'

const users = [
  {"firstname":"J","photos":[{"key":"1551783619169.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"},{"key":"1551783652425.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"},{"key":"1551783689052.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"}],"createdAt":1551783737643,"id":"3650c358-d550-422e-baf9-8a5e909e459e"},{"firstname":"Emilie","photos":[{"key":"1551291128362.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"},{"key":"1551291128713.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"},{"key":"1551291128821.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"}],"createdAt":1551291130431,"id":"04642d81-0a18-4d01-adaa-f47c462b3934"},{"firstname":"Antoine","photos":[{"key":"1551740724277.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"},{"key":"1551740724778.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"},{"key":"1551740724998.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"}],"createdAt":1551740726563,"id":"b37a11dc-3f3b-484a-831d-1405f2bf30b9"},
  {"firstname":"J","photos":[{"key":"1551783619169.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"},{"key":"1551783652425.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"},{"key":"1551783689052.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"}],"createdAt":1551783737643,"id":"3650c358-d550-422e-baf9-8a5e909e459e"},{"firstname":"Emilie","photos":[{"key":"1551291128362.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"},{"key":"1551291128713.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"},{"key":"1551291128821.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"}],"createdAt":1551291130431,"id":"04642d81-0a18-4d01-adaa-f47c462b3934"},{"firstname":"Antoine","photos":[{"key":"1551740724277.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"},{"key":"1551740724778.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"},{"key":"1551740724998.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"}],"createdAt":1551740726563,"id":"b37a11dc-3f3b-484a-831d-1405f2bf30b9"},
  {"firstname":"J","photos":[{"key":"1551783619169.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"},{"key":"1551783652425.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"},{"key":"1551783689052.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"}],"createdAt":1551783737643,"id":"3650c358-d550-422e-baf9-8a5e909e459e"},{"firstname":"Emilie","photos":[{"key":"1551291128362.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"},{"key":"1551291128713.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"},{"key":"1551291128821.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"}],"createdAt":1551291130431,"id":"04642d81-0a18-4d01-adaa-f47c462b3934"},{"firstname":"Antoine","photos":[{"key":"1551740724277.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"},{"key":"1551740724778.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"},{"key":"1551740724998.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"}],"createdAt":1551740726563,"id":"b37a11dc-3f3b-484a-831d-1405f2bf30b9"},
  {"firstname":"J","photos":[{"key":"1551783619169.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"},{"key":"1551783652425.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"},{"key":"1551783689052.jpg","id":"eu-central-1:dfc5a3d3-93dd-4626-81ae-676645a4db36"}],"createdAt":1551783737643,"id":"3650c358-d550-422e-baf9-8a5e909e459e"},{"firstname":"Emilie","photos":[{"key":"1551291128362.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"},{"key":"1551291128713.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"},{"key":"1551291128821.jpg","id":"eu-central-1:519ff614-6a6a-4255-8b0a-26560d35aef1"}],"createdAt":1551291130431,"id":"04642d81-0a18-4d01-adaa-f47c462b3934"},{"firstname":"Antoine","photos":[{"key":"1551740724277.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"},{"key":"1551740724778.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"},{"key":"1551740724998.jpg","id":"eu-central-1:b766996b-e1d8-4c53-a6da-67a7d66efebb"}],"createdAt":1551740726563,"id":"b37a11dc-3f3b-484a-831d-1405f2bf30b9"}
]


const Hits = ({ hits, size: { width } }) => (
  <div>
    {
      console.log(hits)
    }
    <StackGrid gutterWidth={width <= 480 ? 10 : 25}
               gutterHeight={5}
               columnWidth={width <= 480 ? 174 : 240}>
      {
        hits.map((publicUser, index) => {
          let { id, firstname, photo } = publicUser
          return (
            <div key={index}>
              <PhotoContainer onClick={() => this.props.history.push(`${this.props.match.url}/${id}`)}>
                <Photo imageUrl={'https://new-models-paris-upload-photos.s3.eu-central-1.amazonaws.com/protected/eu-central-1%3Adfc5a3d3-93dd-4626-81ae-676645a4db36/1551783689052.jpg'} alt="models" />
                <HoverText>
                  {firstname}
                  <br/>
                  <br/>
                  Voir le portfolio
                </HoverText>
              </PhotoContainer>
              <UserNameContainer>
                <UserName>
                  {firstname}
                </UserName>
              </UserNameContainer>
            </div>
          )
        })
      }
    </StackGrid>
  </div>



);

const CustomHits = connectHits(Hits);

export default sizeMe()(CustomHits)
