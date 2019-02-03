import React from "react";
import icomoonSet from "./icons/icomoon";
import "./index.css";
import Group from "./group";

/**
 * Simple icon presenter for SVG icons.
 * Based on the tutorial: https://medium.com/@david.gilbertson/icons-as-react-components-de3e33cb8792
 *
 * @author Giovanna Marinelli
 *
 */
export default class extends React.PureComponent {
  static Group = Group;

  constructor() {
    super();
    this.svg_icon = <svg/>;
  }

  render() {
    this.setSvgIcon();

    return this.svg_icon;
  }

  setSvgIcon = () => {
    const {icon, href, circular, size} = this.props;

    this.svg_icon = (
      <svg
        width={size || "100%"}
        height={size || "100%"}
        fill="#aaa"
        style={this.svgIconStyle()}
        viewBox="0 0 1024 1024">
        <path d={this.getIconPath(icon)}/>
      </svg>
    );

    if (href) {
      this.svg_icon = this.setSvgIconHref();
    }

    if (circular) {
      this.svg_icon = this.setSvgIconCircularContainer();
    }
  };

  svgIconStyle = () => {
    const {style, circular, color} = this.props;
    return Object.assign({
      display: "inline-block",
      verticalAlign: "middle",
      textAlign: "center",
      width:"100%",
      marginTop: circular
        ? "20%"
        : "0%",
      fill: color || "#aaa"
    }, style);
  };

  getIconPath = icon_name => {
    const icon = this.findIcon(icon_name);

    if (!icon) {
      console.warn("The icon " + icon_name + " does not exists");
      return;
    }

    return icon
      .icon
      .paths
      .join(" ");
  };

  findIcon = icon_name => {
    const {
      iconSet = icomoonSet
    } = this.props;

    return iconSet
      .icons
      .find(elem => elem.properties.name === icon_name);
  };

  setSvgIconHref = () => {
    const {href, alt} = this.props;

    return (
      <a href={href} alt={alt || ""}>
        {this.svg_icon}
      </a>
    );
  };

  setSvgIconCircularContainer = svg_icon => {
    const {circular_style} = this.props;

    return (
      <div className="icon-circular-container" style={circular_style}>
        {this.svg_icon}
      </div>
    );
  };

}
