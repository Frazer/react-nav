import React from 'react';
import * as P from './Pages';



export default class Nav  extends React.Component {
  constructor(props) {
    super(props);

    this.Pages = {};
    let PageComponents = Object.keys(P);
    let NavTexts = Object.keys(P.PagesNavText);

    //  add to Nav those defined in the PagesNavText in the order they were added
    NavTexts.forEach(page => {
          if (PageComponents.indexOf(page) > -1 && page!=='PagesNavText'){
            const Page = P[page];
            let NavigationTextString = P.PagesNavText[page];
            if(NavigationTextString){
              this.Pages[page]={'page':Page, nt:NavigationTextString};
            }else{
              this.Pages[page]={'page':Page, nt:page};
            }
          }
      }
    );

    //  add to Nav all the other components
    PageComponents.forEach(page => {
          if (page!=='PagesNavText' && NavTexts.indexOf(page) === -1){
            const Page = P[page];
            this.Pages[page]={'page':Page, nt:page};
          }
      }
    );
  }


  handleClick(tab) {
    this.props.changeTab(tab);
  }

  render () {
    return (
      <div>
        <ul className="tab">
          {Object.keys(this.Pages).map(tab => {
            return (
              <li key={tab} className={this.props.currentTab === tab ? 'active' : null}><a onClick={this.handleClick.bind(this, tab)}>{this.Pages[tab].nt}</a></li>
            );
          })}
        </ul>
      </div>
    );
  }
};


Nav.propTypes = {
  changeTab:    React.PropTypes.func.isRequired,
};
