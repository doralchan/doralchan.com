import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import Box1 from '../../assets/images/freelance/box_hackathon1.png';
import Box2 from '../../assets/images/freelance/box_hackathon2.png';
import Box3 from '../../assets/images/freelance/box_hackathon3.png';
import Box4 from '../../assets/images/freelance/box_hackathon4.png';

class FreelanceBoxHackathon extends React.Component {
  renderIntro() {
    return (
      <Slide title='Box Hackathon'>
        <Slide.Block subtitle='Project Context'>
          Every year, Box holds a hackathon with the prospect of winning
          prizes for hacks within a 24 hour period. There are multiple
          categories that each entry can fall into.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          The goal is to provide a method for
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          TBD
        </Slide.Block>
      </Slide>
    );
  }

  render() {
    return (
      <Panel panelProject='box hackathon'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ Box1 } /></Slide>
          <Slide><Image imageLink={ Box2 } /></Slide>
          <Slide><Image imageLink={ Box3 } /></Slide>
          <Slide><Image imageLink={ Box4 } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default FreelanceBoxHackathon
