import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import Hero from "./components/Hero";
import Sorting from "./components/Sorting";
import Employees from "./Employees.json";


class App extends Component {
  // Setting this.state.employees to the employee json array
  state = {
    sortType: 'ascending',
    Employees: ['']
  };

  componentDidMount = query => {
    Employees.search(query)
      .then(res => this.setState({ Employees: res.data.result }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  // Map over this.state.employees and render a employeeTable component for each employee object

    sortAscending = () => {
      const { Employees } = this.state;
      Employees.sort((a, b) => a - b)    
      this.setState({ Employees })
    };

    sortDescending = () => {
      const { Employees } = this.state;
      Employees.sort((a, b) => a - b).reverse()
      this.setState({ Employees })
    };

  render() { 
     const { employees } =  this.state;
     return (
      <Wrapper>
        <div>  
    <Hero backgroundImage="https://images.squarespace-cdn.com/content/v1/556ea5c8e4b081da85e406c7/1509577883908-TEUQVWA2Y2HA7C50A5EB/ke17ZwdGBToddI8pDm48kNIz01GxeNglza_traDdevsUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKck_3oyjxD2E6g656zntaR4vQBwPCV_Yc9BnFEdXAQ6xzMr4wPFfphDwEQcs_2fgoE/Toggl_Blog+Illustrations_MarkConlan25?format=2500w">
        <Title>Employee Directory</Title>
        <h3>Click on carrots to filter by heading or use the search box to narrow your results</h3>
    </Hero>
</div>
              <SearchForm               
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              employee={this.employee}
              />
            
            <Sorting
            sortAscending={'ascending'}
            sortDescending={'descending'}
            />
          
        {this.state.employees.sort.map(employees => (
          <EmployeeTable
            id={employees.id}
            name={employees.name}
            position={employees.position}
            email={employees.email}
            phone={employees.phone}
            DOB={employees.dob}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;