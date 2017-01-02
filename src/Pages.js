import React from 'react';
export * from './OtherPages.js';

export const Fun = (props) => {
  return (
    <div className={props.displayed}>
      <p>      The Pages.js controls all the pages.<br/>
        The default behaviour is your tab names will have the same names as the components. <br/>
        <br/>
        If you want to change the NavText and/or order, add it to the Pages object in Pages.js<br/>
        export const PagesNavText = {`{ Home: "I can",  Away: "call these", Fun:  "tabs anything",  Times: "I want", Wow:""};`}<br/>
      </p>
    </div>
  );
};



export const PagesNavText = { Home: "I can",  Away: "call these", Fun:  "tabs anything",  Times: "I want", Wow: ""};
