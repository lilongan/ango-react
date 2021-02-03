// import React from "react";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";

// const Public = () => (
//   <Router>
//     <div>
//       <ul>
//         <li>
//           <Link to="/">Public</Link>
//         </li>
//         <li>
//           <Link to="/">Private</Link>
//         </li>
//         <li>
//           <Link to="/">Project</Link>
//         </li>
//       </ul>

//       <hr />

//       <Route exact path="/" component={Public} />
//       <Route path="/" component={Private} />
//       <Route path="/" component={Projects} />
//     </div>
//   </Router>
// );

// const Public = () => (
//   <div>
//     <h2>Public</h2>
//   </div>
// );

// const Private = () => (
//   <div>
//     <h2>Private</h2>
//   </div>
// );

// const Private = ({ match }) => (
//   <div>
//     <h2>Private</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>Rendering with React</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>Components</Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//       </li>
//     </ul>

//     <Route path={`${match.url}/:topicId`} component={Topic} />
//     <Route
//       exact
//       path={match.url}
//       render={() => <h3>Please select a topic.</h3>}
//     />
//   </div>
// );

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// );

// export default WebPages;
