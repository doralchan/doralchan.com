import React from 'react';

import Panel from '../../shared/panel/index.jsx';
import Slide from '../../shared/slide/index.jsx';
import Image from '../../shared/image/index.jsx';
import Carousel from '../../shared/carousel/index.jsx';

import GuideHome from '../../assets/images/gusto/guide_home.png';
import GuideBrand from '../../assets/images/gusto/guide_brand_identity.png';
import GuideElements from '../../assets/images/gusto/guide_product_elements.png';
import GuideHelpers from '../../assets/images/gusto/guide_product_helpers.png';
import GuideAssets from '../../assets/images/gusto/guide_product_assets.png';
import GuideResearch from '../../assets/images/gusto/guide_research_interviews.png';
import GuideActions from '../../assets/images/gusto/guide_usability_actions.png';
import GuideWorkflows from '../../assets/images/gusto/guide_usability_workflows.png';

class GustoGuide extends React.Component {
  renderIntro() {
    return (
      <Slide title='Guide'>
        <Slide.Block subtitle='Project Context'>
          With the rapid growth and rebranding of the company, large
          inconsistencies were developing between teams. There was uncertainty
          about what UI components, UX paradigms, and assets were available to
          product and marketing. Undocumented, tribal knowledge became the norm.
        </Slide.Block>
        <Slide.Block subtitle='Project Goal'>
          The motivation was to fill these knowledge gaps for a majority of
          the teams including designers, developers, product managers, marketing,
          and sales. I wanted to create a long term solution that would
          constantly reflect the evolving state of the company.
        </Slide.Block>
        <Slide.Block subtitle='Project Direction'>
          To investigate issues beyond those of my own, I sent out surveys to
          further understand the needs of product. Two of the most common
          issues reported was not knowing what components already existed, and
          how to properly use the ones they already knew about. I sought to design
          and develop a guide that would directly connect to the UI codebase in
          an effort to reduce future maintenance. This required the additional
          step of generating a component library for consumption by multiple
          sources.
        </Slide.Block>
      </Slide>
    );
  }

  render() {
    return (
      <Panel panelProject='guide'>
        <Carousel>
          { this.renderIntro() }
          <Slide><Image imageLink={ GuideHome } /></Slide>
          <Slide><Image imageLink={ GuideBrand } /></Slide>
          <Slide><Image imageLink={ GuideElements } /></Slide>
          <Slide><Image imageLink={ GuideHelpers } /></Slide>
          <Slide><Image imageLink={ GuideAssets } /></Slide>
          <Slide><Image imageLink={ GuideResearch } /></Slide>
          <Slide><Image imageLink={ GuideActions } /></Slide>
          <Slide><Image imageLink={ GuideWorkflows } /></Slide>
        </Carousel>
      </Panel>
    );
  }

}

export default GustoGuide
