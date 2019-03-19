import React from 'react';
import PersonList from './PersonList';

const NameList = ()=>{
    // const Names = ['Gautam','Nitesh','usha','chetan','bhopal'];
   // const Namelist = Names.map(name => <h1>{name}</h1>) ;

    const Persons = [
        {
            name : 'Gautam',
            age : 29,
            skill : 'Node js'
        },
        {
            name : 'Nitesh',
            age : 27,
            skill : 'Hybrid app'
        },
        {
            name : 'Chetan',
            age : 30,
            skill : '.Net'
        }
    ];

    const Plist = Persons.map(person => <PersonList personlist={person}/>) ;

    return(
        <div>
            {/* <h1>{Names[0]}</h1>
            <h1>{Names[1]}</h1>
            <h1>{Names[2]}</h1>
            <h1>{Names[3]}</h1>
            <h1>{Names[4]}</h1> */}

            {
               // Namelist
              Plist
               
            }
            
        </div>
    );
}

export default NameList;