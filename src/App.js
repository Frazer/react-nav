import React from 'react';
import Nav from './Nav';
import * as Pages from './Pages';


import './App.css';


      class PagesRendered extends React.Component {
        render(){

          return (
            <div className="pageContainer">
              {Object.keys(Pages).map(page => {
                    if (page==='PagesNavText'){return '';}
                    const Page = Pages[page];
                    let visibleClass = this.props.currentTab === page ? 'displayedPage' : 'notDisplayedPage';
                    return (
                      <Page key={page} displayed={visibleClass} />
                    );
              })}
            </div>
          );
        }
      }

      // //if you only want to render 1 at a time
      // class RenderOnePage extends React.Component {
      //   render(){
      //     const Page = Pages[this.props.currentTab];
      //     return (
      //       <div className="pageContainer">
      //         <Page />
      //       </div>
      //     );
      //   }
      // }

      class App  extends React.Component {
        constructor(props) {
          super(props);

          this.state = {
             currentTab: Object.keys(Pages.PagesNavText)[0],
           };
           this.changeTab = this.changeTab.bind(this);
        }

        changeTab(tab) {
            this.setState({ currentTab: tab });
        }

        render() {
          return (
            <div>
              <Nav changeTab={this.changeTab} currentTab={this.state.currentTab} />
              <PagesRendered currentTab={this.state.currentTab} />
            </div>
          );
        }
      }


export default App;
