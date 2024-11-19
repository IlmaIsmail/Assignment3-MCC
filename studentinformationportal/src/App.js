 import './App.css';
 import { students } from './data/StudentsDb';
 import Header from './components/Header';
import StudentTable from './components/StudentTable';

function App() {
  return (
    <div className="App">
      <h1 align="center">Student Information portal</h1>
      <hr/>
      <table>
        <tbody>
          <tr>
            <td>
            <StudentTable students={students}/>
            </td>
          </tr>

        </tbody>
        </table>
      <Header></Header>
      <hr/>
    </div>
  );
}

export default App;
