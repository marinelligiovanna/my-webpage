import React from 'react'
import {Link} from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Page from "../components/page"
import About from '../components/about';

export default class IndexPage extends React.Component {

  componentDidMount() {
    window.addEventListener("resize", this.windowResized)
  }

  componentWillMount() {
    window.addEventListener("resize", this.windowResized);
  }

  windowResized = () => {
    if (this.windowResizedInterval) {
      clearInterval(this.windowResizedInterval);
    }

    this.windowResizedInterval = setTimeout(this.windowResizedHandler, 200);
  }

  windowResizedHandler = () => {
    this.forceUpdate();
  }

  render() {

    return (
      <Page>

        <About/>
      </Page>
    )
  }

  static isMobile = () => {
    return window.innerWidth <= 700;
  }
}
