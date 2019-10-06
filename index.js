const axios = require('axios');

function  getSpreadsheetData(){
     return axios.get('https://sheetdb.io/api/v1/eodqzgdxnx66z');
   }

function QuestionHandler(agent){
    const text = agent.parameters.text;
    return getSpreadsheetData().then(res => {
      	res.data.map(person => {
          if(person.Question === text )
           agent.add(` ${person.Answer}`);
          	
        });
    });
