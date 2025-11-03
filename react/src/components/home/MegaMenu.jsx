import React, { Component } from "react";

class MegaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  handleToggle = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const { activeIndex } = this.state;

    // Example category data
    const menuItems = [
      "Men's Clothing",
      "Women's Clothing",
      "Electronics",
      "Shoes",
      "Accessories",
      "Home & Kitchen",
      "Accessories",
      "Home & Kitchen",
      "Sports",
      "Beauty",
      "Sports",
      "Beauty",
    ];

    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">
          {menuItems.map((title, index) => (
            <div key={index}>
              <button
                className={`accordion ${activeIndex === index ? "active" : ""}`}
                onClick={() => this.handleToggle(index)}
              >
                <img
                  className="accordionMenuIcon"
                  src="https://cdn-icons-png.flaticon.com/128/739/739249.png"
                  alt=""
                />
                &nbsp; {title}
              </button>

              <div
                className="panel"
                style={{
                  maxHeight: activeIndex === index ? "200px" : "0",
                  overflow: "hidden",
                  transition: "max-height 0.3s ease",
                }}
              >
                <ul>
                  <li>
                    <a href="#" className="accordionItem">
                      T-Shirt 1
                    </a>
                  </li>
                  <li>
                    <a href="#" className="accordionItem">
                      T-Shirt 2
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MegaMenu;