import React from "react";
import {  hydrate } from 'react-dom';

import "./index.css";
import RowDataWrapper from "../src/components/RowDataWrapper/RowDataWrapper";
//import {fetchNews} from './fetchData';

// getNews().then(news =>{
//   hydrate (<RowDataWrapper news={news} />, document.getElementById('root') )
// })



    hydrate (<RowDataWrapper />, document.getElementById('root') )
  