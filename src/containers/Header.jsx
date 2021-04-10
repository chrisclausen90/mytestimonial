import React, { PureComponent } from "react";

export class Header extends PureComponent {
    render() {
        return (
            <header className="App-header">
            <div>
                <span className="float -left header-logo"></span>
                <span className="float -left">Learn React now!</span>
            </div>
          </header>
        )
    }
}

export default Header;