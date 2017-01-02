import React from 'react';


export const Home = (props) => (
    <div  className={props.displayed}>
      All the components are loaded, and only display when needed, for instant rendering. 
    </div>
);


export const Away = (props) => {
  return (
    <div  className={props.displayed}>
      If you needed to, you could easily change them to be loaded dynamically - see RenderOnePage in App.js
      <img src="https://c2.staticflickr.com/2/1162/5129669316_a14566600e_b.jpg" alt="hooray" width="100%"/>
    </div>
  );
};


export class Times  extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }


  render () {
    return (
      <div className={this.props.displayed}>
        <img src="https://c2.staticflickr.com/8/7518/16005820291_0809d7a9f5_b.jpg" alt="happy gorilla" width="100%" />
      </div>
    );
  }
}

export const AndHereIsANewPage = (props) => {
  return (
    <div  className={props.displayed}>
      New Pages are dynamically loaded in to the Nav as long as they are exported from the Pages.js page.
    </div>
  );
};


export const Wow = (props) => (
  <div  className={props.displayed}>
    wow
  </div>
);
